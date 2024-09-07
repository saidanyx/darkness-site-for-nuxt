<template>
    <header class="header">
        <NuxtLink to="/" class="header-logo" @click="secretCount">
            <img src="/assets/img/header-logo.svg" alt="Darkness майнкрафт - логотип проекта" loading="lazy" decoding="async" :class="{ 'animate': goSectetAnim }" @animationend="resetSecretAnim">
            <p>DARKNESS</p>
        </NuxtLink>
        <ul class="header-nav">
            <NuxtLink to="/" :class="{'active': isActive('index')}">Главная</NuxtLink>
            <NuxtLink to="./gameMap" :class="{'active': isActive('gameMap')}">Карта</NuxtLink>
            <NuxtLink to="https://book.darkness.pw/">Вики</NuxtLink>
        </ul>
        <div class="header-nav-adaptive-button">
            <button @click="openModal"><img src="/assets/img/menu-adaptive.svg" alt="Darkness майнкрафт - кнопка для открытия меню"></button>
        </div>
        <div v-if="isModalOpen" class="header-nav-adaptive-overlay" @click="closeModal">
            <div :class="headerClass" class="header-nav-adaptive-content" @click.stop>
                <div class="header-nav-adaptive">
                    <div class="header-nav-adaptive-ul">
                    <NuxtLink to="/" :class="{'active': isActive('index')}">Главная</NuxtLink>
                    <NuxtLink to="./gameMap" :class="{'active': isActive('gameMap')}">Карта</NuxtLink>
                    <NuxtLink to="https://book.darkness.pw/">Вики</NuxtLink>
                    </div>
                    <a href="https://discord.gg/sTDTj2JpVa" target="_blank">Наш discord</a>
                </div>
            </div>
        </div>
    </header>
</template>
  
<script>
export default {
    data() {
        return {
            isModalOpen: false,
            isModalClosing: false,
            count: 0,
            goSectetAnim: false,

        };
    },
    computed: {
        headerClass() {
            return{
                'header-start-anim': this.isModalOpen && !this.isModalClosing,
                'header-end-anim': this.isModalClosing,
            }
        }
    },
    methods: {
        isActive(index) {
            return this.$route.name === index;
        },
        openModal() {
            this.isModalOpen = true;
            this.isModalClosing = false;
        },
        closeModal() {
            this.isModalClosing = true;
            setTimeout(() => {
                this.isModalOpen = false;
                this.isModalClosing = false;
            }, 600);
        },
        secretCount() {
            this.count++;
            if (this.count === 3) {
                this.goSectetAnim = true
                this.count = 0;
            }
        },
        resetSecretAnim() {
            this.goSectetAnim = false;
        }
    },
    name: 'headerComponent'
}
</script>
  
  
<style scoped>

@keyframes header-start-anim {
    from {
    opacity: 0;
    transform: translateY(-3vw);
    }
    to {
    opacity: 1;
    transform: translateY(0);
    }
}

@keyframes header-end-anim {
    from {
    opacity: 1;
    transform: translateY(0);
    }
    to {
    opacity: 0;
    transform: translateY(-3vw);
    }
}

.header-start-anim {
    animation: header-start-anim 0.6s forwards;
}

.header-end-anim {
    animation: header-end-anim 0.6s forwards;
}

.animate{
    animation: bounce 1.1s;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-1.2vw);
  }
  60% {
    transform: translateY(-0.6vw);
  }
}

.header{
    font-family: "Inter", sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 56vw;
    background-color: #29292980;
    height: 6vw;
    width: 100%;
}

.header-logo{
    font-size: 2vw;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    gap: 1vw;
    letter-spacing: 0.3vw;
    background-image: linear-gradient(to right, #223279, #78DBDF);
    -webkit-background-clip: text;
    color: transparent; 
}

.header-logo img{
    width: 2.8vw;
    height: auto;
}

.header-nav{
    color: #5C5C5C;
    display: flex;
    gap: 4vw;
    font-size: 1.12vw;
}

.header-nav-adaptive-button{
    display: none;
}

.header-nav-adaptive-overlay{
    display: none;
}

.active {
    color: #3498DB;
}

@media (max-width: 1440px) {

    .header{
        gap: 48vw;
        height: 7vw;
    }

    .header-logo{
        font-size: 2.35vw;
        gap: 0.9vw;
        letter-spacing: 0.4vw;
    }

    .header-logo img{
        width: 3.25vw;
    }

    .header-nav{
        gap: 4vw;
        font-size: 1.4vw;
    }
    
}

@media (max-width: 1024px) {
    
    .header{
        gap: 40vw;
        height: 9vw;
    }

    .header-logo{
        font-size: 2.9vw;
        gap: 1vw;
        letter-spacing: 0.45vw;
    }

    .header-logo img{
        width: 3.7vw;
    }

    .header-nav{
        gap: 4vw;
        font-size: 1.8vw;
    }

}

@media (max-width: 768px) {

    @keyframes header-start-anim {
        from {
        opacity: 0;
        transform: translateY(-10vw);
        }
        to {
        opacity: 1;
        transform: translateY(0);
        }
    }

    @keyframes header-end-anim {
        from {
        opacity: 1;
        transform: translateY(0);
        }
        to {
        opacity: 0;
        transform: translateY(-10vw);
        }
    }

    .header{
        gap: 48.5vw;
        height: 10.5vw;
    }

    .header-logo{
        font-size: 4vw;
        gap: 1.25vw;
        letter-spacing: 0.6vw;
    }

    .header-logo img{
        width: 4.95vw;
    }

    .header-nav{
        display: none;
    }

    .header-nav-adaptive-button{
        display: flex;
    }

    .header-nav-adaptive-button img{
        width: 4.8vw;
        height: auto;
    }

    .header-nav-adaptive-overlay {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        z-index: 1000;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
    }

    .header-nav-adaptive-content {
        background-color: #27292A;
        border: solid 0.1vw #3d3d3d;
        position: fixed;
        display: flex;
        flex-direction: column;
        justify-content: center;
        top: 12vh;
        width: 70vw;
        height: 58vw;
        border-radius: 3vw;
    }

    .header-nav-adaptive{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        color: #ffffff;
        font-size: 4.5vw;
        gap: 9vw;
        margin-left: 4vw;
    }

    .header-nav-adaptive-ul{
        display: flex;
        flex-direction: column;
        gap: 4vw;
    }

}

@media (max-width: 600px) {

    @keyframes header-start-anim {
        from {
        opacity: 0;
        transform: translateY(-12vw);
        }
        to {
        opacity: 1;
        transform: translateY(0);
        }
    }

    @keyframes header-end-anim {
        from {
        opacity: 1;
        transform: translateY(0);
        }
        to {
        opacity: 0;
        transform: translateY(-12vw);
        }
    }
    
    .header{
        gap: 65vw;
        height: 12vw;
    }

    .header-logo{
        font-size: 2.8vw;
        gap: 0.9vw;
        letter-spacing: 0.4vw;
    }

    .header-logo p{
        display: none;
    }

    .header-logo img{
        width: 7.5vw;
    }

    .header-nav{
        display: none;
    }

    .header-nav-adaptive-button{
        display: flex;
    }

    .header-nav-adaptive-button img{
        width: 6.5vw;
        height: auto;
    }

    .header-nav-adaptive-content {
        border: solid 0.1vw #3d3d3d;
        top: 12vh;
        width: 80vw;
        height: 72vw;
        border-radius: 2.5vw;
    }

    .header-nav-adaptive{
        font-size: 6vw;
        gap: 12vw;
        margin-left: 6vw;
    }

    .header-nav-adaptive-ul{
        gap: 6vw;
    }

}

@media (max-width: 480px) {

    @keyframes header-start-anim {
        from {
        opacity: 0;
        transform: translateY(-17vw);
        }
        to {
        opacity: 1;
        transform: translateY(0);
        }
    }

    @keyframes header-end-anim {
        from {
        opacity: 1;
        transform: translateY(0);
        }
        to {
        opacity: 0;
        transform: translateY(-17vw);
        }
    }

    .header-start-anim {
        animation: header-start-anim 0.7s forwards;
    }

    .header-end-anim {
        animation: header-end-anim 0.7s forwards;
    }

    .header{
        gap: 65vw;
        height: 20vw;
    }

    .header-logo{
        font-size: 2.8vw;
        gap: 0.9vw;
        letter-spacing: 0.4vw;
    }

    .header-logo p{
        display: none;
    }

    .header-logo img{
        width: 11vw;
    }

    .header-nav{
        display: none;
    }

    .header-nav-adaptive-button{
        display: flex;
    }

    .header-nav-adaptive-button img{
        width: 8vw;
        height: auto;
    }

    .header-nav-adaptive-content {
        border: solid 0.1vw #404242;
        top: 12vh;
        width: 80vw;
        height: 72vw;
        border-radius: 4vw;
    }

    .header-nav-adaptive{
        font-size: 6vw;
        gap: 12vw;
        margin-left: 6vw;
    }

    .header-nav-adaptive-ul{
        gap: 6vw;
    }

}

</style>