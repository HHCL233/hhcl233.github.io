<script setup lang="ts">
import { wintile } from 'web-win-vue';
import 'web-win-vue/style.css'
import { useContentdialogStore } from '@/stores/contentdialog';

const copyWriting = {
    'meInfo': '你好!<br>掌握技术栈/语言: Vue3,Python,GDScript,JavaScript(TypeScript)',
    'whyRebuild': '由于旧页面存在众多问题<br>因此重构了该网站',
    'easterEgg': '奇怪的彩蛋<br>这里没有东西'
}
const contentdialogStore = useContentdialogStore()
function setContentDialog(title: string, content: string) {
    contentdialogStore.title = title
    contentdialogStore.content = content
    contentdialogStore.showContentDialog()
}

function goUrl(url: string) {
    window.open(url)
}
</script>

<template>
    <div class="tile-grid">
        <div id="introduction-grid" class="group-grid">
            <p class="group-grid-title">个人信息</p>
            <div class="group-grid-tiles">
                <wintile title="Github" @click="goUrl('https://github.com/HHCL233')"></wintile>
                <wintile title="bilibili" @click="goUrl('https://space.bilibili.com/1832637844')"></wintile>
                <wintile title="个人简介" @click="setContentDialog('个人简介', copyWriting.meInfo)"></wintile>
                <wintile title="?" @click="setContentDialog('?', copyWriting.easterEgg)"></wintile>
            </div>
        </div>
        <div id="other-grid" class="group-grid">
            <p class="group-grid-title">其他信息</p>
            <div class="group-grid-tiles">
                <wintile title="为什么要重构个人主页?" @click="setContentDialog('个人简介', copyWriting.whyRebuild)"></wintile>
            </div>
        </div>
        <div id="introduction-grid" class="group-grid">
            <p class="group-grid-title">相关页面</p>
            <div class="group-grid-tiles">
                <wintile title="HHCL233 的图库" @click="goUrl('https://hhcl233.github.io/hhcl233-gallery/')"></wintile>
            </div>
        </div>
    </div>
</template>

<style scoped>
.tile-grid {
    height: auto;
    width: 100%;
    display: flex;
    gap: 16px;
    color: white;
    min-width: 100%;
    height: auto;
}

.group-grid-tiles {
    display: grid;
    gap: 8px;
    grid-template-rows: auto auto;
    grid-auto-columns: auto;
    grid-auto-flow: column;
    min-width: 100%;
}

.group-grid-title {
    margin: 8px 0;
    font-size: larger;
}
</style>
