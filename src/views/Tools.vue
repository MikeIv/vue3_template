<template>
  <header class="header-pages">

    <div class="header__page-wrapper">
      <a href="/">
        <img src="../assets/img/my-logo.svg" alt="logo" class="header__main-logo">
      </a>
      <div class="header__left-line"></div>

      <h1 class="header__page-h1">Инструменты</h1>
    </div>

    <nav class="page-nav">
      <ul class="page-nav__list">
        <li class="page-nav__item"><a href="/portfolio" class="page-nav__link">Портфолио</a></li>
        <li class="page-nav__item"><a href="/tools" class="page-nav__link">Инструменты</a></li>
        <li class="page-nav__item"><a href="/contacts" class="page-nav__link">Контакты</a></li>
      </ul>
    </nav>

  </header>
  <div class="about">
    <h1>Инструменты</h1>
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