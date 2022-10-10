<template>
  <main>
    <section class="hero">
      <div class="hero-container">
        <div class="column">
          <div class="column-content">
            <h1 class="content-h1">
              Creating <span class="content-span">Engaging</span>
              Content
            </h1>
            <p class="content-p content-p-setting">
              Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit, sed diam nonum nibhie euismod.
            </p>
            <IButton 
            href="#1"
            label="LEARN MORE"
            firsttype="primary-button"
            />
            <IButton
            href="#1"
            label="CONTACT US"
            firsttype="second-button"
            />
          </div>
        </div>
        <div class="column">
          <img src="/img/image-landing-2-folder.png" class="column-image">
          <img src="/img/image-landing-2-folder-right.png" class="column-image-2">
        </div>
      </div>
    </section>
    <section class="asks">
      <div class="asks-container">
        <div class="asks-container-left">
         <IQuestions :question="querys.whatabout" />
        </div>
        <div class="asks-container-right">
          <IQuestions :question="querys.whoWeAre" />
        </div>
      </div>
    </section>
    <section class="logos">
      <ILogos />
    </section>
    <section class="easy-find">
      <div class="easy-container">
        <div class="easy-container-left">
          <ITwoTypes :text="texts.easily" />
          <table class="easy-table">
            <tr>
              <td>
                <h4 style="color: #6272c7;" class="container-h4">
                  <img src="/icons/icon-like.png" alt="icon" class="easy-icon">
                  Acquire New Customer
                </h4>
                <hr style="opacity: 0.2;">
                <p class="easy-container-p-table">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <hr style="opacity: 0.2;">
                <h4 class="container-h4">
                  <img src="/icons/icon-lightbulb.png" alt="icon" class="easy-icon">
                  Engage Users
                </h4>
                <hr style="opacity: 0.2;">
                <h4 class="container-h4">
                  <img src="/icons/icon-device-tablet.png" alt="icon" class="easy-icon">
                  Accross Platforms
                </h4>
              </td>
            </tr>
          </table>
        </div>
        <div class="easy-container-right">
          <img src="/img/image-landing-2-dektop.png" alt="Computer" class="easy-container-column-image">
        </div>
      </div>
    </section>
    <section class="start-working">
      <div class="start-working-container">
        <div class="working-container-left">
          <img src="/img/image-landing-2-mobile.png" alt="Plan" class="start-working-container-image">
        </div>
        <div class="working-container-right">
          <div>
            <ITwoTypes :text="texts.working" />
          <IButton 
          href="#9" 
          label="CONTACT US"
          firsttype="container-button primary-button"
           />
          </div>
        </div>
      </div>
    </section>
    <section class="understand-audience">
      <div class="audience-contener">
        <ITwoTypes :text="texts.understand" />
      </div>
    </section>
    <section class="column-section">
      <div class="section-generally">
        <ICards />
      </div>
    </section>
    <section class="start-growing">
      <div class="start-growing-container">
        <div class="growing-container-left">
          <ITwoTypes :text="texts.growing" />
          <IButton
          href="#1"
          firsttype="container-button"
          label="CONTACT US"
          />
        </div>
        <div class="growing-container-right">
          <img src="/img/image-landing-2-money.png" alt="Money" class="growing-container-image">
        </div>
      </div>
    </section>
    <section class="latest-posts">
      <div class="posts-contener">
        <ITwoTypes :text="texts.posts" />
      </div>
    </section>
    <section class="info">
      <div class="info-container">
        <IInfo v-for="info in articlesArray" :info="info" />
      </div>
    </section>
    <section class="before-footer">
      <div class="your-website">
        <h2 class="container-h2 before-footer-h2">
          Start Your Website Now With Milu!
        </h2>
        <a href="#STARTNOW" class="container-button button-100precent">
          START NOW
        </a>
      </div>
    </section>
  </main>
</template>

<script>
import ILogo from '../components/I-Logo.vue';
import IButton from '../components/I-Button.vue';
import ICards from '../components/I-Cards.vue';
import IQuestions from '../components/I-Questions.vue';
import ILogos from '../components/I-Logos.vue';
import IInfo from "../components/I-Info.vue";
import { texts } from "../mockup";
import { querys } from "../mockup";
import ITwoTypes from '../components/I-TwoTypes.vue';
import { getPosts } from '../api/api';
import { articles } from "../store/articles";
import { mapActions, mapState } from "pinia";

  export default {
    name: "HomeView",
    data() {
    return { texts, querys, posts: undefined  };
  },
  computed: {
    ...mapState(articles, ["articlesArray"]),
  },
  methods: {
    ...mapActions(articles, ["fetchArticles"]),
  },
  async mounted(){
    this.fetchArticles();
    this.posts = await getPosts();
    this.posts = this.posts.data;

    },
    components: {
    ILogo,
    IButton,
    ICards,
    IQuestions,
    ILogos,
    ITwoTypes,
    IInfo,
},
  };
</script>