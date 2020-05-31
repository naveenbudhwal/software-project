<template>
  <div class="horizontal-card">
    {{ user }}
    <hr>
  </div>
</template>

<script>
  export default {
    props: {
      user: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style scoped>

</style>