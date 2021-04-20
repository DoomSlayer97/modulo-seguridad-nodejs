<template>
  <div class="row">
    <div class="col-md-9 col-lg-9">
      <div class="form-inline">
        <search-text-component 
          @search-emit="sendSearch( $event )"
        />
        <select-items-component />
      </div>
    </div>
    <div class="col-md-3 col-lg-3">
        <div class="form-inline justify-content-end">
          <button @click="openModal()" class="btn btn-01 mb-3" ><i class="fas fa-plus-circle"></i> Nuevo</button>
        </div>
      </div>
  </div>
</template>

<script>

import SearchTextComponent from "./SearchTextComponent.vue"
import SelectItemsComponent from "./SelectItemsComponent.vue"

export default {

  components: {
    SearchTextComponent,
    SelectItemsComponent
  },

  methods: {

    sendSearch( value = "" ) {

      this.$emit("search-emit", value);

    },

    openModal() {

      this.$emit("open-modal");

    }

  }

}
</script>

<style>

</style>