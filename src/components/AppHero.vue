<template>
    <div class="flex flex-col md:flex-row relative">
        <!-- hero text -->
        <div class="mx-4 md:ml-10 lg:mx-40 mt-9 md:mt-24  md:w-[398px] ">
            <h1 class="w-[500px] text-4xl font-extrabold text-deep-blue">Maximize skill, minimize budget</h1>
            <p class="mt-6 text-base text-grey "> Our modern courses across a range of in-demand skills will give you the
                knowledge you need to live the life you want.</p>
            <div
                class="flex items-center justify-center mt-6 w-[167px] h-14 bg-gradient text-white rounded-[31.5px] font-bold hover:opacity-50">
                <button>Get Started</button>
            </div>

        </div>
        <!-- hero image -->
        <div class="md:-mr-2 md:-mt-12 lg:-mr-2 lg:-mt-24 overflow-hidden ">
            <img class="md:hidden mt-11" src="./..\assets\images\image-hero-mobile@2x.png" alt="mobile-image" />
            <img class="hidden lg:hidden md:block" style="height: 100%;"
                src="./..\assets\images\image-hero-tablet2x.png" alt="tablet-image" />
                <img class="hidden md:hidden lg:block -mr-20" src="./..\assets\images\image-hero-desktop2x.png" alt="desktop-image" />
        </div>
    </div>
</template>
<style scoped>
.bg-gradient {
    background: linear-gradient(rgb(240, 42, 166), rgb(255, 111, 72));
}

.bg-hover {
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), linear-gradient(180deg, #FF6F48 0%, #F02AA6 100%)
}</style>