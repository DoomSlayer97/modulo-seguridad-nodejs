<template>
  <div>
    <crud-component 
      :items="items"
      :fields="fields"
      @search-emit="setFilter( $event )"
      @items-select="setItemsSelect( $event )"
      @show-modal="openNew"
      :loadingTable="loadingTable"
      :perPage="filter.items"
    >

      <template v-slot:acciones="{ row }" >
        <button @click="findOne( row.item.id )" class="btn btn-01 btn-icon-table mr-2" >
          <i class="fas fa-pencil" ></i>
        </button>
      
        <button @click="deleteConfirm( row.item.id )" class="btn btn-04 btn-icon-table" >
          <i class="fas fa-trash-alt" ></i>
        </button>
      </template>
    
    </crud-component>

    <b-modal 
      v-model="showModal" 
    >
      <template v-slot:modal-footer >
        <button @click="showModal = false" class="btn btn-secondary" >Cancelar</button>
        <button
          v-if="isNew"
          @click="create()"
          class="btn btn-primary"
         >Guardar</button>
        <button
          v-else
          @click="saveChanges()"
          class="btn btn-primary"
        >Guardar cambios</button>
      </template>
      <template v-slot:modal-title >
        {{ modalTitle }}
      </template>

      <form-component v-model="form" />

    </b-modal>

  </div>
</template>

<script>

import FormComponent from "./components/FormComponent.vue"

export default {

  components: {
    FormComponent
  },
  
  data() {
    return {

      loadingTable: false,

      showModal: false,
      isNew: true,

      fields: [
        { key: "nombre", label: "Nombre" },
        { key: "acciones", label: "Acciones" },
      ],
      
      items: [],
  
      filter: {
        searchText: "",
        items: 5,
        currentPage: 1,
        totalItems: 0,
      },

      form: {
        nombre: "",
        valor: "",
        id: 0
      },

      errorParams: {},

      setTimeOut: null,

    }
  },

  computed: {

    modalTitle: function() {
      
      return this.isNew 
        ? 'Create departamento'
        : 'Edit';

    }

  },

  methods: {

    setItemsSelect( value ) {

      this.filter.items = value;

      this.findAll();

    },

    cleanForm() {

      this.form.nombre = "";
      this.form.valor = "";

    },

    openNew() {

      if ( !this.isNew ) {

        this.isNew = true;
        this.errorParams = {};
        this.cleanForm();

      }

      this.showModal = true;

    },

    setFilter( searchText = "" ) {

      this.filter.searchText = searchText;

      clearTimeout( this.setTimeOut );

      this.setTimeOut = setTimeout( async () => {

        await this.findAll();

      }, 800);

    },

    mapOneData( data = {} ) {

      return {
        id: data.id,
        nombre: data.nombre,
        valor: data.valor,
      }

    },

    mapData( data = [] ) {

      return data.map( ( item ) => {
        return {
          id: item.id,
          nombre: item.nombre,
          valor: item.valor
        }
      })

    },

    async findAll() {

      const filterParams = {
        items: this.filter.items,
        page: this.filter.currentPage,
        searchText: this.filter.searchText
      };

      this.loadingTable = true;

      const res = await this.$http.get( '/departamentos', { params: filterParams });

      if ( res.status == 200 ) {

        this.items = this.mapData( res.data.items );

        this.filter.totalItems = res.data.pager.totalItems;

      }

      this.loadingTable = false;

    },

    async findOne( id ) {

      this.cleanForm();
      this.isNew = false;

      this.errorParams = {};

      const res = await this.$http.get( `/departamentos/${id}` );

      if ( res.status == 200 ) {

        this.form = this.mapOneData( res.data );

        this.showModal = true;


      }

    },

    async deleteConfirm( id ) {

      const res = await this.$deleteMessageBoxConfirm();

      if ( res )
        this.deleteOne( id );

    },

    async deleteOne( id ) {

      const res = await this.$http.delete( `/departamentos/${id}` );

      if ( res.status == 204 ) {

        await this.findAll();

        this.$toast.open({
          message: 'Registro eliminado',
          type: 'success',
          position: 'top-right'
        });

      }

    },

    async saveChanges() {

      const bodyParams = {
        nombre: this.form.nombre,
        valor: this.form.valor
      };

      const res = await this.$http.put( `/departamentos/${this.form.id}`, bodyParams );

      if ( res.status == 202 ) {

        await this.findAll();

        this.showModal = false;

        this.$bvToast.toast('Cambios guardados');

      }

    },

    async create() {

      const bodyParams = {
        nombre: this.form.nombre,
        valor: this.form.valor
      };

      const res = await this.$http.post( '/departamentos', bodyParams );

      if ( res.status == 201 ) {

        this.showModal = false;

        this.cleanForm();

        await this.findAll();
        

      }


    }

  },

  mounted() {

    this.findAll();

  }


}
</script>
