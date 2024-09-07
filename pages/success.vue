<template>
  <Head>
    <meta name="robots" content="noindex, nofollow">
    <link rel="icon" href="/public/favicon.ico">
    <Title>Оплата прошла успешно · Darkness</Title>
    <Meta name="description" content="Minecraft сервер с множеством игровых дополнений. Идеальное пространство для реализации вашего творческого потенциала!"/>
    <Meta name="viewport" content="width=device-width, initial-scale=1"></Meta>
    <Meta name="language" content="ru"></Meta>
    <Meta property="og:title" content="Оплата прошла успешно" />
    <Meta property="og:description" content="Minecraft сервер с множеством игровых дополнений. Идеальное пространство для реализации вашего творческого потенциала!" />
    <Meta property="og:site_name" content="Darkness" />
    <Meta property="og:locale" content="ru_RU" />
    <Meta property="og:url" content="https://darkness.pw/success" />
    <Meta property="og:type" content="article"/>
    <Meta property="og:image" content="https://darkness.pw/og-image-for-darkness.jpg"/>
    <Meta property="og:image:width" content="1200"/>
    <Meta property="og:image:height" content="630"/>
    <Meta name="twitter:image" content="https://darkness.pw/og-image-for-darkness.jpg"/>
    <Meta name="twitter:card" content="summary_large_image"/>
    <meta name="theme-color" content="#36529C">
  </Head>

  <headerComponent />

  <div class="success-content">
    <div class="success-content-title">
      <img src="/assets/img/success.svg" alt="значок успешной покупки" loading="lazy" decoding="async">
      <p>СПАСИБО ЗА ВАШУ ПОКУПКУ!</p>
    </div>

    <p class="success-content-subtitle">Для получения товара на ваш аккаунт, пожалуйста, следуйте указаниям ниже.</p>

    <div class="success-content-description">
      <ul>
        <li>Шаг 1. Откройте тикет на нашем discord-сервере;</li>
        <li>Шаг 2. Уведомите администрацию о приобретении товара и приложите скриншот;</li>
        <li>Шаг 3. После быстрой проверки товар будет выдан на ваш аккаунт.</li>
      </ul>
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

.success-content{
    margin-top: 9vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "Manrope", sans-serif;
    gap: 3.5vw;
}

.success-content-title{
    font-family: "Manrope", sans-serif;
    font-weight: 500;
    font-size: 2.8vw;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1vw;
}

.success-content-title img{
  width: 3.9vw;
  height: auto;
}

.success-content-subtitle{
  font-family: "Roboto", sans-serif;
  color: #9A9A9A;
  font-size: 1.5vw;
}

.success-content-description{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 57vw;
    height: 16.5vw;
    background-color: #27292A;
    border-radius: 0.3vw;
}

.success-content-description ul{
    display: flex;
    flex-direction: column;
    color: #9A9A9A;
    gap: 1vw;
    font-size: 1.35vw;
}

@media (max-width: 1440px) {

  .success-content{
    margin-top: 9vw;
    gap: 3.5vw;
  }

  .success-content-title{
      font-size: 3vw;
      gap: 1vw;
  }

  .success-content-title img{
    width: 4.8vw;
    height: auto;
  }

  .success-content-subtitle{
      font-size: 1.8vw;
  }

  .success-content-description{
      width: 70vw;
      height: 17vw;
      border-radius: 0.3vw;
  }

  .success-content-description ul{
      gap: 1vw;
      font-size: 1.6vw;
  }

}

@media (max-width: 1024px) {

  .success-content{
    margin-top: 13vw;
    gap: 3.5vw;
    margin-bottom: 18vw;
  }

  .success-content-title{
      font-size: 3.6vw;
      gap: 1vw;
  }

  .success-content-title img{
    width: 5.2vw;
    height: auto;
  }

  .success-content-subtitle{
      font-size: 2.2vw;
  }

  .success-content-description{
      width: 85vw;
      height: 19vw;
      border-radius: 0.2vw;
  }

  .success-content-description ul{
      gap: 1vw;
      font-size: 2vw;
  }

}

@media (max-width: 768px) {

  .success-content{
    margin-top: 13vw;
    gap: 5vw;
    margin-bottom: 18vw;
  }

  .success-content-title{
      font-size: 4.5vw;
      gap: 1vw;
  }

  .success-content-title img{
    width: 6vw;
    height: auto;
  }

  .success-content-subtitle{
      font-size: 3vw;
      width: 80vw;
      text-align: center;
  }

  .success-content-description{
      width: 85vw;
      height: 33vw;
      border-radius: 0.5vw;
  }

  .success-content-description ul{
      gap: 1.5vw;
      font-size: 2.8vw;
      width: 75vw;
  }

}

@media (max-width: 600px) {

  .success-content{
    margin-top: 13vw;
    gap: 6vw;
    margin-bottom: 18vw;
  }

  .success-content-title{
      font-size: 5vw;
      gap: 1vw;
  }

  .success-content-title img{
    width: 6.8vw;
    height: auto;
  }

  .success-content-subtitle{
      font-size: 4vw;
      width: 80vw;
      text-align: center;
  }

  .success-content-description{
      width: 85vw;
      height: 50vw;
      border-radius: 0.5vw;
  }

  .success-content-description ul{
      gap: 1.5vw;
      font-size: 3.8vw;
      width: 75vw;
  }

}

@media (max-width: 480px) {

  .success-content{
    margin-top: 13vw;
    gap: 6vw;
    margin-bottom: 18vw;
  }

  .success-content-title{
      width: 85vw;
      font-size: 8vw;
      gap: 1.5vw;
  }

  .success-content-title img{
    width: 15vw;
    height: auto;
  }

  .success-content-subtitle{
      font-size: 6vw;
      width: 80vw;
      text-align: center;
  }

  .success-content-description{
      width: 85vw;
      height: 85vw;
      border-radius: 0.8vw;
  }

  .success-content-description ul{
      gap: 2.6vw;
      font-size: 5.5vw;
      width: 75vw;
  }

}


</style> 