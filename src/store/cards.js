import { defineStore } from 'pinia'
import { getBusinessArea } from '@/api/api'

export const cards = defineStore('cards', {
  state: () => ({ cardsArray: [] }),
  getters: {
    getCardbyId: (state) => (cardId) => 
      state.cards.find((card) => card.id == cardId),
  },
  actions: {
    async fetchCards() {
      let cards = await getBusinessArea();
      cards = cards;
      
      this.cardsArray = cards;
    },
  },
})