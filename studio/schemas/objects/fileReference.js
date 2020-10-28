import React from 'react'

export default {
    name: 'fileReference',
    title: 'File Reference',
    type: 'file',

    // initialValue: {
    //     url: 'asset.url'
    // },
    // fields: [
    //     {
    //         name: 'url',
    //         title: 'File\'s url',
    //         type: 'string'
    //     }
    // ],

    preview: {
        select: {
            title: 'asset.originalFilename',
            subtitle: 'asset.url',
        },
        // prepare(selection) {
        //     const {title, subtitle} = selection
        //     return {
        //         title: title,
        //     }
        // },
        // component: <div>Test</div>
    }
}

