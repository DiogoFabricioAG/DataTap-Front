<template>
    <section class="mt-8 p-2 flex justify-center flex-col lg:flex-row">
        <div class="w-full lg:w-3/5 p-2 font-Teachers ">
            <h1 class="text-3xl font-bold text-center">{{ titulo }}</h1>
            <p class=" text-center">{{ detalle }}</p>
            <div class="grid lg:grid-cols-2 h-max">
                <div class="border border-black bg-slate-300 m-1 text-sm p-2 flex flex-col justify-center rounded-lg">
                    <p >Creador: <a href="#" class="text-purple-500 text-xs font-bold hover:border-b-[2px] border-purple-400 duration-100">{{ usuario }}</a></p>
                    <p >Genero: <a href="#" class="text-green-500 text-xs font-bold hover:border-b-[2px] border-green-400 duration-100">{{ genero }}</a></p>
                    <p >Fecha de Creacion: {{ fecha }}</p>
                    <p >Cantidad de Preguntas: 15</p>
                    <p >Calificacion: 4.5⭐ ({{ 4.5/5 *100 }}%)</p>
                    <p >Respondido: 1203 veces</p>

                </div>
                <div class="flex h-max flex-col justify-between text-white space-y-2 m-1 p-2 ">
                    <button @click="meetDialog('Start')" class="rounded-lg px-3 py-1 space-x-2 bg-green-500 ring-[1.5px] ring-green-500 hover:bg-transparent hover:text-green-500
                                    duration-100">Iniciar</button>
                    <button @click="meetDialog('Comment')" class="rounded-lg px-3 py-1 space-x-2 bg-blue-500 ring-[1.5px] ring-blue-500 hover:bg-transparent hover:text-blue-500
                                    duration-100">Comentar</button>
                    <button class="rounded-lg px-3 py-1 space-x-2 bg-red-500 ring-[1.5px] ring-red-500 hover:bg-transparent hover:text-red-500
                                    duration-100">Reportar (Usuario)</button>
                    <button class="rounded-lg px-3 py-1 space-x-2 bg-pink-500 ring-[1.5px] ring-pink-500 hover:bg-transparent hover:text-pink-500
                                    duration-100">Estadisticas (Admin)</button>
                </div>
            </div>
        </div>
        <div class="w-full m-3 lg:w-2/5">
            <img class="w-2/3 lg:w-full border-2 mx-auto border-black rounded-lg" :src="imagen" alt="Imagen de Referencia">
        </div>
        <div :class="{'scale-105':showInfoFor === 'Comment'}" class="font-Teachers fixed duration-100 scale-0 inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div class="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full max-h-96 overflow-y-auto">
                <div class="flex w-full items-center mb-2 justify-between">
                    <h2 class="text-xl font-bold">Realiza tu comentario</h2>
                    <button @click="closeInfoDialog" class="px-1 py-1 bg-red-500 text-white rounded hover:bg-red-600">
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
                    </button>
                </div>
                <div class="flex justify-center  mb-2">
                    <Estrella  v-for="(item, index) in 5" :key="index" @mouseenter="menoto(index)" class="text-gray-500 duration-75" :class="{'text-yellow-500':index < ranked}"/>
                </div>
                <form class="flex flex-col items-center justify-center" action="." @submit.prevent="realizarPedido">
                    <textarea class="rounded px-1 mb-2 text-sm focus:outline-none border resize-none border-gray-300 focus:ring-2 focus:ring-black ring-slate-400" cols="60" rows="8"></textarea>
                    <button class="px-4 py-2 justify-end bg-green-500 text-white rounded hover:bg-green-600">Realizar Comentario</button>
                </form>
            </div>
        </div>
        <div :class="{'scale-105':showInfoFor === 'Start'}" class="font-Teachers fixed duration-100 scale-0 inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div class="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full max-h-96 overflow-y-auto">
                <div class="flex w-full items-center mb-2 justify-between">
                    <h2 class="text-xl font-bold">Iniciando el Cuestionario</h2>
                    <button @click="closeInfoDialog" class="px-1 py-1 bg-red-500 text-white rounded hover:bg-red-600">
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
                    </button>
                </div>
                <div class="flex justify-end gap-1 mt-7 ">
                    <button class="px-2 py-1 bg-gray-500 duration-100 rounded outline-none focus:ring-[1.5px] ring-black text-white ">Informacion</button>
                    <button class="px-2 py-1 bg-green-500 duration-100 rounded outline-none focus:ring-[1.5px] ring-black  text-white ">Empezar</button>
                </div>
            </div>
        </div>
    </section>

</template>
<script>
import Estrella from "@/components/icons/EstrellaIcono.vue"
export default{
   props:[
      'titulo',
      'detalle',
      'imagen',
      'fecha',
      'usuario',
      'genero'
   ],
   components:{
    Estrella
   },
   data() {
    return {
        showInfoFor: '',
        ranked : 0
    }
   },
   methods: {
        meetDialog(data){
            this.showInfoFor = data
        },
        closeInfoDialog(){
            this.showInfoFor = ''
        },
        menoto(index){
            this.ranked = index +1 
        },
    },
}

</script>