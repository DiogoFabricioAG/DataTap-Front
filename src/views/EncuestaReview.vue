<template>
    <HeaderComponent/>
    <AyudaTextual mensaje="Encuestas"/>
    <PlantillaComponente ref="plantilla" usuario="Diogo Abregu" fecha="18/06/2022" genero="Salud" titulo="Encuesta sobre la Salud Mental" detalle="Tengo una curiosidad muy curiosa" imagen="https://concepto.de/wp-content/uploads/2013/08/salud-OMS-e1551914081412.jpg"/>
    <section>
        <div class="p-3 text-center lg:text-left">
            <h2 class="font-Teachers font-bold text-3xl">Comentarios</h2>
            <div>
                <ComentarioComponente usuario="Jhon Sal" contenido="Lo mejor del mundo" :estrellas="2"/>
                <ComentarioComponente usuario="Jhon Sal" contenido="Lo mejor del mundo" :estrellas="3"/>
                <ComentarioComponente usuario="Jhon Sal" contenido="Lo mejor del mundo" :estrellas="4"/>
            </div>
        </div>
        
    </section>
</template>
<script>
import HeaderComponent  from "@/components/HeaderComponent.vue"
import AyudaTextual  from "@/components/AyudaTextual.vue"
import PlantillaComponente  from "@/components/PlantillaComponente.vue"
import ComentarioComponente  from "@/components/ComentarioComponente.vue"

export default {
    components:{
        ComentarioComponente,
        PlantillaComponente,
        AyudaTextual,
        HeaderComponent,
    },
    data() {
        return {
        }
    },
    methods: {
        meetDialog(){
            this.$refs.plantilla.showInfoDialog = true
        }
    },
}
</script>