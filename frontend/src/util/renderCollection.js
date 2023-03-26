// A generic function that will render any collection from strapi.
// This is used to blackbox array maping code

import { strapiEndpoints } from "../endpoints";
import { v4 as uuid } from "uuid";

export const renderCollection = (Element, data, slug) => {
  if (!data) return null;
  let fields = strapiEndpoints.filter((el) => el.slug === slug)[0].fields;
  return data.map((el) => {
    let tmp = {};
    fields.map((el2) => (tmp[el2] = el.attributes[el2]));
    return <Element key={uuid()} {...tmp} fields={fields} />;
  });
};
