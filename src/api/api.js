const TOKEN = 
"6a75ac86a01db143d2bdf02ccbcb30451c28cb585b516656828adb3d7a2dfbd0242a904abfd7d672915233c13175c357cc58d56ce2f1ae3ed757a5d81caec0d9e24be4c50ca7dbdc356eda092f87d21d64aa9ecd028ac2bba4d12b1a9032f366dd1c5c881dc14445eac1e2f4f3e596eef89372d8a2a1930d7f25cd0dde2f657e";

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${TOKEN}`,
};

export const url = "http://localhost:1337";

export const getBusinessArea = () => {
  
  const endpoint = `${url}/api/business-areas?populate=*`;

  return get(endpoint, headers).then((data) => data.data);
};

export const getArticles = () => {
  
  const endpoint = `${url}/api/articles?populate=*`;

  return get(endpoint, headers).then((data) => data.data);
};

export const getPartners = () => {

  const endpoint = `${url}/api/partners?populate=*`;

  return get(endpoint, headers).then((data) => data.data);
};

export const getPosts = () => {

  const endpoint = `${url}/api/articles?populate=*`;

  return get(endpoint, headers).then((data) => data.data);
};

export const get = (endpoint, headers) => {

  return fetch(endpoint, { headers }).then((data) => data.json());
};