<script setup>
import { ref } from 'vue'
defineProps({
  cardItems: Array,
  toggleCard: Function
})
</script>
<template>
  <div
    class="h-screen w-screen bg-[#444B58B2] z-30 absolute top-0 left-0 flex justify-center items-center"
  >
    <div class="w-[580px] h-auto bg-white p-10 gap-5 flex flex-col">
      <div class="flex justify-between w-full gap-10">
        <span class="font-bold text-[#444B58]">Оформление заказа</span
        ><span class="text-[#B2B5BB]">Заказ 3456 67</span>
      </div>
      <div class="flex justify-between w-full flex-col border border-[#D9D9D9] rounded p-5">
        <span>Товаров в корзине: {{ cardItems.length }} шт.</span>
        <span>Общая стоимость: ₽</span>
        <span>Состав заказа: </span>
        <span v-for="item in cardItems" :key="item">{{ item }}</span>
      </div>
      <div
        class="flex justify-between w-full flex-col [&>input]:family-sans [&>input]:outline-none [&>input]:border-none [&>input]:bg-[#F6F6F6] [&>input]:w-full gap-5 [&>input]:h-[50px] [&>input]:rounded [&>input]:p-5 [&>input]:text-[#B2B5BB]"
      >
        <input type="text" placeholder="Ваше Имя" />
        <input type="text" placeholder="Номер телефона" />
        <input type="text" placeholder="E-mail" />
        <div
          class="flex justify-between w-full [&>button]:bg-[#F14F4F] [&>button]:text-white [&>button]:rounded [&>button]:px-5 [&>button]:py-2 [&>button]:transition"
        >
          <button class="hover:brightness-90">Оформить заказ</button>
          <button class="hover:brightness-90" @click="toggleCard">Отменить</button>
        </div>
      </div>
    </div>
  </div>
</template>
