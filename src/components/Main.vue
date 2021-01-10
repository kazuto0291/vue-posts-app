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
  methods: {
    addMessage(message) {
      this.messages.push(message);
    }
  },
  computed: {
    reversedMessages() {
      return this.messages.slice().reverse();//sliceを入れることでmessagesのコピーの配列の順番を反転したのを表示する。
    }
  }
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