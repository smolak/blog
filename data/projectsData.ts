interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'stash-it',
    description: `@stash-it is a simple, yet powerful, key-value storage library. It is designed to be easy to use and
    to have a clear API. It is also extensible, so you can create your own adapters and use them with @stash-it. 
    The storage of your choice is not supported (yet)? No problem, you can create an adapter for it and use it with
    @stash-it.`,
    imgSrc: '/static/images/stash-it-logo.png',
    href: 'https://jsr.io/@stash-it/stash-it',
  },
]

export default projectsData
