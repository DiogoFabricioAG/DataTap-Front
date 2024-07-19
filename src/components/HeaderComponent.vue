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
                <li class="space-x-3 p-2 flex text-white">
                    <router-link :to="{name: 'pagPrincipal'}" class="hidden rounded-md px-3 py-1 lg:flex items-center space-x-2 bg-purple-500 ring-[1.5px] ring-purple-500 hover:bg-white hover:text-purple-500 transition-all ease-in-out duration-100">
                        <UsuarioIcono />
                        <span>Mi Perfil</span>
                    </router-link>
                    <router-link :to="{name:'crear'}" class="hidden rounded-md px-3 py-1 lg:flex items-center space-x-2 bg-blue-500 ring-[1.5px] ring-blue-500 hover:bg-white hover:text-blue-500 transition-all ease-in-out duration-100">
                        <CrearIcono />
                        <span>Crear</span>
                    </router-link>
                    <button @click="change_search_state" class="rounded-md px-3 flex items-center py-1 space-x-2 bg-gray-500 ring-[1.5px] ring-gray-500 hover:bg-white hover:text-gray-500 transition-all ease-in-out duration-100">
                        <LupaIcono />
                        <span class="hidden lg:block">Buscar</span>
                    </button>
                    <button @click="time_to_open_it" class="block lg:hidden ring-[1.5px] px-3 ring-yellow-500 duration-100 bg-yellow-500 hover:bg-white hover:text-yellow-500 text-white rounded-md py-1">
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-category"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4h6v6h-6z" /><path d="M14 4h6v6h-6z" /><path d="M4 14h6v6h-6z" /><path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /></svg>
                    </button>
                </li>
 
            </ul>
        </nav>
        <div :class="{'scale-90': search_activated }" class="fixed w-full lg:w-1/2 lg:right-7 bg-white border scale-0 border-black p-2 mt-2 transition-all ease-in-out">
            <form action="." @submit.prevent="console.log()" class="flex justify-between font-Afacad">
                <input v-model="busqueda" type="text" placeholder="Busca algo" name="busqueda" id="busq" class="w-2/3 outline-none ring-[0.5px] duration-100 focus:ring-[1px] ring-black p-2 rounded-sm">
                <router-link :to="{name: 'busqueda'}" class="p-2 bg-green-500 w-[15%] text-center hover:bg-green-400 duration-100 text-white">Buscar</router-link>
                <button @click="this.busqueda = ''" class="p-2 bg-red-500 w-[15%] hover:bg-red-400 duration-100 text-white">Borrar</button>
            </form>
        </div>
    </header>
    <div :class="{'scale-110': closed}" class="fixed scale-0 duration-150 lg:hidden text-white top-0 left-0 w-[100%] h-auto z-50 bg-slate-300 inset-0 bg-opacity-90 ">
        <button @click="time_to_open_it" class="absolute top-10 right-10">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
        </button>
        <div class="absolute top-1/2 space-y-2 right-1/4 bg-transparent w-1/2">
            <router-link :to="{name: 'pagPrincipal'}" class="rounded-md px-3 py-1 flex justify-center items-center space-x-2 bg-purple-500 ring-[1.5px] ring-purple-500 hover:bg-white hover:text-purple-500 transition-all ease-in-out duration-100">
                <UsuarioIcono />
                <span>Mi Perfil</span>
            </router-link>
            <router-link :to="{name:'crear'}" class="rounded-md px-3 py-1 flex justify-center items-center space-x-2 bg-blue-500 ring-[1.5px] ring-blue-500 hover:bg-white hover:text-blue-500 transition-all ease-in-out duration-100">
                <CrearIcono />
                <span>Crear</span>
            </router-link>
        </div>
    </div>
</template>

<script>
import LupaIcono from "@/components/icons/LupaIcono.vue"
import CrearIcono from "@/components/icons/CrearIcono.vue"
import UsuarioIcono from "@/components/icons/UsuarioIcono.vue"

export default {
    components: {
        UsuarioIcono,
        CrearIcono,
        LupaIcono,
    },
    data() {
        return {
            search_activated: false,
            busqueda: '',
            closed:false,
        }
    },
    methods: {
        time_to_open_it(){
            this.closed = !this.closed
        },
        change_search_state() {
            this.search_activated = !this.search_activated
        },
        handleScroll() {
            this.search_activated = false
        }
    },
    created() {
        window.addEventListener('scroll', this.handleScroll);
    },
    unmounted() {
        window.removeEventListener('scroll', this.handleScroll);
    },
}
</script>
