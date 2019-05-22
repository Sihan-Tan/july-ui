<template>
  <button :class="['july-button', typeClass]"
          :style="btnStyle"
          @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'JulyButton',
  props: {
    type: { // default、disabled、light
      type: String,
      default: 'default'
    },
    inline: {
      type: Boolean,
      default: false
    },
    outline: {
      type: Boolean,
      default: false
    },
    btnStyle: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    typeClass () {
      return {
        'july-button-default': this.type === 'default',
        'july-button-disabled': this.type === 'disabled',
        'july-button-light': this.type === 'light',
        'july-button-inline': this.inline,
        'july-button-outline': this.outline
      }
    }
  },
  methods: {
    handleClick (event) {
      if (this.type === 'disabled') {
        event.preventDefault()
        event.stopPropagation()
        return
      }
      this.$emit('click', event)
    }
  }
}
</script>