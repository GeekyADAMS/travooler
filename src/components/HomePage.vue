<template>
    <div>
        <section class="sixth poppins flex-col a-c w90 s-w95 m-auto">
          <h1>A better, easier application experience</h1>
          <div class="flex-row a-c flex-col-m">
            <div v-for="vals in businessOptions" :key="vals.tag" class="flex-col a-c point trans-anime-up">
              <h2 style="opacity: .6;">{{vals.purpose}}</h2>
              <p style="opacity: .6;">{{vals.tag}}</p>
            </div>
          </div>
        </section>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    
</style>