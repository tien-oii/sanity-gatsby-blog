import React from 'react'
import FileCustomPreview from '../../src/previews/fileCustomPreview'

export default {
    name: 'fileReference',
    title: 'File Reference',
    type: 'file',
    // fields: [
    //     {
    //       name: 'description',
    //       type: 'string',
    //       title: 'Description',
    //       options: {
    //         isHighlighted: true
    //       }
    //     }
    // ],

    preview: {
        select: {
            filename: 'asset.originalFilename',
            url: 'asset.url',
        },
        // prepare({filename, url}) {
        //     return {
        //       title: filename,
        //     }
        // },
        component: FileCustomPreview
    }
}

