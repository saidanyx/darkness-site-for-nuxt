<template>
    <footer class="footer">
        <section class="footer-content">
            <section class="footer-section footer-section-alt">
                <NuxtLink to="./contacts" class="link" :class="{'active': isActive('contacts')}">Контакты</NuxtLink>
                <NuxtLink to="./offer" class="link" :class="{'active': isActive('offer')}">Договор оферты</NuxtLink>
                <NuxtLink to="./userAgreement" class="link" :class="{'active': isActive('userAgreement')}">Пользовательское соглашение</NuxtLink>
            </section>
            <section class="footer-section">
                <NuxtLink to="./design" class="link" :class="{'active': isActive('design')}">Дизайн</NuxtLink>
                <NuxtLink to="./returnPolicy" class="link" :class="{'active': isActive('returnPolicy')}">Политика возврата</NuxtLink>
                <p>Not affiliated with Minecraft and other rights holders</p>
            </section>
        </section>
    </footer>
</template>
  
<script>

export default {
  methods: {
    isActive(contacts) {
      return this.$route.name === contacts;
    },
  },
  name: 'footerComponent'
}

</script>
  
<style>

.footer{
    margin-top: 12vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #27292A;
    width: 100%;
    height: 8.5vw;
    border-radius: 2.5vw 2.5vw 0 0;
}

.footer-content{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70.5vw;
}

.footer-section{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
    text-align: end;
    gap: 1vw;
    color: #ffffff;
    font-family: "Inter", sans-serif;
    font-weight: 300;
    font-size: 0.76vw;
}

.footer-section-alt{
    align-items: start;
    text-align: start;
}

.active {
    color: #3498DB;
}

@media (max-width: 1440px) {

    .footer{
        margin-top: 12vw;
        height: 9.5vw;
        border-radius: 2.5vw 2.5vw 0 0;
    }

    .footer-content{
        width: 72vw;
    }

    .footer-section{
        gap: 1vw;
        font-size: 1vw;
    }

}

@media (max-width: 1024px) {
    
    .footer{
        margin-top: 12vw;
        height: 13vw;
        border-radius: 2.5vw 2.5vw 0 0;
    }

    .footer-content{
        width: 74vw;
    }

    .footer-section{
        gap: 1.3vw;
        font-size: 1.4vw;
    }

}

@media (max-width: 768px) {

    .footer{
        margin-top: 12vw;
        height: 17vw;
        border-radius: 2.5vw 2.5vw 0 0;
    }

    .footer-content{
        width: 78vw;
    }

    .footer-section{
        gap: 1.6vw;
        font-size: 2.1vw;
        text-align: end;
        align-items: end;
    }

    .footer-section-alt{
        text-align: start;
        align-items: start;
    }

}

@media (max-width: 600px) {

    .footer{
        margin-top: 12vw;
        height: 22vw;
        border-radius: 3.8vw 3.8vw 0 0;
    }

    .footer-content{
        width: 76vw;
    }

    .footer-section{
        gap: 1.8vw;
        font-size: 2.5vw;
    }

}

@media (max-width: 480px) {

    .footer{
        margin-top: 12vw;
        height: 55vw;
        border-radius: 3.8vw 3.8vw 0 0;
    }

    .footer-content{
        width: 80vw;
        flex-direction: column;
        gap: 2.3vw;
        align-items: start;
    }

    .footer-section{
        gap: 2.3vw;
        font-size: 4vw;
        font-weight: 300;
        align-items: start;
        text-align: start;
    }

    .footer-section-alt{
        text-align: start;
        align-items: start;
    }

}

</style>