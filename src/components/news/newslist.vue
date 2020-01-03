<template>
  <div>
    <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media">
        <router-link :to="/home/newsinfo" +item.id>
          <img class="mui-media-object mui-pull-left" src="/src/images/shuijiao.jpg" />
          <div class="mui-media-body">
            幸福
            <p class="mui-ellipsis">能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
            <p class="mui-ellipsis">
              <span>发表时间:{{20190843123433|dateFormat}}</span>
              <span>点击次数:5</span>
            </p>
          </div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="/src/images/muwu.jpg" />
          <div class="mui-media-body">
            木屋
            <p class="mui-ellipsis">想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</p>
          </div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="/src/images/cbd.jpg" />
          <div class="mui-media-body">
            CBD
            <p class="mui-ellipsis">烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
          </div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="/src/images/shuijiao.jpg" />
          <div class="mui-media-body">
            幸福
            <p class="mui-ellipsis">能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
          </div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="/src/images/muwu.jpg" />
          <div class="mui-media-body">
            木屋
            <p class="mui-ellipsis">想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</p>
          </div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="/src/images/cbd.jpg" />
          <div class="mui-media-body">
            CBD
            <p class="mui-ellipsis">烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
          </div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="/src/images/shuijiao.jpg" />
          <div class="mui-media-body">
            幸福
            <p class="mui-ellipsis">能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
          </div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="/src/images/muwu.jpg" />
          <div class="mui-media-body">
            木屋
            <p class="mui-ellipsis">想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</p>
          </div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="/src/images/cbd.jpg" />
          <div class="mui-media-body">
            CBD
            <p class="mui-ellipsis">烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
          </div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="/src/images/shuijiao.jpg" />
          <div class="mui-media-body">
            幸福
            <p class="mui-ellipsis">能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
          </div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="/src/images/muwu.jpg" />
          <div class="mui-media-body">
            木屋
            <p class="mui-ellipsis">想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</p>
          </div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="/src/images/cbd.jpg" />
          <div class="mui-media-body">
            CBD
            <p class="mui-ellipsis">烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
          </div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="/src/images/shuijiao.jpg" />
          <div class="mui-media-body">
            幸福
            <p class="mui-ellipsis">能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
          </div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="/src/images/muwu.jpg" />
          <div class="mui-media-body">
            木屋
            <p class="mui-ellipsis">想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</p>
          </div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="/src/images/cbd.jpg" />
          <div class="mui-media-body">
            CBD
            <p class="mui-ellipsis">烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
          </div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="/src/images/shuijiao.jpg" />
          <div class="mui-media-body">
            幸福
            <p class="mui-ellipsis">能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
          </div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="/src/images/muwu.jpg" />
          <div class="mui-media-body">
            木屋
            <p class="mui-ellipsis">想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</p>
          </div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="/src/images/cbd.jpg" />
          <div class="mui-media-body">
            CBD
            <p class="mui-ellipsis">烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
          </div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="/src/images/shuijiao.jpg" />
          <div class="mui-media-body">
            幸福
            <p class="mui-ellipsis">能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
          </div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="/src/images/muwu.jpg" />
          <div class="mui-media-body">
            木屋
            <p class="mui-ellipsis">想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</p>
          </div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="/src/images/cbd.jpg" />
          <div class="mui-media-body">
            CBD
            <p class="mui-ellipsis">烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
</style>

<script>
export default {};
</script>