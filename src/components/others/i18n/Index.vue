<template>
  <div>
    <h2>国际化，使用vue-i18n插件</h2>
    <p>安装：cnpm install vue-i18n --save</p>
    <p>用法详见：<a href="http://kazupon.github.io/vue-i18n/en/" target="_blank">http://kazupon.github.io/vue-i18n/en/</a></p>
    <br />
    <p>============组件形式的本地化=========================</p>
    <p>{{$t("msg.hello")}}</p>
    <component1></component1>
    <p>=================================================</p>
  </div>
</template>

<script>
const component1 = {
  template: `
    <div class="container">
      <p>Locale message: {{$t("msg.hello")}}</p>
      <p>Fallback global locale message: {{$t("msg.greeting")}}</p>
    </div>
  `,
  i18n: {
    messages: {
      en: {msg: { hello: 'hello component1' }},
      ja: {msg: { hello: 'こんにちは、component1' }},
      zh: {msg: { hello: '你好 component1' }}
    }
  }
}
export default {
  components: {
    component1
  },
  data () {
    return {}
  }
}
</script>

<style scoped>
</style>
