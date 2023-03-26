// A generic function that will render any single type from strapi.
// This is used to blackbox data loading and other pieces of code

import { strapiEndpoints } from "../endpoints";

export const renderSingleType = (Element, data, slug) => {
  if (!data) return null;
  let fields = strapiEndpoints.filter((el) => el.slug === slug)[0].fields;
  return <Element {...data.attributes} fields={fields} />;
};
