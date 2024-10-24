<template>
    <form
        action="https://formspree.io/f/xvgogvqj"
        method="POST"
        class="mt-16 flex flex-col gap-8 mx-auto w-full max-w-xl"
    >
        <div class="flex flex-col gap-4 items-center"> 
            <UFormGroup :label="$t('contatoNome')" name="fullname" size="lg" class="w-full">
                <UInput :ui="uiInput" v-model="fullname" type="text" placeholder="Naruto U." /> 
                <span v-if="!fullname" class="text-sm text-red-500">{{ $t("contatoErrorNome") }}</span>
            </UFormGroup>

            <UFormGroup :label="$t('contatoEmail')" name="email" size="lg" class="w-full">
                <UInput :ui="uiInput" v-model="email" type="text" placeholder="naruto@gmail.com" />
                <span v-if="!email" class="text-sm text-red-500">{{ $t("contatoErrorEmail") }}</span>
            </UFormGroup>

            <UFormGroup :label="$t('contatoAssunto')" name="subject" size="lg" class="w-full">
                <UInput :ui="uiInput" v-model="subject" type="text" placeholder="Naruto U." /> 
                <span v-if="!subject" class="text-sm text-red-500">{{ $t("contatoErrorAssunto") }}</span>
            </UFormGroup>

            <UFormGroup :label="$t('contatoMensagem')" name="message" size="lg" class="w-full">
                <UTextarea :ui="uiInput" v-model="message" resize variant="outline" placeholder="Escreva sua mensagem..." /> 
                <span v-if="!message" class="text-sm text-red-500">{{ $t("contatoErrorMensagem") }}</span>
            </UFormGroup>  
        </div>  

        <UButton 
            color="black" 
            type="submit" 
            class="w-full max-w-[300px] justify-center mx-auto" 
            size="lg" 
            :label="$t('contatoBotao')" 
            :disabled="!fullname || !email || !subject || !message"
            :ui="{ rounded: 'rounded-full'}" 
        />
    </form>
</template>


<script setup lang="ts">
const email = ref<string>('');
const fullname = ref<string>('');
const subject = ref<string>('');
const message = ref<string>('');

const uiInput =  { 
    rounded: 'rounded-lg',
    color: {
        white: {
            outline: 'shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400'
        },
    }    
}
</script>



