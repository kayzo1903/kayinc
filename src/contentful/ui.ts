// type contentfulLoaderProp = {
//   src : string ,
//   width : number ,
//   quality : number 
// }

// // Docs: https://www.contentful.com/developers/docs/references/images-api/
// export default function contentfulLoader({ src, width, quality }: contentfulLoaderProp) {
//     const url = new URL(`${src}`)
//     url.searchParams.set('fm', 'webp')
//     url.searchParams.set('w', width.toString())
//     url.searchParams.set('q', (quality || 75).toString())
//     return url.href
//   }