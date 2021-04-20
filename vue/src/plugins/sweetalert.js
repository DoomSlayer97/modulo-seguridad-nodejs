import Swal from "sweetalert2"

export default {

  install (Vue, options) {

    Vue.prototype.$deleteMessageBoxConfirm = async () => {

      const { isConfirmed } = await Swal.fire({
        title: 'Atencion',
        text: '¿Deseas eliminar este registro?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si',
        cancelButtonText: 'No'
      });

      return isConfirmed;

    } 

  }

}
