# Quasar Twitter Clone (quasar-twitter-clone)

Twitter Clone with Quasar Framework

## Install the dependencies
```bash
npm install
```

## Set your Firebase App Configuration
```bash
// src/boot/firebase.js

const firebaseConfig = {
  apiKey: 'yourApiKey',
  authDomain: 'yourAppName.firebaseapp.com',
  databaseURL: 'https://your-app-name-default-rtdb.firebaseio.com',
  projectId: 'your-app-id',
  storageBucket: 'your-app-id.appspot.com',
  messagingSenderId: 'yourMessagingSenderId',
  appId: 'yourAppId'
}
```

## Change the Collection name if needed (default is 'tweets')
```bash
// src/components/TweetList.vue
db.collection('tweets')
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```


### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.conf.js](https://v1.quasar.dev/quasar-cli/quasar-conf-js).
