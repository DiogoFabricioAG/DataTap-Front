<template>
    <HeaderComponent/>
    <AyudaTextual mensaje="Busqueda"/>
    <section>
        <div>
            <div class="grid lg:grid-cols-2">
                <VisualizadorComponente  usuario="Diogo Abregu" fecha="18/06/2022" genero="Salud" titulo="Encuesta sobre la Salud Mental" detalle="Tengo una curiosidad muy curiosa" imagen="https://concepto.de/wp-content/uploads/2013/08/salud-OMS-e1551914081412.jpg"/>
                <VisualizadorComponente  usuario="Diogo Abregu" fecha="18/06/2022" genero="Salud" titulo="Encuesta sobre la Salud Mental" detalle="Tengo una curiosidad muy curiosa" imagen="https://concepto.de/wp-content/uploads/2013/08/salud-OMS-e1551914081412.jpg"/>
            </div>
        </div>
        <div class="font-Bungee justify-center mx-3 mt-4 space-x-1 flex items-center ">
            <button @click="restar_pagina" class="bg-white rounded-lg border border-black"><AtrasIcono/></button>
            <span class="text-xl ">{{pagina}}</span>
            <button @click="subir_pagina"  class="bg-white rounded-lg border border-black"><SiguienteIcono/></button>
        </div>
    </section>
    
</template>
<script>
import HeaderComponent  from "@/components/HeaderComponent.vue"
import AyudaTextual  from "@/components/AyudaTextual.vue"
import VisualizadorComponente  from "@/components/VisualizadorComponente.vue"
import AtrasIcono  from "@/components/icons/AtrasIcono.vue"
import SiguienteIcono  from "@/components/icons/SiguienteIcono.vue"
import { useToastStore } from '@/stores/toast'
export default {
    setup() {
        const toastStore = useToastStore()  
        return{
            toastStore
        }
    },
    components:{
        SiguienteIcono,
        AtrasIcono,
        VisualizadorComponente,
        AyudaTextual,
        HeaderComponent,
    },
    data() {
        return {
            pagina: 1
        }
    },
    methods: {
        subir_pagina(){
            this.pagina++
            this.toastStore.showToast(3000, "Creacion exitosa", "Check", 'bg-green-500')
        },
        restar_pagina(){
            if (this.pagina > 0){
                this.pagina--
            }
        },
        
    },
    
}
</script>