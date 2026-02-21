import { ref } from 'vue'
import { defineStore } from 'pinia'

interface ContentDialog {
    showDialog: () => void;
}

export const useContentdialogStore = defineStore('contentdialog', () => {
    const content = ref('')
    const title = ref('')
    const contentDialog = ref<ContentDialog | null>(null)

    function showContentDialog() {
        if (contentDialog.value) {
            contentDialog.value.showDialog();
        }
    }

    return { content, title, contentDialog, showContentDialog }
})