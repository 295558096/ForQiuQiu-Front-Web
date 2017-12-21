<template>
  <div id="web_bg" class="main-bg">
    <img class="auto-bg" src="../res/img/home_bg.png" />
    <div class="account-div">
      <div>
        <h1>账号：</h1>
        <el-input v-model="userAccount"></el-input>
      </div>
      <div>
        <h1>密码：</h1>
        <el-input v-model="password"></el-input>
      </div>
      <div>
        <p> 登录 </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      userAccount: '',
      password: ''
    }
  }
}
</script>

<style scoped>
.main-bg {
  position: absolute;
  width: 100%;
  height: 100%;
}
.account-div{
  position: fixed;
  width: 30%;
  height: 30%;
  top: 25%;
  left: 45%;
  border: 2px solid white;
  border-radius: 5px; 
}
.auto-bg {
  z-index: -1;
  position: fixed;
  height: auto;
  width: 100%;
  src: "../res/img/home_bg.png";
}
.head{
  position: fixed;
  z-index: -1;
  background: url(../res/img/home_bg.png) top center no-repeat;
  height: 100%;
  width: 100%;
}
h1, h2 {
  font-weight: normal;
  color: rgb(255, 255, 255);
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
