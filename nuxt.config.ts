// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: false },
    css: ['~/assets/css/styles/main.scss'],
    components: [
        {
            path: '~/components',
            pathPrefix: false,
        },
    ],
    
    modules: [
        'nuxt-bootstrap-icons',
        'nuxt-icon',
        '@vee-validate/nuxt',
        '@element-plus/nuxt',
        'usebootstrap',
        'nuxt-tiptap-editor',
    ],
    tiptap: {
        prefix: 'Tiptap', //prefix for Tiptap imports, composables not included
    },

    veeValidate: {
        autoImports: true,
    },
    build: {
        transpile: ['vee-validate','vue-chartjs', 'chart.js'],
    },
    plugins: ['~/plugins/vue-draggable'],
    app: {
        head: {
            title: 'Tour',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                {
                    name: 'description',
                    content: process.env.npm_package_description || 'Tour',
                },
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },

                {
                    rel: 'stylesheet',
                    href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css',
                },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i',
                },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css?family=Raleway:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i',
                },

                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i',
                },

                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700,700i&display=swap',
                },

                {
                    rel: 'stylesheet',
                    href: 'https://cdnjs.cloudflare.com/ajax/libs/ionicons/4.5.6/css/ionicons.min.css',
                },
            ],
            script: [
                {
                    src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js',
                    type: 'text/javascript',
                },
                {
                    src: '_nuxt/assets/vendor/jquery/jquery.min.js',
                    type: 'text/javascript',
                },
                { src: 'https://kit.fontawesome.com/efab6387bf.js' },
            ],
        },
    },
});
