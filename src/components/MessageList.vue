<template>
  <div class="message-list">
    <template v-for="(message, index) in messages">
      <Message
        :key="index"
        :body="message.body"
        :date="message.date"
        />
    </template>
  </div>
</template>

<script>
import Message from './Message.vue';

export default {
  name:'MessageList',
  components: {
    Message,
  },
  props: {
    messages: {//props(下に渡すデータ)
      type: Array,  //配列を受け取る
      required: true,// 必ずmessagesのArrayを受け取る
      //validator--propsの中身を保証する関数を定義する（引数は定義する値を入れる）
      validator: function(messages) {// messagesが意図した型がどうか確認する関数（返す値はboolean）
        return  messages.every(message => {
          if ( typeof message.date !== 'string' ) {
            return false;
          }
          if ( typeof message.body !== 'string') {
            return false;
          }
          return true; //trueになれば配列のmessagesの中に含まれる要素はすべてオブジェクトであり、なおかつ型だstringのdateプロパティとbodyプロパティが保証される
        })
      }
    }
  }
}
</script>

<style scoped>

</style>