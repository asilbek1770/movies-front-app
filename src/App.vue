<template>
  <div>

    <Header />
    <transition name="route" mode="out-in">
      <router-view>

      </router-view>
    </transition>

  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  components: {Header},
  data: () => ({

  }),
  name: 'App'

}
</script>

<style>
.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-active {
  transition: all 0.3s ease-in;
}

.route-enter-to{
  opacity: 1;
  transform: translateY(30px);
}
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}




</style>