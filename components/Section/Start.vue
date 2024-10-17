<template>
    <section id="start" class="pb-16 pt-32 bg-gray-100 dark:bg-gray-900">
        <UContainer>
            <div class="grid grid-cols-1 lg:grid-cols-2">

                <div class="flex flex-col gap-12">
                    <div class="flex flex-col gap-8">
                        <h1 class="font-semibold text-4xl md:text-6xl">We collaborate to build digital experience</h1>
                        
                        <p class="font-normal">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Cum, earum laudantium explicabo sint placeat corrupti sapiente voluptatibus minus totam
                            quaerat et veniam modi? Alias consequatur illum labore dolor molestiae ad.
                        </p>

                        <UButton 
                            class="max-w-[200px] justify-center"
                            size="lg" 
                            color="black" 
                            variant="solid" 
                            to="#contact-us"
                            :ui="{ rounded: 'rounded-full' }" 
                        >
                            Let's Talk
                        </UButton>
                    </div>

                    <div class="flex flex-col lg:flex-row gap-4">
                        <div 
                            v-for="item, key in startMiniCardInfos" 
                            :key="key" 
                            class="flex flex-col p-4 gap-8 bg-white dark:bg-gray-800/50 rounded-2xl shadow-lg overflow-hidden"
                        >
                            <UIcon :name="item.icon" :size="24"/>
                            <p class="text-sm">{{ item.info }}</p>
                        </div>
                    </div>
                </div>

                <div class="hidden lg:flex items-start justify-end">
                    <div class="w-fit h-fit rounded-full border-4 shadow-xl border-black dark:border-white">
                        <NuxtImg 
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                            width="400" 
                            height="600" 
                            quality="100" 
                            alt="image of person" 
                            loading="lazy" 
                            :preload="true"
                            format="webp"
                            class="rounded-full"
                        >
                        </NuxtImg>
                    </div>
                </div>

            </div>
        </UContainer>
    </section>
</template>

<script setup lang="ts">
const startMiniCardInfos = [
    {
        info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est illo dolorum numquam accusamus consectetur, quaerat deleniti neque sapiente ad, abaliquam iure autem nam inventore? Sequi quod sit id facilis!', 
        icon: 'i-catppuccin:bash'
    },
    {
        info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est illo dolorum numquam accusamus consectetur, quaerat deleniti neque sapiente ad, abaliquam iure autem nam inventore? Sequi quod sit id facilis!', 
        icon: 'i-catppuccin:release'
    },
    {
        info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est illo dolorum numquam accusamus consectetur, quaerat deleniti neque sapiente ad, abaliquam iure autem nam inventore? Sequi quod sit id facilis!', 
        icon: 'i-catppuccin:liquid'
    },
]

</script>