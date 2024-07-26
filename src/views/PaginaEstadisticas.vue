<template>
    <HeaderComponent/>
    <AyudaTextual mensaje="Estadisticas"/>
    <section>
        <div class="flex flex-col lg:flex-row">
            <div class="w-full lg:w-3/5">
                <div class="grid grid-cols-1 lg:grid-cols-3 place-content-center lg:place-items-end">
                    <VisualizadorSecComponente @dragover="eventos" @dragstart="selected('Titulo 1')" titulo="Estadistica con un celular de baja gama" imagen="https://lastfm.freetls.fastly.net/i/u/ar0/f5f891ae1dcb08d3861b7b84f147de9d.jpg"
                    />
                    <VisualizadorSecComponente
                        @dragover="eventos"
                        @dragstart="selected('Titulo 2')"
                        titulo="Estadistica Estadistica Estadistica Estadistica Estadistica Estadistica Estadistica"
                        imagen="https://lastfm.freetls.fastly.net/i/u/ar0/f5f891ae1dcb08d3861b7b84f147de9d.jpg"
                    />
                    <VisualizadorSecComponente
                        @dragover="eventos"
                        @dragstart="selected('Titulo 3')"
                        titulo="Estadistica"
                        imagen="https://lastfm.freetls.fastly.net/i/u/ar0/f5f891ae1dcb08d3861b7b84f147de9d.jpg"
                    />
                </div>
                <PaginadorUtil ref="paginador"/>
                <!-- {{ Borrar el PLUS para el celular }} -->
            </div>
            <div class="lg:w-2/5 flex justify-center lg:block">
                <div class="absolute  mt-2 lg:top-[50%] lg:right-5">
                    
                    <Plus
                        draggable="true"
                        @dragenter="printa"
                        @dragleave="salita"
                        @dragover="eventos"
                        @drop="drop"
                        class="p-2 duration-150 rounded-lg"
                        :class="{'bg-yellow-100 text-slate-800':was_draged, 'text-white bg-slate-800':!was_draged, 'scale-0': was_selected}"
                    />
                </div>
                <div :class="{'scale-90': was_selected}" class="absolute lg:right-3 p-2 rounded-xl w-96 lg:w-56 font-Teachers duration-150 scale-0 h-96 flex flex-col justify-between bg-white">
                    <button @click="closedpop" class="absolute top-1 right-1">
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
                    </button>
                    <div class="text-center w-full mt-2">
                        <h2 class="text-xl">{{ selected_data }}</h2>
                    </div>
                    <div class="flex flex-col  items-center">
                        <span>Datos y Preguntas</span>
                        <div class="grid grid-cols-5 gap-1 mb-2">
                            <button v-for="(item, index) in 10" :key="index" @click="seleccinar_preguntas(index+1)" :class="{'bg-yellow-500 hover:bg-yellow-700  select-none': numeros_seleccionados.includes(index+1), 'hover:bg-slate-400 bg-slate-300':!numeros_seleccionados.includes(index+1)}" class="size-10  duration-100 p-1 flex items-center justify-center ">{{ index +1 }}</button>
                        </div>
                        <button class="bg-green-500 rounded outline-none text-white ring-black py-1 px-2 hover:bg-green-600 duration-150 focus:ring-2">Generar</button>
                    </div>
                    <SelectorEstadisticas ref="estadisticas"/>
                 </div>
            </div>
        </div>
    </section>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue"
import AyudaTextual from "@/components/AyudaTextual.vue"
import SelectorEstadisticas from "@/components/SelectorEstadisticas.vue"
import VisualizadorSecComponente from "@/components/VisualizadorSecComponente.vue"
import PaginadorUtil from '@/components/utils/PaginadorUtil.vue'
import Plus from '@/components/icons/PlusIcono.vue'

export default {
    components: {
        SelectorEstadisticas,
        AyudaTextual,
        HeaderComponent,
        VisualizadorSecComponente,
        PaginadorUtil,
        Plus
    },
    data() {
        return {
            numeros_seleccionados : [],
            was_draged :false,
            was_selected: false,
            selected_data: '',
            was_dropit: false
        }
    },
    methods: {
        seleccinar_preguntas(data){
            if (this.numeros_seleccionados.includes(data)){
                this.numeros_seleccionados = this.numeros_seleccionados.filter(item => item !==data)
            }
            else{
                this.numeros_seleccionados.push(data)
            }
            
        },
        closedpop(){
            this.was_selected=false
            this.was_draged=false
        },
        selected(data){
            this.selected_data = data
        },
        printa(event) {
            event.preventDefault();
            this.was_draged = true
        },
        salita(event) {
            event.preventDefault();
            this.was_draged = false
        },
        drop(){
            this.was_selected = true
        },
        eventos(event) {
            event.preventDefault();
        },
    },
}
</script>
