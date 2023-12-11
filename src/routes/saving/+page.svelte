<script lang="ts">
    import StwBarChart from "$lib/STWBarChart.svelte"
    import { Math } from "mathjax-svelte"
    import type { STWBarData } from "$lib/stwdata"
    

    const proposals: STWBarData[] = [
        {
            "Curing all disease": {
                "Universal healthcare in Ethiopia": 100,
                "Vaccine development and distribution": 100,
                "Eradication of tropical diseases": 100,
                "Eradication of tuberculosis": 23,
                "Cure and eradication of HIV": 30,
                "Antibiotic resistance": 10,
                "Map human cell types": 5,
                "Solving heart disease": 100,
                "Solving neurological disease": 100,
                "Solving cancer": 100,
                "Curing damaged cells": 200
            },
        },
        {
            "Fixing the climate": {
                "Solar radiation management": 6,
                "Enhanced weathering": 2,
                "Cloud whitening": 1,
                "Restoration of peatlands": 10,
                "Global tree planting and reforestation": 300,
                "Global kelp afforestation": 100,
                "Ocean engineering with whale populations": 100,
                "Renewable carbon capture at scale": 100,
                "Greenhouse gas capture": 10,
                "Carbon capture and storage plants": 100,
                "Carbon-fixing at scale competition": 0.1,
                "Cheap carbon-fixing competition": 0.1
            }
        }]
</script>

<svelte:head>
    <title>Saving the World for a Trillion Dollars | HGLO 101 Final Project</title>
</svelte:head>

<h1>Saving the World for a Trillion Dollars</h1>
<p>
    <em>The majority of the content on this page is drawn from "Cure All Disease" and "Redesign Our Planet" in (Hooper, 2022).</em>
</p>
<h2>How to Spend $1,000,000,000,000</h2>
<p>
    One trillion dollars is a nearly unfathomable quantity of money. The Bezoses and Musks of the world have achieved net worths of in the hundreds of billions, but the net worths of even some of the wealthiest people in world history pale in comparison to such a massive number. For the average wage worker in the United States to make one trillion dollars, they would need to work for one hundred times the amount of time humanity has existed on Earth.<sup>1</sup> Yet at the scale of large national governments, it is more than a feasible amount to spend: the United States federal government spent $6.3 trillion in 2022 (CBO, 2023). Moreover, it is very possible for the government to spend money that simply does not "exist" in a tangible sense: the government made $4.9 trillion that same year. To address the existential and humanitarian problems confronting our world today, it is not as preposterous as it sounds to spend such a staggering amount of money.  
</p>
<p>
    Though it is within the realm of possibility for a trillion dollars to be allocated and spent, that does not make it have any less enormous an impact: with one trillion dollars, world hunger could be cured ten times over and more than half of our budget would still remain (WFP, 2022). With that in mind, let's take a look at some proposals Rowan Hooper describes in his book <em>How to Save the World for Just a Trillion Dollars</em> for tackling humanity's greatest challenges.
</p>
<p><small>1: Some back of the envelope math: <Math t={String.raw`\$1,000,000,000,000\div\frac{\$23}{1 \text{ hour}}\cdot\frac{40\text{ hours}}{1\text{ week}}\cdot\frac{52\text{ weeks}}{1\text{ year}}\approx 20,903,010 \text{ years}`} display={false}/> (NEA, 2023). Modern <em>Homo sapiens</em> have existed for about 200,000 years.</small></p>
<h2>Curing disease</h2>
<div>
    <StwBarChart barData={proposals[0]}/>
</div>
<h3>Universal healthcare in Ethiopia</h3>
<p>
    Universal healthcare is by far one of the most effective tools at our disposal for narrowing the gap in global healthcare equality. Equitable access to healthcare is vital for improving maternal and child health, improving pallative care, and combating epidemics. Meanwhile, Ethiopia is wracked by manifold issues with both quality and access to medical treatment, making it an excellent choice as a flagship example of how healthcare systems can be transformed and begin to close the global gap.
</p>
<h3>Vaccine development and distribution</h3>
<p>
    The COVID-19 pandemic has renewed awareness of how vital vaccines are in addressing the spread of disease. Vaccination is vital in our effort to combat and eradicate infectious disease: success stories such as the total eradication of smallpox are monumental achievements for global medicine, and with the right funding, they can be repeated with diseases that continue to plague humanity such as polio (which still lingers in Afghanistan and Pakistan), measles, influenza, and HPV. Vaccines are rarely distributed fairly, as they are overwhelmingly produced by wealthier nations and distributed to poorer ones at their total discretion. Subsidizing the costs of vaccine distribution for poorer countries and even providing the resources for them to produce their own vaccines would have a profound impact on what is often termed "vaccine diplomacy." 
</p>
<h3>Eradication of tropical diseases and HIV</h3>
<p>
    Malaria and other tropical diseases such as dengue are one of the more persistent groups of diseases being combated by organizations such as the WHO and Bill & Melinda Gates foundation. New vaccines are still being developed, with a new and cheaper malaria vaccine coming out even this year (Kafuko, 2023). Part of the issue is not only insufficient vaccination, but also the very existence of the mosquitos that transmit the diseases to humans: by eradicating these mosquitos through genetic modification, we could make great strides in eliminating tropical disease. Likewise, innovations in both PrEP (pre-exposure prophylaxis) and genetic treatments are promising methods for combating HIV. 
</p>
<h3>Eradication of tuberculosis and combating antibiotic resistance</h3>
<p>
    Eliminating tuberculosis is not an issue of not understanding the disease, but rather a lack of funding and resources, and the slower pace of eradication allows time for antibiotic resistance to build. With greater allocation of funds, we can speed up our efforts without being outpaced by infection.
</p>
<h3>Map human cell types</h3>
<p>
    The <a href="https://www.humancellatlas.org/" target="_blank">Human Cell Atlas</a> is a project to map out and enumerate the 30 trillion-odd cells in the human body. Even today, medical researchers do not know precisely how many different kinds of cells exist in humans, and getting a complete picture of how our bodies are really composed would revolutionize medicine. It would allow us to more effectively grow tissue in labs for organ replacements, more precisely perform genetic engineering, and understand and treat certain diseases governed by rare and unknown cell types currently beyond our comprehension. 
</p>
<h3>Solving heart disease, neurological disease, and cancer</h3>
<p>
    Once again, much of the issue in curing the greatest killers in developed countries is a lack of resources: by investing in DNA treatments such as CRISPR/Cas9, we could accelerate our pace in defeating these most persistent enemies.
</p>
<h3>Curing damaged cells</h3>
<p>
    Much of the process of aging and eventual natural death is the damaging and death of cells, associated with the shortening of chromosomal threads known as telomeres. By discovering ways to engineer human cells to prevent aging and restore what is lost, we can extend human lifespans and perhaps change the nature of death entirely.
</p>

<h2>Fixing the climate</h2>
<div>
    <StwBarChart barData={proposals[1]}/>
</div>
<h3>Solar radiation management</h3>
<p>
    Solar radiation management, or SRM, is a proposed kind of geoengineering that aims to increase the reflectivity of the atmosphere and prevent some sunlight from reaching Earth and heating the planet. It's highly experimental and uncertain if it will work at all, and though it will likely not be a panacea (it is unlikely to help in cooling the poles and combating sea level rise, for example), it's still promising. 
</p>
<h3>Enhanced weathering</h3>
<p>
    Here weathering is in the sense of erosion -- when rocks wear down and are exposed to carbon dioxide over millenia, they capture and lock up the gas. Harnessing and enhancing this process as a means of carbon capture by grinding magnesium- and calcium-rich minerals such as olivine to powder, accelerating their chemical reactions with carbon dioxide, then dumping it in the ocean, could be a powerful means of both lowering carbon emissions but also combating ocean acidification. This process can be repeated on land, sprinkling basalt dust on farmland, with the promise of fixing 2 billion tons of carbon dioxide per year.
</p>
<h3>Cloud whitening</h3>
<p>
    The Twomey effect is an atmospheric phenomenon where the more saturated clouds are with water, the more they reflect solar radiation. By seeding clouds in the poles, we may be able to create artificial, whiter clouds and achieve cooling sufficient to restore the sea ice; however, it depends on hitherto undiscovered technology to unleash an ultrafine mist in a wide area, but investment on the order of $1 billion to develop remote drones to deliver the spray may be enough to rectify that. 
</p>
<h3>Restoration of peatlands</h3>
<h3>Global tree planting and reforestation</h3>
<h3>Global kelp afforestation</h3>
<h3>Ocean engineering with whale population</h3>
<h3>Renewable carbon capture and storage at scale</h3>
<p>
    The possibility and maximum effectiveness of capturing carbon dioxide from the atmosphere and storing it at scale -- either through biological solutions such as planting more trees and growing more plants in the ocean or technological ones which capture the carbon, which is then buried underground -- is also uncertain, but it could be a major tool in reaching negative emissions and preventing global heating of over 2°. Unlike many of the other proposals, the issue is not so much a lack of technology but a lack of funds. Thus, a massive stimulus may be enough to launch full-scale carbon capture endeavors.
</p>
<h3>Greenhouse gas capture</h3>
<h3>Carbon-fixing competitions</h3>
<p>
    We need innovation in making carbon capture both cheaper and more efficient -- opening up the playing field to smaller innovators by launching competitions with ten-million-dollar prizes to demonstrate how to fix and bury 100,000 tons of carbon or how to fix 1 ton of carbon for $200 (rather than the current $600) will stimulate and accelerate the development of better and cheaper technology to capture carbon dioxide from the atmosphere. 
</p>