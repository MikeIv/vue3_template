<template>
  <header class="header-pages">

    <div class="header__page-wrapper">
      <a href="/">
        <img src="../assets/img/my-logo.svg" alt="logo" class="header__main-logo">
      </a>
      <div class="header__left-line"></div>

      <h1 class="header__page-h1">Контакты</h1>
    </div>

    <nav class="page-nav">
      <ul class="page-nav__list">
        <li class="page-nav__item"><a href="/portfolio" class="page-nav__link">Портфолио</a></li>
        <li class="page-nav__item"><a href="/tools" class="page-nav__link">Инструменты</a></li>
        <li class="page-nav__item"><a href="/contacts" class="page-nav__link">Контакты</a></li>
      </ul>
    </nav>
  </header>

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

</style>
