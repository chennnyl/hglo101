<script lang="ts">
    import { Bar } from "svelte-chartjs/src"
    import {type ChartData, type TooltipItem, Chart, BarElement, Title, SubTitle } from "chart.js/auto"
    import type { PopulationData } from "$lib/population"
    import { onMount } from "svelte"

    export let countryData: PopulationData
    export let optionsOverrides: any = {}

    const data: ChartData<"bar"> = {
        labels: [],
        datasets: [
            {
                label: "",
                data: [],
                borderWidth: 1,
                stack: "stack0",
                barPercentage: 1.0,
                categoryPercentage: 0.9
            },
            {
                label: "",
                data: [],
                borderWidth: 1,
                stack: "stack0",
                barPercentage: 1.0,
                categoryPercentage: 0.9
            },
        ]
    }

    const options = {
        responsive: true,
        aspectRatio: 1,
        indexAxis: "y" as const,
        interaction: {
            mode: "nearest" as const
        },
        scales: {
            y: {
                title: {
                    display: true,
                    text: "Age group"
                },
                beginAtZero: true,
                stacked: true,
            },
            x: {
                title: {
                    display: true,
                    text: "Population (millions)"
                },
                ticks: {
                    callback: (s: number) => Math.abs(s) / 1_000_000
                }
            }
        },
        plugins: {
            tooltip: {
                yAlign: "bottom" as const,
                callbacks: {
                    label: (ctx: TooltipItem<"bar">) => {
                        return `Ages ${ctx.label}: ${Math.abs(ctx.raw as number).toLocaleString()}`
                    }
                }
            },
            title: {
                display: true,
                text: ""
            },
            subtitle: {
                display: true,
                text: "Data: US Census Bureau"
            }
        },
        ...optionsOverrides
    }

    Chart.register(BarElement, Title, SubTitle)
    Chart.defaults.font.family = "'Times New Roman', Times, serif"
        

    onMount(() => {
        const sortedLabels = Object.keys(countryData.female).filter(key => Object.keys(countryData.male).includes(key)).sort((a, b) => parseInt(b.split("_")[0]) - parseInt(a.split("_")[0]))
        data.labels = sortedLabels.map(k => {
            const [lower, upper] = k.split("_", 2)
            if(upper.length == 0) {
                return `${lower}+`
            }
            return `${lower}-${upper}`
        })
        data.datasets[1].label = `Female Population`
        data.datasets[1].data = sortedLabels.map(key => countryData.female[key])
        data.datasets[0].label = `Male Population`
        data.datasets[0].data = sortedLabels.map(key => -countryData.male[key])
        options.plugins.title.text = `${countryData.country} Population Pyramid, ${countryData.year}`
    })
</script>

{#key data.labels}
    <Bar {data} {options}></Bar>
{/key}