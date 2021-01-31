<template>
  <div class="textbox-container">
    <textarea
      placeholder="ここに入力"
      class="textbox-input"
      v-model.trim="body"
    ></textarea>
    <div class="textbox-button">
      <Button
        title="投稿"
        :onClick="post"
        :clickable="canPost"
        />
    </div>
  </div>
</template>

<script>
import Button from './Button.vue';
import MessageModel from '../models/Message';

export default {
  name: 'TextBox',
  components: {
    Button
  },
  props: {
    onPost: {
      type: Function,
      required: true//エラー表示できる
    },
    channelId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      body:'',
      canPost: true
    }
  },
  computed: {
    textMessage() {
      return this.body
    }
  },
  methods: {
    async post() {
      console.log('@@@')
      this.canPost = false;//ボタン連打でデータの送信の重複を防ぐ
      try {
        const message = await MessageModel.save({
          body: this.body,
          channelId: this.channelId
        });
        console.log(message)
        this.onPost(message);
        this.body = '';
      } catch (error) {
        console.log(error.message)
        alert(error.message);
      }
      this.canPost = true;//データの登録が終わったらボタンが押せるように変更する
    },
  }


}
</script>

<style scoped>
.textbox-container {
  padding: 10px;
}
.textbox-input {
  width: 100%;
  height: 100px;
  resize: none;
  background: white;
  border: 1px solid black;
  border-radius: 5px;
  padding: 0;
}
.textbox-button {
  margin-top: 10px;
  text-align: right;
}
</style>