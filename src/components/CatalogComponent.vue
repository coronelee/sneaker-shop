<script setup>
defineProps({
  addCartItems: Function
})
import { ref } from 'vue'

const selectedSize = ref(['35', '36', '37', '38', '39', '40', '41', '42', '43'])
const size = ['35', '36', '37', '38', '39', '40', '41', '42', '43']
const minPrice = ref(8499)
const maxPrice = ref(16499)
const selectedGender = ref(['male', 'female'])
const sneakers = ref([
  {
    name: 'Мужские Кроссовки Nike Air Force 1 "07 QS"',
    price: 12999,
    img: '/sneakers/sneaker (1).svg',
    size: '36',
    gender: 'male'
  },
  {
    name: 'Мужские Кроссовки Nike Air Max 270',
    price: 8499,
    img: '/sneakers/sneaker (2).svg',
    size: '37',
    gender: 'male'
  },
  {
    name: 'Женские Кроссовки Nike Blazer Mid Suede',
    price: 8999,
    img: '/sneakers/sneaker (3).svg',
    size: '38',
    gender: 'female'
  },
  {
    name: 'Мужские Кроссовки Puma X Aka Boku Future Rider',
    price: 11299,
    img: '/sneakers/sneaker (4).svg',
    size: '39',
    gender: 'male'
  },
  {
    name: 'Женские Кроссовки Under Armour Curry 8',
    price: 15199,
    img: '/sneakers/sneaker (5).svg',
    size: '38',
    gender: 'female'
  },
  {
    name: 'Женские Кроссовки Nike Kyrie 7',
    price: 11299,
    img: '/sneakers/sneaker (6).svg',
    size: '40',
    gender: 'female'
  },
  {
    name: 'Женские Кроссовки Jordan Air Jordan 11',
    price: 10799,
    img: '/sneakers/sneaker (7).svg',
    size: '38',
    gender: 'female'
  },
  {
    name: 'Мужские Кроссовки Nike LeBron XVIII',
    price: 16499,
    img: '/sneakers/sneaker (8).svg',
    size: '38',
    gender: 'male'
  },
  {
    name: 'Мужские Кроссовки Nike Lebron XVIII Low',
    price: 13999,
    img: '/sneakers/sneaker (9).svg',
    size: '38',
    gender: 'male'
  }
])
const filteredItems = ref(sneakers.value)

const selectGenders = (event) => {
  if (!selectedGender.value.includes(event)) {
    selectedGender.value.push(event)
  } else if (selectedGender.value.includes(event)) {
    selectedGender.value.splice(selectedGender.value.indexOf(event), 1)
  }
}

const filter = () => {
  if (selectedSize.value.length === 0) {
    return sneakers.value
  } else {
    filteredItems.value = sneakers.value.filter((item) => selectedSize.value.includes(item.size))
    filteredItems.value = filteredItems.value.filter(
      (item) => item.price >= minPrice.value && item.price <= maxPrice.value
    )
    filteredItems.value = filteredItems.value.filter((item) =>
      selectedGender.value.includes(item.gender)
    )
  }
}
const selectSize = (event) => {
  if (!selectedSize.value.includes(event.target.innerText)) {
    selectedSize.value.push(event.target.innerText)
    document.getElementById(event.target.innerText).classList.add('bg-[#F14F4F1a]')
  } else {
    selectedSize.value.splice(selectedSize.value.indexOf(event.target.innerText), 1)
    document.getElementById(event.target.innerText).classList.remove('bg-[#F14F4F1a]')
  }
}
</script>

<template>
  <div class="w-screen flex justify-center items-center h-auto">
    <div class="w-[1180px] h-auto">
      <h1 class="w-full text-3xl mt-10 mb-10 max-xl:px-10">Каталог</h1>
      <div class="flex gap-5 text-[#444B58] max-xl:flex-col max-xl:px-10">
        <div
          class="w-1/4 bg-[#FFF4EE] flex-col flex p-5 h-auto max-h-[450px] max-xl:flex-row max-xl:w-[500px] max-xl:gap-5 max-[580px]:flex-col max-[580px]:w-[300px] max-[580px]:max-h-[600px] max-[380px]:w-full"
        >
          <div class="flex flex-col">
            <span>Подбор по параметрам</span> <span>Цена руб.</span>
            <div
              class="flex [&>input]:w-1/2 gap-5 [&>input]:bg-transparent [&>input]:outline-none [&>input]:border max-xl:flex-col max-xl:[&>input]:w-full"
            >
              <input
                type="text"
                @input="(minPrice = $event.target.value), filter()"
                :defaultValue="minPrice"
              />
              <input
                type="text"
                @input="(maxPrice = $event.target.value), filter()"
                :defaultValue="maxPrice"
              />
            </div>
            <span>Пол</span>
            <div
              class="flex justify-between [&>div>input]:w-4 [&>div>input]:h-4 [&>div>input]:cursor-pointer [&>div>input]:rounded-full [&>div>input]:border [&>div>input]:border-[#DBBBA9]"
            >
              <div>
                <input type="checkbox" @click="selectGenders('male'), filter()" checked /> Мужской
              </div>
              <div>
                <input type="checkbox" @click="selectGenders('female'), filter()" checked /> Женский
              </div>
            </div>
          </div>
          <div>
            <span>Размер</span>
            <div class="grid gap-1 grid-cols-3">
              <span
                v-for="s in size"
                :key="s"
                @click="selectSize($event), filter()"
                :id="s"
                class="cursor-pointer transition border flex justify-center items-center border-[#DBBBA9] p-5 bg-[#F14F4F1a]"
                >{{ s }}</span
              >
            </div>
          </div>
          <button
            class="bg-[#444B58] text-white h-[50px] rounded mt-5 px-5 hover:brightness-90"
            @click="
              (filteredItems = sneakers),
                (selectedSize = ['35', '36', '37', '38', '39', '40', '41', '42', '43']),
                (selectedGender = ['male', 'female']),
                (minPrice = 8499),
                (maxPrice = 16499),
                filter()
            "
          >
            Сбросить
          </button>
        </div>
        <div class="w-3/4 grid grid-cols-3 gap-5 max-xl:w-full max-[580px]:grid-cols-2">
          <span
            v-for="s in filteredItems"
            :key="s"
            class="flex justify-between flex-col relative border border-[#cccccc50] rounded p-2 hover:shadow-lg transition"
          >
            <img
              src="/add-cart.svg"
              alt=""
              class="absolute top-5 left-5 w-1/6 h-1/6 cursor-pointer"
              @click="addCartItems(s)"
            />
            <img :src="s.img" alt="sneaker" class="w-full" />
            <div class="flex flex-col justify-end align-end">
              <span class="font-normal text-[#444B58]">{{ s.name }}</span>
              <span class="text-[#444B58] font-bold">{{ s.price }} ₽</span>
            </div>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
