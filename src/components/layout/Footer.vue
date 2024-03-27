<template>
  <div class="footer">
    <p class="footerP">این سایت صرفاً جنبه‌ی تمرین دارد.</p>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.footer {
  font-family: Post_Bold;
  /* position: fixed; */
  backdrop-filter: blur(4px);
  bottom: 0;
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;
  font-size: 14px;
  background: #00000090;
  border-radius: 10px 10px 0 0;
  color: #ffffff;
}

.footerP {
  margin-top: 15px;
}
</style>
