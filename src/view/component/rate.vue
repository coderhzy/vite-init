<template>
  <div :style="fontStyle">
    <slot></slot>
    <div class="rate" @mouseout="mouseOut">
      <span @mouseover="mouseOver(num)" v-for="num in 5" :key="num">☆</span>
      <span class="hollow" :style="fontWidth">
        <span
          @click="onRate(num)"
          @mouseover="mouseOver(num)"
          v-for="num in 5"
          :key="num"
          >★</span
        >
      </span>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  modelValue: Number,
  theme: {
    type: String,
    default: 'orange',
  },
})

let width = ref(props.modelValue)
function mouseOver(i) {
  width.value = i
}

function mouseOut() {
  width.value = props.modelValue
}

// let rate = computed(() => '★★★★★☆☆☆☆☆'.slice(5 - props.value, 10 - props.value))
const fontWidth = computed(() => `width:${width.value}em;`)

const themeObj = {
  black: '#00',
  white: '#fff',
  red: '#f5222d',
  orange: '#fa541c',
  yellow: '#fadb14',
  green: '#73d13d',
  blue: '#40a9ff',
}

const fontStyle = computed(() => {
  return `color:${themeObj[props.theme]}`
})

let emits = defineEmits(['update:modelValue']) // 定义emit
function onRate(num) {
  emits('update:modelValue', num)
}
</script>

<style lang="scss" scoped>
.rate {
  position: relative;
  display: inline-block;
}

.rate > span.hollow {
  position: absolute;
  display: inline-block;
  top: 0;
  left: 0;
  width: 0;
  overflow: hidden;
}
</style>
