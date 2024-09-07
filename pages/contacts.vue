<template>
  <Head>
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
    <link rel="icon" href="/public/favicon.ico">
    <Title>Контакты · Darkness</Title>
    <Meta name="description" content="Minecraft сервер с множеством игровых дополнений. Идеальное пространство для реализации вашего творческого потенциала!"/>
    <Meta name="viewport" content="width=device-width, initial-scale=1"></Meta>
    <Meta name="language" content="ru"></Meta>
    <Meta property="og:title" content="Контакты" />
    <Meta property="og:description" content="Minecraft сервер с множеством игровых дополнений. Идеальное пространство для реализации вашего творческого потенциала!" />
    <Meta property="og:site_name" content="Darkness" />
    <Meta property="og:locale" content="ru_RU" />
    <Meta property="og:url" content="https://darkness.pw/contacts" />
    <Meta property="og:type" content="article"/>
    <Meta property="og:image" content="https://darkness.pw/og-image-for-darkness.jpg"/>
    <Meta property="og:image:width" content="1200"/>
    <Meta property="og:image:height" content="630"/>
    <Meta name="twitter:image" content="https://darkness.pw/og-image-for-darkness.jpg"/>
    <Meta name="twitter:card" content="summary_large_image"/>
    <meta name="theme-color" content="#36529C">
  </Head>

  <headerComponent />

  <div class="contacts-container">
    <h1 class="contact-title">Контакты</h1>
    <div class="contact-list">
      <div class="contact-point">
        <a href="https://discord.gg/sTDTj2JpVa" target="_blank" class="contact-point-discord"><img src="/assets/img/contact-discord.svg" alt="Darkness майнкрафт - значок discord" loading="lazy" decoding="async"></a>
        <p class="qwe">discord.gg/sTDTj2JpVa</p>
      </div>
      <div class="contact-point">
        <div class="contact-point-gmail"><img src="/assets/img/contact-mail.svg" alt="Darkness майнкрафт - значок почты" loading="lazy" decoding="async"></div>
        <p>darkness.mcnew<br>@gmail.com</p>
      </div>
    </div>

  </div>
  
  <footerComponent />
</template>

<script>
import headerComponent from '~/components/headerComponent.vue';
import footerComponent from '~/components/footerComponent.vue';

export default {
  components: {
    headerComponent,
    footerComponent,
  },
}
</script>

<style>
</style>

