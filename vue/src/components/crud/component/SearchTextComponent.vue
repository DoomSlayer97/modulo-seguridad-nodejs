<template>
  <div class="form-group mb-2">
    <div class="input-group">
      <input 
        @input="emitValues( $event.target.value )" 
        type="text" 
        class="form-control" 
        placeholder="Search for..."
      >
      <span class="input-group-btn">
        <button class="btn btn-01 btn-fil" type="button">
          <i class="fa fa-search"></i>
        </button>
      </span>
    </div>  
  </div>  
</template>

<script>
export default {

  methods: {

    emitValues( value = "" ) {

      this.$emit("search-emit", value);

    }

  }

}
</script>

<style>

</style>