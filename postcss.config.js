module.exports = {
    plugins: [
        require('postcss-modules')({
          scopeBehaviour: 'global' // can be 'global' or 'local',
        }),
        require('autoprefixer')
    ]
}
