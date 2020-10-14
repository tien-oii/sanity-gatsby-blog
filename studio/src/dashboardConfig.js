export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f869fd79fae7e5e0c457778',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-b5yazjir',
                  apiId: '2dc58538-bc15-4feb-a1c1-5d1c73f658ce'
                },
                {
                  buildHookId: '5f869fd8092a0f555752cc81',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-gi6tzw7q',
                  apiId: '0414fa85-9e12-434d-b27b-5bc2f92a4987'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tien-oii/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-gi6tzw7q.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
