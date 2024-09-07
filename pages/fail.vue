<template>
    <Head>
      <meta name="robots" content="noindex, nofollow">
      <link rel="icon" href="/public/favicon.ico">
      <Title>Оплата не удалась · Darkness</Title>
      <Meta name="description" content="Minecraft сервер с множеством игровых дополнений. Идеальное пространство для реализации вашего творческого потенциала!"/>
      <Meta name="viewport" content="width=device-width, initial-scale=1"></Meta>
      <Meta name="language" content="ru"></Meta>
      <Meta property="og:title" content="Оплата не удалась" />
      <Meta property="og:description" content="Minecraft сервер с множеством игровых дополнений. Идеальное пространство для реализации вашего творческого потенциала!" />
      <Meta property="og:site_name" content="Darkness" />
      <Meta property="og:locale" content="ru_RU" />
      <Meta property="og:url" content="https://darkness.pw/fail" />
      <Meta property="og:type" content="article"/>
      <Meta property="og:image" content="https://darkness.pw/og-image-for-darkness.jpg"/>
      <Meta property="og:image:width" content="1200"/>
      <Meta property="og:image:height" content="630"/>
      <Meta name="twitter:image" content="https://darkness.pw/og-image-for-darkness.jpg"/>
      <Meta name="twitter:card" content="summary_large_image"/>
      <meta name="theme-color" content="#36529C">
    </Head>

    <headerComponent />

    <div class="fail-content">
      <div class="fail-content-title">
        <img src="/assets/img/fail.svg" alt="значок ошибки при покупке" loading="lazy" decoding="async">
        <p>Ошибка! При обработке платежа произошла ошибка.</p>
      </div>
  
      <p class="fail-content-subtitle">Попробуйте ещё раз позже. Если это не поможет, то свяжитесь с нами.</p>
  
      <NuxtLink class="fail-content-link" to="/">
        <img src="/assets/img/arrow-fail.svg" alt="стрелка на главную" loading="lazy" decoding="async">
        <p>Вернуться на главную</p>
      </NuxtLink>
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
  
.fail-content{
    margin-top: 9vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "Manrope", sans-serif;
    gap: 3.5vw;
}

.fail-content-title{
    font-family: "Manrope", sans-serif;
    font-weight: 500;
    font-size: 2.8vw;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1vw;
}

.fail-content-title img{
  width: 3.9vw;
  height: auto;
}

.fail-content-subtitle{
    font-family: "Roboto", sans-serif;
    color: #9A9A9A;
    font-size: 1.5vw;
}

.fail-content-link{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 57vw;
    height: 16.5vw;
    background-color: #27292A;
    border-radius: 0.3vw;
    gap: 0.25vw;
}

.fail-content-link img{
    width: 1.65vw;
    height: auto;
}

.fail-content-link p{
    display: flex;
    flex-direction: column;
    color: #9A9A9A;
    font-size: 1.35vw;
    font-weight: 500;
}

@media (max-width: 1440px) {

  .fail-content{
    margin-top: 9vw;
    gap: 3.5vw;
  }

  .fail-content-title{
    font-size: 3vw;
    gap: 1vw;
  }

  .fail-content-title img{
    width: 4.8vw;
    height: auto;
  }

  .fail-content-subtitle{
    font-size: 1.8vw;
  }

  .fail-content-link{
    width: 70vw;
    height: 17vw;
    border-radius: 0.3vw;
    gap: 0.25vw;
  }

  .fail-content-link img{
    width: 2.1vw;
    height: auto;
  }

  .fail-content-link p{
    font-size: 1.8vw;
  }

}

@media (max-width: 1024px) {

  .fail-content{
    margin-top: 13vw;
    gap: 3.5vw;
    margin-bottom: 18vw;
  }

  .fail-content-title{
    font-size: 3.6vw;
    gap: 0vw;
    width: 57vw;
    text-align: center;
    align-items: center;
  }

  .fail-content-title img{
    width: 5.2vw;
    height: auto;
  }

  .fail-content-subtitle{
    font-size: 2.2vw;
  }

  .fail-content-link{
    width: 70vw;
    height: 17vw;
    border-radius: 0.3vw;
    gap: 0.25vw;
  }

  .fail-content-link img{
    width: 2.5vw;
    height: auto;
  }

  .fail-content-link p{
    font-size: 2.2vw;
  }

}

@media (max-width: 768px) {

  .fail-content{
    margin-top: 13vw;
    gap: 5vw;
    margin-bottom: 18vw;
  }

  .fail-content-title{
    font-size: 4.5vw;
    gap: 0vw;
    width: 73vw;
    text-align: center;
    align-items: center;
  }

  .fail-content-title img{
    width: 8vw;
    height: auto;
  }

  .fail-content-subtitle{
    font-size: 3vw;
    width: 80vw;
    text-align: center;
  }

  .fail-content-link{
    width: 85vw;
    height: 26vw;
    border-radius: 0.5vw;
    gap: 0.3vw;
  }

  .fail-content-link img{
    width: 3vw;
    height: auto;
  }

  .fail-content-link p{
    font-size: 3vw;
  }

}

@media (max-width: 600px) {

  .fail-content{
    margin-top: 13vw;
    gap: 6vw;
    margin-bottom: 18vw;
  }

  .fail-content-title{
    font-size: 5vw;
    gap: 0vw;
    width: 80vw;
    text-align: center;
    align-items: center;
  }

  .fail-content-title img{
    width: 10vw;
    height: auto;
  }

  .fail-content-subtitle{
    font-size: 4vw;
    width: 80vw;
    text-align: center;
  }

  .fail-content-link{
    width: 85vw;
    height: 42vw;
    border-radius: 0.5vw;
    gap: 0.5vw;
  }

  .fail-content-link img{
    width: 4vw;
    height: auto;
  }

  .fail-content-link p{
    font-size: 3.8vw;
  }
    
}

@media (max-width: 480px) {

  .fail-content{
    margin-top: 13vw;
    gap: 6vw;
    margin-bottom: 18vw;
  }

  .fail-content-title{
    font-size: 8vw;
    gap: 0vw;
    width: 93vw;
    text-align: center;
    align-items: center;
  }

  .fail-content-title img{
    width: 15vw;
    height: auto;
  }

  .fail-content-subtitle{
    font-size: 6vw;
    width: 80vw;
    text-align: center;
  }

  .fail-content-link{
    width: 85vw;
    height: 60vw;
    border-radius: 0.8vw;
    gap: 0.5vw;
  }

  .fail-content-link img{
    width: 6vw;
    height: auto;
  }

  .fail-content-link p{
    font-size: 5.5vw;
  }

}
  
  </style> 