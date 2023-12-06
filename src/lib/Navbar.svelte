<script lang="ts">
    import { base } from "$app/paths"

    interface Link {
        title: string,
        link: string
    }

    const links: Link[] = [
        {
            title: "Population Pyramids",
            link: "pyramid"
        },
        {
            title: "Bibliography",
            link: "bibliography"
        }
    ]
</script>

<nav>
    <ul>
        {#each links as { title, link } }
            <li>
                <a href={`${base}/${link}`}>{title}</a>
            </li>
        {/each}
    </ul>
</nav>
<style>
    :root {
        --text-color: black;
        --light-accent: lightgrey;
        --hover-light: grey;
    }
    nav {
        margin: auto;
        width: 80%;
    }
    ul {
        margin: auto;
        background-color: var(--light-accent);
        display: flex;
        justify-content: space-evenly;
        padding-left: 0;
    }

    li {
        display: inline-block;
        text-align: center;
        font-size: larger;
        font-weight: bold;
        list-style-type: none;
        flex-grow: 1;
    }
    a:hover {
        background-color: var(--hover-light);
        cursor: pointer;
        transition: background-color 0.1s;
        
    }
    a {
        width: 100%;
        display: inline-block;
        background-color: var(--light-accent);
        text-decoration: none;
        padding-top: 20px;
        padding-bottom: 20px;
    }
    a:visited {
        color: var(--text-color);
    }
</style>