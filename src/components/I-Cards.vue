<template>
<ICard v-for="card in cardsArray" :card="card" />
</template>
<script>
  import ICard from '../components/I-Card.vue'
  import { cards } from "../store/cards";
  import { mapActions, mapState } from "pinia";
  
  export default {
  name: "ICards",
  components: {ICard},
  computed: {
    ...mapState(cards, ["cardsArray"]),
  },
  methods: {
    ...mapActions(cards, ["fetchCards"]),
  },
  async mounted() {
    this.fetchCards();
  },
};
</script>