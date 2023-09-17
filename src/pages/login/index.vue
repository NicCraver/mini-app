<template>
  <div>login</div>
</template>

<script lang="ts" setup>
import Taro from '@tarojs/taro'
onMounted(() => {
  Taro.hideHomeButton()
})
</script>

<style lang="scss" scoped></style>
