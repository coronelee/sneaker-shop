<script setup>
import { ref } from 'vue'
const firstQ = ref(false)
const secondQ = ref(false)
</script>
<template>
  <div class="w-screen h-auto bg-white p-10 flex justify-center items-center text-[#242424]">
    <div class="w-[1180px] h-full flex flex-col">
      <span class="text-3xl font-bold">Часто задаваемые вопросы</span>
      <div class="border-b border-t border-[#242424] mt-5">
        <div class="flex flex-col">
          <div class="p-5">
            <div class="flex justify-between w-full">
              <span class="text-xl text-normal">Вопрос 1</span
              ><button @click="firstQ = !firstQ">{{ firstQ ? '-' : '+' }}</button>
            </div>
            <span v-if="firstQ" class="text-[#24242480]"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit labore pariatur
              laboriosam cum magnam in adipisci, recusandae sed assumenda dignissimos aperiam enim
              explicabo, non dolores quis similique sint. Iste, maiores?</span
            >
          </div>
          <div class="h-px bg-[#242424] w-full"></div>
          <div class="p-5">
            <div class="flex justify-between w-full">
              <span class="text-xl text-normal">Вопрос 2</span
              ><button @click="secondQ = !secondQ">
                {{ secondQ ? '-' : '+' }}
              </button>
            </div>
            <span v-if="secondQ" class="text-[#24242480]"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit labore pariatur
              laboriosam cum magnam in adipisci, recusandae sed assumenda dignissimos aperiam enim
              explicabo, non dolores quis similique sint. Iste, maiores?</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
