import { Post } from "@/interfaces/post.interface";

export const POSTS: Post[] = [
  {
    id: "ssr",
    title: "Server-side rendering",
    content:
      "Server-side rendering (SSR) means that the content of your site is generated on the server, then sent to the browser.",
    image: "",
  },
  {
    id: "ssg",
    title: "Static-site generation",
    content:
      "The HTML is generated at build time and will be reused on each request.",
    image: "",
  },
  {
    id: "csr",
    title: "Client-side rendering",
    content:
      "Client-side rendering (CSR) means rendering pages directly in the browser using JavaScript.",
    image: "",
  },
  {
    id: "dynamic-routing",
    title: "Dynamic routing",
    content:
      "Defining routes by using predefined paths is not always enough for complex applications. In Next.js you can add brackets to a page ([param]) to create a dynamic route (a.k.a. url slugs, pretty urls, and others).",
    image: "",
  },
  {
    id: "isr",
    title: "Incremental Static Regeneration",
    content:
      "Incremental Static Regeneration (ISR) allows you to create or update content without redeploying your site",
    image: "",
  },
];
