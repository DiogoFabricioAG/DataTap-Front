
<template>
  <RouterView />
  <PopupToast />
</template>
<script>
import PopupToast from '@/components/PopupToast.vue'

export default{
  components: {
      PopupToast
    },
}

</script>
<style>
html{
  background-color: #d8d4ff;
}


input[type="file"] {
    display: none;
}
</style>
