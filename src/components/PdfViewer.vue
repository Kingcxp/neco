<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps({
  pdfUrl: {
    type: String,
    required: true,
  },
})

const viewerUrl = computed(() => {
  const encodedPdfUrl = encodeURIComponent(props.pdfUrl)
  return `/pdfjs/web/viewer.html?file=${encodedPdfUrl}`
})
</script>

<template>
  <div class="pdfjs-container">
    <iframe v-if="viewerUrl" :src="viewerUrl" frameborder="0" width="100%" height="100%"></iframe>
    <div v-else>正在加载 PDF ...</div>
  </div>
</template>

<style scoped>
.pdfjs-container {
  width: 100%;
  height: 100vh;
}
</style>
