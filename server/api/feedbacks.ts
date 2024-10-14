type SupportedLangs = 'pt' | 'en' | 'es';

const translations: Record<SupportedLangs, { profession1: string, profession2: string, feedback1: string, feedback2: string }> = {
    pt: {
        profession1: 'Analista de Negócios',
        profession2: 'Gestor de Tráfego Pago',
        feedback1: 'Como Analista de Negócios, a parceria com a empresa foi essencial para entender as dores dos nossos clientes e auxiliar na tomada de decisões estratégicas, tornando nossas ações mais assertivas e eficazes.',
        feedback2: 'Como Gestora de Tráfego Pago, a parceria com a empresa foi fundamental para otimizar a classificação dos produtos, atrair um público maior e, como resultado, gerar um aumento significativo de receita.',
    },  
    en: {
        profession1: "Business Analyst",
        profession2: "Paid Traffic Manager",
        feedback1: "As a Business Analyst, the partnership with the company was essential in understanding our customers' pain points and assisting in strategic decision-making, making our actions more accurate and effective.",
        feedback2: "As a Paid Traffic Manager, the partnership with the company was key in optimizing product rankings, attracting a larger audience, and, as a result, driving a significant increase in revenue.",
    },
    es: {
        profession1: "Analista de Negocios",
        profession2: "Gestor de Tráfico Pago",
        feedback1: "Como Analista de Negocios, la colaboración con la empresa fue esencial para entender los problemas de nuestros clientes y ayudar en la toma de decisiones estratégicas, haciendo nuestras acciones más precisas y eficaces.",
        feedback2: "Como Gestora de Tráfico Pago, la colaboración con la empresa fue esencial para optimizar la clasificación de los productos, atraer a más público y, como resultado, generar un aumento significativo en los ingresos.",
    },
}

export default defineEventHandler((event) => {
    const query = getQuery(event);
    const lang = (query.lang as SupportedLangs) || 'pt';

    const t = translations[lang] || translations['pt'];
    
    return {
      "feedbacks": [
        {
            "id": 1,
            'avatar': 'https://avatars.githubusercontent.com/u/110235604?v=4',
            'name': 'K. Henrique',
            'profession': t.profession1,
            'feedback': t.feedback1,
            'rating': 95
        },
        {
            "id": 2,
            'avatar': 'https://avatars.githubusercontent.com/u/1300172?v=4',
            'name': 'C. Maria',
            'profession': t.profession2,
            'feedback': t.feedback2,
            'rating': 85
        },
      ]
    }
})
