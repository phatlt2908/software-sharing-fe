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
    }
};