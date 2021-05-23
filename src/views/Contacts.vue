<template>


  <main>
    <section class="contacts">
      <h1 class="v-hidden">Контакты</h1>

      <article class="contacts__form">
        <a href="https://t.me/Mike_Iv" class="contacts__item" target="_blank">
          <img src="../assets/img/telegram.svg" alt="иконка" class="contacts__icon">
          <p class="contacts__txt">@Mike_Iv</p>
        </a>

      </article>
    </section>
  </main>
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

.header-section {
  display: block;
}

</style>
