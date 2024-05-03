<script setup lang="ts">
</script>

<template>
    <h2>Home page</h2>
</template>

<style lang="scss" scoped>

    h2 {
        color: $color-primary;

      @include -lower(md) {
        color: $color-secondary;
      }

        @include -lower(sm) {
            color: $color-tertiary;
        }
    }
</style>
