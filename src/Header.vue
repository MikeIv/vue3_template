<template>
  <header class="header-pages">

    <div class="header__page-wrapper">
      <a href="/">
        <img src="./assets/img/my-logo.svg" alt="logo" class="header__main-logo">
      </a>
      <div class="header__left-line"></div>
      <nav class="page-nav">
        <ul class="page-nav__list">
          <li class="page-nav__item"><a href="/portfolio" class="page-nav__link">Портфолио</a></li>
          <li class="page-nav__item"><a href="/sandbox" class="page-nav__link">Инструменты</a></li>
          <li class="page-nav__item"><a href="/sandbox" class="page-nav__link">Песочница</a></li>
          <li class="page-nav__item"><a href="/contacts" class="page-nav__link">Контакты</a></li>
        </ul>
      </nav>

    </div>


  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style lang="scss" scoped>


</style>