<template>
    <div id="map" class="map"></div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import L from 'leaflet';
  
  import 'leaflet/dist/leaflet.css';
  
  export default defineComponent({
    name: 'Map',
    data() {
      return {
        map: null,
        center: [39.9072, 116.3912],
        zoom: 13,
      };
    },
    mounted() {
      // 创建地图实例
      this.map = L.map('map').setView(this.center, this.zoom);
  
      // 添加地图图层
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
      }).addTo(this.map);
    },
    beforeUnmount() {
      // 销毁地图实例
      if (this.map) {
        this.map.remove();
        this.map = null;
      }
    },
  });
  </script>
  
  <style scoped>
  .map {
    width: 100%;
    height: 100vh;
  }
  </style>
  