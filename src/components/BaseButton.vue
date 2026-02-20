<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  to?: import('vue-router').RouteLocationRaw
  href?: string
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'secondary' | 'contact' | 'outline' | 'text'
}

const props = withDefaults(defineProps<Props>(), {
  type: 'button',
  variant: 'primary'
})

const isRouterLink = computed(() => !!props.to && !props.href)
const isExternalLink = computed(() => !!props.href)

const baseClasses = 'inline-flex items-center justify-center font-semibold transition-all duration-300'
const variantClasses = computed(() => {
  switch (props.variant) {
    case 'primary':
      return 'rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm text-white shadow-sm hover:bg-indigo-500 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 shadow-indigo-500/50'
    case 'secondary':
      return 'text-sm leading-6 text-white group flex items-center'
    case 'contact':
      return 'bg-indigo-600/90 hover:bg-indigo-500 text-white px-4 py-2 rounded-md text-sm shadow-lg shadow-indigo-500/30'
    case 'outline':
      return 'border border-indigo-500 text-indigo-400 hover:bg-indigo-500/10 px-4 py-2 rounded-md text-sm shadow-sm'
    case 'text':
      return 'text-indigo-400 hover:text-indigo-300 text-sm background-transparent'
    default:
      return ''
  }
})
</script>

<template>
  <router-link
    v-if="isRouterLink"
    :to="to!"
    :class="[baseClasses, variantClasses]"
  >
    <slot />
  </router-link>
  <a
    v-else-if="isExternalLink"
    :href="href"
    :class="[baseClasses, variantClasses]"
    target="_blank"
    rel="noopener noreferrer"
  >
    <slot />
  </a>
  <button
    v-else
    :type="type"
    :class="[baseClasses, variantClasses]"
  >
    <slot />
  </button>
</template>
