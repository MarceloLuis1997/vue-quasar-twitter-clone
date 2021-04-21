<template>
  <q-list separator>
    <transition-group
      appear
      enter-active-class="animated fadeIn slow"
      leave-active-class="animated fadeOut slow"
    >
      <q-item
        v-for="tweet in tweets"
        :key="tweet.id"
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
              :color="tweet.liked ? 'pink' : 'grey'"
              :icon="tweet.liked ? 'fas fa-heart' : 'far fa-heart'"
              size="sm"
              flat
              round
              @click="handleLiked(tweet)"
            />
            <q-btn
              color="grey"
              icon="fas fa-trash"
              size="sm"
              flat
              round
              @click="deleteTweet(tweet.id)"
            />
          </div>
        </q-item-section>
      </q-item>
    </transition-group>
  </q-list>
</template>

<script>
import { formatDistance } from 'date-fns'
import db from 'src/boot/firebase'

export default {
  name: 'TweetList',

  data: () => ({
    tweets: []
  }),

  filters: {
    relativeDate (value) {
      return formatDistance(value, new Date())
    }
  },

  methods: {
    addTweetToList (tweet) {
      db.collection('tweets').add(tweet)
    },

    handleLiked (tweet) {
      db.collection('tweets').doc(tweet.id).update({
        liked: !tweet.liked
      })
    },

    deleteTweet (tweetId) {
      db.collection('tweets').doc(tweetId).delete()
    }
  },

  mounted () {
    db
    .collection('tweets')
    .orderBy('date')
    .onSnapshot((snaposhot) => {
      snaposhot.docChanges().forEach((change) => {
        let index = null
        const tweetId = change.doc.id
        const tweetData = change.doc.data()

        switch (change.type) {
          case 'added':
            this.tweets.unshift({ ...tweetData, id: tweetId })
            break
          case 'modified':
            index = this.tweets.findIndex(t => t.id === tweetId)
            Object.assign(this.tweets[index], tweetData)
            break
          case 'removed':
            index = this.tweets.findIndex(t => t.id === tweetId)
            this.tweets.splice(index, 1)
            break
        }
      })
    })
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
