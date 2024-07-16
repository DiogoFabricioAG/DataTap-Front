<template>
    <div class="m-5 font-Teachers">
        <div class="group mx-2  grid max-w-screen-lg grid-cols-1 space-x-8 overflow-hidden rounded-lg border border-gray-500 text-gray-700 shadow transition hover:shadow-lg sm:mx-auto sm:grid-cols-5">
            <a href="#" class="col-span-2 text-left text-gray-600 hover:text-gray-700">
                <div class="group relative h-full w-full overflow-hidden">
                    <img :src="imagen" alt="" class="h-full w-full border-none object-cover text-gray-700 transition" />
                </div>
            </a>
            <div class="col-span-3 flex flex-col space-y-3 pr-8 text-left">
                <a href="#" class="mt-3 overflow-hidden text-2xl font-semibold"> {{ titulo }} </a>
                <p class="overflow-hidden text-sm">{{ detalle }}</p>
                <a href="#" class="text-sm font-semibold text-purple-500 hover:text-purple-700">{{ usuario }}</a>

                <div class="flex flex-col text-gray-700 sm:flex-row">
                    <div class="flex h-fit space-x-2 text-sm font-medium">
                        <div class="rounded-full bg-green-100 px-2 py-0.5 text-green-700">{{ genero }}</div>
                    </div>
                    <a href="#" class="my-5 rounded-md px-5 py-2 text-center transition hover:scale-105 bg-orange-500 text-white sm:ml-auto">Seleccionar</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default{
   props:[
      'titulo',
      'detalle',
      'imagen',
      'usuario',
      'genero',
   ],
   
}

</script>