import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api',
  params: {
    key: '32163007-39541f17b63243672bcfecf36',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  },
});

export const imagesSearch = async (q, page = 1) => {
  const { data } = await instance.get('/', {
    params: {
      q,
      page,
    },
  });

  return data;
};
