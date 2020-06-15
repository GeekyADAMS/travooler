<template>
    <div class="w100 flex-col a-c">
        <h1 class="oops Poppins mt-2 text-25">Ooops<i class="red">!</i></h1>
        <p class="mt-2 t-center poppins fade-6 matte green w90p ">We strongly believe you are lost and we are ready to take you back to a safe place.</p>

        <img src="@/assets/img/illustrations/err404.png" class="f04-illus mt-3" alt="404 image">

        <p class="mt-2 t-center poppins matte t-green-dark w90p ">Possible reasons for this mess:</p>

        <div class="w90p mt-2 ml-1 flex-col a-c-n">
            <ul class="poppins_light">
                <li> You missed some spellings. Try to take your dictionary more seriously.</li>
                <!--<li class="mt-p5"> You are trying to exploit things. Do something more fun like applying to schools.</li>-->
            </ul>
        </div>

        <button class="mt-3 mb-2 pad-stretch no-border no-outline poppins edge-curve white matte_bg point" @click="$router.push('/')">Find a safe place</button>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .f04-illus{
        width: 20rem;
    }
</style>