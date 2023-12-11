<script lang="ts">
    import { assets, base } from "$app/paths"

    interface Link {
        title: string,
        link: string
    }

    const links: Link[] = [
        {
            title: "Demographic Transition",
            link: "population"
        },
        {
            title: "Saving the World for a Trillion Dollars",
            link: "saving"
        },
        {
            title: "Bibliography",
            link: "bibliography"
        }
    ]
</script>

<nav>
    <ul>
        <li id="header-li">
            <a href={`${base}`} id="header-url">
                <div id="header">
                    <img src={`${assets}/HGLO_lockup_lgtext.png`} alt="Honors Global Communities logo">
                    <div>
                        <h3>HGLO101 Final Project</h3>
                        <h4>Lynne Homann Cure</h4>
                        <h4>Fall 2023</h4>
                    </div>
                </div>
            </a>
        </li>
        {#each links as { title, link } }
            <li>
                <a href={`${base}/${link}`}>{title}</a>
            </li>
        {/each}
    </ul>
</nav>
<style>
    #header-url {
        display: block;
        padding: 0;
    }
    #header-url:hover {
        color: var(--text-color);
    }
    img {
        height: 80px;
        aspect-ratio: 1;
        object-fit: cover;
        object-position: 0 0;
    }
    #header {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: left;
    }
    h3, h4 {
        margin: 5px;
    }
    :root {
        --text-color: #0b0929;
        --light-accent: #5e5d6d;
        --hover-light: #b7b6db;
    }
    nav {
        background-color: var(--light-accent);
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
    }
    ul {
        width: 70%;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-left: 0;
    }
    #header-li {
        flex-grow: 1.5;
    }
    li {
        display: flex;
        text-align: center;
        font-size: larger;
        font-weight: bold;
        list-style-type: none;
        flex: 1;
        min-height: 100%;
    }
    a:hover {
        color: var(--hover-light);
        cursor: pointer;
        transition: color 0.1s;
        
    }
    a {
        height: 100%;
        color: var(--text-color);
        width: 100%;
        display: block;
        background-color: var(--light-accent);
        text-decoration: none;
        padding-top: 34px;
        padding-bottom: 34px;
    }
    a:visited {
        color: var(--text-color);
    }
    a:visited:hover {
        color: var(--hover-light);
    }
</style>