<template>
    <div class="page404">
        <div class="page404-info">
            <h1>404</h1>
            <img class="redstone-img" src="./assets/img/redstone.svg" alt="прерванная цепочка редстоуна Minecraft" loading="lazy" decoding="async">
            <img class="adaptive-redstone-img" src="./assets/img/adaptive-redstone.svg" alt="">
        </div>
        <h2>Ошибка! К сожалению, данная страница не найдена...</h2>
        <NuxtLink class="page404-link" to="/"><p>Вернуться на главную страницу</p></NuxtLink>
    </div>
</template>

<style scoped>

.page404{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 22vh;
    gap: 5.5vw;
}

.page404-info{
    display: flex;
    flex-direction: column;
    align-items: center;
}

h1{
    color: #ffffff;
    font-family: "Manrope", sans-serif;
    font-size: 6vw;
    height: 6.8vw;
}

.redstone-img{
    width: 60vw;
    height: auto;
}

.adaptive-redstone-img{
    display: none;
}

h2{
    font-family: "Roboto", sans-serif;
    color: #9A9A9A;
    font-weight: 400;
    font-size: 1.8vw;
}

a{
    background-color: #27292A;
    font-family: "Roboto", sans-serif;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32vw;
    height: 5.5vw;
    border-radius: 0.3vw;
    font-size: 1.5vw;
}

@media (max-width: 1440px){

    .page404{
        margin-top: 22vh;
        gap: 5.5vw;
    }

    h1{
        font-size: 8vw;
        height: 8.5vw;
    }

    img{
        width: 65vw;
    }

    h2{
        font-weight: 400;
        font-size: 2.3vw;
    }

    a{
        width: 40vw;
        height: 6.8vw;
        border-radius: 0.3vw;
        font-size: 2.2vw;
    }

}

@media (max-width: 1024px) {

    .page404{
        margin-top: 22vh;
        gap: 6.5vw;
    }

    h1{
        font-size: 10vw;
        height: 10.5vw;
    }

    .redstone-img{
        width: 80vw;
    }

    h2{
        font-weight: 400;
        font-size: 3.2vw;
    }

    a{
        width: 55vw;
        height: 8.5vw;
        border-radius: 0.8vw;
        font-size: 3.2vw;
    }

}

@media (max-width: 768px) {

    .page404{
        margin-top: 22vh;
        gap: 7.5vw;
    }

    h1{
        font-size: 12vw;
        height: 13vw;
    }

    .redstone-img{
        width: 85vw;
    }

    h2{
        font-weight: 400;
        font-size: 3.6vw;
        text-align: center;
    }

    a{
        width: 65vw;
        height: 10.5vw;
        border-radius: 1vw;
        font-size: 3.8vw;
    }

}

@media (max-width: 600px) {

    .page404{
        margin-top: 22vh;
        gap: 9vw;
    }

    h1{
        font-size: 18vw;
        height: 21vw;
    }

    .redstone-img{
        display: none;
    }

    .adaptive-redstone-img{
        display: flex;
        width: 100vw;
        height: auto;
    }

    h2{
        font-weight: 400;
        font-size: 5vw;
        width: 75vw;
        text-align: center;
    }

    a{
        width: 68vw;
        height: 12vw;
        border-radius: 1vw;
        font-size: 4vw;
    }

}

@media (max-width: 480px) {

    .page404{
        margin-top: 22vh;
        gap: 10vw;
    }

    h1{
        font-size: 26vw;
        height: 31vw;
    }

    .redstone-img{
        display: none;
    }

    .adaptive-redstone-img{
        display: flex;
        width: 100vw;
        height: auto;
    }

    h2{
        font-weight: 400;
        font-size: 6.5vw;
        width: 95vw;
        text-align: center;
    }

    a{
        width: 72vw;
        height: 19vw;
        border-radius: 1vw;
        font-size: 5.8vw;
        text-align: center;
    }

}

</style>