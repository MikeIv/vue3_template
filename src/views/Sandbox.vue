<template>

  <div class="about">
    <h1>Песочница</h1>
    <img alt="Vue logo" src="../assets/logo.png" width="50" height="auto">
  </div>
</template>



<style lang="scss">

.page__body {
  display: grid;
  grid-template-areas:
    "header"
    "main"
    "footer";
  grid-template-rows: 12.8rem 1fr 0;
  grid-template-columns: 1fr;

  // min-height: 100vh;

  margin: 0;
  padding: 0;

  box-sizing: border-box;
}

</style>