<template>
<HeaderComponent/>
<AyudaTextual mensaje="Preguntas"/>
<section>
    <div class="w-3/4 relative font-Afacad p-2 flex justify-between rounded-md shadow-md m-2 mt-3 h-full mx-auto bg-slate-100">   
        <button class="absolute bg-slate-300 duration-100 p-1 rounded hover:text-white hover:bg-gray-600 top-1/2">
            <AtrasIcono/>
        </button>
        <button class="absolute bg-slate-300 duration-100 p-1 right-2 rounded hover:text-white hover:bg-gray-600 top-1/2">
            <SiguienteIcono/>
        </button>
        <div class="w-1/4 space-y-2 ml-9 flex flex-col justify-center text-center">
            <label
                for="Option1"
                class="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-purple-500 has-[:checked]:border-purple-500 has-[:checked]:bg-purple-500 has-[:checked]:text-white"
                tabindex="0"
            >
                <input v-model="tipo" class="sr-only bg-slate-100" id="Option1" type="radio" value="Texto" tabindex="-1" name="option" />
                <span class="text-sm font-bold">Texto</span>
            </label>
            <label
                for="Option2"
                class="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-blue-500 has-[:checked]:border-blue-500 has-[:checked]:bg-blue-500 has-[:checked]:text-white"
                tabindex="0"
            >
                <input v-model="tipo" class="sr-only bg-slate-100" id="Option2" type="radio" value="Alternativa" tabindex="-1" name="option" />
                <span class="text-sm font-bold">Alternativas</span>
            </label>
            <label
                for="Option3"
                class="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-green-500 has-[:checked]:border-green-500 has-[:checked]:bg-green-500 has-[:checked]:text-white"
                tabindex="0"
            >
                <input v-model="tipo" class="sr-only bg-slate-100" id="Option3" type="radio" value="Drag" tabindex="-1" name="option" />
                <span class="text-sm font-bold">Drag & Drop</span>
            </label>
        
        </div>
        <div class="w-1/2  mr-9 text-center bg-slate-200 rounded-md border border-slate-300">
            <form action="." class="mt-2 flex flex-col h-full justify-between jus m-1" @submit.prevent="console.log(2)">
                <h3 class="text-2xl">Pregunta {{ tipo }}</h3>
                <div class="grid grid-cols-3">
                    <input id="titulo" class="px-2 col-span-2 m-1 py-1 focus:outline-none ring-1 rounded-sm text-sm duration-100 focus:ring-red-400" placeholder="Titulo de la Pregunta" type="text">
                    <input id="npreg" class="px-2 m-1 py-1 focus:outline-none ring-1 rounded-sm text-sm duration-100 focus:ring-red-400" placeholder="N de Preguntas" type="number">

                </div>
                <div class="flex justify-end mb-5 text-white space-x-2">
                    <button class="bg-gray-400 hover:bg-gray-500 duration-100 p-2 rounded-md">Limpiar</button>
                    <button class="bg-green-500 hover:bg-green-600 duration-100 p-2 rounded-md">Siguiente</button>
                </div>

            </form>
        </div>
    </div>
</section>
</template>
<script>
import HeaderComponent  from "@/components/HeaderComponent.vue"
import AyudaTextual  from "@/components/AyudaTextual.vue"
import AtrasIcono from '@/components/icons/AtrasIcono.vue'
import SiguienteIcono from '@/components/icons/SiguienteIcono.vue'
export default {
    components:{
        AyudaTextual,
        HeaderComponent,
        SiguienteIcono,
        AtrasIcono
    },
    data() {
        return {
            tipo:'',
        }
    },
    methods: {
        
    },
}
</script>