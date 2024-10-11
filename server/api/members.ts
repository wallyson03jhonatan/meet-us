type SupportedLangs = 'pt' | 'en' | 'es';

const translations: Record<SupportedLangs, { profession1: string, profession2: string, profession3: string, bio1: string, bio2: string, bio3: string }> = {
    pt: {
        profession1: 'Desenvolvedor de Software',
        profession2: 'Gerente de Projetos',
        profession3: 'DevOps',
        bio1: 'Como solucionador de problemas, adoro enfrentar desafios de frente e fornecer soluções centradas no usuário. Sou apaixonado por aprimorar as experiências do usuário e tornar a tecnologia mais acessível e eficiente.',
        bio2: 'Acredito que desenvolver software é transformar ideias em soluções que melhoram vidas. Com criatividade e lógica, a paixão por criar tecnologias conecta pessoas, resolve problemas e impulsiona inovações que moldam o futuro humano.',
        bio3: 'Conheci a programação por meio da robótica em 2015 desde então procuro formas de me aprimorar nessa área que é tão vasta, buscando sempre evoluir e aprender, creio que a todo instantes é nos dado oportunidades para sermos melhores.',
    },  
    en: {
        profession1: "Software Developer",
        profession2: "Project Manager",
        profession3: "DevOps",
        bio1: "As a problem solver, I love facing challenges head-on and providing user-centered solutions. I am passionate about enhancing user experiences and making technology more accessible and efficient.",
        bio2: "I believe that developing software is about turning ideas into solutions that improve lives. With creativity and logic, the passion for creating technology connects people, solves problems, and drives innovations that shape the human future.",
        bio3: "I discovered programming through robotics in 2015 and have been seeking ways to improve in this vast field ever since. I am always looking to evolve and learn, as I believe every moment gives us opportunities to become better."
    },
    es: {
        profession1: "Desarrollador de Software",
        profession2: "Gerente de Proyectos",
        profession3: "DevOps",
        bio1: "Como solucionador de problemas, me encanta enfrentar los desafíos de frente y proporcionar soluciones centradas en el usuario. Me apasiona mejorar las experiencias de los usuarios y hacer que la tecnología sea más accesible y eficiente.",
        bio2: "Creo que desarrollar software es transformar ideas en soluciones que mejoran vidas. Con creatividad y lógica, la pasión por crear tecnología conecta a las personas, resuelve problemas e impulsa innovaciones que moldean el futuro humano.",
        bio3: "Descubrí la programación a través de la robótica en 2015 y desde entonces busco formas de mejorar en este vasto campo. Siempre busco evolucionar y aprender, ya que creo que cada momento nos da oportunidades para ser mejores."
    },

}

export default defineEventHandler((event) => {
    const query = getQuery(event);
    const lang = (query.lang as SupportedLangs) || 'pt';

    const t = translations[lang] || translations['pt'];
    
    return {
      "members": [
        {
            "id": 1,
            'avatar': 'https://avatars.githubusercontent.com/u/95327182?v=4',
            'name': 'Wallyson O.',
            'profession': t.profession1,
            'bio': t.bio1,
            'links': [
                {
                    'title': 'Github',
                    'url': 'https://github.com/wallyson03jhonatan',
                    'icon': ''
                },
                {
                    'title': 'Linkedin',
                    'url': 'https://www.linkedin.com/in/wallyson03jhonatan/',
                    'icon': '',
                },
                {
                    'title': 'Instagram',
                    'url': 'https://www.instagram.com/wallyson_jhonatan/profilecard/?igsh=MTJoeDVqYXl5eThmcw==',
                    'icon': '',
                }
            ]
        },
        {
            "id": 2,
            'avatar': 'https://avatars.githubusercontent.com/u/137879292?v=4',
            'name': 'Maya O.',
            'profession': t.profession2,
            'bio': t.bio2,
            'links': [
                {
                    'title': 'Github',
                    'url': '#',
                    'icon': ''
                },
                {
                    'title': 'Linkedin',
                    'url': '#',
                    'icon': '',
                },
                {
                    'title': 'Instagram',
                    'url': '#',
                    'icon': '',
                }
            ]
        },
        {
            "id": 3,
            'avatar': 'https://avatars.githubusercontent.com/u/85066396?v=4',
            'name': 'Marcelli S.',
            'profession': t.profession3,
            'bio': t.bio3,
            'links': [
                {
                    'title': 'Github',
                    'url': 'https://github.com/MarcelliSarti',
                    'icon': ''
                },
                {
                    'title': 'Linkedin',
                    'url': 'https://www.linkedin.com/in/marcelli-sarti/',
                    'icon': '',
                },
                {
                    'title': 'Instagram',
                    'url': 'https://www.instagram.com/marcelli_sarti?igsh=MWQ5ZWg1Z2V4dzd2aQ==',
                    'icon': '',
                }
            ]
        },
      ]
    }
})
