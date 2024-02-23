const contentfull = require("contentful");

const Client = contentfull.createClient({
  space: process.env.NEXT_PUPLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLUC_CONTENTFUL_ACCESS_TOKEN,
});

export async function LoadPost() {
  try {
    const posts = await Client.getEntries({
      content_type: "blogPost",
    });
    const resp = await posts.items
    return resp
  } catch (error) {
    console.log(error); 
  }
}

export interface RespProps {
    title : string ,
    slug : string ,
    date: string ,
    author : any ,
    body : any ,
    image : any ,
    time : string ,
}
