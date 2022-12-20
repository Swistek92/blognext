// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import urlFor from "../../utils/urlFor";

import Image from "next/image";
import Link from "next/link";
import urlFor from "../../utils/urlFor";

// export const RichTextComponents = {
//   types: {
//     image: ({ value }: any) => <img src={value.imageUrl} />,
//     callToAction: ({ value, isInline }: any) =>
//       isInline ? (
//         <a href={value.url}>{value.text}</a>
//       ) : (
//         <div className='callToAction'>{value.text}</div>
//       ),
//   },

//   marks: {
//     link: ({ children, value }: any) => {
//       const rel = !value.href.startsWith("/")
//         ? "noreferrer noopener"
//         : undefined;
//       return (
//         <div className='relative w-full h-96 m-10 mx-auto'>
//           <Image
//             className='object-contain'
//             src={urlFor(value).url()}
//             alt='blog post image'
//             fill
//           />
//         </div>
//       );
//     },
//   },
// };

export const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className='relative w-full h-96 m-10 mx-auto'>
          <Image
            className='object-contain'
            src={urlFor(value).url()}
            alt='blog post image'
            fill
          />
        </div>
      );
    },
    list: {
      bullet: ({ children }: any) => {
        return <ul className='ml-10 py-5 list-disc space-y-5'>{children}</ul>;
      },
      number: ({ children }: any) => {
        <ol className='mt-lg list-decimal'>{children}</ol>;
      },
    },

    block: {
      h1: ({ children }: any) => {
        <h1 className='text-5xl py-10 font-bold'>{children}</h1>;
      },
      h2: ({ children }: any) => {
        <h2 className='text-5xl py-10 font-bold'>{children}</h2>;
      },
      h3: ({ children }: any) => {
        <h3 className='text-5xl py-10 font-bold'>{children}</h3>;
      },
      h4: ({ children }: any) => {
        <h4 className='text-5xl py-10 font-bold'>{children}</h4>;
      },
    },
    blockquote: ({ children }: any) => {
      <blockquote className='border-yellow-500 bord-l-4 pl-5 py-5 my-5'>
        {children}
      </blockquote>;
    },

    marks: {
      link: ({ children, value }: any) => {
        const rel = !value.href.startsWith("/")
          ? "noreferrer noopener"
          : undefined;
        return (
          <Link
            href={value.href}
            rel={rel}
            className='underline decoration-gray-800 hover:decoration-black'
          >
            {children}
          </Link>
        );
      },
    },
  },
};
