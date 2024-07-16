<script setup>
import { useToastStore } from '@/stores/toast'

const store = useToastStore()
</script>

<template>

    <div v-if="store.isVisible" :class="store.classes"
        class="transition ease-in-out font-Afacad text-white z-50 font-Alata delay-500 flex items-center space-x-2 duration-500 px-3 py-4 fixed top-full right-8 rounded-xl shadow-xl">
        <span>
            <IconAlert v-if="store.type === 'Alert'" />
            <IconCheck v-if="store.type === 'Check'" />
            <IconWrong v-if="store.type === 'Wrong'" />
            <IconSurprise v-if="store.type === 'Surprise'" />
        </span>
        <span>
            <p>{{ store.message }}</p>
        </span>

    </div>

</template>

<script>
import IconAlert from './icons/AlertaIcono.vue';
import IconCheck from './icons/CheckIcono.vue';
import IconWrong from './icons/ErrorIcono.vue';

export default {
    components: {
        IconAlert,
        IconCheck,
        IconWrong,
    }
}
</script>