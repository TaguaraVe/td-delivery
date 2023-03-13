import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: '6s24qagv',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-03-12',
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
