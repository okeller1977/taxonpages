<template>
  <header class="w-full py-12 bg-base-background text-center">
    <div class="max-w-3xl mx-auto px-4">
      <p v-if="eyebrow" class="text-sm uppercase tracking-wide text-gray-500 mb-2">
        {{ eyebrow }}
      </p>

      <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        {{ title }}
      </h1>

      <p v-if="subtitle" class="text-lg text-gray-600 leading-relaxed">
        {{ subtitle }}
      </p>
    </div>
  </header>
</template>

<script setup>
defineProps({
  eyebrow: String,
  title: {
    type: String,
    required: true
  },
  subtitle: String
})
</script>

<style scoped>
/* Optional: adjust background if your theme uses custom colors */
.bg-base-background {
  background-color: #f9fafb;
}
</style>
