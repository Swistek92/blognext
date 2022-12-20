import { previewData } from "next/headers";

import { groq } from "next-sanity";
import { client } from "../../utils/sanity.client";
import PreviewSuspense from "../components/PreviewSuspense";
import PreviewBlogList from "../components/PreviewBlogList";
import BlogList from "../components/BlogList";

const query = groq`
  *[_type=='post'] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`;

const HomePage = async () => {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div role='status'>
            <p>loading prev data</p>
          </div>
        }
      >
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    );
  }

  const posts = await client.fetch(query);
  console.log(posts);
  return <BlogList posts={posts} />;
};

export default HomePage;
