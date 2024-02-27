<template>
  <div class="w-screen h-auto bg-white py-10 flex justify-center items-center">
    <div
      class="w-[1180px] h-full flex justify-center gap-10 items-center px-10 max-[1100px]:w-full max-[1100px]:flex-col"
    >
      <div
        class="w-2/3 max-[1100px]:w-full h-[400px] bg-[#484283] flex justify-center items-center flex-col p-5 text-center text-white [&>input]:w-full gap-2 [&>input]:p-3 [&>input]:rounded rounded"
      >
        <h1 class="text-3xl font-bold">Есть вопросы?</h1>
        <span>Заполните форму и наш менеджер свяжется с вами</span>
        <input type="text" placeholder="Ваше имя" />
        <input type="text" placeholder="Номер телефона" />
        <button class="w-full bg-[#F14F4F] p-3 rounded">Отправить</button>
      </div>
      <div class="w-2/3 max-[1100px]:w-full flex justify-center items-center flex-col">
        <img src="/inst/logo.png" alt="" />
        <div class="gridCont grid grid-col-4 grid-row-2 gap-[10px]">
          <img src="/inst/inst (1).jpg" alt="" class="grid-area-1" style="grid-area: a" />
          <img src="/inst/inst (2).jpg" alt="" class="grid-area-2" style="grid-area: c" />
          <img src="/inst/inst (3).jpg" alt="" class="grid-area-3" style="grid-area: d" />
          <img src="/inst/inst (4).jpg" alt="" class="grid-area-4" style="grid-area: b" />
          <img src="/inst/inst (5).jpg" alt="" class="grid-area-5" style="grid-area: e" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.gridCont {
  grid-template-areas:
    'a b b c'
    'd b b e';
}
@media (max-width: 640px) {
  .gridCont {
    grid-template-areas:
      'a b b'
      'c b b'
      'd e .';
  }
}
</style>
