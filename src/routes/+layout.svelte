<script lang="ts">
    import Navbar from "$lib/Navbar.svelte"
    import { assets, base } from "$app/paths"
</script>

<Navbar/>
<main>
    <slot></slot>
</main>

<style>
    :root {
        font-family: Georgia, 'Times New Roman', Times, serif;
    }
    main {
        padding-top: 125px;
        padding-bottom: 75px;
        margin: auto;
        width: 70%;
    }
</style>