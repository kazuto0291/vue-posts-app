<template>
  <main class="main-container">
    <TextBox :onPost="addMessage" />
    <div class="devider"></div>
    <MessageList :messages="messages" />
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