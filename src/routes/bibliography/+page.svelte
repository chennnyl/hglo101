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
        },
        {
            author: "Congressional Budget Office",
            title: "The Federal Budget in Fiscal Year 2022: An Infographic",
            date: "2023",
            source: "Congressional Budget Office",
            url: "https://www.cbo.gov/publication/58888"
        },
        {
            author: "National Equity Atlas",
            title: "Wages: Median",
            date: "2023",
            source: "PolicyLink",
            url: "https://nationalequityatlas.org/indicators/Wages_Median"
        },
        {
            author: "World Food Program USA",
            title: "How Much Would It Cost to End World Hunger?",
            date: "2022",
            source: "World Food Program USA",
            url: "https://www.wfpusa.org/articles/how-much-would-it-cost-to-end-world-hunger/"
        },
        {
            author: "Kafuko, Zacharia",
            title: "New Lifesaving Malaria Vaccines Need to Be Available Now",
            date: "2023",
            source: "Foreign Policy",
            url: "https://foreignpolicy.com/2023/12/08/new-malaria-vaccine-africa-world-health-organization-child-mortality/"
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
