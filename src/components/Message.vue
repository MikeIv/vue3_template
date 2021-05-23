<template>
  <div class="vue-message">
    <p>Message vue - {{ message }}</p>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true
    }
  }
}

</script>

<style lang="scss" scoped>

p {
  color: red;
}

</style>