<template>
    <UContainer as="section" id="contact-us" class="py-16 scroll-mt-24">
        
        <div class="text-center">
            <h2 class="font-semibold text-4xl">{{ $t("contatoTitulo") }}</h2>
            <p class="mt-1 font-normal">{{ $t("contatoDescricao") }}</p>
        </div>
        
        <SectionContactEmailForm />
      
    </UContainer>
  </template>