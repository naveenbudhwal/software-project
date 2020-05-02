<template>
  <transition name="slide-in" mode="out-in" appear>
    <div class="notification-bar" :class="notificationTypeClass">
      <p>{{ notification.message }}</p>
    </div>
  </transition>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    props: {
      notification: {
        type: Object,
        required: true
      },
    },
    mounted() {
      this.timeout = setTimeout(() => this.remove(this.notification), 2000)
    },
    beforeDestroy() {
      clearTimeout(this.timeout)
    },
    data() {
      return {
        timeout: null
      }
    },
    computed: {
      notificationTypeClass() {
        return `-text-${this.notification.type}`
      }
    },
    methods: mapActions('notification', ['remove'])
  }
</script>

<style lang="css">
.notification-bar {
  margin: 1em 0 1em;
  padding: 1em;
}

p {
  margin: 0;
  padding: 0;
}

.-text-success {
  color: #4F8A10;
  background-color: #DFF2BF;
}

.-text-info {
  color: #00529B;
  background-color: #BDE5F8;
}

.-text-error {
  color: #D8000C;
  background-color: #FFD2D2;
}

/* ------------ Transition styles -------------- */

.slide-in-enter {
  opacity: 0;
  transform: translateY(20px);
}

.slide-in-enter-active,
.slide-in-leave-active {
  transition: all 0.2s ease-in-out;
}

.slide-in-leave {
  opacity: 0;
  transform: translateY(20px);
}

/* --------------------------------------------- */

</style>