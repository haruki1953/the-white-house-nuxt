export const usePopoverStore = defineStore(
  'whitehouse-popover',
  () => {
    // 弹出框有三种状态 关闭|作为菜单打开|作为搜索打开
    const popoverStateMark = ref<'close' | 'menu' | 'search'>('close')
    // 作为computed导出popoverState，以此不让popoverStateMark被持久化
    const popoverState = computed(() => {
      return popoverStateMark.value
    })

    const setPopoverClose = () => {
      popoverStateMark.value = 'close'
    }
    const setPopoverMenu = () => {
      popoverStateMark.value = 'menu'
    }
    const setPopoverSearch = () => {
      popoverStateMark.value = 'search'
    }

    return {
      popoverState,
      setPopoverClose,
      setPopoverMenu,
      setPopoverSearch
    }
  },
  {
    persist: true // 持久化
  }
)
