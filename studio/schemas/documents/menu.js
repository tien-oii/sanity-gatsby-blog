import FileCustomPreview from '../../src/previews/fileCustomPreview'
import { MdMenu } from "react-icons/md";

export default {
    name: 'menu',
    title: 'Menu',
    type: 'document',
    icon: MdMenu,
    fields: [
        {
            name: 'title',
            title: 'Menu Title',
            type: 'string',
        },
        {
            name: 'url',
            title: 'Url',
            type: 'string',
        },
        {
            name: 'parent',
            title: 'Parent',
            type: 'reference',
            to: {
                type: 'menu'
            }
        },
    ],

    preview: {
        select: {
            title: 'title',
            parent: 'parent.title'
        },
        prepare({title, parent}){
            return {
                title: title,
                subtitle: parent === undefined ? 'Root' : 'Parent: ' + parent
            }
        }
    }
}

