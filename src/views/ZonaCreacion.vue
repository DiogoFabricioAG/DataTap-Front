<template>
    <HeaderComponent/>
    <AyudaTextual mensaje="Creacion"/>
    <section>
        <div class="flex flex-col items-center lg:flex-row mt-6 justify-center font-Teachers">
            <div class="lg:w-[30%] w-[80%] bg-white h-max border-[2px] m-1 rounded-md space-y-1 border-black">
                <h2 class="text-center font-bold text-3xl font-Afacad">Titulo de Referencia</h2>
                <img :src="imageUrl" alt="cocina" class="object-cover">
            </div>
            <div class="rounded-lg border-[2px] lg:w-[60%] w-[80%] m-1 border-black bg-white p-8 shadow-2xl lg:col-span-3 lg:p-7">
                <form action="." @submit.prevent="console.log(1)" class="space-y-4">
                    <div>
                        <label class="sr-only" for="name">url</label>
                        <div>
                            <label for="file-upload" class="custom-file-upload">
                                Seleccionar foto de Perfil
                            </label>
                            <input @change="onFileChange" id="file-upload" type="file"/>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                            <label class="sr-only" for="Nombre">Nombre</label>
                            <input
                                v-model="nombre"
                                class="w-full rounded-lg bg-slate-100 border-gray-200 p-3 text-sm"
                                placeholder="Titulo"
                                type="Nombre"
                            />
                        </div>

                        <div>
                            <label class="sr-only" for="Precio del Producto">Genero</label>
                            <input
                                v-model="precio"
                                class="w-full rounded-lg bg-slate-100 border-gray-200 p-3 text-sm"
                                placeholder="Genero"
                                type="search"
                            />
                        </div>
                    </div>
                    <div class="grid grid-cols-1 gap-4 text-center sm:grid-cols-2">
                        <div>
                            <label
                                for="Option1"
                                class="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-purple-500 has-[:checked]:border-purple-500 has-[:checked]:bg-purple-500 has-[:checked]:text-white"
                                tabindex="0"
                            >
                                <input v-model="tipo" class="sr-only bg-slate-100" id="Option1" type="radio" value="1" tabindex="-1" name="option" />
                                <span class="text-sm font-bold">Formulario</span>
                            </label>
                        </div>

                        <div>
                            <label
                                for="Option2"
                                class="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-blue-500 has-[:checked]:border-blue-500 has-[:checked]:bg-blue-500 has-[:checked]:text-white"
                                tabindex="0"
                            >
                                <input v-model="tipo" class="sr-only bg-slate-100" id="Option2" type="radio" value="2" tabindex="-1" name="option" />
                                <span class="text-sm font-bold">Encuesta</span>
                            </label>
                        </div>
                    </div>

                    <div>
                        <label class="sr-only" for="descripcion">descripcion</label>
                        <textarea
                            v-model="detalle"
                            class="w-full rounded-lg resize-none bg-slate-100 border-gray-200 p-3 text-sm"
                            placeholder="Descripcion"
                            rows="5"
                            id="descripcion"
                        ></textarea>
                    </div>

                    <div class="mt-4">
                        <button
                            type="submit"
                            class="inline-block w-full active:scale-105 duration-150 rounded-lg bg-purple-600 px-5 py-3 font-medium text-white sm:w-auto"
                        >
                            Generar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import AyudaTextual from "@/components/AyudaTextual.vue";

export default {
    components: {
        AyudaTextual,
        HeaderComponent,
    },
    data() {
        return {
            imageUrl: "https://content.elmueble.com/medio/2023/03/28/cocinas-abiertas_07f2159d_230328110136_900x900.jpg",
            nombre: "",
            precio: "",
            tipo: "",
            detalle: ""
        };
    },
    methods: {
        onFileChange(event) {
            const file = event.target.files[0];
            if (file) {
                this.imageUrl = URL.createObjectURL(file);
            }
        }
    }
};
</script>

<style scoped>
.custom-file-upload {
    display: inline-block;
    cursor: pointer;
    padding: 6px 12px;
    background-color: #f3f4f6;
    border: 1px solid #d1d5db;
    border-radius: 4px;
}
</style>
