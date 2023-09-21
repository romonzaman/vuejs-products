<script setup>
</script>


<template>
  <div class="flex justify-between items-center bg-blue-700 text-white p-5">

    <router-link to="/">
      <h1 class="">
        LOGO
      </h1>
    </router-link>

  </div>
  <div class="m-10 flex flex-col justify-center items-center">
    <router-view />
  </div>
</template>

<style scoped></style>

