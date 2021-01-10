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
import Button from './Button.vue'

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
    post() {
      if (this.body === '') { return alert('1文字以上入力してください。');}

      // this.message.body = this.body
      // this.message.date = new Date().toLocaleString()
      // console.log(this.message)
      // this.onPost(this.message);
      // this.body = ''

      const newMessage = this.createMesssage();
      console.log(newMessage);
      this.onPost(newMessage);
      this.body = '';
    },
    createMesssage() {
      return {
        date: new Date().toLocaleString(),
        body: this.body
      }
    }
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