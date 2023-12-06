<script lang="ts">
    import Navbar from "$lib/Navbar.svelte"
    import { assets, base } from "$app/paths"
</script>

<a href={`${base}`}>
<div id="header">
    <img src={`${assets}/HGLO_lockup_lgtext.png`} alt="Honors Global Communities logo">
    <div>
        <h1>HGLO101 Final Project</h1>
        <h2>Lynne Homann Cure</h2>
        <h2>Fall 2023</h2>
    </div>
</div>
</a>
<br/>
<Navbar/>
<main>
    <slot></slot>
</main>

<style>
    a {
        display: block;
        text-decoration: none;
    }
    a:visited {
        color: black;
    }
    img {
        height: 100px;
        aspect-ratio: 1;
        object-fit: cover;
        object-position: 0 0;
    }
    #header {
        display: flex;
        align-items: center;
    }
    h1, h2 {
        margin: 5px;
    }
    :root {
        font-family:Georgia, 'Times New Roman', Times, serif;
    }

    main {
        margin: auto;
        width: 70%;
    }
</style>