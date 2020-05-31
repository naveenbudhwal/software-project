<template>
  <div class="order-page">
    <div class="loading" v-if="isLoading === true">
      <LoadingSpinner class="spinner"/>
      <p>Placing your Order...</p>
    </div>
    <div class="order" v-if="isLoading === false">
      <p>The Chef is preparing your food...</p>
      <p>Estimated time: 25 mins</p>
      <div class="progress" v-if="progress === true">
        <div class="progress-value"></div>
      </div>
    </div>
  </div>
</template>

<script>
import LoadingSpinner from '@/components/LoadingSpinner.vue';
  export default {
    components: {
      LoadingSpinner
    },
    data() {
      return {
        isLoading: true,
        progress: true
      }
    },
    mounted() {
      setTimeout(() => this.isLoading = false, 3500)
      setTimeout(() => this.progress = false, 13500)
    }
  }
</script>

<style scoped>

.progress {
  background:#fff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  border-radius: 100px;
  height: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  width: 50%;
}

.progress-value {
  animation: load 10s normal forwards;
  box-shadow: 0 10px 40px -10px #fff;
  border-radius: 100px;
  background: #2b70dc;
  height: 15px;
  width: 0;
}

@keyframes load {
  0% { width: 0; }
  50% {width: 60%;}
  100% { width: 100%; }
}

.loading {
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-40%, -50%);
}

.loading p {
  margin: 2em 0;
  font-weight: 600;
  font-size: 1.1rem;
}

.spinner {
  margin: auto;
}

</style>