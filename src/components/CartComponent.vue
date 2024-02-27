<script setup>
const props = defineProps({
  cartItems: Array,
  toggleCard: Function,
  deleteCartItems: Function
})
import { onMounted, ref } from 'vue'
const resultPrice = ref(0)
onMounted(() => {
  editResultPrice()
})
const editResultPrice = () => {
  resultPrice.value = props.cartItems.reduce((a, b) => a + b.price, 0)
}
</script>
<template>
  <div
    class="h-screen w-screen bg-[#444B58B2] z-40 absolute top-0 left-0 flex justify-center items-center transition-all duration-300 overflow-y-hidden no-scrollbar"
  >
    <div class="w-auto h-auto bg-white p-10 rounded">
      <div v-if="cartItems.length === 0" class="flex flex-col justify-center align-center">
        <span class="text-[#444B58] text-center w-full">Корзина пуста :(</span>
        <div class="flex justify-center align-center w-full">
          <img src="/empty-cart.svg" alt="empty-cart" class="w-[200px]" />
        </div>

        <button class="hover:brightness-90" @click="toggleCard">Закрыть</button>
      </div>
      <div v-if="cartItems.length > 0" class="gap-5 flex flex-col">
        <div class="flex justify-between w-full gap-10">
          <span class="font-bold text-[#444B58]">Оформление заказа</span
          ><span class="text-[#B2B5BB]">Заказ 3456 67</span>
        </div>
        <div class="flex justify-between w-full flex-col border border-[#D9D9D9] rounded p-5">
          <span>Товаров в корзине: {{ cartItems.length }} шт.</span>
          <span>Общая стоимость: {{ resultPrice }} ₽</span>
          <span>Состав заказа: </span>
          <span
            v-for="item in cartItems"
            :key="item"
            class="flex justify-between align-center gap-2"
          >
            <img :src="item.img" alt="item" class="h-[70px] w-1/5" />
            <div class="flex flex-col justify-center align-center w-3/5">
              <span>{{ item.name }}</span
              ><span>{{ item.price }}</span>
            </div>
            <button class="w-1/5" @click="deleteCartItems(item), editResultPrice()">Удалить</button>
          </span>
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
  </div>
</template>
