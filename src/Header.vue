<template>
  <header class="header-pages">

    <div class="header__page-wrapper">
      <a href="/">
        <img src="./assets/img/my-logo.svg" alt="logo" class="header__main-logo">
      </a>
      <div class="header__left-line"></div>
      <nav class="page-nav">
        <ul class="page-nav__list">
          <li class="page-nav__item"><router-link to="/portfolio" class="main-nav__link">Портфолио</router-link></li>
          <li class="page-nav__item"><router-link to="/tools" class="main-nav__link">Инструменты</router-link></li>
          <li class="page-nav__item"><router-link to="/sandbox" class="main-nav__link">Песочница</router-link></li>
          <li class="page-nav__item"><router-link to="/contacts" class="main-nav__link">Контакты</router-link></li>
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