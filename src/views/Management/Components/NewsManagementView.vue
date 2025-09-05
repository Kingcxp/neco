<script lang="ts" setup>
import NewsList from '@/views/News/NewsList.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const newsId = ref('information')

const userGroup = ref(JSON.parse(localStorage.getItem('userGroup') || '[]'))

const scrollToNews = () => {
  const newsList = document.getElementById('news-list-manage')
  if (newsList) {
    const targetPosition = newsList.offsetTop - 16
    requestAnimationFrame(() => {
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      })
    })
  }
}

const onNewsClick = (id: string) => {
  if (userGroup.value.includes('admin') || userGroup.value.includes('news_admin')) {
    // Edit
  } else {
    const target = router.resolve(`/news/detail/${id}`)
    window.open(target.href, '_blank')
  }
}
</script>

<template>
  <div class="management-tab-title-container">
    <text class="management-tab-title">新闻管理</text>
    <text class="management-tab-subtitle">为什么我 这么弱？</text>
  </div>
  <NewsList
    v-model="newsId"
    id="news-list-manage"
    @need-scroll="scrollToNews"
    @card-click="onNewsClick"
  />
</template>

<style lang="css" scoped></style>
