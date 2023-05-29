<template>
    <div class="h-[900px] background">
        <div
            class="my-3 mx-4 md:ml-10 lg:mx-40 grid grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-y-14 md:gap-x-4 lg:grid-cols-3 lg:gap-y-16 lg:gap-x-5">
            <div class="w-full h-[120px] md:h-[259px] lg:h-[322px] rounded-[10px] border-transparent box-background">
                <h1
                    class="my-6 mx-12 md:mt-14 lg:mt-16 lg:mx-6 w-[286px] text-2xl lg:text-4xl text-white text-left font-extrabold">
                    Check out our most popular courses!
                </h1>
            </div>
            <div class=" w-full h-[264px] md:h-[259px] lg:h-[322px] rounded-[10px] border-transparent bg-white">
                <div class="flex flex-col mx-12 lg:mx-6 gap-y-7">
                    <img src="./..\assets\images\icon-animation.svg" class="w-16 h-16 -mt-6 md:-mt-8" alt="animation">
                    <h2 class="font-extrabold text-xl lg:text-2xl text-deep-blue">Animation</h2>
                    <p class="w-[350px] lg:w-[259px] text-base text-dim-grey"> Learn the latest animation techniques to
                        create stunning motion
                        design and captivate your audience.</p>
                    <a href="#" class="text-lg font-bold text-violet-red hover:text-light-pink">Get Started</a>
                </div>

            </div>
            <div class=" w-full h-[264px] md:h-[259px] lg:h-[322px] rounded-[10px] border-transparent bg-white">
                <div class="flex flex-col mx-12 lg:mx-6 gap-y-7">
                    <img src="./..\assets\images\icon-design.svg" class="w-16 h-16 -mt-6 md:-mt-8" alt="animation">
                    <h2 class="font-extrabold text-xl lg:text-2xl text-deep-blue">Design</h2>
                    <p class="w-[350px] lg:w-[259px] text-base text-dim-grey"> Create beautiful, usable interfaces to help
                        shape the future of
                        how the web looks.</p>
                    <a href="#" class="text-lg font-bold text-violet-red hover:text-light-pink">Get Started</a>
                </div>

            </div>
            <div class=" w-full h-[264px] md:h-[259px] lg:h-[322px] rounded-[10px] border-transparent bg-white">
                <div class="flex flex-col mx-12 lg:mx-6 gap-y-7">
                    <img src="./..\assets\images\icon-photography.svg" class="w-16 h-16 -mt-6 md:-mt-8" alt="animation">
                    <h2 class="font-extrabold text-xl lg:text-2xl text-deep-blue">Photography</h2>
                    <p class="w-[350px] lg:w-[259px] text-base text-dim-grey"> Explore critical fundamentals like lighting,
                        composition, and focus
                        to capture exceptional photos.</p>
                    <a href="#" class="text-lg font-bold text-violet-red hover:text-light-pink">Get Started</a>
                </div>
            </div>
            <div class=" w-full h-[264px] md:h-[259px] lg:h-[322px] rounded-[10px] border-transparent bg-white">
                <div class="flex flex-col mx-12 lg:mx-6 gap-y-7">
                    <img src="./..\assets\images\icon-crypto.svg" class="w-16 h-16 -mt-6 md:-mt-8" alt="animation">
                    <h2 class="font-extrabold text-xl lg:text-2xl text-deep-blue">Crypto</h2>
                    <p class="w-[350px] lg:w-[259px] text-base text-dim-grey"> All you need to know to get started investing
                        in crypto. Go from beginner
                        to advanced with this 54 hour course.</p>
                    <a href="#" class="text-lg font-bold text-violet-red hover:text-light-pink">Get Started</a>
                </div>
            </div>
            <div class=" w-full h-[264px] md:h-[259px] lg:h-[322px] rounded-[10px] border-transparent bg-white">
                <div class="flex flex-col mx-12 lg:mx-6 gap-y-7">
                    <img src="./..\assets\images\icon-business.svg" class="w-16 h-16 -mt-6 md:-mt-8" alt="animation">
                    <h2 class="font-extrabold text-xl lg:text-2xl text-deep-blue">Business</h2>
                    <p class="w-[350px] lg:w-[259px] text-base text-dim-grey"> A step-by-step playbook to help you start,
                        scale, and sustain your business
                        without outside investment.</p>
                    <a href="#" class="text-lg font-bold text-violet-red hover:text-light-pink">Get Started</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup></script>
<style scoped>
.background {
    background: linear-gradient(rgba(255, 255, 255, 1), rgba(240, 241, 255, 1));
}

.box-background {
    background: linear-gradient(rgb(240, 42, 166), rgb(255, 111, 72));
}</style>