<template>
  <h2>Tipo de cuenta: {{ cuenta }}</h2>
  <h2>Saldo: {{ saldo }}</h2>
  <h2>Cuenta : {{ estado ? "Activa" : "Desactivada" }}</h2>
  <div v-for="(tipo, index) in servicios" :key="index">
    {{ index + 1 }} {{ tipo }}
  </div>

  <!-- ESTE ES UN COMPONENTE HIJO, POR QUE EL PADRE ES CUENTA -->
  <AccionSaldo texto="Aumentar Saldo"/>
  <AccionSaldo texto="Disminuirdfsfs Saldo"/>
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
      saldo: 1000,
      estado: false,
      servicios: ["giro", "abono", "transferencia"],
    };
  },
  methods: {
    aumentar() {
      $this.saldo = $this.saldo + 100;
    },
    disminuir() {
      $this.saldo = $this.saldo - 100;
    },
  },
};
</script>

<style>
</style>