export const data = [
    {
        slug: 'learning-node-js-basic',
        title: 'Learning Node Js Basic',
        date: '2021-10-02',
        description: 'Node js is javascript based...',
        content: 'Node js content blog'
    },
    {
        slug: 'learning-React-js-basic',
        title: 'Learning React Js Basic',
        date: '2021-10-02',
        description: 'React js is front-end based',
        content: 'React js content blog'
    },
    {
        slug: 'learning-vue-js-basic',
        title: 'Learning Vue Js Basic',
        date: '2021-10-03',
        description: 'Vue js is javascript based...',
        content: 'Vue js content blog'
    },
    {
        slug: 'learning-angular-js-basic',
        title: 'Learning Angular Js Basic',
        date: '2021-10-04',
        description: 'Angular js is javascript based...',
        content: 'Angular js content blog'
    }
]

export function getPostData(slug) {
    return data.filter((newData) => {
        return newData.slug === slug;
    });
}

export function getSlugs() {
    const slugs = [];
    data.map((newData) => {
        slugs.push(newData.slug);
    })
    return slugs;
}