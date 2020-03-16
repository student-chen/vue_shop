/* eslint-disable no-useless-return */
<template>
    <div id="login" class="login_container">
        <div class="login_box">
            <div class="avater_box">
                <img src="../assets/logo.png" >
            </div>
            <el-form ref="loginFormRef" :model="loginForm" label-width="0px" class="login_form" :rules="loginFromRules">
                <el-form-item label="" prop="username">
                    <el-input type="text" prefix-icon="el-icon-user" placeholder="请输入用户名/手机号/邮箱" v-model="loginForm.username"></el-input>
                </el-form-item>
                <el-form-item label="" prop="password">
                    <el-input type="password" prefix-icon="el-icon-lock" placeholder="请输入密码" v-model="loginForm.password"></el-input>
                </el-form-item>
                <el-form-item label="" class="btns">
                    <el-button type="primary"  @click="submitLoginForm">登录</el-button>
                    <el-button type="info" @click="resetLoginFields">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
export default {
  name: 'login',
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginFromRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 5, message: '用户名长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 15, message: '密码长度在 6 到 15 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitLoginForm: function () {
      this.$refs.loginFormRef.validate(async valid => {
        // eslint-disable-next-line no-useless-return
        if (!valid) { return }
        // eslint-disable-next-line no-unused-vars
        const result = await this.$http.post('login', this.loginForm)
        console.log(result)
      })
    },
    resetLoginFields: function () {
      this.$refs.loginFormRef.resetFields()
    }
  }
}
</script>

<style lang="less" scoped>
.login_container {
    background-color: #2b4b2b;
    height: 100%;
}

.login_box {
    width: 450px;
    height: 300px;
    background-color: #fff;
    border-radius: 5px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

.avater_box {
    width: 130px;
    height: 130px;
    border: 2px solid #999;
    border-radius: 50%;
    padding: 2px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #eee;
    }
}

.btns {
    display: flex;
    justify-content: flex-end;
}

.login_form {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
}
</style>
