<template>
    <div>
      <div class="productModal modal-background" v-if="isModalVisible || isModalClosing" @click="closeModal(true)">
        <section class="moreAboutProduct" @click.stop :class="modalClass" @animationend="endAnimation">
          <button class="close-button" @click="closeModal(true)"><img src="/assets/img/modal-close.svg" alt="крестик для закрытия окна"></button>
          <div class="moreAboutProduct-image">
            <img class="moreAboutProduct-image-img-alt-exclusive" :src="img" alt="изображение продукта: новая структура">
          </div>
          <div class="moreAboutProduct-direction">
            <button @click="closeModal">Главная</button>
            <span>></span>
            <button>Кастомная структура</button>
          </div>
          <div class="moreAboutProduct-information">
            <p class="moreAboutProduct-information-title">Кастомная структура</p>
            <div class="moreAboutProduct-information-price-section">
              <p class="moreAboutProduct-information-price">{{ price }}₽</p>
              <div class="moreAboutProduct-image-adaptive"><img class="moreAboutProduct-image-img-adaptive" :src="img" alt="изображение продукта: новая структура"></div>
              <div class="moreAboutProduct-information-buttons">
                <button @click="selectOption('fullSeason')" :class="{'moreAboutProduct-information-button-selected': selectedOption === 'fullSeason'}" class="moreAboutProduct-information-button option-3">На весь сезон</button>
              </div>
              <button @click="openOrderModal" class="moreAboutProduct-information-order-button">Заказать</button>
            </div>
          </div>
          <div class="moreAboutProduct-description">
            <p class="moreAboutProduct-description-title">Описание:</p>
            <div class="moreAboutProduct-description-subtitle">
              <p>Возможность добавить созданную вами структуру на наш сервер! Практически любая структура с заданными вами параметрами спавна и тематическим лутом. Внесите частичку себя в сервер!</p>
              <p>(Все структуры, лут и параметры проходят тщательную модерацию. Перед покупкой настоятельно рекомендуем уточнить интересующие вас нюансы в тикете.)</p>
            </div>
          </div>
        </section>
      </div>
      <div class="productModal" v-if="isOrderModalVisible || isOrderModalClosing" @click="closeOrderModal(true)">
        <section class="orderProduct" @click.stop :class="orderModalClass" @animationend="endOrderAnimation">
          <button class="close-button" @click="closeOrderModal(true)"><img src="/assets/img/modal-close.svg" alt="крестик для закрытия окна"></button>
          <div class="orderProduct-direction">
            <button @click="closeOrderModal(); closeModal()">Главная</button>
            <span>></span>
            <button @click="closeOrderModal">Кастомная структура</button>
            <span>></span>
            <button>Оплата</button>
          </div>
          <div class="orderProduct-information-container">
          <div class="orderProduct-information">
            <p class="orderProduct-information-title">Кастомная структура</p>
            <p class="orderProduct-information-time">{{ time }}</p>
            <a class="purchaseLink orderProduct-information-pay" :href="purchaseLink" target="_blank">ОПЛАТИТЬ</a>
          </div>
          <img class="orderProduct-information-container-img" src="/assets/img/productOrderImg.svg" alt="иконка отображающая оплату">
        </div>
          <div class="orderProduct-description">
            <p class="orderProduct-description-title">Инструкция по получению:</p>
            <ul class="orderProduct-description-subtitle">
              <li>1. После приобретения откройте тикет на нашем discord-сервере;</li>
              <li>2. Уведомите администрацию о приобретении услуги и приложите скриншот;</li>
              <li>3. После быстрой проверки услуга будет выдана на ваш аккаунт.</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
</template>
  
<script>
import productImg from '~/assets/img/new_structure.gif';
export default {
  name: 'moreAboutProductComponent',
  data() {
    return {
      isModalVisible: false,
      isOrderModalVisible: false,
      isModalClosing: false,
      isOrderModalClosing: false,
      price: 1500,
      purchaseLink: 'https://pay.enot.io/widget/d69bdb28-73db-4cda-b330-5953443736e7/link',
      time: 'На весь сезон',
      img: productImg,
      selectedOption: 'fullSeason',
    };
  },
  computed: {
    modalClass() {
      return {
        'One-fadeIn': this.isModalVisible && !this.isModalClosing,
        'One-fadeOut': this.isModalClosing
      };
    },
    orderModalClass() {
      return {
        'Two-fadeIn': this.isOrderModalVisible && !this.isOrderModalClosing,
        'Two-fadeOut': this.isOrderModalClosing
      };
    }
  },
  methods: {
    openModal() {
      document.body.classList.add('modal-class-one');
      this.isModalVisible = true;
      this.isModalClosing = false;
    },
    closeModal(isAnimationNeeded) {
      if (isAnimationNeeded) {
        this.isModalClosing = true;
        this.$emit('close');
      } else {
        this.isModalVisible = false;
        this.isModalClosing = false;
        this.$emit('close');
        this.$emit('modalClosed');
      }
    },
    openOrderModal() {
      document.body.classList.add('modal-class-two');
      this.isOrderModalVisible = true;
      this.isOrderModalClosing = false;
    },
    closeOrderModal(isAnimationNeeded) {
      if (isAnimationNeeded) {
        document.body.classList.remove('modal-class-two');
        this.isOrderModalClosing = true;
      } else {
        document.body.classList.remove('modal-class-two');
        this.isOrderModalVisible = false;
        this.isOrderModalClosing = false;
      }
    },
    endAnimation() {
      if (this.isModalClosing) {
        this.isModalVisible = false;
        this.isModalClosing = false;
        document.body.classList.remove('modal-class-one');
      }
    },
    endOrderAnimation() {
      if (this.isOrderModalClosing) {
        this.isOrderModalVisible = false;
        this.isOrderModalClosing = false;
      }
    },
    selectOption(option) {
      this.selectedOption = option;
      if (option === 'fullSeason') {
        this.price = 1500;
        this.purchaseLink = 'https://pay.enot.io/widget/d69bdb28-73db-4cda-b330-5953443736e7/link';
        this.time = 'На весь сезон';
        this.changeImg(fullSeason);
      }
    },
  }
};
</script>
  
<style>
</style>
  