<template>
  <div class="row mt-3">
    <div class="col-12 col-sm-12 col-md-12 col-lg-12">
        <div class="card card-darck">
          <div class="card-body">

            <div class="row">

              <div class="col-md-9 col-lg-9">
                <div class="form-inline">
                  <search-text-component @search-emit="filter( $event )"/>
                  <select-items-component @input="$emit('items-select', $event)"/>
                </div>
              </div>

              <div class="col-md-3 col-lg-3">
                <div class="form-inline justify-content-end">
                    <button @click="openModal()" class="btn btn-01 mb-3" >
                      <i class="fas fa-plus-circle"></i> Nuevo
                    </button>
                </div>
              </div>
              
            </div>

            <!--Filtros-->
            <b-table v-if="!loadingTable" hover striped small :items="items" :fields="fields">
              <template #cell(acciones)="row">
                <slot name="acciones" :row="row"></slot>
              </template>
            </b-table>

            <div class="row justify-content-center" v-else >
              <div class="col-1">
                <b-spinner></b-spinner>
              </div>
            </div>
            <!--Tabla de datos-->

            <nav class="later-derecho mt-3" aria-label="Page navigation example">  
              <b-pagination align="right" v-model="currentPage" :total-rows="items.length" :per-page="perPage"></b-pagination>
            </nav>
            
          </div>
        </div>
    </div>
  </div>
</template>

<script>

import HeaderComponent from "./component/HeaderComponent.vue"
import SearchTextComponent from "./component/SearchTextComponent.vue"
import SelectItemsComponent from "./component/SelectItemsComponent.vue"

export default {

  props: [
    "items",
    "fields",
    "loadingTable",
    "totalItems",
    "perPage"
  ],

  components: {
    HeaderComponent,
    SearchTextComponent,
    SelectItemsComponent
  },

  data() {
    return {

      currentPage: 1,

    }
  },

  methods: {

    openModal() {

      this.$emit('show-modal');

    },

    filter( value = "" ) {

      this.$emit("search-emit", value);

    }

  }

}
</script>

<style>

</style>