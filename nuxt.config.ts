// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    devtools: {enabled: true},
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    alias: {
        '@': '/<rootDir>'
    },
    css: ['~/assets/scss/main.scss'],
    modules: ['@pinia/nuxt']
})
