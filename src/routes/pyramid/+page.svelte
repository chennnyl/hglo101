<script lang="ts">
    import { getCountryPopulationData, type PopulationData, Country, type PopulationYearData, getCountryPopulationDataOverYears } from "$lib/population"
    import PopulationPyramid from "$lib/PopulationPyramid.svelte"
    import Navbar from "$lib/Navbar.svelte"
    import { onMount } from "svelte";

    let selectedCountry: string
    let selectedYear: number = 1990

    let populationData: {[key: string]: PopulationData}
    let slidingPopulationData: PopulationYearData

    const countries = [Country.UnitedStatesofAmerica, Country.Japan, Country.Nigeria]
    let countryKeys: string[] = []

    const dataPromise = (async () => {
        const data = await getCountryPopulationData(2023, 2023, countries)
        populationData = data.reduce((p,c) => {return {...p, [c.country]: c}}, {})
        slidingPopulationData = await getCountryPopulationDataOverYears(1990, 2022, countries)
        countryKeys = Object.keys(slidingPopulationData)
        selectedCountry = countryKeys[0]
    })

</script>

<svelte:head>
    <title>Population Pyramids | HGLO 101 Final Project</title>
</svelte:head>

{#await dataPromise()}
    <h1>Loading data</h1>
{:then _}
    <!-- <div>
        {#key populationData}
        <PopulationPyramid countryData={populationData[selectedCountry]}/>
        {/key}
        <select bind:value={selectedCountry}>
            {#each Object.keys(populationData) as country}
                <option value={country}>{country}</option>
            {/each}
        </select>
    </div>
        -->
    <h2>Side-by-side comparison</h2>
    <div class="graph">
        {#key selectedYear}
            {#each countryKeys as country}
            <div class="pyramid">
                <PopulationPyramid countryData={slidingPopulationData[country][selectedYear]}/>
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
                    <PopulationPyramid countryData={slidingPopulationData[selectedCountry][year]}/>
                </div>
            {/each}
        {/key}
    </div>
    <div class="row">
        {#each countryKeys as country}
            <button on:click={()=>{selectedCountry = country}}>{country}</button>
        {/each}
    </div>
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