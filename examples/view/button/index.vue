<template>
  <july-page>
    <div class="button-wrap">
      <july-button >Default </july-button>
      <july-button type="primary">Primary </july-button>
      <july-button type="success">Success </july-button>
      <july-button type="warning">Warning </july-button>
      <july-button type="danger">Danger </july-button>
      <july-button type="info">Info </july-button>

      <br>

      <july-button plain >Default </july-button>
      <july-button plain type="primary">Primary </july-button>
      <july-button plain type="success">Success </july-button>
      <july-button plain type="warning">Warning </july-button>
      <july-button plain type="danger">Danger </july-button>
      <july-button plain type="info">Info </july-button>

      <july-button type="primary" round size="large">large</july-button>
      <july-button type="primary" >default</july-button>
      <july-button type="primary" size="small">small</july-button>
      <july-button type="primary" size="mini">mini</july-button>

      <july-button plain round size="large">Default round</july-button>
      <july-button type="danger" plain round >Default round</july-button>
      <july-button type="danger" plain round size="small">Default round</july-button>
      <july-button type="danger" plain round size="mini">Default round</july-button>

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