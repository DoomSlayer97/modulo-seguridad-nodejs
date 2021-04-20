<template>
  <div class="form-group mx-sm-3 mb-2">
      <label>Filas &nbsp;</label>
      <select 
        v-model="form" 
        @change="$emit('input', $event.target.value)"
        class="form-control" 
      >
        <option 
          v-for="(item, index) of items" 
          :key="index" 
          :value="item"
        >
          {{ item }}
        </option> 
      </select>
  </div>
</template>

<script>
export default {


  data() {
    return {

      items: [
        5,
        25,
        30
      ],

      form: 5

    }
  }

}
</script>

<style>

</style>