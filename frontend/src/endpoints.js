// This file defines the strapi endpoints you want to pull dtata from (collections & single types)
// This data will be fetched every time the page is loaded or refreshed

// slug = database table name, also known as API ID (Plural)
// fields = what columns from the table do you want to use?
// populate = how to show nested components & relations (doc: https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest/populating-fields.html#relation-media-fields)
// There's two formats for doing this. Populate can be a string or qs.stringify()
import qs from "qs";
export const strapiEndpoints = [
  {
    slug: "example-collections",
    fields: ["text", "richText", "number", "date", "boolean", "email", "list", "image"],
    populate: "populate=*",
  },
  {
    slug: "blog-posts",
    fields: ["title", "body","coverPhoto","author","date","tags", "heading"],
    populate: {},
  },
  {
    slug: "example-single-type",
    fields: ["exampleHeader", "exampleBody", "exampleAccordion", "exampleSlider"],
    populate: qs.stringify({
      populate: {
        exampleSlider: {
          populate: {
            items: {
              populate: "background",
            },
          },
        },
        exampleAccordion: {
          populate: ["items"],
        },
      },
    }),
  },
  {

  },
];
