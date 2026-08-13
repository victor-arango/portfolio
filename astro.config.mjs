import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    i18n:{
        locales:["en", "esp"],
        defaultLocale:"en",
    },
    integrations:[
        react()],   
},

);
