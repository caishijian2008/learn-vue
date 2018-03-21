<template>
  <div>
    通过bootstrap card组件的按钮获取父级的信息：<br />
    组件的循环：<br />
    <card :type="article.type" @say-title="parent" v-for="(article, index) in this.articles" :key="index">
      <div slot="title"><span v-html="article.title"></span></div>
      <div slot="content">{{article.content}}</div>
      <div v-if="article.author">{{article.author}}</div>
    </card>
  </div>
</template>

<script>
import card from '@/components/day5/slot/card'
export default {
  components: {
    card
  },
  methods: {
    parent (val) {
      alert(val)
    }
  },
  data () {
    return {
      articles: [
        {type: 'primary', title: '<h2>vue</h2>', content: '这是vue的文章', author: '作者：张三'},
        {type: 'warning', title: '<h2>react</h2>', content: '这是react的文章'},
        {type: 'success', title: '<h2>angular</h2>', content: '这是angular的文章', author: '作者：李四'}
      ]
    }
  }
}
</script>

<style scoped>
</style>
