<script lang="ts">
    import type { APACitation } from "./citation"

    export let citation: APACitation
</script>

<p>
    {citation.author}. ({citation.date}). <em>{citation.title}</em>. 
    {citation.source}.
    {#if citation.url}
        Retrieved from <a href={`${citation.url}`}>{citation.url}</a>. 
    {/if}
</p>

<style>
    p {
        text-indent: -36px;
    }
</style>