<template lang="html">
  <div>
    <h3>Actualiza un Item</h3>
    <form v-on:submit.prevent="updateItem">
      <div class="form'group">
        <input type="text" v-model="item.name" class="form-control">
      </div>
      <div class="form'group">
        <input type="text" v-model="item.price" class="form-control">
      </div>
      <button type="submit" name="button" class="btn btn-primary">Actualizar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item:{}
    }
  },
  created() {
    this.getItem();
  },
  methods: {
    getItem() {
      this.axios.get('/item/' + this.$route.params.id)
        .then(res => {
          this.item = res.data
          console.log(this.item);
        })
    },
    updateItem() {
      this.axios.put('/item/' + this.$route.params.id, this.item)
        .then(res => {
          console.log(res);
          this.$router.replace({name: 'DisplayItem'});
        })
    }
  }
}
</script>

<style lang="css">
</style>
