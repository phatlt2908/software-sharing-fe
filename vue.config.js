var PrerenderSpaPlugin = require('prerender-spa-plugin')
var path = require('path')

module.exports = {
    // css: {
    //     loaderOptions: {
    //         sass: {
    //             additionalData: `@import "@/assets/scss/main.scss";`
    //         }
    //     }
    // }
    transpileDependencies: ['vue-meta'],
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = 'Đây nè | Chia sẻ phần mềm'
                return args
            })
    },
    configureWebpack: config => {
        if (process.env.NODE_ENV !== 'production') return
        return {
            plugins: [
                new PrerenderSpaPlugin(
                    // Absolute path to compiled SPA
                    path.join(__dirname, 'dist'),
                    // List of routes to prerender
                    [
                        '/',
                        '/home',
                        '/game',
                        '/office',
                        '/graphic',
                        '/technique',
                        '/os',
                        '/common',
                        '/detail/kms-pico-11',
                        '/detail/download-office-2016-professional-plus-full',
                    ],
                ),
            ]
        }
    }
};