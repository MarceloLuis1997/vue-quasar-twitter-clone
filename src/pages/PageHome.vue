<template>
  <q-page>
    <div class="q-py-lg q-px-md row items-end q-col-gutter-md">
      <div class="col">
        <q-input bottom-slots autogrow v-model="newTweetContent" placeholder="What's happening?" counter maxlength="280" class="new-tweet-text">
          <template v-slot:before>
            <q-avatar size="xl">
              <img src="https://cdn.quasar.dev/img/avatar4.jpg">
            </q-avatar>
          </template>
        </q-input>
      </div>
      <div class="col col-shrink">
        <q-btn unelevated no-caps rounded color="primary" label="Tweet" class="q-mb-lg" :disable="!newTweetContent" @click="addNewTweet" />
      </div>      
    </div>

    <q-separator size="10px" color="grey-2" class="tweet-divider" />

    <TweetList ref="tweetList" />
  </q-page>
</template>

<script>
import TweetList from '../components/TweetList'

export default {
  name: 'PageHome',

  components: {
    TweetList
  },

  data: () => ({
    newTweetContent: ''
  }),

  methods: {
    addNewTweet () {
      const newTweet = {
        content: this.newTweetContent,
        date: Date.now()
      }

      this.$refs.tweetList.addTweetToList(newTweet)
      this.newTweetContent = ''
    }
  }
}
</script>

<style lang="sass">
.new-tweet-text
  textarea
    font-size: 19px
    line-height: 1.4 !important

.tweet-divider
  border-top: 1px solid
  border-bottom: 1px solid
  border-color: $grey-4
</style>
