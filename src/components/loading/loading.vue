<template>
    <div>
         <div class="nav-loading">
            <div class="nav-loading-row"></div>
             <div class="nav-loading-row"></div>
            <div class="nav-loading-row"></div>
      </div>
    </div>
</template>

<style scoped>
@keyframes skeleton-stripes {
  0% { background-position: 0 0 }
  to { background-position: 480px 0 }
}

.nav-loading .nav-loading-row{
  margin-bottom: 16px;
  background: linear-gradient(90deg, #fff, #edeff1, #fff);
  background-size: 480px 480px;
  animation: skeleton-stripes .6s linear infinite
}
.nav-loading .nav-loading-row{
  width: 400px;
  height: 50px;
}
.nav-loading .nav-loading-row:nth-of-type(2),
.nav-loading .nav-loading-row:nth-of-type(3) {
  width: 80%
}
</style>
<script>
    export default {}
</script>