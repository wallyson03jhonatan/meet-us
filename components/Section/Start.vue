<template>
    <section id="start" class="pb-16 pt-32 bg-gray-100 dark:bg-gray-900">
        <UContainer>
            <div class="grid grid-cols-2 gap-16">

                <div class="flex flex-col gap-12">
                    <div class="flex flex-col gap-8">
                        <h2 class="font-semibold text-4xl">We collaborate to build digital experience</h2>
                        
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

                    <div class="flex gap-4">
                        <div class="flex flex-col p-4 gap-8 bg-white dark:bg-gray-800/50 rounded-2xl shadow-lg">
                            <UIcon name="i-catppuccin:bash" :size="24" />
                            <p class="text-sm">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                Est illo dolorum numquam accusamus consectetur, quaerat deleniti neque sapiente ad, ab
                                aliquam iure autem nam inventore? Sequi quod sit id facilis!
                            </p>
                        </div>
                        <div class="flex flex-col p-4 gap-8 bg-white dark:bg-gray-800/50 rounded-2xl shadow-lg">
                            <UIcon name="i-catppuccin:release" :size="24" />
                            <p class="text-sm">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                Est illo dolorum numquam accusamus consectetur, quaerat deleniti neque sapiente ad, ab
                                aliquam iure autem nam inventore? Sequi quod sit id facilis!
                            </p>
                        </div>
                        <div class="flex flex-col p-4 gap-8 bg-white dark:bg-gray-800/50 rounded-2xl shadow-lg">
                            <UIcon name="i-catppuccin:liquid" :size="24" />
                            <p class="text-sm">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                Est illo dolorum numquam accusamus consectetur, quaerat deleniti neque sapiente ad, ab
                                aliquam iure autem nam inventore? Sequi quod sit id facilis!
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <div class="flex justify-center items-center rounded-full border border-red-500">
                        <NuxtImg 
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                            width="400" 
                            height="600" 
                            quality="100" 
                            alt="image of person" 
                            loading="lazy" 
                            class="rounded-full"
                        />
                    </div>
                </div>

            </div>
        </UContainer>



    </section>
</template>