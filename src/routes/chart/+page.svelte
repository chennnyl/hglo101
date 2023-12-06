<script lang="ts">
    import { getCountryPopulationData, type PopulationData, Country, type PopulationYearData, getCountryPopulationDataOverYears } from "$lib/population"
    import PopulationPyramid from "$lib/PopulationPyramid.svelte"
    import { onMount } from "svelte";

    let selectedCountry: string
    let selectedYear: number = 1990

    let populationData: {[key: string]: PopulationData}
    let slidingPopulationData: PopulationYearData
    let slidingPopulationDataSnapshot: PopulationData

    const countries = [Country.UnitedStatesofAmerica, Country.Japan, Country.Nigeria]
    let countryKeys: string[] = []

    const dataPromise = (async () => {
        const data = await getCountryPopulationData(2023, 2023, countries)
        populationData = data.reduce((p,c) => {return {...p, [c.country]: c}}, {})
        slidingPopulationData = await getCountryPopulationDataOverYears(1990, 2022, countries)
        countryKeys = Object.keys(slidingPopulationData)
        slidingPopulationDataSnapshot = slidingPopulationData["United States"][selectedYear]
    })

</script>

<main>
    <div>
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
            <div class="graph">
                {#key slidingPopulationDataSnapshot}
                    {#each countryKeys as country}
                    <div class="pyramid">
                        <PopulationPyramid countryData={slidingPopulationData[country][selectedYear]}/>
                    </div>
                    {/each}
                {/key}
            </div>
            <div class="row">
                {#each [1990, 2000, 2010, 2020] as year}
                    <button on:click={()=>{selectedYear = year; slidingPopulationDataSnapshot = slidingPopulationData["United States"][selectedYear]}}>{year}</button>
                {/each}
            </div>
        {/await}
    </div>
</main>

<style>
    main div {
        margin: auto;
        width: 70vw;
    }
    .graph {
        display: flex;
        width: 90%;
        /* height: 70vh; */
    }
    .graph .pyramid {
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