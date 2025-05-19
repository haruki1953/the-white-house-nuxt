export const useBodyPopover = () => {
  const popoverStore = usePopoverStore()

  const scrollbarWidthMax = ref(0)
  const scrollbarWidth = computed(() => {
    if (popoverStore.popoverState === 'close') {
      return scrollbarWidthMax.value
    }
    return 0
  })

  onMounted(() => {
    scrollbarWidthMax.value = utilGetScrollbarWidth()
  })

  const hasPopoverOpen = computed(() => {
    if (popoverStore.popoverState !== 'close') {
      return true
    }
    return false
  })
  const hasPopoverOpenMenu = computed(() => {
    if (popoverStore.popoverState === 'menu') {
      return true
    }
    return false
  })
  const hasPopoverOpenSearch = computed(() => {
    if (popoverStore.popoverState === 'search') {
      return true
    }
    return false
  })

  onMounted(() => {
    // 响应式控制body样式
    watchEffect(() => {
      const body = document.body
      body.classList.toggle('has-popover-open', hasPopoverOpen.value)
      body.classList.toggle('has-popover-open--menu', hasPopoverOpenMenu.value)
      body.classList.toggle(
        'has-popover-open--search',
        hasPopoverOpenSearch.value
      )

      body.style.setProperty(
        '--wh-scrollbar-width',
        `${scrollbarWidth.value}px`
      )
      body.style.setProperty(
        '--wh-scrollbar-width-max',
        `${scrollbarWidthMax.value}px`
      )
    })
  })
  return {}
}
