import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default new VueI18n({
  locale: 'ja',
  messages: {
    en: {
      msg: {
        hello: 'hello world!',
        greeting: 'good morning'
      }
    },
    ja: {
      msg: {
        hello: 'こんにちは、世界',
        greeting: 'おはようございます'
      }
    },
    zh: {
      msg: {
        hello: '你好，世界',
        greeting: '早上好'
      }
    }
  }
})
