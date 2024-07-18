<template>
    <div class="font-Bungee justify-center mx-3 mt-4  space-x-1 flex items-center ">
        <button @click="restar_pagina" class="bg-white rounded-lg border border-black"><AtrasIcono/></button>
        <span class="text-xl ">{{ pagina }}</span>
        <button @click="subir_pagina"  class="bg-white rounded-lg border border-black"><SiguienteIcono/></button>
    </div>
</template>
<script>
import AtrasIcono  from "@/components/icons/AtrasIcono.vue"
import SiguienteIcono  from "@/components/icons/SiguienteIcono.vue"
export default {

    components:{
        AtrasIcono,
        SiguienteIcono
    },
    data() {
        return {
            pagina: 1,
        }
    },
    methods: {
        subir_pagina(){
            this.pagina++
        },
        restar_pagina(){
            if (this.pagina > 1){
                this.pagina--
            }
        },
    },
}
</script>