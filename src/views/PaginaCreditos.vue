<template>
    <HeaderComponent/>
    <AyudaTextual mensaje="Creditos"/>
    <div class="text-center  ">
        <p class="text-7xl font-Teachers">{{nombre}} <span class="text-yellow-500 font-bold">Abregu</span></p>
        <p class="text-3xl font-Afacad text-blue-500 font-bold">Desarrollador</p>
    </div>
</template>
<script>
import HeaderComponent  from "@/components/HeaderComponent.vue"
import AyudaTextual  from "@/components/AyudaTextual.vue"

export default {
    components:{
        AyudaTextual,
        HeaderComponent,
    },
    data() {
        return {
            nombre:"Diogo" 
        }
    },
    methods: {
        mynombre(){
            setTimeout(() => {
                this.nombre = this.nombre.substring(0,this.nombre.length - 2)
            }, 2000);
        }
    },
    create() {
        this.mynombre()
        setInterval(this.mynombre, 2000);
    },
}
</script>