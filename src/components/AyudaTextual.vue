<template>
   <div class="flex flex-row mx-auto items-center text-xl font-Teachers space-x-1 hover:shadow-lg hover:shadow-gray-300 transition-all ease-in  duration-150 px-2 lg:mx-2 py-1 mt-[4.25rem] lg:mt-6 bg-white w-40 rounded-2xl border-black border">
      <LocacionIcono class="animate-bounce z-40"/>
      <span class="font-bold select-none">{{ mensaje }}</span>
   </div>
   
</template>
<script>
import LocacionIcono from '@/components/icons/LocacionIcono.vue'
export default{
   props:[
      'mensaje',
   ],
   components:{
      LocacionIcono,
   }
}

</script>