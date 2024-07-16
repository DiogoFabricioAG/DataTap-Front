<template>
  <main>
    <div class="absolute bg-beige top-[20%] left-[16%] h-[60%] w-[68%] flex">
      <img src="../assets/fotos.jpg" alt="Imagen">
      <div class="w-full text-center mt-4 flex flex-col justify-between">
        <h2 class="font-Afacad my-4 text-xl">INICIAR SESION</h2>
        <form class="mt-5 font-Teachers text-sm" action="." @submit.prevent="console.log(1);" method="post">
          
          <div class="grid grid-cols-2 w-4/5 space-x-5 mx-auto ">
            <input type="text" placeholder="Nombre de Usuario" class="shadow-md focus:ring-[2px] px-2 py-1 border outline-none duration-150 ease-in-out transition-all rounded-md focus:ring-purple-400">
            <input type="password" placeholder="Contraseña" class="shadow-md focus:ring-[2px] px-2 py-1 border outline-none duration-150 ease-in-out transition-all rounded-md focus:ring-purple-400">
          </div>
          <div class="grid grid-cols-2 w-4/5 my-3 space-x-5 mx-auto ">
            <input type="text" placeholder="Alias" class="shadow-md focus:ring-[2px] px-2 py-1 border outline-none duration-150 ease-in-out transition-all rounded-md focus:ring-purple-400">
            <input type="email" placeholder="Correo Electronico" class="shadow-md focus:ring-[2px] px-2 py-1 border outline-none duration-150 ease-in-out transition-all rounded-md focus:ring-purple-400">
          </div>
          <div> 
            <label for="file-upload" class="custom-file-upload">
              Seleccionar foto de Perfil
            </label>
            <input @change="onFileChange" id="file-upload" type="file"/>
          </div>
           
          <button class="bg-pink-400 mt-2 focus:ring-[1px] text-lg rounded-sm focus:ring-gray-500 text-white focus:bg-pink-600 duration-150 outline-none hover:bg-pink-500 px-2 py-1">Iniciar sesion</button>
        </form>
        <div class="m-3 space-x-3 space-y-2">
          <p class="text-sm font-Teachers">O inicia sesion con</p>
            <button class="bg-black rounded-full text-white p-2 hover:bg-white border hover:border-black hover:text-black duration-150">
              <Github/>
            </button>
            <button class="bg-blue-700 rounded-full text-white p-2 hover:bg-white border border-blue-700 hover:border-blue-700  hover:text-blue-700 duration-150">
              <Facebook/>
            </button>
            <button class="bg-yellow-700 rounded-full text-white p-2 hover:bg-white border border-yellow-700 hover:border-yellow-700  hover:text-yellow-700 duration-150">
              <Google/>
            </button>
            <button class="bg-cyan-400 rounded-full text-white p-2 hover:bg-white border border-cyan-400 hover:border-cyan-400 hover:text-cyan-400 duration-150">
              <Linkedin/>
            </button>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import Github from '@/components/icons/GithubIcono.vue'
import Linkedin from '@/components/icons/LinkedinIcono.vue'
import Google from '@/components/icons/GoogleIcono.vue'
import Facebook from '@/components/icons/FacebookIcono.vue'

export default {
  components: {
    Facebook,
    Google,
    Linkedin,
    Github,
  },
  data() {
    return {
      imageUrl: {}
    }
  },
  methods: {
    onFileChange(event) {
      const file = event.target.files[0];
      if (file && file.type.includes('image')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imageUrl = e.target.result;
        };
        reader.readAsDataURL(file);
        console.log(this.imageUrl);
      } else {
        alert('Por favor, selecciona un archivo de imagen.');
      }
    },
  }
}

</script>


