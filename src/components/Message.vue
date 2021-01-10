<template>
  <div class="message">
    <div class="message-date">{{ date }}</div>
    <div class="message-text">{{ body }}</div>
  </div>
</template>

<script scoped>
export default {
  props: {
    body: {
      type:String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
  },
  name:'Message',
}
</script>

<style scoped>
  .message {
    border-bottom: 1px solid black;
    min-height: 80px;
    padding: 10px;
  }
  .message:hover {
    background-color: #eee;
  }
  .message-date {
    font-size: 0.8;
    color: #777;
    text-align: right;
  }

  .message-text {
    margin: 0;
    margin-top: 5px;
    white-space: preline;
  }
</style>