<template>
  <div class="app-main-layout">
    <navbar @click="isOpen =! isOpen"/>
    <sidebar :isOpen="isOpen"/>
    <main class="app-content" :class="{full: !isOpen}">
      <div class="app-page">
        <router-view/>
      </div>
    </main>

    <div class="fixed-action-btn">
      <router-link class="btn-floating btn-large blue" to="/record">
        <i class="large material-icons">add</i>
      </router-link>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/UI/Sidebar.vue'
import Navbar from '@/components/UI/Navbar.vue'

export default {
  name: 'main-layout',
  data () {
    return {
      isOpen: true
    }
  },
  components: {
    Navbar,
    Sidebar
  }
}

</script>

<style lang="scss" scoped>

</style>
