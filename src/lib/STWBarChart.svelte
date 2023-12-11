<script lang="ts">
    import { Bar } from "svelte-chartjs/src"
    import {type ChartData, type TooltipItem, Chart, BarElement, Title, SubTitle } from "chart.js/auto"
    import type { STWBarData } from "./stwdata"
    import { onMount } from "svelte"
    import autocolors from "chartjs-plugin-autocolors"
    import type { Context } from "chartjs-plugin-datalabels"

    export let barData: STWBarData

    const Autocolors = {...autocolors, id: "autocolors"}

    const data: ChartData<"bar"> = {
        labels: [],
        datasets: []
    }

    const options = {
        indexAxis: "y" as const,
        scales: {
            y: {
                display: false
            },
            x: {
                title: {
                    display: true,
                    text: "Total spent (billion $)"
                }
            }
        },
        plugins: {
            // legend: {
            //     display: false
            // },
            title: {
                display: true,
                text: ""
            },
            tooltip: {
                callbacks: {
                    label: (ctx: TooltipItem<"bar">) => {
                        if(ctx.raw as number < 1) {
                            return `${ctx.dataset.label}: $${ctx.raw as number * 100} million`
                        }
                        return `${ctx.dataset.label}: $${ctx.raw} billion`
                    }
                }
            }
        }
    }

    onMount(() => {
        data.labels = Object.keys(barData)
        // keys of STW data: stacks
        data.datasets = []
        Object.entries(barData).forEach(([proposal, entries]) => {
            options.plugins.title.text = `${proposal} for $${Object.values(entries).reduce((p,c) => p+c)} billion`
            Object.entries(entries).sort(([catA, spendingA], [catB, spendingB]) => spendingB - spendingA).forEach(([category, spending]) => {
                data.datasets.push({
                    label: category,
                    data: [ spending ],
                    stack: proposal
                })
            })
        })
        // objects of STW data: keys = datasets, values = bars
    })

    Chart.register(BarElement, Title, SubTitle)
    Chart.defaults.font.family = "'Times New Roman', Times, serif"
</script>

<Bar {options} {data} plugins={[Autocolors]} />