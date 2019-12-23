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
                  buildHookId: '5e00ae52c739e9a88f41e26b',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-nbge83y9',
                  apiId: '0aac7bcc-aab5-4ad1-a984-9dcc42a6e921'
                },
                {
                  buildHookId: '5e00ae53e0f80a4803286a7a',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-7e867jox',
                  apiId: '7e301f3e-38a6-4c79-a357-2986449d8bd7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/staaleevoked/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-7e867jox.netlify.com', category: 'apps'}
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
