<script setup>
import { ref } from 'vue'

const selectedSize = ref([])

const size = ['35', '36', '37', '38', '39', '40', '41', '42', '43']

const selectSize = (event) => {
  if (!selectedSize.value.includes(event.target.innerText)) {
    selectedSize.value.push(event.target.innerText)
    document.getElementById(event.target.innerText).classList.add('bg-[#F14F4F]')
  } else {
    selectedSize.value.splice(selectedSize.value.indexOf(event.target.innerText), 1)
    document.getElementById(event.target.innerText).classList.remove('bg-[#F14F4F]')
  }
}
</script>

<template>
  <div class="w-screen flex justify-center items-center h-auto">
    <div class="w-[1180px] h-[500px]">
      <h1 class="w-full">Каталог</h1>
      <div class="flex gap-5 text-[#444B58]">
        <div class="w-1/4 bg-[#FFF4EE] flex-col flex p-5">
          <span>Подбор по параметрам</span> <span>Цена руб.</span>
          <div
            class="flex [&>input]:w-1/2 gap-5 [&>input]:bg-transparent [&>input]:outline-none [&>input]:border"
          >
            <input type="text" />
            <input type="text" />
          </div>
          <span>Пол</span>
          <div
            class="flex justify-between [&>div>input]:outline-none [&>div>input]:appearance-none [&>div>input]:w-4 [&>div>input]:h-4 [&>div>input]:cursor-pointer [&>div>input]:rounded-full [&>div>input]:border [&>div>input]:border-[#DBBBA9]"
          >
            <div><input type="checkbox" /> Мужской</div>
            <div><input type="checkbox" /> Женский</div>
          </div>
          <span>Размер</span>
          <div class="grid gap-1 grid-cols-3">
            <span
              v-for="s in size"
              :key="s"
              @click="selectSize($event)"
              :id="s"
              class="cursor-pointer transition border flex justify-center items-center border-[#DBBBA9] p-5"
              >{{ s }}</span
            >
          </div>
          <button class="bg-[#444B58] text-white h-[50px] rounded mt-5">Сбросить</button>
        </div>
        <div class="w-3/4">catalog</div>
      </div>
    </div>
  </div>
</template>
