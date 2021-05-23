<template>
  <div class="wrapper">

    <div class="wrapper-content">
      <section>
        <div class="container">
          <section class="sandbox" style="overflow: hidden">
            <h1 class="v-hidden">Инструменты</h1>

            <article class="sandbox__part" style="overflow: hidden">
              <h2 class="sandbox__h2">Vue</h2>

              <h3 class="sandbox__h3">Тестирование компонентов</h3>

              <message v-if="message" :message="message" />

              <newNote :note="note" @plusNote="addNote" />


              <!-- VUE App -->
              <div class="vue-notes__header-block">
                <h4 class="sandbox__h4 vue-notes__header">{{ title }}</h4>

                <search />


                <!-- Buttons grid control -->
                <section class="vue-notes__h-icon-block">
                  <h3 class="v-hidden">Кнопки визуального отображения блоков</h3>
                  <div class="vue-notes__item-icon" :class="{ active: grid }" @click="grid = true">
                    <svg class="vue-note__icon" role="button">
                      <use xlink:href="#icon-block-view"></use>
                    </svg>
                  </div>
                  <div class="vue-notes__item-icon" :class="{ active: !grid }" @click="grid = false">
                    <svg class="vue-note__icon" role="button">
                      <use xlink:href="#icon-block-view-3"></use>
                    </svg>
                  </div>
                </section>
              </div>

              <notes :notes="notes" :grid="grid" @remove="removeCard" />



              <!-- END App -->

              <img alt="Vue logo" src="../assets/img/vue-logo.png" width="50" height="auto">
            </article>
          </section>
        </div>
      </section>
    </div>
  </div>
</template>

<script>

</script>



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

.header-section {
  display: block;
}

</style>