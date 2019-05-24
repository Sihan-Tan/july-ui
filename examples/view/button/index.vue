<template>
  <july-page>
    <div class="button-wrap">
      <july-button @click="handleClick">Default </july-button>
      <july-button type="primary">Primary </july-button>
      <july-button type="success">Success </july-button>
      <july-button type="warning">Warning </july-button>
      <july-button type="danger">Danger </july-button>

      <july-button size="large">large</july-button>

      <july-button round size="large" plain type="primary">Default round</july-button>
      <july-button plain type="success">Default round</july-button>
      <july-button plain type="warning">Default round</july-button>

      <july-button plain>Plain Button</july-button>

      <july-button :btnStyle="btnStyle">Custom Button</july-button>
    </div>
  </july-page>
</template>

<script>
export default {
  data () {
    return {
      btnStyle: {
        border: '1px solid #090A0D',
        background: '#584628',
        color: '#F1D024'
      }
    }
  },
  methods: {
    handleClick (...rest) {
      console.log('event', rest)
    }
  }
}
</script>

<style lang="less" scoped>
.button-wrap {
  text-align: center;
  padding: 0 30px;
}
button {
  margin: 20px 0;
}
</style>