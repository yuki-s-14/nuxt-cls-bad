<script setup lang="ts">
import { ref, onMounted } from 'vue'

const showImage = ref(false)
const showSecondImage = ref(false)

onMounted(() => {
  // 疑似的にネットワーク待機を入れて、画像のDOMを後から挿入
  setTimeout(() => {
    showImage.value = true
  }, 1200)

  // さらに遅れて二枚目を挿入して再度シフトを誘発
  setTimeout(() => {
    showSecondImage.value = true
  }, 1800)
})
</script>

<template>
  <div>
    <p>画像は遅れて挿入されます（固定サイズ指定なし → 強いCLS）。</p>
    <div v-if="showImage">
      <!-- width/height, aspect-ratio を指定しない悪い例 -->
      <img
        src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop"
        alt="Bad CLS demo image"
        style="display:block; max-width:100%; height:auto;"
      />
    </div>

    <div v-if="showSecondImage">
      <!-- 2枚目もサイズ予約なし、さらに上にDOMを挿入して押し下げ -->
      <img
        src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1600&auto=format&fit=crop"
        alt="Another bad CLS demo image"
        style="display:block; max-width:100%; height:auto;"
      />
    </div>
  </div>
  
</template>

<style scoped>
/* 見た目用の余白のみ。サイズ予約はあえてしない */
div {
  margin: 8px 0;
}
</style>


