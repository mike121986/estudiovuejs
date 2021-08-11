<template>
  <h2>Tipo de cuenta: {{ cuenta }}</h2>
  <h2>Saldo: {{ saldo }}</h2>
  <h2>Cuenta : {{ estado ? "Activa" : "Desactivada" }}</h2>
  <div v-for="(tipo, index) in servicios" :key="index">
    {{ index + 1 }} {{ tipo }}
  </div>

  <!-- ESTE ES UN COMPONENTE HIJO, POR QUE EL PADRE ES CUENTA -->
  <AccionSaldo texto="Aumentar Saldo" @accion="aumentar"/>
  <AccionSaldo texto="Disminuir Saldo" @accion="disminuir" :desactivar="desactivar"/>
</template>

<script>
import AccionSaldo from "./AccionSaldo.vue";
export default {
  components: {
    AccionSaldo,
  },
  data() {
    return {
      cuenta: "Visa",
      saldo: 500,
      estado: false,
      servicios: ["giro", "abono", "transferencia"],
      desactivar: false,
    };
  },
  methods: {
    aumentar() {
      this.desactivar = false;
      this.saldo = this.saldo + 100;
    },
    disminuir() {
      if(this.saldo === 0){
        this.desactivar = true;
        alert("el saldo de de CERO")
        return
      }
      this.saldo = this.saldo - 100;
    },
  },
};
</script>

<style>
</style>