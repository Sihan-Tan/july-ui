<template>
  <button
    class="july-button"
    :class="[
      type ? 'july-button--' + type : '',
      size ? 'july-button--' + size : '',
      {
        'is-disabled': disabled,
        'is-plain': plain,
        'is-round': round,
        'is-light': light
      }
    ]"
    :style="btnStyle"
    @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'JulyButton',
  props: {
    type: {
      // default, primary, success, warning, danger
      type: String,
      default: 'default'
    },
    size: {
      // normal, large, small, mini
      type: String,
      default: 'normal'
    },
    disabled: Boolean,
    plain: Boolean,
    round: Boolean,
    light: Boolean,
    btnStyle: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    handleClick(event) {
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