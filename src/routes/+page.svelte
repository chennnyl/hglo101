<script lang="ts">
    import { base } from "$app/paths"
</script>

<svelte:head>
    <title>Home | HGLO 101 Final Project</title>
</svelte:head>


<h1>HGLO 101 Final Project</h1>
<h2><em>This site is best viewed on a desktop device.</em></h2>
<p>
    The content of this site is largely drawn from the books <em>8 Billion and Counting</em> by Jennifer D. Sciubba and <em>How to Save the World for Just a Trillion Dollars</em> by Rowan Hooper, and is supplemented with data from the US Census Bureau. A complete bibliography can be found <a href={`${base}/bibliography`}>here</a> or via the navigation bar.
</p>
<p>
    All the graphs on this site are interactive! Hover over bars and points to see exact values, and click entries in the legend to enable or disable them. You can explore more of the population graphs used in the Demographic Transition page <a href={`${base}/population/demo`}>here</a>. 
</p>

<style>
    h2 {
        color: grey;
    }
</style>
