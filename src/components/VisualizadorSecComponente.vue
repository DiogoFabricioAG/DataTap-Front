<template>
    <div draggable="true" class="m-3 cursor-move overflow-hidden h-72 hover:bg-yellow-200 duration-100 border-black border  text-center font-Teachers text-xl font-bold">
        <h2>{{ titulo }}</h2>
        <img draggable="false"  class="h-full w-full object-cover" :src="imagen" alt="imagen bbb">
    </div>


</template>
<script>
export default{
    props:[
        'imagen',
        'titulo',
    ]
}

</script>