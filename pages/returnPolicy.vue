<template>
    <Head>
        <meta name="robots" content="noindex, nofollow">
        <link rel="icon" href="/public/favicon.ico">
        <Title>Политика возврата средств · Darkness</Title>
        <Meta name="description" content="Minecraft сервер с множеством игровых дополнений. Идеальное пространство для реализации вашего творческого потенциала!"/>
        <Meta name="viewport" content="width=device-width, initial-scale=1"></Meta>
        <Meta name="language" content="ru"></Meta>
        <Meta property="og:title" content="Политика возврата средств" />
        <Meta property="og:description" content="Minecraft сервер с множеством игровых дополнений. Идеальное пространство для реализации вашего творческого потенциала!" />
        <Meta property="og:site_name" content="Darkness" />
        <Meta property="og:locale" content="ru_RU" />
        <Meta property="og:url" content="https://darkness.pw/returnPolicy" />
        <Meta property="og:type" content="article"/>
        <Meta property="og:image" content="https://darkness.pw/og-image-for-darkness.jpg"/>
        <Meta property="og:image:width" content="1200"/>
        <Meta property="og:image:height" content="630"/>
        <Meta name="twitter:image" content="https://darkness.pw/og-image-for-darkness.jpg"/>
        <Meta name="twitter:card" content="summary_large_image"/>
        <meta name="theme-color" content="#36529C">
    </Head>

    <headerComponent />

    <sectinn class="returnPolicy">
        <h1 class="returnPolicy-title">Политика возврата средств</h1>

        <div class="returnPolicy-point">
            <h2 class="returnPolicy-point-title">1. Принятие условий</h2>
            <div class="returnPolicy-point-text">
                <p>Вы подтверждаете, что после успешного завершения платежа не будете оспаривать или предъявлять претензии платежным агрегаторам.</p>
            </div>
        </div>

        <div class="returnPolicy-point">
            <h2 class="returnPolicy-point-title">2. Возврат средств</h2>
            <div class="returnPolicy-point-text">
                <p>Возврат денежных средств осуществляется исключительно на реквизиты, с которых была произведена оплата (банковская карта или электронный кошелек).</p>
            </div>
        </div>

        <div class="returnPolicy-point">
            <h2 class="returnPolicy-point-title">3. Срок возврата</h2>
            <div class="returnPolicy-point-text">
                <p>Заявку на возврат можно оформить в течение 48 часов с момента оплаты товара.</p>
            </div>
        </div>

        <div class="returnPolicy-point">
            <h2 class="returnPolicy-point-title">4. Приостановка действия услуги</h2>
            <div class="returnPolicy-point-text">
                <p>В случае подозрительных или мошеннических действий ваша подписка может быть временно приостановлена до выяснения всех обстоятельств.</p>
            </div>
        </div>

        <div class="returnPolicy-point">
            <h2 class="returnPolicy-point-title">5. Запрос на возврат</h2>
            <div class="returnPolicy-point-text">
                <p>Для получения возврата средств необходимо обратиться в поддержку проекта через сервер Discord.</p>
            </div>
        </div>

        <div class="returnPolicy-point">
            <h2 class="returnPolicy-point-title">6. Комиссии платежных агрегаторов</h2>
            <div class="returnPolicy-point-text">
                <p>Мы не несем ответственности за комиссии, взимаемые платежными агрегаторами, но информируем пользователя о возможных комиссиях при выводе средств с аккаунта.</p>
            </div>
        </div>
    </sectinn>


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