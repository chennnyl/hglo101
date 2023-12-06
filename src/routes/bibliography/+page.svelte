<script lang="ts">
    import Citation from "$lib/Citation.svelte"
    import Navbar from "$lib/Navbar.svelte"
    import type { APACitation } from "$lib/citation"

    const citations: APACitation[] = [
        {
            author: "United States Census Bureau",
            title: "International Database (Time Series: various year - 2100)",
            date: "2023",
            source: "United States Census Bureau",
            url: "https://www.census.gov/data/developers/data-sets/international-database.html"
        },
        {
            author: "Sciubba, Jennifer D",
            title: "8 Billion and Counting: How Sex, Death, and Migration Shape Our World",
            date: "2022",
            source: "W. W. Norton and Company"
        }
    ].sort((a, b) => a.author.localeCompare(b.author))

</script>

<svelte:head>
    <title>Bibliography | HGLO 101 Final Project</title>
</svelte:head>

<h1>Works Cited</h1>
{#each citations as citation}
    <Citation {citation}/>
{/each}


<style>
    :root {
        margin: auto;
        width: 70%;
    }
</style>
