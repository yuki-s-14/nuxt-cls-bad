<script setup lang="ts">
import { ref, onMounted } from 'vue'
const showTopBanner = ref(false)
onMounted(() => {
  // マウント後に「キャンペーンバナー」をファーストビューに注入することをシミュレート
  setTimeout(() => {
    showTopBanner.value = true
  }, 900)
})
</script>

<template>
  <div>
    <!-- 遅延挿入されたトップバナー -> すべてを下に押し下げる -->
    <div v-if="showTopBanner" class="top-banner">
      🚨 本日大セール: このバナーは遅れて表示されました（CLSデモ）
    </div>

    <div class="container">
      <h1>Nuxt 3 – 意図的に悪いCLSデモ</h1>
      <p>
        このページは <strong>CLS (Cumulative Layout Shift)</strong> が悪化するアンチパターンを集めたデモです。
        Lighthouse や Chrome DevTools の Performance / Web Vitals で計測してみてください。
      </p>

      <div class="card">
        <h2>1) 遅延ヒーロー画像（固定サイズなし）</h2>
        <ClientOnly>
          <LateImage />
        </ClientOnly>
        <p>画像の width/height や CSS の aspect-ratio を指定していないため、表示時に大きく動きます。</p>
      </div>
    </div>
  </div>
</template>
