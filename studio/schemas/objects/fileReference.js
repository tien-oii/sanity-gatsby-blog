export default {
    name: 'fileReference',
    title: 'File Reference',
    type: 'file',
    fields: [
        {
            name: 'url',
            title: 'File\'s url',
            type: 'string'
        }
    ],

    preview: {
        select: {
          title: 'asset.url',
        //   media: 'asset.url'
        }
    }
}