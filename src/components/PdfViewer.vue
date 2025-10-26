<template>
  <div style="overflow: scroll">
    <canvas ref="pdfCanvas"></canvas>

    <div v-if="loading" class="status-message">PDF 加载中...</div>
    <div v-if="error" class="status-message error">{{ error }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import * as pdfjsLib from 'pdfjs-dist'
import type { PDFDocumentProxy, PDFPageProxy } from 'pdfjs-dist'
import type { RenderParameters } from 'pdfjs-dist/types/src/display/api'

pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdfjs/pdf.worker.mjs'

interface Props {
  pdfUrl: string
  scale?: number
  pageNumber?: number
}

const props = withDefaults(defineProps<Props>(), {
  scale: 1.5,
  pageNumber: 1,
})
const pdfCanvas = ref<HTMLCanvasElement | null>(null)
const loading = ref<boolean>(true)
const error = ref<string | null>(null)

const renderPdf = async (url: string, pageNum: number, scale: number) => {
  if (!pdfCanvas.value || !url) {
    error.value = 'PDF 路径无效或 Canvas 元素未准备好。'
    loading.value = false
    return
  }

  loading.value = true
  error.value = null

  const canvas: HTMLCanvasElement = pdfCanvas.value
  const context: CanvasRenderingContext2D | null = canvas.getContext('2d')

  if (!context) {
    error.value = 'Canvas 上下文获取失败。'
    loading.value = false
    return
  }

  try {
    const loadingTask = pdfjsLib.getDocument(url)
    const pdf: PDFDocumentProxy = await loadingTask.promise

    const page: PDFPageProxy = await pdf.getPage(pageNum)

    const viewport = page.getViewport({ scale: scale })

    canvas.height = viewport.height
    canvas.width = viewport.width

    const renderContext = {
      canvasContext: context,
      viewport: viewport,
    }
    await page.render(renderContext as RenderParameters).promise

    loading.value = false

  } catch (err) {
    console.error('Error during PDF rendering:', err)
    error.value = `无法加载或渲染 PDF 文件。详情: ${(err as Error).message || '未知错误'}`
    loading.value = false
  }
}

onMounted(() => {
  renderPdf(props.pdfUrl, props.pageNumber, props.scale)
})

watch([() => props.pdfUrl, () => props.pageNumber, () => props.scale], ([newUrl, newPageNum, newScale]) => {
  renderPdf(newUrl, newPageNum, newScale)
})

</script>

<style scoped>
.status-message {
  padding: 10px;
  text-align: center;
  font-weight: bold;
}
.error {
  color: red;
}
canvas {
  border: 1px solid #ccc;
  display: block;
  margin: 0 auto;
  max-width: 100%;
  height: auto;
}
</style>
