<template>
    <div style="display: flex;justify-content: center;align-items: center;margin: 40px 20px;">
    <fieldset id="switch" class="radio">
        <block v-for="(item , index) in user.cateList">
            <input name="switch" :id="item.id" type="radio">
            <label :for="item.name">{{item.name}}</label>
        </block>
              
            <!-- <input name="switch" id="two" type="radio">
            <label for="two">two</label>
            <input name="switch" id="off" type="radio">
            <label for="off">off</label>
            <input name="switch" id="open" type="radio">
            <label for="open">open</label> -->
    </fieldset>
</div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user';

const user = useUserStore();
user.getCategory()
</script>


<style scoped>
fieldset {
  border: 0;
}

/* Hide default radio */
.radio input[type="radio"] {
  position: absolute;
  visibility: hidden;
  display: none;
  opacity: 0;
  z-index: -1;
}

/* Customizing label */
.radio label {
  position: relative;
  padding: 10px 20px 10px 25px;
  cursor: pointer;
  border-radius: 20px;
  color: #2196F3;
  margin: 0px 5px;
  font-weight: 600;
  text-transform: uppercase;
}

.radio label, .radio label::before {
  -webkit-transition: .25s all ease;
  transition: .25s all ease;
}

.radio label::before {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  content: " ";
  position: absolute;
  top: 30%;
  left: 0;
  width: 1em;
  height: 1em;
  border: 2px solid #2196F3;
}

.radio input[type="radio"] + label::before {
  border-radius: 1em;
}


/* Checked toggle */
.radio input[type="radio"]:checked + label {
  color: #fff;
  background: #2196F3;
  z-index: 1;
}

.radio input[type="radio"]:checked + label {
  padding: 10px 20px 10px 20px;
}

.radio input[type="radio"]:checked + label::before {
  top: 4px;
  width: 100%;
  height: 2em;
  z-index: -1;
}

.radio:hover input[type="radio"]:checked + label {
  -webkit-box-shadow: #2195f338 0px 0px 0px 25px;
  box-shadow: #2195f338 0px 0px 0px 25px;
}</style>