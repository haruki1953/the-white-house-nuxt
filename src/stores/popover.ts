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

    // 各级菜单激活项的标记
    type MenuMarkType = {
      // 单一项或可展开
      type: 'item' | 'sub'
      // 项的随机字符串
      item: string
    }
    // const menuActiveLevel1 = ref<string | null>(null)
    // const menuActiveLevel2 = ref<string | null>(null)
    // const menuActiveLevel3 = ref<string | null>(null)
    const menuActiveLevel1 = ref<MenuMarkType | null>(null)
    const menuActiveLevel2 = ref<MenuMarkType | null>(null)
    const menuActiveLevel3 = ref<MenuMarkType | null>(null)

    const getMenuActiveLevel = (level: number) => {
      if (level === 1) {
        return menuActiveLevel1
      } else if (level === 2) {
        return menuActiveLevel2
      } else {
        return menuActiveLevel3
      }
    }
    // 判断菜单项激活
    const isMenuItemActive = (level: number, item: string) => {
      if (item === getMenuActiveLevel(level).value?.item) {
        return true
      }
      return false
    }
    const hasMenuItemActive = (level: number) => {
      if (getMenuActiveLevel(level).value != null) {
        return true
      }
      return false
    }
    // 设置菜单项激活
    const setMenuItenActive = (
      level: number,
      item: string | null,
      type: 'item' | 'sub' = 'item'
    ) => {
      if (item == null) {
        getMenuActiveLevel(level).value = null
        return
      }
      getMenuActiveLevel(level).value = {
        item,
        type
      }
    }

    // 当前菜单级数
    const menuSubLevel = computed(() => {
      if (getMenuActiveLevel(2).value?.type === 'sub') {
        return 2
      } else if (getMenuActiveLevel(1).value?.type === 'sub') {
        return 1
      } else {
        return 0
      }
    })
    // 菜单状态切换（关闭或打开）时重置各级菜单激活项的标记
    watch(popoverState, () => {
      menuActiveLevel1.value = null
      menuActiveLevel2.value = null
      menuActiveLevel3.value = null
    })
    watch(menuActiveLevel1, () => {
      menuActiveLevel2.value = null
      menuActiveLevel3.value = null
    })
    watch(menuActiveLevel2, () => {
      menuActiveLevel3.value = null
    })

    return {
      popoverState,
      setPopoverClose,
      setPopoverMenu,
      setPopoverSearch,
      isMenuItemActive,
      hasMenuItemActive,
      setMenuItenActive,
      menuSubLevel
    }
  },
  {
    persist: true // 持久化
  }
)
