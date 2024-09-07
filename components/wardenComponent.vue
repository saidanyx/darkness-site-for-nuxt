<template>
  <div>
    <div class="productModal modal-background" v-if="isModalVisible || isModalClosing" @click="closeModal(true)">
      <section class="moreAboutProduct" @click.stop :class="modalClass" @animationend="endAnimation">
        <button class="close-button" @click="closeModal(true)"><img src="/assets/img/modal-close.svg" alt="крестик для закрытия окна"></button>
        <div class="moreAboutProduct-image">
          <img class="moreAboutProduct-image-img" :src="img" alt="изображение продукта: подписка Warden">
        </div>
        <div class="moreAboutProduct-direction">
          <button @click="closeModal">Главная</button>
          <span>></span>
          <button>Спонсорская подписка Warden</button>
        </div>
        <div class="moreAboutProduct-information">
          <p class="moreAboutProduct-information-title">Спонсорская подписка Warden</p>
          <div class="moreAboutProduct-information-price-section">
            <p class="moreAboutProduct-information-price">{{ price }}₽</p>
            <div class="moreAboutProduct-image-adaptive"><img class="moreAboutProduct-image-img-adaptive" :src="img" alt="изображение продукта: подписка Warden"></div>
            <div class="moreAboutProduct-information-buttons">
              <div class="moreAboutProduct-information-button-adaptive">
                <button @click="selectOption('sevenDays')" :class="{'moreAboutProduct-information-button-selected': selectedOption === 'sevenDays'}" class="moreAboutProduct-information-button option-1">7 дней</button>
                <button @click="selectOption('thirtyDays')" :class="{'moreAboutProduct-information-button-selected': selectedOption === 'thirtyDays'}" class="moreAboutProduct-information-button option-2">30 дней</button>
              </div>
              <button @click="selectOption('fullSeason')" :class="{'moreAboutProduct-information-button-selected': selectedOption === 'fullSeason'}" class="moreAboutProduct-information-button option-3">На весь сезон</button>
            </div>
            <button @click="openOrderModal" class="moreAboutProduct-information-order-button">Заказать</button>
          </div>
        </div>
        <div class="moreAboutProduct-description">
          <p class="moreAboutProduct-description-title">Описание:</p>
          <div class="moreAboutProduct-description-subtitle">
            <p>
              Warden - спонсорская подписка, созданная для того,
              чтобы игроки могли поддержать сервер, на котором они играют.
              При покупке игрок получит следующие бонусы:
            </p>
            <ul>
                <li>Особый значок и приписка в Tab;</li>
                <li>Особая роль на сервере Discord;</li>
                <li>Доступ к команде /hat (надеть предмет на голову);</li>
                <li>Доступ к команде /glow (включить свечение);</li>
                <li>Доступ к команде /spin (вращение);</li>
                <li>Доступ к команде /ec (открыть эндер-сундук);</li>
                <li>Доступ к команде /ct (открыть верстак);</li>
                <li>А так же любовь и уважение от команды проекта.</li>
            </ul>
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
          <button @click="closeOrderModal">Спонсорская подписка Warden</button>
          <span>></span>
          <button>Оплата</button>
        </div>
        <div class="orderProduct-information-container">
          <div class="orderProduct-information">
            <p class="orderProduct-information-title">Спонсорская подписка Warden</p>
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
import hightTicketWardenOneMonth from '~/assets/img/hight_ticket_warden_one_month.png';
import hightTicketWardenOneSeason from '~/assets/img/hight_ticket_warden_one_season.png';
import hightTicketWardenOneWeek from '~/assets/img/hight_ticket_warden_one_week.png';

export default {
  name: 'WardenComponent',
  data() {
    return {
      isModalVisible: false,
      isOrderModalVisible: false,
      isModalClosing: false,
      isOrderModalClosing: false,
      price: 450,
      purchaseLink: 'https://pay.enot.io/widget/d3af213b-9b9f-4267-86b0-49dc2d7dfe98/link',
      time: 'На 30 дней',
      img: hightTicketWardenOneMonth,
      selectedOption: 'thirtyDays', 
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

      if (option === 'sevenDays') {
        this.price = 150;
        this.purchaseLink = 'https://pay.enot.io/widget/6b7f894b-ef55-4b76-a43b-cac3d194661e/link';
        this.time = 'На 7 дней';
        this.changeImg(hightTicketWardenOneWeek);
      } else if (option === 'thirtyDays') {
        this.price = 450;
        this.purchaseLink = 'https://pay.enot.io/widget/d3af213b-9b9f-4267-86b0-49dc2d7dfe98/link';
        this.time = 'На 30 дней';
        this.changeImg(hightTicketWardenOneMonth);
      } else if (option === 'fullSeason') {
        this.price = 1200;
        this.purchaseLink = 'https://pay.enot.io/widget/2db64adb-5224-4958-b0f8-b17e34f47b58/link';
        this.time = 'На весь сезон';
        this.changeImg(hightTicketWardenOneSeason);
      }
    },
    changeImg(newImage) {
      this.animateImageChange(() => {
        this.img = newImage;
      });
      this.animateImageChangeAdaptive(() => {
        this.img = newImage;
      });
    },
    animateImageChange(callback) {
      const imageElement = this.$el.querySelector('.moreAboutProduct-image-img');
      imageElement.classList.add('fade-in-out');
      imageElement.addEventListener('animationend', () => {
        callback();
        imageElement.classList.remove('fade-in-out');
        imageElement.classList.add('fade-in');
      }, { once: true });
    },
    animateImageChangeAdaptive(callback) {
      const imageElementAdaptive = this.$el.querySelector('.moreAboutProduct-image-img-adaptive');
      imageElementAdaptive.classList.add('fade-in-out');
      imageElementAdaptive.addEventListener('animationend', () => {
        callback();
        imageElementAdaptive.classList.remove('fade-in-out');
        imageElementAdaptive.classList.add('fade-in');
      }, { once: true });
    },
  }
};
</script>

<style>
</style>
