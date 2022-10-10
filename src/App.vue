<template>
  <IHeaderNav />
  <HomeView />
  <IFooter />
</template>

<script>
import HomeView from './views/HomeView.vue';
import IHeaderNav from './components/I-HeaderNav.vue';
import IFooter from './components/I-Footer.vue';

  export default {
    components: {
    HomeView,
    IHeaderNav,
    IFooter,
}
  }
</script>