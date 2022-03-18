<template>
  <div>
    <div>
      <header class="header">
        <div class="container">
          <div class="header__wrapper">
            <a class="header__logo" title="Логотип">
              <img src="@/assets/logo.png" alt="Логотип" />
            </a>
            <nav class="header__items">
              <li
                class="header__item"
                @click="$router.push({ path: '/' }).catch(() => {})"
              >
                Форма
              </li>
              <li
                class="header__item"
                @click="$router.push({ path: '/preview' }).catch(() => {})"
              >
                Превью
              </li>
            </nav>
            <div></div>
          </div>
        </div>
      </header>
      <hr class="header__devider" />
    </div>
    <div class="content">
      <slot />
    </div>

    <div>
      <footer class="footer">
        <div class="footer__text">all rights reserved</div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
};
</script>
 