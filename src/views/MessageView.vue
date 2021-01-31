<template>
  <div>
    <TextBox :onPost="addMessage" :channelId="$route.params.channelId" />
    <div class="devider"></div>
    <Spinner v-if="spinnerInitialLoaded"/>
    <p class="no-messages" v-else-if="!spinnerInitialLoaded && messages.length === 0">投稿データ０件</p>
    <MessageList v-else :messages="reversedMessages" />
  </div>
</template>

<script>
import TextBox from '@/components/TextBox';
import MessageList from '@/components/MessageList';
import MessageModel from '@/models/Message';
import Spinner from '@/components/Spinner';

export default {
  components:{
    TextBox,
    MessageList,
    Spinner
  },
  data() {
    return {
      messages: [],
      spinnerInitialLoaded: true
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
      await this.fetchMessages();//Mainインスタンス内のfetchMessageを実行
  },
  methods: {
    addMessage(message) {
      this.messages.push(message);
    },
    async fetchMessages() {
      let messages = [];
      try {
        messages = await MessageModel.fetchMessages(this.$route.params.channelId);
      } catch (error) {
        // 読み込み失敗など、何かしらのエラーが発生したらユーザーにデータの読み込みが失敗したことを知らせる
        alert(error.message);
      }
          // 取得したmessagesをdetaのmessagesに代入する。
    this.messages =messages;
    this.spinnerInitialLoaded = false;
    }
  },
  watch: {
    // VueRouterでvueインスタンスに追加されている$routeを監視して何かしらの変更があれば関数が実行される。
    '$route' : async function() {
      //ページが切り替わるたびに読み込みを行う
      // messageを空にする。
      // messageを取得しに行く
      this.spinnerInitialLoaded = true;
      this.messages = [];
      await this.fetchMessages();
    }
  }

}
</script>

<style scoped>
  .devider {
    border-top: 10px solid gray;
  }

  .no-messages {
    text-align: center;
  }
</style>