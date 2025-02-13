import { defineDocumentType, makeSource } from "contentlayer/source-files";

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
};

export const Page = defineDocumentType(() => ({
  name: "Page",
  filePathPattern: `pages/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
  },
  computedFields,
}));

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `posts/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    date: {
      type: "date",
      required: true,
    },
    category: {
      type: "string",
      required: false,
    },
  },
  computedFields,
}));

export const Event = defineDocumentType(() => ({
  name: "Event",
  filePathPattern: 'events/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: "string",
      required: true,
    },
    image: {
      type: 'string',
      required: false,
    },
    description: {
      type: "string",
    },
    date: {
      type: "date",
      required: true,
    },
    category: {
      type: "string",
      required: false,
    },
  },
  computedFields,
}))

export const Portfolio = defineDocumentType(() => ({
  name: "Portfolio",
  filePathPattern: 'portfolios/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: "string",
      required: true,
    },
    image: {
      type: 'string',
      required: false,
    },
    description: {
      type: "string",
    },
    date: {
      type: "date",
      required: true,
    },
    category: {
      type: "string",
      required: false,
    },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Post, Page, Event, Portfolio],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [],
  }
});


