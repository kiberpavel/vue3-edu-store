<template>
  <p class="message">Hello, {{ name }}!</p>
</template>

<script>
export default {
  name: "HelloWorld",
  data: () => ({
    name: "World",
  }),
}
</script>

<style scoped>
.message {
  font-size: 25px;
  color: #212121;
}
</style>
