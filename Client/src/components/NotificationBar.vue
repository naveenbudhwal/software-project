<template>
  <transition name="drop-in" mode="out-in" appear>
    <div class="notification-bar" :class="notificationType">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'notification-bar',
  props: {
    notificationType: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

/* --------- Transition styles --------- */

.drop-in-enter {
  opacity: 0;
  transform: translateY(-30px);
}

.drop-in.enter-active,
.drop-in-leave-active {
  transition: all 0.3s ease-in-out;
}

.notification-bar.drop-in-leave {
  opacity: 0;
  transform: translateY(-30px);
}

/* ------------------------------------- */

.notification-bar {
  width: 40%;
  margin: auto;
  border-radius: 0.3em;
  text-align: left;
  font-weight: 600;
  padding: 1em;
}

.success {
  background: #00C851;
  color: #fff;
}

.danger {
  background: #ff4444;
  color: #fff;
}

.info {
  background: #2b70dc;
  color: #fff;
}

.warning {
  background: #ffbb33;
  color: #fff;
}

</style>