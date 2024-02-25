<script setup>
import HeaderComponent from './components/HeaderComponent.vue'
import CatalogComponent from './components/CatalogComponent.vue'
import AboutUsComponent from './components/AboutUsComponent.vue'
import TestComponent from './components/TestComponent.vue'
import TeamComponent from './components/TeamComponent.vue'
import QuestionsComponent from './components/QuestionsComponent.vue'
import ContactsComponent from './components/ContactsComponent.vue'
import { ref } from 'vue'

const cartItems = ref([])

const addCartItems = (item) => {
  cartItems.value.push(item)
}
const deleteCartItems = (item) => {
  cartItems.value.splice(cartItems.value.indexOf(item), 1)
}
</script>

<template>
  <h1 class="">
    <HeaderComponent :cartItems="cartItems" :deleteCartItems="deleteCartItems" />
    <CatalogComponent :addCartItems="addCartItems" />
    <AboutUsComponent />
    <TestComponent />
    <TeamComponent />
    <QuestionsComponent />
    <ContactsComponent />
  </h1>
</template>
