<template>
  <div>
    <h3 class="title">新闻标题</h3>
    <p class="subtitle">
      <span>发表时间:</span>
      <span>点击次数:</span>
    </p>
    <hr />
    <div class="content"></div>
    <comment-box></comment-box>
  </div>
</template> 

<style lang="scss" scoped>
</style>

<script>
import comment from "../comment/comment.vue";
export default {
  components: {
    "comment-box": comment
  }
};
</script>