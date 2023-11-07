<template>
  <div style=" display: flex;justify-content: center; align-items: center;margin-top: 30px;">
    <h1 style="font-size: 40px;font-family: 'Courier New', Courier, monospace;
    color: bisque;
    ">您是我们尊贵的{{ form.title }}会员</h1>
  </div>

  <div class="page-register" style="display: flex;justify-content: center; align-items: center;margin-top: 30px;">
    <img v-bind:src="'data:image/png;base64,' + base64EncodedString.value" />
  </div>
</template>

<script setup>
import request from '@/libs/request';
import { useUserStore } from '@/stores/user';
import { reactive } from "vue";
import router from '@/router';

let u = useUserStore().userInfo


if(u.userId == null){
  router.push('/login')
}

let form = reactive({ 
})

 const base64EncodedString = reactive({ 
    value:''
 })


const getQR =()=>{
    request.get('sp/user/qr/'+u.userId).then(res=>{
        base64EncodedString.value = res;
    })
}
const info = () => {
  request.get('/sp/user/' + u.userId).then(res => {
    if (res.integral >= 10000) {
        form.title  = '钻石'
    } else if (res.integral >= 5000) {
      form.title  = '铂金'
    } else if (res.integral >= 2000) {
      form.title  = '黄金'
    } else if (res.integral >= 500) {
      form.title  = '白银'
    } else {
      form.title  = '普通'
    }
  });
};



getQR()
info()
</script>
<style>
body{
  background-image: url('https://img.ixintu.com/download/jpg/202010/fe85eee0cf1758ea722c8b1a3a1d5248_610_305.jpg!ys');
  background-size: contain;
}
.page-login{
  background-color: #03f40f;
}
.login-box {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: rgba(24, 20, 20, 0.987);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0,0,0,.6);
  border-radius: 10px;
}

.login-box .user-box {
  position: relative;
}

.login-box .user-box input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
}

.login-box .user-box label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: .5s;
}

.login-box .user-box input:focus ~ label,
.login-box .user-box input:valid ~ label {
  top: -20px;
  left: 0;
  color: #bdb8b8;
  font-size: 12px;
}

.login-box form a {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #ffffff;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: .5s;
  margin-top: 40px;
  letter-spacing: 4px
}

.login-box a:hover {
  background: #03f40f;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #03f40f,
              0 0 25px #03f40f,
              0 0 50px #03f40f,
              0 0 100px #03f40f;
}

.login-box a span {
  position: absolute;
  display: block;
}

@keyframes btn-anim1 {
  0% {
    left: -100%;
  }

  50%,100% {
    left: 100%;
  }
}

.login-box a span:nth-child(1) {
  bottom: 2px;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #03f40f);
  animation: btn-anim1 2s linear infinite;
}
</style>