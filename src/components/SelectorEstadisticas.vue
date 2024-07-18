<template>
<div class=" text-white space-y-3">
    <div class="flex duration-150 transition-all ease-in-out space-x-2 justify-center">
        <BarPlot @click="deleteitems('bar')" v-if="graphs.includes('bar')" class="bg-blue-700 p-1 cursor-pointer border-2 rounded-lg size-9   duration-150"/>
        <LinePlot @click="deleteitems('line')" v-if="graphs.includes('line')" class="bg-green-700 cursor-pointer p-1 border-2 rounded-lg size-9   duration-150"/>
        <PiePlot @click="deleteitems('pie')" v-if="graphs.includes('pie')" class="bg-red-700 p-1 border-2 cursor-pointer rounded-lg duration-150 size-9"/>
        <StatsDetails @click="deleteitems('stats')" v-if="graphs.includes('stats')" class="bg-yellow-700 cursor-pointer p-1 border-2 rounded-lg  size-9 duration-150"/>
    </div>
    <div class="flex  space-x-2 justify-center">
        <BarPlot @click="addstats('bar')" class="bg-blue-500 p-1 cursor-pointer border-2 rounded-lg border-blue-500 hover:border-blue-500 hover:bg-white hover:text-blue-500 duration-150"/>
        <LinePlot @click="addstats('line')" class="bg-green-500 p-1 border-2 rounded-lg cursor-pointer border-green-500 hover:border-green-500 hover:bg-white hover:text-green-500 duration-150"/>
        <PiePlot @click="addstats('pie')" class="bg-red-500 p-1 border-2 rounded-lg cursor-pointer border-red-500 hover:border-red-500 hover:bg-white hover:text-red-500 duration-150"/>
        <StatsDetails @click="addstats('stats')" class="bg-yellow-500 p-1 border-2 rounded-lg cursor-pointer border-yellow-500 hover:border-yellow-500 hover:bg-white hover:text-yellow-500 duration-150"/>
    </div>
</div>
</template>
<script>
import LinePlot from "@/components/icons/stats/LinePlot.vue"
import BarPlot from "@/components/icons/stats/BarPlot.vue"
import PiePlot from "@/components/icons/stats/PiePlot.vue"
import StatsDetails from "@/components/icons/stats/StatsDetails.vue"

export default{
    components:{
        BarPlot,
        LinePlot,
        PiePlot,
        StatsDetails
    },
    data() {
        return {
            graphs: []
        }
    },
    methods: {
        addstats(data){
            this.graphs.push(data)
        },
        deleteitems(data){
            this.graphs = this.graphs.filter(item => item !==data)
        },
    },
}
</script>