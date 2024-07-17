<template>
    <HeaderComponent/>
    <AyudaTextual mensaje="Zona de Control"/>
    <section>
        

<div class="relative overflow-x-auto shadow-md sm:rounded-lg m-2 lg:m-5 font-Teachers rounded-xl">
    <div class="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-transparent">
        <div>
            <button id="dropdownActionButton" @click="open_acordeon" data-dropdown-toggle="dropdownAction" class="inline-flex items-center text-gray-500 bg-slate-50 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5" type="button">
                <span class="sr-only">Action button</span>
                {{ accion }}
                <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                </svg>
            </button>
            <!-- Dropdown menu -->
            <div id="dropdownAction" v-if="opening" class="z-10 bg-white divide-y absolute divide-gray-100 rounded-lg shadow w-44">
                <ul class="py-1 text-sm text-gray-700" aria-labelledby="dropdownActionButton">
                    <li>
                        <button @click="seleccionar_opcion('Premiar')" class="block px-4 py-2 hover:bg-gray-100">Reward</button>
                    </li>
                    <li>
                        <button @click="seleccionar_opcion('Promover')" class="block px-4 py-2 hover:bg-gray-100  ">Promote</button>
                    </li>
                    <li>
                        <button @click="seleccionar_opcion('Activar')" class="block px-4 py-2 hover:bg-gray-100  ">Activate account</button>
                    </li>
                </ul>
                <div class="py-1">
                    <button @click="seleccionar_opcion('Eliminar Usuario')" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100   ">Delete User</button>
                </div>
            </div>
            <button class="px-2 py-1 mx-2 text-white rounded-md duration-100 hover:bg-green-400 ring-black  bg-green-500">Activar</button>

        </div>
        <label for="table-search" class="sr-only">Search</label>
        <div class="relative">
            <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input type="text" id="table-search-users" class="block p-2 ps-10 text-sm text border border-black rounded-lg w-80 bg-transparent focus:ring-blue-500 focus:border-blue-500 " placeholder="Search for users">
        </div>
    </div>
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
        <thead class="text-xs text-gray-700 uppercase bg-slate-50  ">
            <tr>
                <th scope="col" class="p-4">
                    Selected
                </th>
                <th scope="col" class="px-6 py-3">
                    Titulo
                </th>
                <th scope="col" class="px-6 py-3">
                    Genero
                </th>
                <th scope="col" class="px-6 py-3">
                    Estado
                </th>
                <th scope="col" class="px-6 py-3">
                    N° Usos
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-slate-50 border-b  hover:bg-gray-50 ">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2">
                        <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap ">
                    <div class="ps-3">
                        <div class="text-base font-semibold">Salud Mental en los Muchachos</div>
                        <div class="font-normal text-gray-500">Encuesta</div>
                    </div>  
                </th>
                <td class="px-6 py-4">
                    Salud
                </td>
                <td class="px-6 py-4">
                    <div class="flex items-center">
                        <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Online
                    </div>
                </td>
                <td class="px-6 py-4">
                    1290
                </td>
            </tr>
        </tbody>
    </table>
</div>

        <div class="font-Bungee justify-center mx-3 mt-4  space-x-1 flex items-center ">
            <button @click="restar_pagina" class="bg-white rounded-lg border border-black"><AtrasIcono/></button>
            <span class="text-xl ">{{ pagina }}</span>
            <button @click="subir_pagina"  class="bg-white rounded-lg border border-black"><SiguienteIcono/></button>
        </div>
    </section>
    
</template>
<script>
import HeaderComponent  from "@/components/HeaderComponent.vue"
import AyudaTextual  from "@/components/AyudaTextual.vue"
import AtrasIcono  from "@/components/icons/AtrasIcono.vue"
import SiguienteIcono  from "@/components/icons/SiguienteIcono.vue"
import { useToastStore } from '@/stores/toast'

export default {
    setup() {
        const toastStore = useToastStore()  
        return{
            toastStore
        }
    },
    components:{
        AyudaTextual,
        HeaderComponent,
        AtrasIcono,
        SiguienteIcono
    },
    data() {
        return {
            pagina: 1,
            opening : false,
            accion: "Action",
        }
    },
    methods: {
        subir_pagina(){
            this.pagina++
        },
        restar_pagina(){
            if (this.pagina > 1){
                this.pagina--
            }
        },
        open_acordeon(){
            this.opening=!this.opening
        },
        seleccionar_opcion(data){
            this.toastStore.showToast(3000, `Se selecciono la opcion "${data}".`, "Alert", 'bg-yellow-500')
            this.accion = data
            this.open_acordeon()
        }
    },
}
</script>