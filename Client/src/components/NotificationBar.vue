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
      this.timeout = setTimeout(() => this.remove(this.notification), this.notification.timeout)
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
  border-radius: 0.8em;
  font-weight: 600;
}

p {
  margin: 0;
  padding: 0;
}

.-text-success {
  color: #39b982;
  background-color: #CFFBE2;
}

.-text-error {
  color: #D8000C;
  background-color: #FFD2D2;
}

.-text-info {
  color: #00529B;
  background-color: #BDE5F8;
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