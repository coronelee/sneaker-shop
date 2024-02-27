<script setup>
import { ref } from 'vue'
const countPages = ref(1)
const succ = ref(false)
</script>
<template>
  <div class="w-screen h-auto bg-white flex justify-center items-center p-10">
    <div class="w-[1180px] h-full bg-[#FFF4EE] rounded p-10 flex flex-col gap-5">
      <span class="text-3xl font-bold text-[#444B58]" v-if="countPages < 4"
        >Мы подберем идеальную пару для вас</span
      >
      <span class="text-[#444B58]" v-if="countPages < 4"
        >Ответьте на три вопроса и мы вышлем каталог с самыми подходящими для вас моделями
      </span>
      <span v-if="countPages === 4" class="text-3xl font-bold text-[#444B58]"
        >Ваша подборка готова!</span
      >
      <span v-if="countPages === 4" class="text-[#444B58]"
        >Оставьте свои контактные данные, чтобы бы мы могли отправить подготовленный для вас
        каталог</span
      >
      <div class="w-full h-px bg-[#444B58]"></div>
      <div v-if="countPages === 1">
        <span class="text-[#444B58] text-2xl">Какой тип кроссовок рассматриваете?</span>
        <div
          class="max-sm:grid-cols-2 grid grid-cols-3 justify-center [&>div>div]:items-center [&>div>div]:justify-center [&>div>div]:flex [&>div>div]:gap-2 items-center [&>div]:gap-2 [&>div]:flex [&>div]:justify-center [&>div]:items-center [&>div]:flex-col [&>div>img]:w-full gap-10 [&>div>div>input]:webkit-appearance-none [&>div>div>input]:outline-none [&>div>div>input]:w-4 [&>div>div>input]:h-4 [&>div>div>input]:cursor-pointer [&>div>div>input]:border [&>div>div>input]:border-[#DBBBA9] [&>div>div>input]:appearance-none"
        >
          <div>
            <img src="/photo.png" alt="" />
            <div><input type="checkbox" class="checked:bg-[#F14F4F]" /> <span>кеды</span></div>
          </div>
          <div>
            <img src="/photo.png" alt="" />
            <div><input type="checkbox" class="checked:bg-[#F14F4F]" /> <span>кеды</span></div>
          </div>
          <div>
            <img src="/photo.png" alt="" />
            <div><input type="checkbox" class="checked:bg-[#F14F4F]" /> <span>кеды</span></div>
          </div>
          <div>
            <img src="/photo.png" alt="" />
            <div><input type="checkbox" class="checked:bg-[#F14F4F]" /> <span>кеды</span></div>
          </div>
          <div>
            <img src="/photo.png" alt="" />
            <div><input type="checkbox" class="checked:bg-[#F14F4F]" /> <span>кеды</span></div>
          </div>
          <div>
            <img src="/photo.png" alt="" />
            <div><input type="checkbox" class="checked:bg-[#F14F4F]" /> <span>кеды</span></div>
          </div>
        </div>
      </div>
      <div v-if="countPages === 2">
        <span class="text-[#444B58] text-2xl">Какой размер вам подойдет?</span>
        <div
          class="flex flex-wrap justify-between w-full mt-5 [&>span>input]:w-4 [&>span>input]:h-4 [&>span>input]:cursor-pointer [&>span>input]:appearance-none [&>span>input]:border [&>span>input]:border-[#DBBBA9] [&>span]:gap-2 [&>span]:flex [&>span]:justify-center [&>span]:items-center"
        >
          <span><input type="checkbox" class="checked:bg-[#F14F4F]" />менее 36</span>
          <span><input type="checkbox" class="checked:bg-[#F14F4F]" />36-38</span>
          <span><input type="checkbox" class="checked:bg-[#F14F4F]" />39-41</span>
          <span><input type="checkbox" class="checked:bg-[#F14F4F]" />42-44</span>
          <span><input type="checkbox" class="checked:bg-[#F14F4F]" />45 и больше</span>
        </div>
        <img src="/2page.png" alt="" class="w-full rounded mt-5" />
      </div>
      <div v-if="countPages === 3" class="flex flex-col">
        <span class="text-[#444B58] text-2xl">Уточните какие-либо моменты</span>
        <textarea name="" id="" cols="30" rows="10" class="p-5 mt-5 text-[#444B58]"></textarea>
      </div>
      <div v-if="countPages === 4" class="flex justify-center items-center">
        <div
          class="flex flex-col w-4/6 max-xl:w-full gap-5 p-5 bg-[#DBBBA9] rounded text-white [&>input]:border [&>input]:border-[#DBBBA9] [&>input]:rounded [&>input]:p-5 [&>input]:outline-none"
        >
          <span class="text-4xl font-bold">Получить предложение</span>
          <span>Получите подборку подходящих для вас моделей на почту</span>
          <input type="text" placeholder="Ваше имя" />
          <input type="text" placeholder="Ваша почта" />
          <button class="bg-[#F14F4F] text-white px-10 py-5 rounded" @click="succ = true">
            Получить предложение
          </button>
        </div>
      </div>
      <div class="h-px bg-[#444B58] w-full" v-if="countPages < 4"></div>
      <div class="flex justify-between" v-if="countPages < 4">
        <span>{{ countPages }} / 3</span>
        <button @click="countPages++">Далее</button>
      </div>
    </div>
  </div>
</template>
