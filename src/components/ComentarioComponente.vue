<template>
    <div class="mb-8 sm:break-inside-avoid border mt-3 border-black shadow-md rounded-lg">
        <blockquote class="rounded-lg p-2 shadow-sm sm:p-5">
            <div class="flex items-center gap-4">
                <img
                alt=""
                src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                class="size-14 rounded-full object-cover"
                />
                <div>
                    <p class="mt-0.5 text-lg text-left font-medium text-gray-900">{{ usuario }}</p>
                    <div class="flex justify-center gap-0.5 ">
                        <EstrellaIcono v-for="(item, index) in estrellas" :key="index" class="text-green-500"/>
                        <EstrellaIcono v-for="(item, index) in (5-estrellas)" :key="index" class="text-gray-500"/>
                    </div>
                </div>
            </div>
            <p class="mt-4 text text-black-700 text-left">
                {{ contenido }}
            </p>
        </blockquote>
    </div>
</template>
<script>
import EstrellaIcono from "@/components/icons/EstrellaIcono.vue"

export default{
   props:[
        'usuario',
        'contenido',
        'estrellas'
   ],
   components:{
    EstrellaIcono,
   }
}

</script>