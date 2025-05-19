export const useHeaderSticky = () => {
  const scroll = useWindowScroll()
  const hasStickyHeader = computed(() => {
    if (scroll.y.value > 250) {
      return true
    }
    return false
  })
  onMounted(() => {
    // 响应式控制body样式
    watchEffect(() => {
      const body = document.body
      body.classList.toggle('has-sticky-header', hasStickyHeader.value)
    })
  })
  return {}
}
