<template>
    <div class="max-w-md mx-auto rounded-md overflow-hidden shadow-md">
        <img class="w-full h-64 object-cover" :src="imageUrl" :alt="imageAlt" />
        <div class="p-4">
        <h2 class="text-xl font-semibold mb-2"  style="display:flex;justify-content: center;align-items: center;">{{ name }}</h2>
        <p class="text-gray-600" style="color:brown;display:flex;justify-content: center;align-items: center;">$ {{ price }}</p>       
    </div>
    </div>
</template>


<script>
export default {
name: "Card",
props: {
  name: String,
  price: String,
  imageUrl: String,
  imageAlt: String,
},
};
</script>

<style>

</style>
