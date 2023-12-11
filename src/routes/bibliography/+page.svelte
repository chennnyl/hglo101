<script lang="ts">
    import Citation from "$lib/Citation.svelte"
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
        },
        {
            author: "Hooper, Rowan",
            title: "How to Save the World for Just a Trillion Dollars: The Ten Biggest Problems We Can Actually Fix",
            date: "2022",
            source: "The Experiment"
        },
        {
            author: "Diethelm, David",
            title: "Population Pyramids",
            date: "2002",
            source: "Oregon State University",
            url: "https://www.fsl.orst.edu/pnwerc/wrb/Atlas_web_compressed/5.Human_Populations/5h.pyramids_web.pdf"
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
<hr/>
<p>The source code for this project can be found <a href="https://github.com/chennnyl/hglo101" target="_blank">here</a>.</p>

<style>
    :root {
        margin: auto;
        width: 70%;
    }
</style>
