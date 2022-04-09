const PrerenderSpaPlugin = require('prerender-spa-plugin');
const path = require('path');
const PuppeteerRenderer = PrerenderSpaPlugin.PuppeteerRenderer;

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
                    {
                        // Absolute path to compiled SPA
                        staticDir: path.join(__dirname, 'dist'),
                        // List of routes to prerender
                        routes: [
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
                        renderer: new PuppeteerRenderer()
                    }
                ),
            ]
        }
    }
};