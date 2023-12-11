<script lang="ts">
    import { base } from "$app/paths";
    import { Country, type PopulationYearData, getCountryPopulationDataOverYears } from "$lib/population"
    import PopulationPyramid from "$lib/PopulationPyramid.svelte"
    import ProportionalAreaChart from "$lib/ProportionalAreaChart.svelte"

    let populationData: PopulationYearData

    const dataPromise = (async () => {
        populationData = await getCountryPopulationDataOverYears(1990, 2022, [Country.SouthKoreaRepublicofKorea, Country.Japan, Country.Sweden, Country.Chad, Country.Botswana, Country.Egypt])
    })

</script>

<svelte:head>
    <title>Demographic Transition | HGLO 101 Final Project</title>
</svelte:head>

{#await dataPromise()}
    <h1>Loading data</h1>
{:then _}
    <h1 id="sidebyside">
        Demographic Transition
    </h1>

    <h2>Population pyramids and age structure</h2>
    <h3>How to read a population pyramid</h3>
    <p>
        On this page, I make heavy use of <strong>population pyramids</strong>. Population pyramids are a tool used by demographers to examine how the entire population of a country is distributed across age and gender groups, informing our understanding of how that population may shift over time. A population pyramid takes the form of a stacked horizontal bar chart, where bars are present for each age group, stacked by gender. Population pyramids come in many shapes and sizes, but there are three rough patterns that can describe where a country is in the <strong>demographic transition</strong> (Diethelm, 2002): 
    </p>
        <ul>
            <li><strong>Constrictive:</strong> With a narrow base and wider top, this reflects a shrinking population with fewer youth.</li>
            <li><strong>Expansive:</strong> With a very wide base and narrower top, this reflects a growing population with many youth.</li>
            <li><strong>Stationary:</strong> Roughly even everywhere, this reflects a stable (though likely still growing) population.</li>
        </ul> 
    <p>
        As an example, here are population pyramids for Sweden and Egypt in 2022:
    </p>
    <div class="graph-row">
        <div class="graph">
            <PopulationPyramid countryData={populationData["Sweden"][2022]}/>
        </div>
        <div class="graph">
            <PopulationPyramid countryData={populationData["Egypt"][2022]}/>
        </div>
    </div>
    <p>
        We can see that Sweden is about even everywhere, making it a <strong>stationary</strong> pyramid, but Egypt has a large concentration of citizens aged 0-14 and few elderly, making it a <strong>expansive</strong> pyramid.
    </p>

    <h3>Why should I care about age structure?</h3>
    <p>
        The way a population is distributed across age groups can have profound implications on a country's future: for example, large youth populations promise instability for governments without enough adults to administer them, while a country of seniors is unable to properly respond to economic pressures. Our world has also undergone massive transformation in the past several decades, and progress in technology, education, and medicine has altered the way populations age and develop, and more and more countries have gone from an "expansive" population model to something approaching a "stationary" or even "constrictive" model.
    </p>
    <p>
        This shift in age structure accompanying social and economic development is what we call the <strong>demographic transition</strong>, and countries across the world are in various stages of the demographic transition. For the following two sections, we'll glance at parts of the world in both the very early and very late stages. 
    </p>
    <p>
        <strong><em>For an interactive demo of the population graphs, you can go <a href={`${base}/population/demo`}>here</a>.</em></strong>
    </p>

    <h2>Baby booms: Chad and Botswana</h2>
    <p>
        <em>The majority of the content in this section is drawn from "From the Cradle" in (Sciubba, 2022).</em>
    </p>
    <p>
        Fertility is one of the major metrics often used to distinguish "developed" nations from "developing" ones. The vast majority of countries with very high fertility and many children -- an expansive population pyramid -- are generally considered developing nations. High fertility rates produce enormous cohorts of children, with wide-reaching effects:
    </p>
    <ul>
        <li><strong>Pressure on infrastructure:</strong> High fertility leads to a rapidly increasing population, which places strain on job and housing markets, educational systems, and healthcare institutions.</li>
        <li><strong>Economic instability:</strong> Economic growth is difficult with a very young population, and a strong emphasis must be placed on educating children and preparing them for employment as their cohort ages.</li>
        <li><strong>Political instability:</strong> Already unstable countries with large youth populations are more prone to civil unrest by those adolescents otherwise unable to voice their political discontent, putting pressure on democratic systems of government. This follows from the previous point, as when job creation is unable to match the pace of population growth, young people are faced with little other opportunity.</li>
    </ul>
    <p>
        Take Chad as an example; nearly 58% of Chad's population is under the age of 20, presenting a monumental challenge to any government attempting to feed and govern those millions of children.
    </p>
    <div class="graph-row">
        <div class="graph">
            <PopulationPyramid countryData={populationData["Chad"][2022]} optionsOverrides={{aspectRatio: 2}}/>
        </div>
    </div>
    <p>
        The most pyramidical of the population pyramids is not an inescapable trap, however -- by taking measures to curb fertility through free family-planning resources, Botswana has substantially curbed its population growth over the past 50 or so years, and the share of its population dominated by youth has steadily decreased. This is reflected in the population pyramid by the base beginning to "curve in" rather than "curve out" as in Chad's pyramid.
    </p>
    <p>
        <em>(For the oldest age groups, it may be easier to look at the individual data points by disabling some of the other groups by clicking their entries in the legend.)</em>
    </p>
    <div class="graph-row">
        <div class="graph">
            <PopulationPyramid countryData={populationData["Botswana"][2022]}/>
        </div>
        <div class="graph">
            <ProportionalAreaChart populationYearData={populationData} country={"Botswana"}/>
        </div>
    </div>

    <h2>Childless countries: Korea and Japan</h2>
    <p>
        <em>The majority of the content in this section is drawn from "Gray Dawn" in (Sciubba, 2022).</em>
    </p>
    <p>
        In countries where the advancement of medicine and reduction of child mortality have allowed lifespans to extend, the average person alive today can expect to live much longer than they might have several decades ago. In that respect, progression through the demographic transition produces an "aging population" -- however, the latest stages of the demographic transition involve not only a widening of the top of the population pyramid, but also a narrowing of the bottom: fewer children are being born, which means the population is not growing fast enough to replace those who are dying in the long run. The causes for this reduction in fertility are manifold, but include:
    </p>
    <ul>
        <li><strong>Increased education for women:</strong> When women have greater opportunity to pursue higher education and careers, they are more likely to postpone or altogether forgo having children; this increased opportunity for financial independence also leads to: </li>
        <li><strong>Reduced social pressure for marriage:</strong> As a role outside of caregiver and homemaker is carved out for women, marriage becomes less of an obligation and more of a choice, so more women are likely to seek out a partner later or eschew marriage entirely.</li>
        <li><strong>Women giving birth later:</strong> When mothers give birth to their first children in their thirties and forties rather than their teens and twenties, they are simply less likely (and less capable) to have additional children. This goes along with the first point, as women who postpone having children for college or a career naturally have them later in life.</li>
    </ul>
    <p>
        Japan is an excellent case study of this shift. Look at the graphs below, comparing Japan's population pyramids from 1990 to 2020. We can see the 1990 cohort of young adults continue to age over the next thirty years while no similarly-sized group of children comes to replace them, morphing a precariously-stationary population pyramid into an assuredly constrictive one. If you mouse over the bars at the bottom, you can see that infants and toddlers go from comprising a little over 5% of the population in 1990 to less than 4% in 2020. 
    </p>
    <div class="graph-row">
        <div class="graph">
            <PopulationPyramid countryData={populationData["Japan"][1990]} />
        </div>
        <div class="graph">
            <PopulationPyramid countryData={populationData["Japan"][2005]} />
        </div>
        <div class="graph">
            <PopulationPyramid countryData={populationData["Japan"][2020]} />
        </div>
    </div>
    <p>
        Nowhere in East Asia is the issue of aging more pressing than in South Korea. Since 1990, the proportion of the population over the age of 45 has more than doubled, and the trends for other age groups are similarly grim, as can be seen here:<br><br>
        <em>(For the oldest age groups, it may be easier to look at the individual data points by disabling some of the other groups by clicking their entries in the legend.)</em>
    </p>
    <div class="graph-row">
        <div class="graph">
            <ProportionalAreaChart populationYearData={populationData} country={"Korea, South"} optionsOverrides={{aspectRatio: 2}}/>
        </div>
    </div>
    <p>
        As its citizens age with no younger generation fully equipped to care for them, this rapid aging of the population has had profound effects on Korea's society, including:
    </p>
    <ul>
        <li><strong>Shrinking population:</strong> The Korean government projects that the population will drop from around 51 million today to about 34 million over the next forty years.</li>
        <li><strong>Senior poverty:</strong> 45.7% of South Koreans over 65 were in poverty in 2015, more than any other OECD nation.</li>
        <li><strong>High suicide rates among the elderly:</strong> The suicide rate among elderly Koreans is more than triple the national average.</li>
        <li><strong>Later retirement:</strong> The average effective retirement age in South Korea is over 70 years old, far above the OECD average of around 65.</li>
    </ul>

{/await}

<style>
    :root {
        margin: auto;
        width: 70vw;
    }
    .graph-row {
        margin: auto;
        display: flex;
        width: 90%;
        /* height: 70vh; */
    }
    .graph-row .graph {
        margin: auto;
        width: 100%;
        height: 100%;
    }
</style>