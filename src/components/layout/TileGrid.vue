<script setup lang="ts">
import { wintile } from 'web-win-vue';
import 'web-win-vue/style.css'
import { useContentdialogStore } from '@/stores/contentdialog';
import { ref, onMounted } from 'vue'

const copyWriting = {
    'meInfo': '你好!<br>掌握技术栈/语言: Vue3,Python,GDScript,JavaScript(TypeScript)',
    'whyRebuild': '由于旧页面存在众多问题<br>因此重构了该网站',
    'easterEgg': '奇怪的彩蛋<br>这里没有东西',
    'noPage': '这里还没有完工!',
    'notice': '这里还没有完工,因此部分内容可能会缺失~'
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
                <wintile title="Github" @click="goUrl('https://github.com/HHCL233')">
                    <template #icon>
                        <svg width="24" height="24" viewBox="0 0 98 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_730_27126)">
                                <path d="M41.4395 69.3848C28.8066 67.8535 19.9062 58.7617 19.9062 46.9902C19.9062 42.2051 21.6289 37.0371 24.5 33.5918C23.2559 30.4336 23.4473 23.7344 24.8828 20.959C28.7109 20.4805 33.8789 22.4902 36.9414 25.2656C40.5781 24.1172 44.4062 23.543 49.0957 23.543C53.7852 23.543 57.6133 24.1172 61.0586 25.1699C64.0254 22.4902 69.2891 20.4805 73.1172 20.959C74.457 23.543 74.6484 30.2422 73.4043 33.4961C76.4668 37.1328 78.0937 42.0137 78.0937 46.9902C78.0937 58.7617 69.1934 67.6621 56.3691 69.2891C59.623 71.3945 61.8242 75.9883 61.8242 81.252L61.8242 91.2051C61.8242 94.0762 64.2168 95.7031 67.0879 94.5547C84.4102 87.9512 98 70.6289 98 49.1914C98 22.1074 75.9883 6.69539e-07 48.9043 4.309e-07C21.8203 1.92261e-07 -1.9479e-07 22.1074 -4.3343e-07 49.1914C-6.20631e-07 70.4375 13.4941 88.0469 31.6777 94.6504C34.2617 95.6074 36.75 93.8848 36.75 91.3008L36.75 83.6445C35.4102 84.2188 33.6875 84.6016 32.1562 84.6016C25.8398 84.6016 22.1074 81.1563 19.4277 74.7441C18.375 72.1602 17.2266 70.6289 15.0254 70.3418C13.877 70.2461 13.4941 69.7676 13.4941 69.1934C13.4941 68.0449 15.4082 67.1836 17.3223 67.1836C20.0977 67.1836 22.4902 68.9063 24.9785 72.4473C26.8926 75.2227 28.9023 76.4668 31.2949 76.4668C33.6875 76.4668 35.2187 75.6055 37.4199 73.4043C39.0469 71.7773 40.291 70.3418 41.4395 69.3848Z" fill="black"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_730_27126">
                                    <rect width="98" height="96" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </template>
                </wintile>
                <wintile title="bilibili" @click="goUrl('https://space.bilibili.com/1832637844')">
                    <template #icon>
                        <svg width="24" height="24" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                            <image width="512" height="512" x="0" y="0" xlink:href="/b.svg" />
                        </svg>
                    </template>
                </wintile>
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
            <p class="group-grid-title">友情链接</p>
            <div class="group-grid-tiles">
                <wintile title="暂无" @click="setContentDialog('干什么!', copyWriting.noPage)"></wintile>
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

.tile-icon {
    width: 32px;
    height: 32px;
    vertical-align: middle;
    margin-right: 8px;
}
</style>
