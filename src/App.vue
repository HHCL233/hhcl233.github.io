<script setup lang="ts">
import TileGrid from './components/layout/TileGrid.vue';
import { wincontentdialog } from 'web-win-vue';
import { useContentdialogStore } from '@/stores/contentdialog';
import { ref, onMounted } from 'vue'

const contentdialogStore = useContentdialogStore()
const contentDialog = ref(null)

onMounted(() => {
  if (contentDialog.value) {
    contentdialogStore.contentDialog = contentDialog.value
    console.log(111)
  }
})
</script>

<template>
  <div class="start">
    <h1 class="title">开始</h1>
    <div class="tiles">
      <TileGrid />
    </div>
  </div>
  <wincontentdialog ref="contentDialog" :items="[{ 'text': '确定' }, { 'text': '取消' }]" :title="contentdialogStore.title"
    :content="contentdialogStore.content"></wincontentdialog>
</template>

<style>
html,
body,
.app,
.start {
  background-color: #005C9F;
  height: 100%;
  width: 100%;
  overflow-y: hidden;
}
</style>

<style scoped>
.title {
  font-weight: normal;
  font-size: 48px;
  position: fixed;
  top: 48px;
  left: 48px;
  margin: 0;
  color: white;
}

.tiles {
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  margin-left: 48px;
}

* {
  user-select: none;
}
</style>