<template>
  <div class="bg">
    <div class="login">
      <div class="container">
        <div class="header">
          <span>admin系统</span>
        </div>
        <div class="main">
          <el-form label-position="right" label-width="80px" :model="formLogin">
            <el-form-item label="账户名称">
              <el-input v-model="formLogin.username"></el-input>
            </el-form-item>
            <el-form-item label="账户密码">
              <el-input v-model="formLogin.password"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div class="footer">
          <el-button type="primary" @click="handleLogin" :loading="loading">登录</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { UserModule } from '@/store/user/index.ts'
@Component
export default class Login extends Vue{
  // data
  private formLogin = {
    username: 'admin',
    password: 'admin',
  }
  private loading = false
  // methods
  private handleLogin() {
    this.loading = true
    UserModule.loginByName(this.formLogin).then(res => {
      this.loading = false
      this.$router.push({path: '/'})
    })
  }
}
</script>
<style lang="scss">
@import '@/styles/variables.scss';
.bg {
  position: fixed;
  background-color: #ffffff;
  width: 100%;
  height: 100%;
  .login {
    position: absolute;
    width: 400px;
    height: 230px;
    top: 50%;
    left: 50%;
    margin-top: -115px;
    margin-left: -200px;
    border: 1px solid #eaeaea;
    border-radius: 10px;
    box-shadow: 0 0 10px #cac6c6;
    .container {
      .header {
        height: 40px;
        line-height: 40px;
        text-align: center;
        color: #000000;
        font-size: 20px;
        border-bottom: 1px solid #cccccc;
      }
      .main {
        padding: 10px;
      }
      .footer {
        text-align: center;
        .el-button {
          width: 300px; 
        }
      }
    }
  }
}
</style>