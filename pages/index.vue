<template>
    <Head>
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
        <link rel="icon" href="/public/favicon.ico">
        <Title>Инновационный Minecraft сервер</Title>
        <Meta name="description" content="Minecraft сервер с множеством игровых дополнений. Идеальное пространство для реализации вашего творческого потенциала!"/>
        <Meta name="viewport" content="width=device-width, initial-scale=1"></Meta>
        <Meta name="language" content="ru"></Meta>
        <Meta property="og:title" content="Инновационный Minecraft сервер" />
        <Meta property="og:description" content="Minecraft сервер с множеством игровых дополнений. Идеальное пространство для реализации вашего творческого потенциала!" />
        <Meta property="og:site_name" content="Darkness" />
        <Meta property="og:locale" content="ru_RU" />
        <Meta property="og:url" content="https://darkness.pw/" />
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
    <div class="your-target-div-class">
    <section class="menu-header" :style="backgroundStyle">
        <headerComponent />
        <menu class="menu" :class="{ 'menu-visible': menuVisible }">
            <h1 class="menu-title">Идеальный сервер для тебя и друзей! Открой свой мир в Minecraft здесь!</h1>
            <h2 class="menu-subtitle">Кооперируйся! Создавай! Впечатляй!</h2>
            <div class="menu-buttons">
                <a class="menu-button-play" href="https://discord.gg/sTDTj2JpVa" target="_blank" title="Перейти в Discord"><p>Начать играть</p></a>
                <a class="menu-button-products" href="" @click.prevent="catalogDesktop(), catalogAdaptive()">
                    <img src="/assets/img/arrow-right.svg" alt="Darkness майнкрафт - стрелка к товарам" loading="lazy" decoding="async"><p>К товарам</p>
                </a>
            </div>
        </menu>
    </section>

    <section class="catalog" id="catalogLink">
        <section class="catalog-section-container">
            <section class="catalog-section">
                <button class="product" aria-label="Подробнее о подписке Alchemist" @click="openAlchemistModal">
                    <div class="product-preview">
                        <img class="product-preview-img" :src="alchemistImg" alt="Darkness майнкрафт - продукт: подписка Alchemist" loading="lazy" decoding="async">
                    </div>
                    <div class="product-info">
                        <div class="product-info-content">
                            <h4 class="product-title">Подписка Alchemist</h4>
                            <p class="product-subtitle">Лучшая, спонсорская подписка, которая поможет вам поддержать любимый сервер.</p>
                            <div class="product-order-section">
                                <span class="product-price">от 200 ₽</span>
                                <p class="product-button-more">Подробнее</p>
                            </div>
                        </div>
                    </div>
                </button>
                <button class="product" aria-label="Подробнее о подписке Warden" @click="openWardenModal">
                    <div class="product-preview">
                        <img class="product-preview-img" :src="wardenImg" alt="Darkness майнкрафт - продукт: подписка Warden" loading="lazy" decoding="async">
                    </div>
                    <div class="product-info">
                        <div class="product-info-content">
                            <h4 class="product-title">Подписка Warden</h4>
                            <p class="product-subtitle">Средняя, спонсорская подписка, которая поможет вам поддержать любимый сервер.</p>
                            <div class="product-order-section">
                                <span class="product-price">от 150 ₽</span>
                                <p class="product-button-more">Подробнее</p>
                            </div>
                        </div>
                    </div>
                </button>
                <button class="product" aria-label="Подробнее о подписке Traveler" @click="openTravelerModal">
                    <div class="product-preview">
                        <img class="product-preview-img" :src="travelerImg" alt="Darkness майнкрафт - продукт: подписка Traveler" loading="lazy" decoding="async">
                    </div>
                    <div class="product-info">
                        <div class="product-info-content">
                            <h4 class="product-title">Подписка Traveler</h4>
                            <p class="product-subtitle">Спонсорская подписка, которая поможет вам поддержать любимый сервер.</p>
                            <div class="product-order-section">
                                <span class="product-price">от 100 ₽</span>
                                <p class="product-button-more">Подробнее</p>
                            </div>
                        </div>
                    </div>
                </button>
            </section>

            <section class="catalog-section">
                <button class="product" aria-label="Подробнее о подписке Particle" @click="openParticleModal">
                    <div class="product-preview">
                        <img class="product-preview-img" :src="particleImg" alt="Darkness майнкрафт - продукт: команда /particle" loading="lazy" decoding="async">
                    </div>
                    <div class="product-info">
                        <div class="product-info-content">
                            <h4 class="product-title">Команда /particle</h4>
                            <p class="product-subtitle">Доступ к команда /particle на нашем сервере. Получи частичку уникальности!</p>
                            <div class="product-order-section">
                                <span class="product-price">от 500 ₽</span>
                                <p class="product-button-more">Подробнее</p>
                            </div>
                        </div>
                    </div>
                </button>
                <button class="product" aria-label="Подробнее о подписке CustomMusic" @click="openCustomMusicModal">
                    <div class="product-preview">
                        <img class="product-preview-img" :src="customMusicImg" alt="Darkness майнкрафт - продукт: кастомная музыка" loading="lazy" decoding="async">
                    </div>
                    <div class="product-info">
                        <div class="product-info-content">
                            <h4 class="product-title">Создание кастомной музыки</h4>
                            <p class="product-subtitle">Команда с помощью которой вы сможете записать любой трек на обычную пластинку.</p>
                            <div class="product-order-section">
                                <span class="product-price">от 300 ₽</span>
                                <p class="product-button-more">Подробнее</p>
                            </div>
                        </div>
                    </div>
                </button>
                <button class="product" aria-label="Подробнее о подписке CosmeticRoles" @click="openCosmeticRolesModal">
                    <div class="product-preview">
                        <img class="product-preview-img" :src="cosmeticRolesImg" alt="Darkness майнкрафт - продукт: кастомная роль" loading="lazy" decoding="async">
                    </div>
                    <div class="product-info">
                        <div class="product-info-content">
                            <h4 class="product-title">Косметические роли</h4>
                            <p class="product-subtitle">Косметические дополнения для вашего аккаунта. Префикс в Tab или роль в Discord.</p>
                            <div class="product-order-section">
                                <span class="product-price">от 100 ₽</span>
                                <p class="product-button-more">Подробнее</p>
                            </div>
                        </div>
                    </div>
                </button>
            </section>

            <section class="catalog-section-exclusive">
                <h3 class="catalog-section-exclusive-title">Эксклюзивные товары:</h3>
                
                <section class="catalog-section">
                    <button class="product" aria-label="Подробнее о подписке NewBuilding" @click="openNewBuildingModal">
                        <div class="product-preview">
                            <img class="product-preview-img" :src="newBuildingImg" alt="Darkness майнкрафт - продукт: новая структура" loading="lazy" decoding="async">
                        </div>
                        <div class="product-info">
                            <div class="product-info-content">
                                <h4 class="product-title">Кастомная структура</h4>
                                <p class="product-subtitle">Придуманная вами новая структура для сервера.</p>
                                <div class="product-order-section">
                                    <span class="product-price">от 1500 ₽</span>
                                    <p class="product-button-more">Подробнее</p>
                                </div>
                            </div>
                        </div>
                    </button>

                    <button class="product" aria-label="Подробнее о подписке NewItem" @click="openNewItemModal">
                        <div class="product-preview">
                            <img class="product-preview-img" :src="newItemImg" alt="Darkness майнкрафт - продукт: новый предмет или крафт" loading="lazy" decoding="async">
                        </div>
                        <div class="product-info">
                            <div class="product-info-content">
                                <h4 class="product-title">Кастомный предмет или крафт</h4>
                                <p class="product-subtitle">Новый крафт или предмет в алхимии. Или что-то иное в схожих областях.</p>
                                <div class="product-order-section">
                                    <span class="product-price">от 2000 ₽</span>
                                    <p class="product-button-more">Подробнее</p>
                                </div>
                            </div>
                        </div>
                    </button>
                </section>
            </section>
        </section>
    </section>

    <!-- Начало адаптивного каталога -->

    <section class="catalog-adaptive" id="catalogLink_adaptive">
        <section class="catalog-section-container-adaptive">
            <section class="catalog-section-adaptive">
                <button class="product" ria-label="Подробнее о подписке Alchemist" @click="openAlchemistModal">
                    <div class="product-preview">
                        <img class="product-preview-img" :src="alchemistImg" alt="Darkness майнкрафт - продукт: подписка Alchemist" loading="lazy" decoding="async">
                        <p class="product-price">от 200 ₽</p>
                    </div>
                    <div class="product-info">
                        <div class="product-info-content">
                            <h4 class="product-title">Подписка Alchemist</h4>
                            <p class="product-subtitle">Лучшая, спонсорская подписка, которая поможет вам поддержать любимый сервер.</p>
                            <p class="product-button-more">Подробнее</p>
                        </div>
                    </div>
                </button>
                <button class="product" aria-label="Подробнее о подписке Warden" @click="openWardenModal">
                    <div class="product-preview">
                        <img class="product-preview-img" :src="wardenImg" alt="Darkness майнкрафт - продукт: подписка Warden" loading="lazy" decoding="async">
                        <p class="product-price">от 150 ₽</p>
                    </div>
                    <div class="product-info">
                        <div class="product-info-content">
                            <h4 class="product-title">Подписка Warden</h4>
                            <p class="product-subtitle">Средняя, спонсорская подписка, которая поможет вам поддержать любимый сервер.</p>
                            <p class="product-button-more">Подробнее</p>
                        </div>
                    </div>
                </button>
            </section>
            <section class="catalog-section-adaptive">
                <button class="product" aria-label="Подробнее о подписке Traveler" @click="openTravelerModal">
                    <div class="product-preview">
                        <img class="product-preview-img" :src="travelerImg" alt="Darkness майнкрафт - продукт: подписка Traveler" loading="lazy" decoding="async">
                        <p class="product-price">от 100 ₽</p>
                    </div>
                    <div class="product-info">
                        <div class="product-info-content">
                            <h4 class="product-title">Подписка Traveler</h4>
                            <p class="product-subtitle">Спонсорская подписка, которая поможет вам поддержать любимый сервер.</p>
                            <p class="product-button-more">Подробнее</p>
                        </div>
                    </div>
                </button>
                <button class="product" aria-label="Подробнее о подписке Particle" @click="openParticleModal">
                    <div class="product-preview">
                        <img class="product-preview-img" :src="particleImg" alt="Darkness майнкрафт - продукт: команда /particle" loading="lazy" decoding="async">
                        <p class="product-price">от 500 ₽</p>
                    </div>
                    <div class="product-info">
                        <div class="product-info-content">
                            <h4 class="product-title">Команда /particle</h4>
                            <p class="product-subtitle">Доступ к команда /particle на нашем сервере. Получи частичку уникальности!</p>
                            <p class="product-button-more">Подробнее</p>
                        </div>
                    </div>
                </button>
            </section>

            <section class="catalog-section-adaptive">
                <button class="product" aria-label="Подробнее о подписке CustomMusic" @click="openCustomMusicModal">
                    <div class="product-preview">
                        <img class="product-preview-img" :src="customMusicImg" alt="Darkness майнкрафт - продукт: кастомная музыка" loading="lazy" decoding="async">
                        <p class="product-price">от 300 ₽</p>
                    </div>
                    <div class="product-info">
                        <div class="product-info-content">
                            <h4 class="product-title">Создание кастомной музыки</h4>
                            <p class="product-subtitle">Команда с помощью которой вы сможете записать любой трек на обычную пластинку.</p>
                            <p class="product-button-more">Подробнее</p>
                        </div>
                    </div>
                </button>

                <button class="product" aria-label="Подробнее о подписке CosmeticRoles" @click="openCosmeticRolesModal">
                    <div class="product-preview">
                        <img class="product-preview-img" :src="cosmeticRolesImg" alt="Darkness майнкрафт - продукт: кастомная роль" loading="lazy" decoding="async">
                        <p class="product-price">от 100 ₽</p>
                    </div>
                    <div class="product-info">
                        <div class="product-info-content">
                            <h4 class="product-title">Косметические роли</h4>
                            <p class="product-subtitle">Косметические дополнения для вашего аккаунта. Префикс в Tab или роль в Discord.</p>
                            <p class="product-button-more">Подробнее</p>
                        </div>
                    </div>
                </button>
            </section>

            <section class="catalog-section-exclusive-adaptive">
                <h3 class="catalog-section-exclusive-title">Эксклюзивные товары:</h3>

                <section class="catalog-section-adaptive">
                    <button class="product" aria-label="Подробнее о подписке NewBuilding" @click="openNewBuildingModal">
                        <div class="product-preview">
                            <img class="product-preview-img" :src="newBuildingImg" alt="Darkness майнкрафт - продукт: новая структура" loading="lazy" decoding="async">
                            <p class="product-price">от 1500 ₽</p>
                        </div>
                        <div class="product-info">
                            <div class="product-info-content">
                                <h4 class="product-title">Кастомная структура</h4>
                                <p class="product-subtitle">Придуманная вами новая структура для сервера.</p>
                                <p class="product-button-more">Подробнее</p>
                            </div>
                        </div>
                    </button>

                    <button class="product" aria-label="Подробнее о подписке NewItem" @click="openNewItemModal">
                        <div class="product-preview">
                            <img class="product-preview-img" :src="newItemImg" alt="Darkness майнкрафт - продукт: новый предмет или крафт" loading="lazy" decoding="async">
                            <p class="product-price">от 2000 ₽</p>
                        </div>
                        <div class="product-info">
                            <div class="product-info-content">
                                <h4 class="product-title">Кастомный предмет или крафт</h4>
                                <p class="product-subtitle">Новый крафт или предмет в алхимии. Или что-то иное в схожих областях.</p>
                                <p class="product-button-more">Подробнее</p>
                            </div>
                        </div>
                    </button >
                </section>
            </section>
        </section>
    </section>

    <footerComponent />

    </div>
    
    <alchemistComponent ref="alchemistProduct" @close="handleModalClose" />
    <wardenComponent ref="wardenProduct" @close="handleModalClose" />
    <travelerComponent ref="travelerProduct" @close="handleModalClose" />
    <particleComponent ref="particleProduct" @close="handleModalClose" />
    <customMusicComponent ref="customMusicProduct" @close="handleModalClose" />
    <cosmeticRolesComponent ref="cosmeticRolesProduct" @close="handleModalClose" />
    <newBuildingComponent ref="newBuildingProduct" @close="handleModalClose" />
    <newItemComponent ref="newItemProduct" @close="handleModalClose" />
    </div>
</template>

<script>
import alchemistComponent from '~/components/alchemistComponent'
import cosmeticRolesComponent from '~/components/cosmeticRolesComponent'
import customMusicComponent from '~/components/customMusicComponent'
import footerComponent from '~/components/footerComponent.vue'
import headerComponent from '~/components/headerComponent.vue'
import newBuildingComponent from '~/components/newBuildingComponent'
import newItemComponent from '~/components/newItemComponent'
import particleComponent from '~/components/particleComponent'
import travelerComponent from '~/components/travelerComponent'
import wardenComponent from '~/components/wardenComponent'
import preloader from '~/components/preloader.vue'

export default {
    head: {
        link: [
        { rel: 'icon', type: 'image/svg+xml', sizes: '16x16', href: '/favicon-16.svg' },
        { rel: 'icon', type: 'image/svg+xml', sizes: '32x32', href: '/favicon-32.svg' },
        { rel: 'icon', type: 'image/svg+xml', sizes: '64x64', href: '/favicon-64.svg' },
        { rel: 'icon', type: 'image/svg+xml', sizes: '120x120', href: '/favicon-120.svg' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon-180.svg' },
        { rel: 'mask-icon', href: '/favicon-64', color: '#f6f6f6' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        ],
    },
    sitemap: {
        path: '/sitemap.xml',
        hostname: 'https://darkness.pw/',
        routes: [
        {
            url: '/',
            changefreq: 'monthly',
            priority: 1.0
        },
        {
            url: '/gameMap',
            changefreq: 'monthly',
            priority: 0.9
        },
        {
            url: '/contacts',
            changefreq: 'monthly',
            priority: 0.8
        },
        {
            url: '/design',
            changefreq: 'monthly',
            priority: 0.7
        },
        ]
    },
    components: {
        headerComponent,
        footerComponent,
        alchemistComponent,
        wardenComponent,
        travelerComponent,
        particleComponent,
        customMusicComponent,
        cosmeticRolesComponent,
        newBuildingComponent,
        newItemComponent,
        preloader
    },
    data() {
        return {
            menuVisible: false,
            loading: true,
            totalImages: 0,
            imagesLoaded: 0,
            backgroundImage: '',
            alchemistImg: '',
            wardenImg: '',
            travelerImg: '',
            particleImg: '',
            customMusicImg: '',
            cosmeticRolesImg: '',
            newBuildingImg: '',
            newItemImg: '',
        }
    },
    computed: {
        backgroundStyle() {
            return {
                backgroundImage: `url(${this.backgroundImage})`,
            };
        },
    },
    methods: {
        openAlchemistModal() {
            this.$refs.alchemistProduct.openModal();
            this.setInert(true);
        },
        handleModalClose() {
            this.setInert(false);
        },
        setInert(value) {
            const targetDiv = document.querySelector('.your-target-div-class');
            if (targetDiv) {
                if (value) {
                    targetDiv.setAttribute('inert', 'inert');
                } else {
                    targetDiv.removeAttribute('inert');
                }
            }
        },
        openWardenModal() {
            this.$refs.wardenProduct.openModal();
            this.setInert(true);
        },
        openTravelerModal() {
            this.$refs.travelerProduct.openModal();
            this.setInert(true);
        },
        openParticleModal() {
            this.$refs.particleProduct.openModal();
            this.setInert(true);
        },
        openCustomMusicModal() {
            this.$refs.customMusicProduct.openModal();
            this.setInert(true);
        },
        openCosmeticRolesModal() {
            this.$refs.cosmeticRolesProduct.openModal();
            this.setInert(true);
        },
        openNewBuildingModal() {
            this.$refs.newBuildingProduct.openModal();
            this.setInert(true);
        },
        openNewItemModal() {
            this.$refs.newItemProduct.openModal();
            this.setInert(true);
        },
        catalogDesktop() {
            const section = document.getElementById('catalogLink');
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        },
        catalogAdaptive() {
            const section = document.getElementById('catalogLink_adaptive');
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        },
    },
    mounted() {
        this.backgroundImage = new URL('~/assets/img/menu-background.webp', import.meta.url).href;
        this.alchemistImg = new URL('~/assets/img/hight_ticket_alchemist_one_month.png', import.meta.url).href;
        this.wardenImg = new URL('~/assets/img/hight_ticket_warden_one_month.png', import.meta.url).href;
        this.travelerImg = new URL('~/assets/img/hight_ticket_traveler_one_month.png', import.meta.url).href;
        this.particleImg = new URL('~/assets/img/particle.gif', import.meta.url).href;
        this.customMusicImg = new URL('~/assets/img/music_dis.gif', import.meta.url).href;
        this.cosmeticRolesImg = new URL('~/assets/img/custom_role.gif', import.meta.url).href;
        this.newBuildingImg = new URL('~/assets/img/new_structure.gif', import.meta.url).href;
        this.newItemImg = new URL('~/assets/img/new_item.gif', import.meta.url).href;

        const images = [
            this.backgroundImage,
            this.alchemistImg,
            this.wardenImg,
            this.travelerImg,
            this.particleImg,
            this.customMusicImg,
            this.cosmeticRolesImg,
            this.newBuildingImg,
            this.newItemImg,
        ];

        this.totalImages = images.length;

        images.forEach((image) => {
            const img = new Image();
            img.src = image;
            img.onload = () => {
                this.imagesLoaded++;
                if (this.imagesLoaded === this.totalImages) {
                    this.loading = false;
                }
            };
        });
    },
}
</script>



<style scoped>
.menu-background {
  background-image: var(--background-img);
}

.menu {
    animation: menuScale 0.5s forwards;
    opacity: 0;
    transform: scale(0);
}

.menu-visible {
    opacity: 1;
    transform: scale(1);
}

@keyframes menuScale {
    0% {
        transform: scale(0);
        opacity: 0;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
}
</style>