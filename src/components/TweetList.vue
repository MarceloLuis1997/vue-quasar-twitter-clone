<template>
  <q-list separator>
    <transition-group
      appear
      enter-active-class="animated fadeIn slow"
      leave-active-class="animated fadeOut slow"
    >
      <q-item
        v-for="(tweet, i) in tweets"
        :key="i"
        class="q-py-md tweet-item"
      >
        <q-item-section avatar top>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar4.jpg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-subtitle1">
            <strong>John Doe</strong>
            <span class="text-grey-7">
              @john_doe
              <br class="lt-md" />
              &bull; {{ tweet.date | relativeDate }}
            </span>
          </q-item-label>
          <q-item-label class="tweet-content text-body1">
            {{ tweet.content }}
          </q-item-label>

          <div class="row justify-between q-mt-sm tweet-icons">
            <q-btn
              color="grey"
              icon="far fa-comment"
              size="sm"
              flat
              round
            />
            <q-btn
              color="grey"
              icon="fas fa-retweet"
              size="sm"
              flat
              round
            />
            <q-btn
              color="grey"
              icon="far fa-heart"
              size="sm"
              flat
              round
            />
            <q-btn
              color="grey"
              icon="fas fa-trash"
              size="sm"
              flat
              round
              @click="deleteTweet(i)"
            />
          </div>
        </q-item-section>
      </q-item>
    </transition-group>
  </q-list>
</template>

<script>
import { formatDistance } from 'date-fns'

import Tweets from '../resources/tweets'

export default {
  name: 'TweetList',

  data: () => ({
    tweets: Tweets
  }),

  methods: {
    addTweetToList (tweet) {
      this.tweets.unshift(tweet)
    },

    deleteTweet (index) {
      this.tweets.splice(index, 1)
    }
  },

  filters: {
    relativeDate (value) {
      return formatDistance(value, new Date())
    }
  }
}
</script>

<style lang="sass">
.tweet-content
  white-space: pre-line

.tweet-icons
  margin-left: -5px

.tweet-item:not(:first-child)
  border-top: 1px solid rgba(0, 0, 0, 0.12)
</style>
