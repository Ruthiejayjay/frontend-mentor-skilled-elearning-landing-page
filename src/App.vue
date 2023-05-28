<template>
  <div id="app" class="lg:min-w-[1000px] md:min-w-[768px] min-w-[640px] box-border font-PlusJakartaSans">
    <section>
      <AppHeader />
      <div class="bg-black text-white md:text-red lg:text-green">
        desktop
      </div>
      <div class="bg-black text-white md:text-red lg:text-green">mobile</div>
      <div class="bg-black text-white md:text-red lg:text-green">tablet</div>
    </section>
    
  </div>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'
</script>

<style>
</style>
