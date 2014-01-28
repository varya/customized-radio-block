({
    block: 'page',
    title: 'Title of the page',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '_index.css', ie: false },
        { elem: 'css', url: '_index.ie.css', ie: 'gte IE 6' },
        { elem: 'meta', attrs: { name: 'description', content: '' }}
    ],
    content:[
        {
            block: 'radio',
            mods: { type: 'smile' },
            name: 'mood',
            title: 'My mood',
            options: [
                { val: 0, text: 'good' },
                { val: 1, text: 'bad' }
            ]
        },
        { elem: 'js', url: '_index.js' }
    ]
})
