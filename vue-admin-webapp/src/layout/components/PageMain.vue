<template>
  <div class="pageMain">
    <transition name="fade-page" mode="out-in">
      <keep-alive>
        <router-link v-if="!$route.meta.noCache"></router-link>
      </keep-alive>
      <router-link v-if="$route.meta.noCache"></router-link>
    </transition>
  </div>
</template>
