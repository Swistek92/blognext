import { groq } from "next-sanity";
import Image from "next/image";
import React from "react";
import { client } from "../../../../utils/sanity.client";
import urlFor from "../../../../utils/urlFor";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "../../../components/RichTextComponents";
// type Props = {
//   params: {
//     slug: string,
//   },
// };

export const revalidate = 30;

export async function generateStaticParams() {
  const query = groq`*[_type=='post']
  {
    slug
  }`;
  // : Post[]
  const slugs = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);
  return slugRoutes.map((slug) => ({
    slug,
  }));
}
// : Props
const Post = async ({ params: { slug } }) => {
  const query = groq`
  *[_type=='post' && slug.current == $slug][0]
  {
    ...,
    author->,
    categories[]->
  }
`;
  // : Post
  const post = await client.fetch(query, { slug });
  console.log(post);

  return (
    <article className='px-10 pb-28 '>
      <section className='space-y-2 border-red-400 text-white'>
        <div className='relative min-h-56 flex flex-col md:flex-row justify-between'>
          <div className='absolute top-0 w-full h-full opacity-10 blur-sm p-10'>
            <Image
              className='object-cover object-center mx-auto'
              src={urlFor(post.mainImage).url()}
              alt={post.author.name}
              fill
            />
          </div>

          <section className='p-5 bg-yellow-500 w-full'>
            <div className='flex flex-col md:flex-row justify-between gap-y-5'>
              <div>
                <h1 className='txt-4xl font-extrabold'>{post.title} </h1>
                <p>{new Date(post._createdAt).toLocaleDateString()}</p>
              </div>
              <div className='flex items-center space-x-2'>
                <Image
                  className='rounded-full'
                  src={urlFor(post.author.image).url()}
                  alt={post.author.name}
                  height={40}
                  width={40}
                />
                <div className='w-64'>
                  <h3 className='text-lg font-bold'>{post.author.name}</h3>
                  <div>{/* {author BIO} */}</div>
                </div>
              </div>
            </div>
            <div>
              <h2 className='italic pt-10'>{post.description} </h2>
              <div className='flex items-center justify-end mt-auto space-x-2'>
                {post.categories.map((e) => {
                  return (
                    <p
                      key={e._id}
                      className='bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold mt-4'
                    >
                      {e.title}
                    </p>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </section>

      <div className='flex flex-col items-center'>
        <PortableText value={post.body} components={RichTextComponents} />
      </div>
    </article>
  );
};

export default Post;
