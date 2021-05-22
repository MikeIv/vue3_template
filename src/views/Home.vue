<template>
  <div class="home">
    <header class="header">
      <h1 class="header__h1 v-hidden">Главная навигация</h1>

      <div class="header__wrapper">

        <img src="../assets/img/my-logo.svg" alt="logo" class="header__main-logo">
        <div class="header__left-line"></div>

        <nav class="main-nav">
          <ul class="main-nav__list">
            <li class="main-nav__item"><router-link to="/portfolio" class="main-nav__link">Портфолио</router-link></li>
            <li class="main-nav__item"><router-link to="/tools" class="main-nav__link">Инструменты</router-link></li>
            <li class="main-nav__item"><router-link to="/sandbox" class="main-nav__link">Песочница</router-link></li>
            <li class="main-nav__item"><router-link to="/contacts" class="main-nav__link">Контакты</router-link></li>
          </ul>
        </nav>

        <div  class="main-nav">
<!--          <router-link to="/">Home</router-link> |-->

        </div>

      </div>
    </header>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {

  }
}
</script>
