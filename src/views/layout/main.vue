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
              <div
                class="header__item"
                @click="$router.push({ path: '/' })"
              >
                Форма
              </div>
              <div
                class="header__item"
                @click="$router.push({ path: '/preview' })"
              >
                Превью
              </div>
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
 