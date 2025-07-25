export const getImageUrl = (path) => {
  const assetPath = `/public/${path}`;
  return new URL(assetPath, import.meta.url).href;
};