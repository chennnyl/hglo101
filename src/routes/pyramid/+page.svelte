<script lang="ts">
    import { Country, type PopulationYearData, getCountryPopulationDataOverYears } from "$lib/population"
    import PopulationPyramid from "$lib/PopulationPyramid.svelte"
    import ProportionalAreaChart from "$lib/ProportionalAreaChart.svelte"

    let selectedCountry: string
    let selectedYear: number = 1990

    let populationData: PopulationYearData
    let areaChart: ProportionalAreaChart

    const countries = [Country.China, Country.Japan, Country.UnitedStatesofAmerica]
    let countryKeys: string[] = []

    const dataPromise = (async () => {
        populationData = await getCountryPopulationDataOverYears(1990, 2022, countries)
        countryKeys = Object.keys(populationData)
        selectedCountry = countryKeys[0]
    })

</script>

<svelte:head>
    <title>Population Pyramids | HGLO 101 Final Project</title>
</svelte:head>

{#await dataPromise()}
    <h1>Loading data</h1>
{:then _}
    <h1>
        Population Pyramids
    </h1>
    <h2>Side-by-side comparison</h2>
    <div class="graph">
        {#key selectedYear}
            {#each countryKeys as country}
            <div class="pyramid">
                <PopulationPyramid countryData={populationData[country][selectedYear]}/>
            </div>
            {/each}
        {/key}
    </div>
    <div class="graph">
        {#key selectedYear}
            {#each countryKeys as country}
            <div class="pyramid">
                <ProportionalAreaChart country={country} populationYearData = {populationData}/>
            </div>
            {/each}
        {/key}
    </div>
    <div class="row">
        {#each [1990, 2000, 2010, 2020] as year}
            <button on:click={()=>{selectedYear = year}}>{year}</button>
        {/each}
    </div>
    <h2>Individual country</h2>
    <div class="graph">
        {#key selectedCountry}
            {#each [1990, 2000, 2010, 2020] as year}
                <div class="pyramid">
                    <PopulationPyramid countryData={populationData[selectedCountry][year]}/>
                </div>
            {/each}
        {/key}
    </div>
    <div class="row">
        {#each countryKeys as country}
            <button on:click={()=>{selectedCountry = country; areaChart.setData(country)}}>{country}</button>
        {/each}
    </div>

    <br/>

    <!-- <ProportionalAreaChart bind:this={areaChart} country={selectedCountry} populationYearData={populationData}/> -->

{/await}

<style>
    :root {
        margin: auto;
        width: 70vw;
    }
    .graph {
        display: flex;
        width: 90%;
        /* height: 70vh; */
    }
    .graph .pyramid {
        margin: auto;
        width: 100%;
        height: 100%;
    }

    button {
        padding: 10px;
        display: inline-block;
    }
    .row {
        margin: auto;
        display: flex;
        width: 30%;
        justify-content: space-between;
    }
</style>