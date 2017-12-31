<template lang="html">
  <div>
    <form v-on:submit.prevent="addItem" class="card">
      <div class="card-title">
        <h3>Agrega un Item</h3>
      </div>
      <div class="card-body">
        <div class="form-group">
          <input class="form-control" type="text" v-model="item.name" placeholder="Agrege un nombre">
        </div>
        <div class="form-group">
          <input class="form-control" type="text" v-model="item.price" placeholder="Agrege un precio">
        </div>
        <button type="submit" class="btn btn-primary">Agregar Items</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: {}
    }
  },
  methods: {
    addItem() {
      this.axios.post('/item', this.item)
        .then(res => {
          this.$router.replace({name: 'DisplayItem'});
        })
        .catch(err => console.log(err));
    }
  }
}
</script>

<style lang="css">
</style>
