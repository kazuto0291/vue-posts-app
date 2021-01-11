# vue-posts-app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


全体連絡：Geneal.vue
雑談：Chat.vue
自己紹介：SelfIntroduction.vue


Firestoreの構成を修正する
  - channels(collection)
    - general(doc)
      - name(field):全体連絡
        - id: (ランダム値)
          - メッセージデータ１(doc)
        - id: (ランダム値)
          - メッセージデータ1(doc)
        - id: (ランダム値)
          - メッセージデータ1(doc)
    - Chat
      - name(field): 雑談部屋
      - message(collection)
    - self-introduction
     - name(field): 自己紹介
     - message(collection)