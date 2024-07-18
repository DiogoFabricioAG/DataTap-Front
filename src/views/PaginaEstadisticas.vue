<template>
    <HeaderComponent/>
    <AyudaTextual mensaje="Estadisticas"/>
    <section>
        <div class="flex">
            <div class="w-3/5">
                <div class="grid  grid-cols-3 place-items-end">
                    <VisualizadorSecComponente @dragover="eventos" @dragstart="selected('Titulo 1')" titulo="Estadistica con un celular de baja gama" imagen="https://lastfm.freetls.fastly.net/i/u/ar0/f5f891ae1dcb08d3861b7b84f147de9d.jpg"
                    />
                    <VisualizadorSecComponente
                        @dragover="eventos"
                        @dragstart="selected('Titulo 2')"
                        titulo="Estadistica"
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
                <!-- {{ $refs.paginador }} -->
            </div>
            <div>
                <div class="absolute top-[50%] right-5">
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
            </div>
        </div>
    </section>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue"
import AyudaTextual from "@/components/AyudaTextual.vue"
import VisualizadorSecComponente from "@/components/VisualizadorSecComponente.vue"
import PaginadorUtil from '@/components/utils/PaginadorUtil.vue'
import Plus from '@/components/icons/PlusIcono.vue'

export default {
    components: {
        AyudaTextual,
        HeaderComponent,
        VisualizadorSecComponente,
        PaginadorUtil,
        Plus
    },
    data() {
        return {
            was_draged :false,
            was_selected: false,
            selected_data: ''
        }
    },
    methods: {
        selected(data){
            this.selected_data = data
        },
        printa(event) {
            event.preventDefault();
            this.was_draged = true
            console.log('Entered Plus');
        },
        salita(event) {
            event.preventDefault();
            this.was_draged = false
            console.log('Left Plus');
        },
        drop(){
            this.was_selected = true
            alert(`You have selected this: ${this.selected_data}`)
        },
        eventos(event) {
            event.preventDefault();
        },
    },
}
</script>
