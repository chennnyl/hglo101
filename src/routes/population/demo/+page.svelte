<script lang="ts">
    import { Country, type PopulationYearData, getCountryPopulationDataOverYears } from "$lib/population"
    import PopulationPyramid from "$lib/PopulationPyramid.svelte"
    import ProportionalAreaChart from "$lib/ProportionalAreaChart.svelte"

    let selectedCountry: string = ""
    let selectedYear: number = 2022

    let selectedCountryString: string = ""
    let selectedYearString: string = "2022"

    let populationData: PopulationYearData
    let areaChart: ProportionalAreaChart

    let countries = [Country.UnitedStatesofAmerica]
    let countryKeys: string[] = []

    const dataPromise = async (countries: Country[]) => {
        populationData = await getCountryPopulationDataOverYears(1990, 2022, countries)
        countryKeys = Object.keys(populationData)
        selectedCountry = countryKeys[0]
    }

</script>

<svelte:head>
    <title>Population Graph Demo | HGLO 101 Final Project</title>
</svelte:head>


{#await dataPromise(countries)}
<h1>Loading data</h1>
{:then _}
    <h1 id="sidebyside">
        Interactive Population Graph Demo
    </h1>
    <select bind:value={selectedCountryString} on:change={() => {countries = [selectedCountryString]; dataPromise(countries)}}>
        <option value="" selected hidden>Select a country</option>
        {#each Object.entries(Country) as [abbr, country]}
            <option value={country}>{abbr}</option>
        {/each}
    </select>
    {#key countryKeys}
        {#key selectedYear}
        <div class="graph">
            <div class="pyramid">
                <PopulationPyramid countryData={populationData[selectedCountry][selectedYear]} optionsOverrides={{aspectRatio: 2}}/>
            </div>
        </div>
        {/key}
        <div class="row">
            <div>
                <label>1990</label><input id="year-select" type="range" min=1990 max=2022 bind:value={selectedYearString} on:change={() => selectedYear = parseInt(selectedYearString)}><label for="year-select">{selectedYearString}</label>
            </div>
        </div>
        <div class="graph">
            <div class="pyramid">
                <ProportionalAreaChart populationYearData={populationData} country={selectedCountry} optionsOverrides={{aspectRatio: 2}}/>
            </div>
        </div>
    {/key}
{:catch e}
    <h1>An error occurred</h1>
    <p>Reload the page and select a different country</p>
{/await}

<style>
    :root {
        margin: auto;
        width: 70vw;
    }
    .graph {
        margin: auto;
        display: flex;
        width: 90%;
        /* height: 70vh; */
    }
    .graph .pyramid {
        margin: auto;
        width: 100%;
        height: 100%;
    }

    input {
        display: inline-block;
    }
    label {
        display: inline-block;
    }

    .row div {
        display: flex;
        align-content: center;
    }
    .row {
        margin: auto;
        display: flex;
        width: 30%;
        justify-content: center;
    }
</style>