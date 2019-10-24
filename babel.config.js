module.exports = {
    presets: [
        '@vue/app'
    ],
    plugins: [
        ['import', {
            libraryName: 'vant',
            libraryDirectory: 'es',
            style: name => `${name}/style/less` //要修改主题时用到
            //style: true
        }, 'vant']
    ]
}
