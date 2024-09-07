<template>
    <Head>
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
        <link rel="icon" href="/public/favicon.ico">
        <Title>Дизайн · Darkness</Title>
        <Meta name="description" content="Minecraft сервер с множеством игровых дополнений. Идеальное пространство для реализации вашего творческого потенциала!"/>
        <Meta name="viewport" content="width=device-width, initial-scale=1"></Meta>
        <Meta name="language" content="ru"></Meta>
        <Meta property="og:title" content="Дизайн" />
        <Meta property="og:description" content="Minecraft сервер с множеством игровых дополнений. Идеальное пространство для реализации вашего творческого потенциала!" />
        <Meta property="og:site_name" content="Darkness" />
        <Meta property="og:locale" content="ru_RU" />
        <Meta property="og:url" content="https://darkness.pw/design" />
        <Meta property="og:type" content="article"/>
        <Meta property="og:image" content="https://darkness.pw/og-image-for-darkness.jpg"/>
        <Meta property="og:image:width" content="1200"/>
        <Meta property="og:image:height" content="630"/>
        <Meta name="twitter:image" content="https://darkness.pw/og-image-for-darkness.jpg"/>
        <Meta name="twitter:card" content="summary_large_image"/>
        <meta name="theme-color" content="#36529C">
    </Head>

    <header-component />

    <div class="design">
        <h1 class="design-title">Дизайн оформление</h1>
        <div class="logo-container">
            <div class="logo-description">
                <h2 class="logo-description-title">Логотип</h2>
                <p><span>Логотип Darkness</span> - главный идентификатор сервера. Логотип имеет плавные формы и тёмные цвета. Cам он образован из названия сервера Darkness.</p>
            </div>
            <div class="logo-gallery">
                <div class="logo-item">
                    <h3>Значок</h3>
                    <img class="logo-item-img" src="/assets/img/logo-normal.svg" alt="Darkness майнкрафт - значок проекта" loading="lazy" decoding="async"/>
                </div>
                <div class="banner-item">
                    <h3>Лого</h3>
                    <img class="banner-item-img" src="/assets/img/banner-gradient.svg" alt="Darkness майнкрафт - лого проекта" loading="lazy" decoding="async"/>
                </div>
            </div>
            <div class="figma-info">
                <p>Вы можете загрузить необходимый элемент дизайна на нашей странице в Figma. Наш дизайн будет регулярно обновляться и тематически изменяться, и все новые версии также будут доступны в Figma.</p>
                <a class="figma-link" href="https://www.figma.com/design/yD9GAyCgDe9pLCSrHUIMP8/Untitled?node-id=0-1&t=OURH9yzqXCskYj3J-1" target="_blank">Открыть Figma</a>
            </div>
        </div>
    </div>

    <footer-component />
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