<template>
    <Head>
        <meta name="robots" content="noindex, nofollow">
        <link rel="icon" href="/public/favicon.ico">
        <Title>Пользовательское соглашение · Darkness</Title>
        <Meta name="description" content="Minecraft сервер с множеством игровых дополнений. Идеальное пространство для реализации вашего творческого потенциала!"/>
        <Meta name="viewport" content="width=device-width, initial-scale=1"></Meta>
        <Meta name="language" content="ru"></Meta>
        <Meta property="og:title" content="Пользовательское соглашение" />
        <Meta property="og:description" content="Minecraft сервер с множеством игровых дополнений. Идеальное пространство для реализации вашего творческого потенциала!" />
        <Meta property="og:site_name" content="Darkness" />
        <Meta property="og:locale" content="ru_RU" />
        <Meta property="og:url" content="https://darkness.pw/userAgreement" />
        <Meta property="og:type" content="article"/>
        <Meta property="og:image" content="https://darkness.pw/og-image-for-darkness.jpg"/>
        <Meta property="og:image:width" content="1200"/>
        <Meta property="og:image:height" content="630"/>
        <Meta name="twitter:image" content="https://darkness.pw/og-image-for-darkness.jpg"/>
        <Meta name="twitter:card" content="summary_large_image"/>
        <meta name="theme-color" content="#36529C">
    </Head>

    <headerComponent />

    <section class="userAgreement">
        <div class="userAgreement-foreword">
            <h1 class="userAgreement-foreword-title">Пользовательское соглашение</h1>
            <p class="userAgreement-foreword-subtitle">Данное Пользовательское соглашение устанавливает правила и условия использования сайта "Darkness", а также информирует пользователя о его правах и обязанностях, возникающих при посещении и использовании Сайта.</p>
        </div>

        <div class="userAgreement-points">
            <div class="userAgreement-point">
                <h2 class="userAgreement-point-title">1. Общие положения.</h2>
                <p class="userAgreement-point-subtitle">Используя Сайт, Пользователь подтверждает своё согласие с условиями настоящего Соглашения. Если Пользователь не согласен с условиями Соглашения, он обязан немедленно прекратить использование Сайта.</p>
            </div>

            <div class="userAgreement-point">
                <h2 class="userAgreement-point-title">2. Ответственность сторон.</h2>
                <p class="userAgreement-point-subtitle">Сайт не несет ответственности за любые убытки, которые Пользователь может понести в результате использования товаров или услуг. Пользователь несет полную ответственность за все действия, связанные с использованием Сайта.</p>
            </div>

            <div class="userAgreement-point">
                <h2 class="userAgreement-point-title">3. Информация о товарах и услугах.</h2>
                <p class="userAgreement-point-subtitle">Сайт оставляет за собой право вносить изменения в информацию о товарах и услугах без предварительного уведомления Пользователя.</p>
            </div>

            <div class="userAgreement-point">
                <h2 class="userAgreement-point-title">4. Конфиденциальность.</h2>
                <p class="userAgreement-point-subtitle">Сайт не собирает и не хранит личные данные Пользователя, если они не были предоставлены им добровольно.</p>
            </div>
        </div>

        <div class="userAgreement-afterword">
            <p class="userAgreement-afterword-title">Используя Сайт, Пользователь подтверждает, что ознакомлен, понимает и принимает условия данного Соглашения.</p>
            <p class="userAgreement-afterword-title">"Darkness" сохраняет за собой право изменять условия данного Соглашения в любое время без предварительного уведомления Пользователя.</p>
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