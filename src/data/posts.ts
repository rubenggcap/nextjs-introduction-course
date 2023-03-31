import { Post } from "@/interfaces/post.interface";

export const POSTS: Post[] = [
  {
    id: "ssr",
    title: "Server-side rendering",
    content:
      "Server-side rendering (SSR) means that the content of your site is generated on the server, then sent to the browser.",
    image:
      "https://assets-global.website-files.com/620d42e86cb8ec4d0839e59d/6230e9ad9a22b134ae9eceb8_61cb64ed587c1111fb1dc917_SSR-server-side-rendering-infographic.png",
  },
  {
    id: "ssg",
    title: "Static-site generation",
    content:
      "The HTML is generated at build time and will be reused on each request.",
    image:
      "https://nextjs.org/static/images/learn/data-fetching/static-generation.png",
  },
  {
    id: "csr",
    title: "Client-side rendering",
    content:
      "Client-side rendering (CSR) means rendering pages directly in the browser using JavaScript.",
    image:
      "https://nextjs.org/static/images/learn/data-fetching/server-side-rendering.png",
  },
  {
    id: "dynamic-routing",
    title: "Dynamic routing",
    content:
      "Defining routes by using predefined paths is not always enough for complex applications. In Next.js you can add brackets to a page ([param]) to create a dynamic route (a.k.a. url slugs, pretty urls, and others).",
    image:
      "https://nextjs.org/static/images/learn/dynamic-routes/page-path-external-data.png",
  },
  {
    id: "isr",
    title: "Incremental Static Regeneration",
    content:
      "Incremental Static Regeneration (ISR) allows you to create or update content without redeploying your site",
    image:
      "https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/a9d6ec1f-b714-4102-b845-0986bfc65417/regeneration-regeneration-nextjs.png",
  },
];
