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
        :onClick="post"/>
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
    }
  },
  data() {
    return {
      body:'',
      message:{
        date:'',
        body:''
      }
    }
  },
  computed: {
    textMessage() {
      return this.body
    }
  },
  methods: {
    async post() {
      // if (this.body === '') { return alert('1文字以上入力してください。');}

      // this.message.body = this.body
      // this.message.date = new Date().toLocaleString()
      // console.log(this.message)
      // this.onPost(this.message);
      // this.body = ''

      try {
        const message = await MessageModel.save({
          body: this.body
        });
        this.onPost(message);
        this.body = '';
      } catch (error) {
        alert(error.message);
      }
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