<template>
  <div class="not-found">
    <h1>Oops!</h1>
    <h3>The {{ resource }} you are looking for is not here</h3>
    <router-link :to="{name: 'home'}"><i class="fas fa-long-arrow-alt-left"></i> Back to home page</router-link>
  </div>
</template>

<script>
  export default {
    props: {
      resource: {
        type: String,
        required: true,
        default: 'Page'
      }
    }    
  }
</script>

<style scoped>

.not-found {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #f1f1f1;
  padding: 2em;
  border-radius: 0.6em;
  box-shadow: 0 10px 20px #00000027;
}

.not-found h1 {
  font-weight: 600;
  color: #191a1d;
  margin-bottom: 0.5em;
}

.not-found h3 {
  color: #191a1dcc;
  margin-bottom: 0.4em;
}

.not-found a {
  color: #2b70dc;
  font-weight: 600;
}

.not-found a:hover {
  cursor: pointer;
  text-decoration: none;
}

</style>