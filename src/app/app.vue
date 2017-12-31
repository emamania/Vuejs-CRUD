<template lang="html">
  <div class="container">
    <h1>Vuejs funcionandoo</h1>
    <nav>
      <router-link :to="{ name: 'CreateItem'}" class="btn btn-primary">Crear Item</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
