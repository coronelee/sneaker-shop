<script setup>
import { ref } from 'vue'
import CartComponent from './CartComponent.vue'
defineProps({
  cartItems: Array,
  deleteCartItems: Function
})
const showCard = ref(false)

const toggleCard = () => {
  showCard.value = !showCard.value
}
</script>

<template>
  <header
    class="h-[550px] w-screen bg-[#484283] flex flex-col justify-center items-center relative"
  >
    <div
      class="w-full h-full absolute flex justify-center items-center text-[200px] text-[#FFFFFF50] family-sans z-0 font-bold"
    >
      SneakMax
    </div>
    <div
      class="flex justify-between items-center w-[1180px] text-white text-base family-sans border-b border-[#FFFFFF50] pt-5 pb-5 absolute top-0 z-20"
    >
      <div class="font-bold text-3xl family-sans">SneakMax</div>
      <div class="flex gap-4 [&>span]:cursor-pointer [&>span]:transition">
        <span class="hover:text-[#F14F4F]" @scroll="">Каталог</span>
        <span class="hover:text-[#F14F4F]">О нас</span>
        <span class="hover:text-[#F14F4F]">Подбор товара</span>
        <span class="hover:text-[#F14F4F]">Наша команда</span>
        <span class="hover:text-[#F14F4F]">Доставка и оплата</span>
        <span class="hover:text-[#F14F4F]">Контакты</span>
        <span class="hover:text-[#F14F4F]" @click="toggleCard">Корзина</span>
      </div>
    </div>
    <div class="w-[1180px] h-full flex flex-col justify-center items-start text-white gap-5 z-10">
      <h1 class="text-2xl font-bold w-2/4">
        Кроссовки известных брендов с доставкой по России и СНГ
      </h1>
      <h2 class="text-xs font-normal w-2/4">
        Мы продаем кроссовки брендов Nike, Adidas, Puma, Reebok, Converse и многие другие по низким
        ценам
      </h2>
      <button class="w-[250px] h-[60px] bg-[#F14F4F] rounded">Перейти к покупкам</button>
    </div>
  </header>
  <component
    v-if="showCard"
    :is="CartComponent"
    :cartItems="cartItems"
    :toggleCard="toggleCard"
    :deleteCartItems="deleteCartItems"
  />
</template>
