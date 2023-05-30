<template>
  <div class="lg:min-w-[1000px] md:min-w-[768px] min-w-[640px] box-border font-PlusJakartaSans">
    <section>
      <AppHeader />
      <AppHero />
      <AppContent />
      <AppFooter />
    </section>
    
  </div>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'
import AppHero from './components/AppHero.vue';
import AppContent from './components/AppContent.vue';
import AppFooter from './components/AppFooter.vue';
</script>

<style>
</style>
