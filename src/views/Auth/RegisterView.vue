<script lang="ts" setup>
import MinecraftButtonClassic from '@/components/utils/MinecraftButtonClassic.vue'
import MinecraftInput from '@/components/utils/MinecraftInput.vue'
import { onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const form = reactive({
  username: '',
  password: '',
  password2: '',
})

const onRegister = async () => {
  console.log(`登录 ${form.username} ${form.password}`)
}

const bgCount = 62
let box: HTMLElement | null = null
const pool: Array<string> = []
const stayTime = 8000
const fadeTime = 400

const nextBg = (first: boolean = false) => {
  if (box == null) {
    return
  }
  if (pool.length === 0) {
    for (let i = 1; i <= bgCount; i++) {
      pool.push(`/mc自然风景背景图-air/${i}.png`)
    }
  }

  const idx = Math.floor(Math.random() * pool.length)
  const url = pool.splice(idx, 1)[0]

  box.style.opacity = '0'
  if (first) {
    box.style.backgroundImage = `url(${url})`
    box.style.opacity = '1'
  }
  setTimeout(() => {
    if (box == null) {
      return
    }
    box.style.backgroundImage = `url(${url})`
    box.style.opacity = '1'

    setTimeout(nextBg, stayTime + fadeTime)
  }, fadeTime)
}

onMounted(() => {
  // 背景轮播
  box = document.getElementById('register-bg')
  nextBg(true)
})
</script>

<template>
  <div id="register-bg"></div>
  <div class="register-area">
    <div class="register-panel mc-border">
      <img class="register-logo" src="/nmo-logo-large.png" />
      <span class="register-title">注册 NMO Ecosystem</span>
      <MinecraftInput class="register-input" v-model="form.username" placeholder="用户名" />
      <MinecraftInput class="register-input" v-model="form.password" placeholder="密码" />
      <MinecraftInput class="register-input" v-model="form.password2" placeholder="确认密码" />
      <div class="button-area">
        <MinecraftButtonClassic class="register-btn" @click="router.replace('/auth/login')"
          >去登录</MinecraftButtonClassic
        >
        <MinecraftButtonClassic class="register-btn" style="margin-left: 2rem" @click="onRegister"
          >注册</MinecraftButtonClassic
        >
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.register-area {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#register-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;

  background-size: cover;
  background-position: center;
  transition: opacity 0.4s ease-in-out;
}

.register-panel {
  background-color: color-mix(in srgb, rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0.8) 80%);
  min-width: 20rem;
  width: 45%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.register-logo {
  width: 10rem;
}

.register-input {
  width: 80%;
  font-size: 1.2rem;
  margin: 0.5rem;
  padding: 0.5rem 0.5rem;
}

.register-title {
  user-select: none;
  font-size: 1.5rem;
  margin: 1rem 0;
}

.register-area input {
  margin-top: 0.5rem;
}

.button-area {
  width: 80%;
  margin-top: 1rem;
  display: flex;
  justify-content: flex-end;
}

.register-btn {
  font-size: 1.2rem;
  width: 8rem;
}
</style>
