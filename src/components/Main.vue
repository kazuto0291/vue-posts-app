<template>
  <main class="main-container">
    <TextBox :onPost="addMessage" />
    <div class="devider"></div>
    <MessageList :messages="reversedMessages" />
  </main>
</template>

<script>
import TextBox from './TextBox.vue';
import MessageList from './MessageList';
import MessageModel from '../models/Message';

export default {
  name:'Main',
  components:{
    TextBox,
    MessageList
  },
  data() {
    return {
      messages: []
    }
  },
  computed: {
    reversedMessages() {
      return this.messages.slice().reverse();//sliceを入れることでmessagesのコピーの配列の順番を反転したのを表示する。
    }
  },
  async created() {
    // messageのインスタンスが作成時にデータを取得するためcreatedに処理を書く
    // fetchMessagesが外部のDBにアクセスする処理なのでひ時処理にする
    // 非同期処理のfetchMessageで取得したデータを変数-messagesに代入
    const messages = await this.fetchMessages();//Mainインスタンス内のfetchMessageを実行
    // 取得したmessagesをdetaのmessagesに代入する。
    this.messages =messages;
    this.initialLoaded = true;
  },
  methods: {
    addMessage(message) {
      this.messages.push(message);
    },
    async fetchMessages() {
      let messages = [];
      try {
        messages = await MessageModel.fetchMessages();
      } catch (error) {
        // 読み込み失敗など、何かしらのエラーが発生したらユーザーにデータの読み込みが失敗したことを知らせる
        alert(error.message);
      }
      return messages
    }
  },

}
</script>

<style scoped>
.main-container {
  width: calc(100% - 200px);
  flex: 1;
  position: absolute;
  left: 200px;
  }

  .devider {
    border-top: 10px solid gray;
  }
</style>