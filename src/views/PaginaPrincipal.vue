<template>
    <HeaderComponent ref="headerComponent"/>
    <main>
        <div class="lg:flex lg:justify-between mx-3 items-end">
            <AyudaTextual mensaje="Estadisticas"/>
            <div>
                <button @click="opening" class="absolute z-40 right-2 lg:relative bg-slate-50 rounded-md p-1 border border-black">
                <TresLineasIcono/>
            </button>
            <div :class="{'scale-90': is_open }"  class="absolute w-44 mt-8 lg:mt-1 text-sm font-Teachers transition-all scale-0 ease-in-out duration-100 border right-5  flex flex-col bg-white border-black my-2">
                <router-link :to="{name:'control'}" href="#" class="hover:bg-slate-200">Creaciones</router-link>
                <a href="#" class="hover:bg-slate-200">Estadisticas</a>
                <a href="#" class="hover:bg-slate-200">Edicion de Perfil</a>
                <a href="#" class="hover:bg-slate-200">Creditos</a>
                <router-link :to="{name:'login'}" href="#" class="hover:bg-red-100">Cerrar Sesion</router-link>
            </div>
            </div>
            
        </div>
        
        <div class="flex w-full space-y-3 md:space-y-0 mt-8 text-center md:text-left px-2 flex-col mx-auto md:flex-row justify-center">
            <div class="font-Teachers px-3 w-[90%] mx-auto py-1 z-auto md:w-1/3 rounded-lg bg-slate-300  border hover:bg-purple-100 border-gray-800 hover:border-black duration-150 ">
                <h2 class="text-xl text-center font-bold select">Estadisticas de Creacion</h2>
                <div class="mt-3 text-sm">
                    <p>Formularios Creados: 5</p>
                    <p>Encuestas Creadas: 10</p>
                    <p>Ultima Creacion: <router-link  :to="{name:'encuesta'}" class="text-blue-500 font-bold hover:border-b-[2px] border-blue-400 duration-100 transition-all ease-in">Encuesta sobre la Salud Mental</router-link></p>
                    <p>Ultima Fecha de Creacion: <strong>12/05/2024</strong></p>
                    <p>Genero Preferido: <a href="#" class="text-green-500 font-bold hover:border-b-[2px] border-green-400 duration-100 transition-all ease-in">Salud</a></p>
                    <p>Formulario Destacado: <a href="#" class="text-blue-500 font-bold hover:border-b-[2px] border-blue-400 duration-100 transition-all ease-in">Preparacion para la Universidad</a></p>
                    <p>Encuesta Destacada: <a href="#" class="text-orange-500 font-bold hover:border-b-[2px] border-orange-400 duration-100 transition-all ease-in">Encuesta sobre el Cambio Climatico</a></p>
                </div>
            </div>
            <div class="text-center  w-[90%] mx-auto md:w-[25%]">
                <img class=" size-52  rounded-2xl mx-auto shadow-md" src="https://media.licdn.com/dms/image/D4E03AQHBxWJewN-2sw/profile-displayphoto-shrink_800_800/0/1687740025125?e=1726704000&v=beta&t=usXRPmvKmyLTXWDFxK1b-F5-Ep9kiIEvb-yvttj7sEg" alt="">
                <p class="font-Afacad font-bold text-xl">Abregu Gonzales</p>
            </div>  
            <div class="font-Teachers  w-[90%] mb-4 mx-auto text-center md:text-left md:w-1/3 px-3 py-1 rounded-lg bg-slate-300  border hover:bg-purple-100 hover:border-black duration-150 ">
                <h2 class="text-xl text-center font-bold">Estadisticas de Resolucion</h2>
                <div class="mt-3 text-sm">
                    <p>Formularios Resueltos: 3</p>
                    <p>Encuestas Realizadas: 2</p>
                    <p>Ultima Actividad: <strong>15/06/2024</strong></p>
                    <p>Genero Preferido: <a href="#" class="text-green-500 font-bold hover:border-b-[2px] border-green-400 duration-100 transition-all ease-in">Lectura</a></p>
                    <p>Usuario Preferido: <a href="#" class="text-purple-500 font-bold hover:border-b-[2px] border-purple-400 duration-100 transition-all ease-in">Armando Sarmiento</a></p>                
                </div>
                
            </div>
        </div>
    </main>
    </template>
    
    <script>
    import HeaderComponent from "@/components/HeaderComponent.vue"
    import AyudaTextual from "@/components/AyudaTextual.vue"
    import TresLineasIcono from "@/components/icons/TresLineasIcono.vue"
    
    export default {
        components: {
            TresLineasIcono,
            AyudaTextual,
            HeaderComponent,
        },
        data() {
            return {
                is_open: false
            }
        },
        methods: {
            opening() {
                this.is_open = !this.is_open
            },
            handleScroll() {
                this.is_open = false
            },
            handleKey(event) {
                // Agregar teclas de atajo
                // Cerrar Componentes Pop ups
                if (event.code === "KeyE") {
                    this.is_open = false;
                    this.$refs.headerComponent.search_activated = false;
                }
            }
        },
        created() {
            window.addEventListener('scroll', this.handleScroll);
            window.addEventListener("keypress", this.handleKey);
        },
        unmounted() {
            window.removeEventListener('scroll', this.handleScroll);
            window.removeEventListener("keypress", this.handleKey);
        },
    }
    </script>
    