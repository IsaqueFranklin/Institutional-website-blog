import React from 'react'
import {Helmet} from "react-helmet";

const seo = {
    title: 'Serviços Arca Perícia',
    description: 'Veja todos os nossos serviços, trabalhos, e clientes. Nós trabalhamos com perícia contábil e possuímos uma gama de serviços de acordo com a sua necessidade.',
    url: '',
    image: 'https://arca-pericia.firebaseapp.com/img/course.png',
}


function Services() {
    return (
        <>
        <Helmet
            title={`${seo.title}`}
            meta={[
                { name: 'description', property: 'og:description', content: seo.description },
                { property: 'og:title', content: `${seo.title}` },
                { property: 'og:url', content: seo.url },
                { property: 'og:image', content: seo.image },
                { property: 'og:image:type', content: 'image/jpeg' },
                { property: 'twitter:image:src', content: seo.image },
                { property: 'twitter:title', content: `${seo.title}` },
                { property: 'twitter:description', content: seo.description },
        ]} />
        <div>
            
        </div>
        </>
    )
}

export default Services
