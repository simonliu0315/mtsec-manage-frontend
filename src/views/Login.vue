<style>
.login-form {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 10px;
  z-index: 1;
}
</style>
<template>
   <particle></particle>
  <div class="container">
  <div class="login-form">
  <div class="row justify-content-center">
  <div class="login-box">
  <div class="login-logo">
    <a href="/"><b>登入</b>整合式網管系統</a>
  </div>
  <!-- /.login-logo -->
  <div class="card">
    <div class="card-body login-card-body">
      <form @submit.prevent="handleLogin">
      <p class="login-box-msg">登入系統開始啟動作業</p>
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="帳號" v-model="LoginForm.userId">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="bi bi-person"></span>
            </div>
          </div>
        </div>
        <div class="input-group mb-3">
          <input type="password" class="form-control" placeholder="密碼" v-model="LoginForm.password">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="bi bi-lock"></span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-8">
            <div class="icheck-primary">
              <input type="checkbox" id="remember">
              <label for="remember">
                記住我
              </label>
            </div>
          </div>
          <!-- /.col -->
          <div class="col-4">
            <button type="submit" class="btn btn-primary btn-block">登入</button>
          </div>
          <!-- /.col -->
        </div>
      <!-- /.social-auth-links -->
      </form>
    </div>
    <!-- /.login-card-body -->
  </div>
</div>
</div>
</div>
<!-- /.login-box -->
</div>
</template>
<script setup lang="ts">
import { ref, provide, reactive, onMounted, watch } from 'vue';
import { useRoute, useRouter } from "vue-router/dist/vue-router";
import { useAuthStore } from "@/stores/auth";
import particle from "@/components/particle.vue"
import AuthService from '../services/AuthService';

const route = useRoute();
const router = useRouter();
const LoginForm = reactive<{
  userId: string | undefined;
  password: string | undefined;
}>({
  userId: 'test',
  password: 'test',
});
function handleLogin() {
  AuthService.login(LoginForm.userId, LoginForm.password)
        .then(response => {          
          console.log(response);
        
          router.push('/MtsecDashboardTmp');
          const authStore =  useAuthStore();
          authStore.login(JSON.stringify(response));
          console.log("authorization:", authStore.authorization)
          console.log("isAuthorized:", authStore.isAuthorized)
        })
        .catch(error => {
          console.log(error);
        });
}
</script>


