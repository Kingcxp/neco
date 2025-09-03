<script lang="ts" setup>
const model = defineModel<string>({
  default: '',
})
</script>

<template>
  <input class="minecraft-input" type="text" v-model="model" />
</template>

<style lang="css" scoped>
.minecraft-input {
  letter-spacing: 1px;
  padding: 2px;
  border: 2px solid;
  background-color: #616161;
  color: #fff;
  outline: 2px solid black;
  border-image: url('/UI/text-input.png') 1;
}
</style>
