<template>
<HeaderComponent/>
<AyudaTextual mensaje="Preguntas"/>
<section>
    <div class="w-3/4 font-Afacad p-2 flex flex-col lg:flex-row justify-between rounded-md shadow-md m-2 mt-3 h-full mx-auto bg-slate-100">   
        
        <div class="lg:w-1/4 space-y-2 lg:ml-9 flex flex-col justify-center text-center">
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
        <div class="lg:w-1/2 mx-auto lg:mr-9 mt-4 lg:mt-0 text-center bg-slate-200 rounded-md border border-slate-300">
            <!--<button class="absolute bg-slate-300 duration-100 -left-10 p-1 rounded hover:text-white hover:bg-gray-600 top-1/2">
                <AtrasIcono/>
            </button>
            <button class="absolute bg-slate-300 duration-100 p-1 -right-10 rounded hover:text-white hover:bg-gray-600 top-1/2">
                <SiguienteIcono/>
            </button>-->
            <form action="." class="mt-2 relative flex flex-col h-full justify-between jus m-1" @submit.prevent="console.log(2)">
                
                <h3 class="text-2xl">Pregunta {{ tipo }}</h3>
                <div class="grid grid-cols-3">
                    <input :class="{'col-span-3': tipo=== 'Texto'}" id="titulo" class="px-2 col-span-2 m-1 py-1 focus:outline-none ring-1 rounded-sm text-sm duration-100 focus:ring-black" placeholder="Titulo de la Pregunta" type="text">
                    <input v-model="alternativas" v-if="tipo==='Alternativa' || tipo === 'Drag'" id="npreg" class="px-2 m-1 py-1 focus:outline-none ring-1 rounded-sm text-sm duration-100 focus:ring-black" type="number">
                    
                    <label v-if="tipo==='Drag'" for="file-upload" class="custom-file-upload">
                        Sube tus imagenes
                    </label>
                    <input v-if="tipo==='Drag'" @change="onFileChange" id="file-upload" type="file"/>
                </div>
                <div v-if="alternativas !== 0 && tipo === 'Alternativa' " class="space-y-1">
                    <h3>Lista de Alternativas</h3>
                    <div class="grid-cols-3 transition-all w-full  ease-in-out grid">
                        <input v-for="item in alternativas" :key="item" v-model="lista_de_alternativas[item]" type="text" class="m-2 p-1 ring-1 rounded-sm text-xs duration-100 focus:ring-black">
                    </div>
                </div>
                <div v-if="alternativas !== 0 && tipo === 'Drag' " class="space-y-1">
                    <h3>Lista de Categorias</h3>
                    <div class="grid-cols-3 transition-all w-full  ease-in-out grid">
                        <input v-for="item in alternativas" :key="item" v-model="lista_de_categorias[item]" type="text" class="m-2 p-1 ring-1 rounded-sm text-xs duration-100 focus:ring-black">
                    </div>
                </div>
                <GaleriaImagenes v-if="tipo === 'Drag'" :imagenes="imagenes"/>
                <div class="flex justify-end mb-3 text-white space-x-2">
                    <button @click="limpiar" class="bg-gray-400 hover:bg-gray-500 duration-100 p-2 rounded-md">Limpiar</button>
                    <button @click="siguiente" class="bg-green-500 hover:bg-green-600 duration-100 p-2 rounded-md">Siguiente</button>
                </div>
            </form>
        </div>
    </div>
</section>
</template>
<script>
import HeaderComponent  from "@/components/HeaderComponent.vue"
import AyudaTextual  from "@/components/AyudaTextual.vue"
import GaleriaImagenes from "@/components/GaleriaImagenes.vue"
import { useToastStore } from '@/stores/toast'

export default {
    setup() {
        const toastStore = useToastStore()  
        return{
            toastStore
        }
    },
    components:{
        AyudaTextual,
        HeaderComponent,
        GaleriaImagenes
    },
    data() {
        return {
            tipo:'',
            imagenes: [],
            lista_de_alternativas: {},
            lista_de_categorias: {},
            alternativas:0,
        }
    },
    methods: {
        onFileChange(event) {
            const file = event.target.files[0];
            if (file) {
                this.imagenes.push(URL.createObjectURL(file))
            }
        },
        limpiar(){
            this.imagenes = []
            console.log(this.tipo);
        },
        siguiente(){
            this.toastStore.showToast(3000, `Se guardo la pregunta.`, "Check", 'bg-green-500')
            console.log(this.lista_de_alternativas)
            this.limpiar()
        }
    },
}
</script>