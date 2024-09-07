<template>
    <Head>
        <meta name="robots" content="noindex, nofollow">
        <link rel="icon" href="/public/favicon.ico">
        <Title>Договор оферты · Darkness</Title>
        <Meta name="description" content="Minecraft сервер с множеством игровых дополнений. Идеальное пространство для реализации вашего творческого потенциала!"/>
        <Meta name="viewport" content="width=device-width, initial-scale=1"></Meta>
        <Meta name="language" content="ru"></Meta>
        <Meta property="og:title" content="Договор оферты" />
        <Meta property="og:description" content="Minecraft сервер с множеством игровых дополнений. Идеальное пространство для реализации вашего творческого потенциала!" />
        <Meta property="og:site_name" content="Darkness" />
        <Meta property="og:locale" content="ru_RU" />
        <Meta property="og:url" content="https://darkness.pw/offer" />
        <Meta property="og:type" content="article"/>
        <Meta property="og:image" content="https://darkness.pw/og-image-for-darkness.jpg"/>
        <Meta property="og:image:width" content="1200"/>
        <Meta property="og:image:height" content="630"/>
        <Meta name="twitter:image" content="https://darkness.pw/og-image-for-darkness.jpg"/>
        <Meta name="twitter:card" content="summary_large_image"/>
        <meta name="theme-color" content="#36529C">
    </Head>

    <headerComponent />

    <section class="offer">
        <h1 class="offer-title">Договор оферты</h1>

        <div class="offer-point">
            <h2 class="offer-point-title">1. Общие положения</h2>
            <div class="offer-point-text">
                <p>1.1. Настоящий Договор оферты представляет собой официальное предложение игрового проекта Darkness для покупателя на приобретение услуг, представленных в донат-магазине.</p>
                <p>1.2. Приобретая услуги в донат-магазине, Покупатель подтверждает своё ознакомление с условиями настоящего Договора и полное их принятие.</p>
            </div>
        </div>

        <div class="offer-point">
            <h2 class="offer-point-title">2. Предмет договора</h2>
            <div class="offer-point-text">
                <p>2.1. Продавец предоставляет Покупателю доступ к различным пакетам услуг и предметам внутри игры Minecraft (все услуги представлены в каталоге), которые Покупатель может приобрести в донат-магазине.</p>
            </div>
        </div>

        <div class="offer-point">
            <h2 class="offer-point-title">3. Права и обязанности сторон</h2>
            <div class="offer-point-text">
                <p>3.1. Продавец обязуется:
                    <br>Предоставить услуги, указанные в каждом пакете на момент покупки.
                    <br>Обеспечить техническую возможность доступа к Услугам и их получение Покупателем.</p>
                <p>3.2. Покупатель обязуется:
                    <br>Ознакомиться с описанием Услуг и условиями их предоставления.
                    <br>Оплатить выбранные Услуги в соответствии с установленными тарифами.</p>
            </div>
        </div>

        <div class="offer-point">
            <h2 class="offer-point-title">4. Условия оплаты</h2>
            <div class="offer-point-text">
                <p>4.1. Все платежи производятся через системы приема платежей. Продавец не несет ответственности за несанкционированные действия третьих лиц.</p>
                <p>4.2. После успешной оплаты Продавец предоставляет доступ к приобретенному контенту.</p>
            </div>
        </div>

        <div class="offer-point">
            <h2 class="offer-point-title">5. Ограничение ответственности</h2>
            <div class="offer-point-text">
                <p>5.1. Продавец не несет ответственности за:
                    <br>Невозможность доступа к игре или интернет-сервисам, вызванную техническими сбоями или проблемами у провайдеров.
                    <br>Ущерб, причиненный в результате неправильного использования Услуг Покупателем.</p>
            </div>
        </div>

        <div class="offer-point">
            <h2 class="offer-point-title">6. Заключительные положения</h2>
            <div class="offer-point-text">
                <p>6.1. Настоящий Договор вступает в силу с момента его акцепта Покупателем.</p>
                <p>6.2. Продавец оставляет за собой право изменять условия настоящей оферты без предварительного уведомления, при этом изменения вступают в силу с момента их опубликования на сайте донат-магазина.</p>
            </div>
        </div>
    </section>


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