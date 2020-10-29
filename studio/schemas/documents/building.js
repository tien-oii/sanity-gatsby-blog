import { MdFormatPaint } from 'react-icons/md'

export default {
    name: 'building',
    type: 'document',
    title: 'Building',
    icon: MdFormatPaint,
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
          name: 'slug',
          type: 'slug',
          title: 'Slug',
          description: 'Some frontends will require a slug to be set to be able to show the person',
          options: {
            source: 'title',
            maxLength: 96
          }
        },
        {
            name: 'body',
            type: 'bodyPortableText',
            title: 'Body'
        },
        {
            name: 'documents',
            type: 'array',
            title: 'Documents',
            of: [
                {type: 'fileReference'}
            ]
        }
    ],
}