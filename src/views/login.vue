<template>
  <div id="web_bg" class="main-bg">
    <img class="auto-bg" src="../res/img/home_bg.png" />
    <div class="account-div">
      <div>
        <h1 class="h1-account">账号：</h1>
        <el-input v-model="userAccount" class="user-account" ></el-input>
      </div>
      <div>
        <h1 class="h1-password">密码：</h1>
        <el-input type="password" v-model="password" class="password"></el-input>
      </div>
      <div class="login-button" >
        <el-button @click="login()" class="el-button el-button--success "> 登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../api/index.js'
export default {
  name: 'login',
  data () {
    return {
      userAccount: '',
      password: ''
    }
  },
  methods: {
    login () {
      console.log('-------getData')
      let that = this
      // 192.168.1.101为后端IP地址
      api.post({
        apiKey: '0001',
        v: '1',
        id: '295558096'
      })
      .then(function (response) {
        console.log(response)
        console.log(this)
        that.serverData = response.data
      })
      .catch(function (error) {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>
.h1-account {
  width: 30%;
}
.h1-password {
  width: 30%;
}
.main-bg {
  width: 100%;
  height: 100%;
  position: absolute;
}
.user-account {
  width: 35%;
  bottom: 55px;
}
.password {
  width: 35%;
  bottom: 55px;
}
.lefttext {
    text-align: left;
  }
.account-div {
  z-index: 1;
    position: relative;
    width: 25%;
    bottom: 40%;
    left: 60%;
    border: 2px solid white;
    border-radius: 5px;
}
.auto-bg {
  z-index: -1;
  width: 100%;
  src: "../res/img/home_bg.png";
}
.login-button {
  position: relative;
  bottom: 20px;
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
