<template>
  <ul class="sidenav app-sidenav"  :class="{open: isOpen}">
    <li>
      <router-link
        v-for="link in links"
        :key="link.url"
        active-class="active"
        :to="link.url"
        custom
        v-slot="{ href, navigate, isExactActive }"
      >
        <li :class="[isExactActive && 'active']">
          <a :href="href" @click="navigate" class="waves-effect waves-orange pointer">
            {{ link.title }}
          </a>
        </li>
      </router-link>
    </li>
      <!--      <router-link-->
      <!--        v-for="link in links"-->
      <!--        :key="link.url"-->
      <!--        :to="link.url"-->
      <!--        class="waves-effect waves-orange pointer"-->
      <!--      >-->
      <!--        {{ link.title }}-->
      <!--      </router-link>-->
      <!--    </li>-->
  </ul>
</template>

<script>
export default {
  props: [
    'isOpen'
  ],
  data () {
    return {
      links: [
        {
          title: 'Рахуннок',
          url: '/',
          exact: true
        },
        {
          title: 'Історія',
          url: '/history'
        },
        {
          title: 'Планування',
          url: '/planning'
        },
        {
          title: 'Новий запис',
          url: '/record'
        },
        {
          title: 'Категорії',
          url: '/categories'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
a.router-link-active.router-link-exact-active.waves-effect.waves-orange.pointer {
  background-color: rgba(0, 0, 0, 0.05);
}
</style>
