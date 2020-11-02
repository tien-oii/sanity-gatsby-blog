import React from 'react'
import { MdMenu } from "react-icons/md"
import TimeInput from '../../components/TimeInput'
import SimpleCustomInput from '../../components/simpleCustomInput'


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
        // {
        //     title: 'Opening Hours',
        //     name: 'openingHours',
        //     type: 'array',
        //     of: [{type: 'dayAndTime'}]
        // },
        {
            title: 'Opening Hours',
            name: 'openingHours',
            type: 'string',
            inputComponent: TimeInput
        },
        {
            title: 'Custom Input',
            name: 'customInput',
            type: 'string',
            inputComponent: SimpleCustomInput
        },
    ]
}

