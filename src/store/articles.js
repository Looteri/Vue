import { defineStore } from 'pinia'
import { getArticles } from '@/api/api'

export const articles = defineStore('articles', {
  state: () => ({ articlesArray: [] }),
  getters: {
    getArticlebyId: (state) => (articleId) => 
      state.articles.find((article) => article.id == articleId),
  },
  actions: {
    async fetchArticles() {
      let articles = await getArticles();
      articles = articles;
      
      this.articlesArray = articles;
    },
  },
})