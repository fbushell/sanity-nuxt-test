export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
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
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'sanity-nuxt-test-studio-b2hh1rej',
                  apiId: 'ca8422ab-3ff5-40f7-94ba-14829d4acab9'
                },
                {
                  buildHookId: '5fdd37d874ff4800f4a5d824',
                  title: 'Events Website',
                  name: 'sanity-nuxt-test-web-5rd4fm1d',
                  apiId: 'e16a689e-3003-4d1f-b2e7-9c554062f9ce'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/fbushell/sanity-nuxt-test',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nuxt-test-web-5rd4fm1d.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
