<script setup lang="ts">
interface Props {
  to?: string | object
  href?: string
  hoverable?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  hoverable: true
})

const baseClass = 'bg-slate-800 rounded-2xl p-6 border transition-all duration-300'
const hoverClass = props.hoverable ? 'hover:bg-white/5 border-transparent hover:border-white/10 shadow-lg hover:shadow-indigo-500/20' : 'border-slate-700'
</script>

<template>
  <router-link
    v-if="to && !href"
    :to="to"
    :class="[baseClass, hoverClass, 'block']"
  >
    <slot />
  </router-link>
  <a
    v-else-if="href"
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    :class="[baseClass, hoverClass, 'block']"
  >
    <slot />
  </a>
  <div
    v-else
    :class="[baseClass, hoverClass]"
  >
    <slot />
  </div>
</template>
