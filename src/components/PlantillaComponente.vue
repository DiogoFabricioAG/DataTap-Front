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
                    <button class="rounded-lg px-3 py-1 space-x-2 bg-green-500 ring-[1.5px] ring-green-500 hover:bg-transparent hover:text-green-500
                                    duration-100">Iniciar</button>
                    <button class="rounded-lg px-3 py-1 space-x-2 bg-blue-500 ring-[1.5px] ring-blue-500 hover:bg-transparent hover:text-blue-500
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
    </section>
</template>
<script>

export default{
   props:[
      'titulo',
      'detalle',
      'imagen',
      'fecha',
      'usuario',
      'genero'
   ],
   
}

</script>