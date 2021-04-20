<template>
    <div class="row mt-3">
        <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <div class="card card-darck">
                <div class="card-body">

                    <div class="row mb-3">

                        <div class="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9">

                            <form class="form-inline">

                                <div class="form-group mb-2">
                                    <div class="input-group">
                                        <input type="text" class="form-control" placeholder="Search for...">
                                        <span class="input-group-btn">
                                            <button class="btn btn-01 btn-fil" type="button">
                                                <i class="fa fa-search"></i>
                                            </button>
                                        </span>
                                    </div>
                                </div>

                                <div class="form-group mx-sm-3 mb-2">
                                    <label class="mr-1">Filtrar &nbsp;</label>
                                    <select @change="Filtrar" v-model="FiltroC.Entrada" class="form-control">
                                        <option :value="10">10</option>
                                        <option :value="50">50</option>
                                        <option :value="100">100</option>
                                    </select>
                                </div>

                            </form>

                        </div>

                        <div class="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">

                            <form class="form-inline justify-content-end">
                                <button type="button" class="btn btn-01 mb-3" data-toggle="modal" data-target="#modal_form">
                                    <i class="fas fa-plus-circle"></i> Nuevo
                                </button>
                            </form>

                        </div>
                            
                    </div>
                        
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"Clist",
    props:[ 
        
    ],
    components: {

    },
    data() {
        return {
             FiltroC:{
                Nombre:'',
                Entrada:10,
                Placeholder:'Buscar..',
                Show:true,
                Estatus:'activo'

            },
        }
    },
    created() {

    },
    methods: {
        Regresar()
        {
            this.bus.$emit('Regresar');
        },
        Filtrar()
        {   
            if(this.FiltroC.Entrada!=this.Filtro.Entrada)
            {
               this.Filtro.Pagina=1; 
            }
            this.Filtro.Nombre=this.FiltroC.Nombre;
            this.Filtro.Entrada=this.FiltroC.Entrada;
            this.$emit('FiltrarC');   
        },
    },
    computed: {

    },
}
</script>