<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      <div v-for="(imagen, index) in imagenes" :key="index" class="relative group">
        <img :src="imagen" :alt="`Imagen ${index + 1}`" class="w-full h-full object-cover rounded-lg shadow-md"/>
        <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span class="text-white text-lg">Imagen {{ index + 1 }}</span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      imagenes: {
        type: Array,
        required: true
      }
    }
  }
  </script>
  