<template>
  <ul class="navbar-nav navbar-sidenav">
        <li class="nav-item active" data-toggle="tooltip" data-placement="right" title="Dashboard">
            <a class="nav-link" href="dashboard.html">
                <i class="fas fa-fw fa-home-lg-alt"></i>
                <span class="nav-link-text">
                    Inicio
                </span>
            </a>
      </li>
      <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Tables">
            <router-link :to="{ name: 'Table', params:{}}" class="nav-link">
                <i class="fa fa-fw fa-table"></i>
                <span class="ml-2 nav-link-text">Tablas</span>
            </router-link>
      </li>
      <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Tables">
            <a class="nav-link" href="form.html">
                <i class="far fa-fw fa-window"></i>
                <span class="nav-link-text">
                    Formulario
                </span>
            </a>
      </li>
      <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Components01">
          <a class="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#collapseComponents-1">
              <i class="fas fa-fw fa-cog"></i>
              <span class="nav-link-text">
                  Componentes-01
              </span>
          </a>
          <ul class="sidenav-second-level collapse" id="collapseComponents-1">
              <li>
                  <a href="ui.html">UI</a>
              </li>

              <li>
                  <a href="switch.html">Interruptor</a>
              </li>
          </ul>
      </li>
      <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Components02">
          <a class="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#collapseComponents-2">
              <i class="fas fa-fw fa-cog"></i>
              <span class="nav-link-text">
                  Componentes-02
              </span>
          </a>
          <ul class="sidenav-second-level collapse" id="collapseComponents-2">
              <li>
                  <a href="grid.html">Cuadricula</a>
              </li>
              <li>
                  <a href="card.html">Tarjetas</a>
              </li>
          </ul>
      </li>
      <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Components03">
          <a class="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#collapseComponents-3">
              <i class="fas fa-fw fa-cogs"></i>
              <span class="nav-link-text">
                  Componentes-03
              </span>
          </a>
          <ul class="sidenav-second-level collapse" id="collapseComponents-3">
              <li>
                  <a href="alert.html">Alertas</a>
              </li>
              <li>
                  <a href="tab.html">Pestañas</a>
              </li>
              <li>
                  <a class="nav-link-collapse collapsed" data-toggle="collapse" href="#collapseMulti2">
                      Grupo de listas</a>
                  <ul class="sidenav-third-level collapse" id="collapseMulti2">
                      <li>
                          <a href="list01.html">Lista 01</a>
                      </li>
                      <li>
                          <a href="list02.html">Lista 02</a>
                      </li>
                  </ul>
              </li>
          </ul>
      </li>
  </ul>
</template>

<script>
export default {

}
</script>

<style>

</style>