import React from 'react'
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
            name: 'menuReference',
            title: 'Menu',
            type: 'table',
        },
        {
            title: 'Opening Hours',
            name: 'openingHours',
            type: 'array',
            of: [{type: 'dayAndTime'}]
        },
    ]
}

