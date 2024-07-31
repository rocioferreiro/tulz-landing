const currentYear = new Date().getFullYear();
const data = {
    sitename: "Tulz Education",
    sitetagline: "La revolución educativa esta en camino! ✨ 🔥",
    siteurl: "https://www.tulzedu.com",
    sitelogo: "",
    title: "Proximamente!",
    description: "La innovación educativa está cerca. Nuestro equipo de expertos está creando una solución revolucionaria para las aulas. ¡Pronto descubrirás el poder de la tecnología AI en el aprendizaje!",
    newsletterheading: "Compartinos tu email para saber más!",
    copyrightText: `Copyright © ${currentYear} | Design and Developed By &nbsp;<a target="_blank" class="no-underline md:underline" href="https://www.linkedin.com/company/tulz-education">Tulz Education</a>`,
    socialIconsHeading: "Seguinos 📣",
    hideSubscribeForm: false, // make true to disable subscription form
    socialIcons: [
        // {
        //     icon: "facebook",
        //     link: "https://www.facebook.com/sandeep.baikare/",
        // },
        // {
        //     icon: "twitter",
        //     link: "https://twitter.com/BaikareSandeep",
        // },
        {
            icon: "linkedIn",
            link: "https://www.linkedin.com/company/tulz-education",
        },
    ],
    hide :{
        subscribeForm: false, // make true to disable subscription form
        header: false,
        content: false,
        footer: false,
    }
}

export default data;
