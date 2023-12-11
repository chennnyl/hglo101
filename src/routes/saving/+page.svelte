<script lang="ts">
    import StwBarChart from "$lib/STWBarChart.svelte"
    import type { STWBarData } from "$lib/stwdata"

    const proposals: STWBarData[] = [
        {
            "Curing all disease": {
                "Universal healthcare in Ethiopia": 100,
                "Vaccine development and distribution": 100,
                "Eradication of tropical diseases": 100,
                "Eradication of tuberculosis": 23,
                "Cure and eradication of HIV": 30,
                "Antibiotic resistance": 10,
                "Map human cell types": 5,
                "Solving heart disease": 100,
                "Solving neurological disease": 100,
                "Solving cancer": 100,
                "Curing damaged cells": 200
            },
        },
        {
            "Fixing the climate": {
                "Solar radiation management": 6,
                "Enhanced weathering": 2,
                "Cloud whitening": 1,
                "Restoration of peatlands": 10,
                "Global tree planting and reforestation": 300,
                "Global kelp afforestation": 100,
                "Ocean engineering with whale populations": 100,
                "Renewable carbon capture at scale": 100,
                "Greenhouse gas capture": 10,
                "Carbon capture and storage plants": 100,
                "Carbon-fixing at scale competition": 0.1,
                "Cheap carbon-fixing competition": 0.1
            }
        }]
</script>

<svelte:head>
    <title>Saving the World for a Trillion Dollars | HGLO 101 Final Project</title>
</svelte:head>

<h1>Saving the World for a Trillion Dollars</h1>

{#each proposals as barData}
    <div>
        <StwBarChart {barData}/>
    </div>
{/each}