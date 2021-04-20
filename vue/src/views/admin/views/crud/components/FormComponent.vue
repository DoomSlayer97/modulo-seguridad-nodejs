<template  >
  <div>
    <div class="row">
      <div class="col-12">
        <div class="form-group">
          <label>Nombre</label>
          <input 
            v-model="form.nombre"
            @input="$emit('input', form)"
            type="text"
            class="form-control form-control-sm" 
          >
        </div>
        <div class="form-group">
          <label>Valor</label>
          <input 
            v-model="form.valor"
            @input="$emit('input', form)"
            type="text" 
            class="form-control form-control-sm" 
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  props: [
    "value"
  ],

  data() {
    return {

      form: this.value

    }
  }

}
</script>

<style>

</style>