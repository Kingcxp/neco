<script lang="ts" setup>
import MinecraftButtonClassic from '@/components/utils/MinecraftButtonClassic.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const logout = () => {}
</script>
<template>
  <div class="management-area">
    <div class="management-menu">
      <img class="management-logo" src="/nmo-logo-large.png" />
      <span class="management-title">NMO - 管理后台</span>
      <MinecraftButtonClassic class="management-nav" @click="router.replace('/management/user')">用户管理</MinecraftButtonClassic>
      <MinecraftButtonClassic class="management-nav" @click="router.replace('/management/club')">社团管理</MinecraftButtonClassic>
      <MinecraftButtonClassic class="management-nav" @click="router.replace('/management/server')">服务器信息</MinecraftButtonClassic>
      <MinecraftButtonClassic class="management-nav" @click="router.replace('/management/activity')">活动管理</MinecraftButtonClassic>
      <MinecraftButtonClassic class="management-nav" @click="router.replace('/management/news')">新闻管理</MinecraftButtonClassic>

      <div style="display: flex; flex-direction: column; margin-top: auto">
        <MinecraftButtonClassic class="management-nav" @click="router.push('/auth/account')">我的账号</MinecraftButtonClassic>
        <MinecraftButtonClassic class="management-nav" @click="logout">登出</MinecraftButtonClassic>
      </div>
    </div>
    <RouterView/>
  </div>
</template>
<style lang="css" scoped>
.management-area {
  width: 100%;
  height: 100vh;
  display: flex;
}

.management-menu {
  display: flex;
  flex-direction: column;
  width: 16rem;
  padding: 2rem 1rem;
  border-right: 1px solid var(--minecraft-gray-light);
}

.management-logo {
  margin: 0 auto;
  width: 70%;
  height: auto;
}

.management-title {
  user-select: none;
  font-size: 1.5rem;
  color: white;
  margin: 1rem auto;
}

.management-nav {
  margin-top: 0.5rem;
  font-size: 1.2rem;
}
</style>
