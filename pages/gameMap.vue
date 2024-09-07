<template>
    <Head>
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
        <link rel="icon" href="/public/favicon.ico">
        <Title>Карта · Darkness</Title>
        <Meta name="description" content="Minecraft сервер с множеством игровых дополнений. Идеальное пространство для реализации вашего творческого потенциала!"/>
        <Meta name="viewport" content="width=device-width, initial-scale=1"></Meta>
        <Meta name="language" content="ru"></Meta>
        <Meta property="og:title" content="Карта" />
        <Meta property="og:description" content="Minecraft сервер с множеством игровых дополнений. Идеальное пространство для реализации вашего творческого потенциала!" />
        <Meta property="og:site_name" content="Darkness" />
        <Meta property="og:locale" content="ru_RU" />
        <Meta property="og:url" content="https://darkness.pw/gameMap" />
        <Meta property="og:type" content="article"/>
        <Meta property="og:image" content="https://darkness.pw/og-image-for-darkness.jpg"/>
        <Meta property="og:image:width" content="1200"/>
        <Meta property="og:image:height" content="630"/>
        <Meta name="twitter:image" content="https://darkness.pw/og-image-for-darkness.jpg"/>
        <Meta name="twitter:card" content="summary_large_image"/>
        <meta name="theme-color" content="#36529C">
    </Head>
    
    <preloader :loading="loading" v-if="loading" />
    <div v-else>

    <headerComponent />
    
    <iframe src="" class="gameMap">
    </iframe>

    <footerComponent />
    </div>
</template>

<script>
import headerComponent from '~/components/headerComponent.vue'
import footerComponent from '~/components/footerComponent.vue'
import preloader from '~/components/preloader.vue'

export default {
    components: {
        headerComponent,
        footerComponent,
        preloader
    },
    data() {
        return{
            loading: true,
        }
    },
    mounted() {
        this.loading = false;
    }
}
</script>

<style>
</style>
