<script lang="ts">
    import { Line } from "svelte-chartjs/src"
    import {type ChartData, Chart, type TooltipItem, LineElement, Title, SubTitle } from "chart.js/auto"
    import { onMount } from "svelte"
    import type { PopulationYearData } from "./population"

    export let populationYearData: PopulationYearData
    export let country: string

    const data: ChartData<"line"> = {
        labels: [],
        datasets: []
    }

    const options = {
        responsive: true,
        aspectRatio: 1,
        interaction: {
            intersect: false,
            mode: "nearest" as const,
            axis: "xy" as const
        },
        scales: {
            y: {
                stacked: true,
                title: {
                    display: true,
                    text: "% of total population"
                },
                ticks: {
                    callback: (s: string | number) => Math.abs(typeof s == "string" ? parseInt(s) : s) * 100
                },
                min: 0,
                max: 1
            }
        },
        elements: {
            point: {
                radius: 1.5
            }
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: (ctx: TooltipItem<"line">) => {
                        return `Ages ${ctx.label}: ${(100*Math.abs(ctx.raw as number)).toFixed(2).toLocaleString()}%`
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
        }
    }

    export const setData = (country: string) => {
        let years = Object.keys(populationYearData[country]).sort().map(key => parseInt(key))
        const datasets = Object.keys(populationYearData[country][years[0]].female).sort((a, b) => {
            return parseInt(a.split("_")[0]) - parseInt(b.split("_")[0])
        }).map((category, index) => {
            return {
                label: category,
                data: years.map(year => {
                    return populationYearData[country][year].female[category] + populationYearData[country][year].male[category]
                }),
                fill: index == 0 ? "origin" : "-1"
            }
        })
        data.labels = years

        const perChunk = 3
        const chunkedDatasets = datasets.reduce<{label: string, data: number[], fill: string}[][]>((resultArray, item, index) => { 
            const chunkIndex = Math.floor(index/perChunk)

            if(!resultArray[chunkIndex]) {
                resultArray[chunkIndex] = [] // start a new chunk
            }

            resultArray[chunkIndex].push(item)

            return resultArray
        }, [])

        data.datasets = chunkedDatasets.map<{label: string, data: number[], fill: string}>((datasets, index, arr) => {
            const split_labels = datasets.map(dataset => dataset.label.split("_"))

            return {
                label: index == arr.length - 1 ? `${split_labels[0][0]}+` : `${split_labels[0][0]}-${split_labels[split_labels.length-1][1]}`,
                data: datasets.reduce<number[]>((accumulate, dataset) => {
                    return accumulate.map((value, index) => value + dataset.data[index])
                }, Array(datasets[0].data.length).fill(0)),
                fill: index == 0 ? "origin" : "-1"
            }
        })

        options.plugins.title.text = `${country} population proportions, ${years[0]}-${years[years.length-1]}`
    }

    onMount(() => {
        setData(country)
    })


    Chart.register(LineElement, Title, SubTitle)
</script>

{#key data.labels}
    <Line {data} {options}/>
{/key}