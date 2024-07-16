<template>
    <header>
        <nav class="w-full p-1 bg-slate-50 shadow-lg">
            <ul class="flex justify-between m-2 items-center">
                <li>
                    <div class="flex flex-col">
                        <span class="font-Aclonica text-2xl">Bienvenido de Vuelta, "Alcarneque"</span>
                        <span class="text-sm text-gray-500 opacity-80 font-Afacad">Que desea hacer hoy?</span>
                    </div>
                </li>
                <li class="space-x-3 p-2  hidden lg:flex text-white">
                    <button class="rounded-md px-3 py-1 flex items-center space-x-2 bg-purple-500 ring-[1.5px] ring-purple-500 hover:bg-white hover:text-purple-500
                                    transition-all ease-in-out duration-100">
                                <UsuarioIcono/>
                                <span>Mi Perfil</span>
                                </button>
                    <button class="rounded-md px-3 py-1 flex items-center space-x-2 bg-blue-500 ring-[1.5px] ring-blue-500 hover:bg-white hover:text-blue-500
                                    transition-all ease-in-out duration-100">
                                <CrearIcono/>
                                <span>Crear</span>
                                </button>
                    <button @click="change_search_state" class="rounded-md px-3 flex items-center py-1 space-x-2 bg-gray-500 ring-[1.5px] ring-gray-500 hover:bg-white hover:text-gray-500
                                    transition-all ease-in-out duration-100">
                                <LupaIcono/>
                                <span>Buscar</span>
                                </button>
                </li>
            </ul>
        </nav>
        <div :class="{ 'scale-90': search_activated }" class="fixed w-full lg:w-1/2 right-0 bg-white border scale-0 border-black  p-2 mt-2 transition-all ease-in-out">
            <form action="." @submit.prevent="console.log()" class="flex justify-between font-Afacad">
                <input v-model="busqueda" type="text" placeholder="Busca algo" name="busqueda" id="busq" class="w-2/3  outline-none ring-[0.5px] duration-100 focus:ring-[1px] ring-black p-2 rounded-sm">
                <router-link :to="{name: 'busqueda'}" class="p-2 bg-green-500 w-[15%] text-center hover:bg-green-400 duration-100 text-white">Buscar</router-link>
                <button @click="this.busqueda = ''" class="p-2 bg-red-500 w-[15%] hover:bg-red-400 duration-100 text-white">Borrar</button>
            </form>
            

        </div>
    </header>

    


</template>
<script>
import LupaIcono from "@/components/icons/LupaIcono.vue"
import CrearIcono from "@/components/icons/CrearIcono.vue"
import UsuarioIcono from "@/components/icons/UsuarioIcono.vue"
export default {
    components:{
        UsuarioIcono,
        CrearIcono,
        LupaIcono,
    },
    data() {
        return {
            search_activated : false,
            busqueda: ''
        }
    },
    methods: {
        change_search_state(){
            this.search_activated=!this.search_activated
        },
        handleScroll(){
            this.search_activated = false
        }
    },
    created () {
        window.addEventListener('scroll', this.handleScroll);
    },
    unmounted () {
        window.removeEventListener('scroll', this.handleScroll);
    },

}
</script>