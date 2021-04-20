<template>
	<div>

    <navbar-component />

    <div class="content-wrapper">
      <div class="container-fluid">

        <ol class="breadcrumb ml-n3 mr-n3">
          <li class="breadcrumb-item">
              <a class="wrapper-text" href="index.html">Home</a>
          </li>
          <li class="breadcrumb-item active">ABC</li>
        </ol>

        <router-view />
      </div>
    </div>

  </div>
</template>

<script>

import NavbarComponent from "./components/NavbarComponent.vue"

import { mainApp } from "../../../assets/scripts/main"
import { switchFunction } from "../../../assets/scripts/switch"

export default {

  components: {
    NavbarComponent
  },

  mounted() {

    mainApp();
    switchFunction();

  }


}
</script>

<style>

</style>