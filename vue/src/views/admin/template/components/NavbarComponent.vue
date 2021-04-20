<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top" id="mainNav">
      <a class="navbar-brand" href="#"><img style="width: 149px;" src="@/assets/recursos/img/logos/logo_big.png" alt=""></a>
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">

        <!-- Sidebar component -->
        <sidebar-component />
          
        <ul class="navbar-nav sidenav-toggler">
          <li class="nav-item">
            <a class="nav-link text-center" id="sidenavToggler">
              <i class="fa fa-fw fa-angle-left white"></i>
            </a>
          </li>
        </ul>
        <!-- Header component -->
        <header-component />
      </div>
  </nav>
</template>

<script>

import HeaderComponent from "./HeaderComponent.vue"
import SidebarComponent from "./SideBarComponent.vue"


export default {

  components: {
    HeaderComponent,
    SidebarComponent
  },
  
  data() {
    return {

      

    }
  }

}
</script>

<style>

</style>