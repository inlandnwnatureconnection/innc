export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '611ecb71bcc2fe6a97fa7b8c',
                  title: 'Sanity Studio',
                  name: 'innc-studio',
                  apiId: '06a32607-446c-492c-83bf-6bdf8e33ae81'
                },
                {
                  buildHookId: '611ecb71bf673470d7c1e0c8',
                  title: 'Blog Website',
                  name: 'innc',
                  apiId: 'efad0c78-f15f-4b84-92fb-0f3a9d72e427'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/inlandnwnatureconnection/innc',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://innc.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
