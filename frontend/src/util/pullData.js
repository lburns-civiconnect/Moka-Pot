// reaches into our Redux store and pulls out data we need as an object called data
// uses fields from endpoints.js to create a data object
export const pullData = (props) => {
  let data = {};
  props.fields.forEach((el) => {
    data[el] = props[el];
  });
  return data;
};
