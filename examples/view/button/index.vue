<template>
  <july-page>
    <div class="button-wrap">
      <july-button @click="handle">Default Button</july-button>

      <july-button type="disabled">Disabled Button</july-button>

       <july-button-group>
        <july-button inline type="primary" size="mini">Primary-inline Button</july-button>
        <july-button inline type="danger">danger-inline Button</july-button>
      </july-button-group>

      <july-button inline>Inline Button</july-button>

      <july-button plain>Plain Button</july-button>
      <july-button size="large">Inline Button</july-button>
      <july-button-group>
        <july-button size="large">Inline Button</july-button>
        <july-button type="light"
                    :inline="true">Light Button</july-button>
      </july-button-group>

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
    handle (event) {
      console.log('event', event)
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