export default{
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
        {
            name: 'productName',
            type: 'string',
            title: 'Product Name'
        },
        {
          name: 'slug',
          type: 'slug',
          title: 'Slug',
          description: 'Some frontends will require a slug to be set to be able to show the person',
          options: {
            source: 'productName',
            maxLength: 96
          }
        },
        {
            name: 'productDesc',
            type: 'text',
            title: 'Product Description'
        },
        {
          name: 'image',
          type: 'mainImage',
          title: 'Product Image'
        }
    ],
    preview: {
      select: {
        title: 'productName',
        // subtitle: 'slug.current',
        subtitle: 'productDesc',
        media: 'image'
      }
    }
}