<template>
  <ul class="navbar-nav ml-auto">
    <li class="nav-item dropdown d-none d-xl-inline-block">
        <a class="nav-link dropdown-toggle" id="UserDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
            <span class="profile-text">Hola, José Cabrera!</span>
            <img class="img-xs rounded-circle" src="@/assets/recursos/img/usuarios/usuario02.jpg" alt="Profile image">
        </a>
        <div class="dropdown-menu dropdown-menu-user dropdown-menu-right navbar-dropdown" aria-labelledby="UserDropdown">
            <div class="dropdown-menu-header">
                <div class="widget-content p-0">
                    <div class="widget-content-wrapper">
                        <div class="widget-content-left mr-3">
                            <img width="42" class="rounded-circle" src="@/assets/recursos/img/usuarios/usuario02.jpg" alt="">
                        </div>
                        <div class="widget-content-left">
                            <p class="widget-nombre">
                                José Cabrera
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="dropdown-divider"></div>
            <h6 class="dropdown-header text-center"><strong>Configuraciones cuenta de usuario</strong></h6>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item">
                <i class="fas fa-user fa-fw-m"></i> Mi Perfil
            </a>
            <a href="#" class="dropdown-item">
                <i class="fas fa-key fa-fw-m"></i> Actualizar contraseña
            </a>
            <a href="#" class="dropdown-item" data-toggle="modal" data-target="#config">
                <i class="fas fa-cog fa-fw-m"></i> Configuración
            </a>
            <div class="dropdown-divider"></div>
            <div class="row grid-menu-mess">
                <div class="col-sm-12 text-center">
                    <a type="button" href="index.html" class="btn btn-01">
                        <i class="fas fa-door-open fa-fw-m"></i> Salir
                    </a>
                </div>
            </div>
        </div>
    </li>
  </ul>
</template>

<script>
export default {

}
</script>

<style>

</style>