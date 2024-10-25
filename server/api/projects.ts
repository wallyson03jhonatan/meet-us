type SupportedLangs = 'pt' | 'en' | 'es';

const translations: Record<SupportedLangs, { description1: string, description2: string, description3: string, description4: string }> = {
    pt: {
        description1: "Verifique o clima em sua cidade ou na cidade de seus amigos com o Vue Weather! Útil no dia a dia para conferir detalhes climáticos ou apenas matar a curiosidade.",
        description2: "Registre os pedidos do seu restaurante ou hamburgueria com o Burguer Project! Útil para cadastro e consulta rápida dos pedidos realizados.",
        description3: "Tem muitos afazeres no dia a dia e precisa se organizar? Utilize nossa lista de tarefas personalizada para não se perder nas obrigações!",
        description4: "Precisa divulgar seus links de contato? Nosso serviço personalizado de links permite uma divulgação rápida e simples de seus meios de contato.",
    },  
    en: {
        description1: "Check the weather in your city or your friends' city with Vue Weather! Useful for daily life to check weather details or just to satisfy curiosity.",
        description2: "Record your restaurant or burger joint's orders with Burguer Project! Useful for quick registration and consultation of placed orders.",
        description3: "Have a lot of tasks to handle daily and need to get organized? Use our personalized task list to stay on top of your obligations!",
        description4: "Need to share your contact links? Our personalized link service allows for quick and simple sharing of your contact methods.",
    },
    es: {
        description1: "Verifique el clima en su ciudad o en la ciudad de sus amigos con Vue Weather. ¡Útil en el día a día para revisar detalles climáticos o simplemente saciar la curiosidad!",
        description2: "Registre los pedidos de su restaurante o hamburguesería con el Burguer Project. ¡Útil para el registro y la consulta rápida de los pedidos realizados!",
        description3: "¿Tienes muchas tareas diarias y necesitas organizarte? ¡Utiliza nuestra lista de tareas personalizadas para no perderte en tus obligaciones!",
        description4: "¿Necesitas compartir tus enlaces de contacto? Nuestro servicio personalizado de enlaces permite una difusión rápida y sencilla de tus medios de contacto.",
    },

}

export default defineEventHandler((event) => {
    const query = getQuery(event);
    const lang = (query.lang as SupportedLangs) || 'pt';

    const t = translations[lang] || translations['pt'];
    
    return {
      "projects": [
        {
            "id": 1,
            'title': 'Vue Weather API',
            'description': t.description1,
            'deploy': 'https://vue-weather-api.vercel.app',
            'github': 'https://github.com/wallyson03jhonatan/vue-weather-api',
            'stack': ['Vue', 'Pinia', 'TailwindCSS']
        },
        {
            "id": 2,
            'title': 'Burguer Project',
            'description': t.description2,
            'deploy': 'https://www.youtube.com/watch?v=bVCYqL9HVTI',
            'github': 'https://github.com/wallyson03jhonatan/burguer-project',
            'stack': ['Vue', 'Vue Router', 'Vuex']
        },
        {
            "id": 3,
            'title': 'To Do React',
            'description': t.description3,
            'deploy': 'https://www.youtube.com/watch?v=tbJQCxFjdQw',
            'github': 'https://github.com/wallyson03jhonatan/to-do-react',
            'stack': ['React', 'Typescript', 'CSS']
        },
        {
            "id": 4,
             'title': 'Dev Links',
            'description': t.description4,
            'deploy': 'https://github.com/wallyson03jhonatan/dev-links/raw/main/.github/preview.jpg',
            'github': 'https://github.com/wallyson03jhonatan/dev-links',
            'stack': ['HTML', 'CSS', 'Javascript']
        },
      ]
    }
})
