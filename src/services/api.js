const accessKey = '9_3Hs-PIT2xD0z9Sc4zZGs14peGqWSaAp0bf3PRS2lg';

export const fetchImages = async (searchQuery, pageNum) => {
  const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
    searchQuery
  )}&page=${pageNum}&per_page=12&client_id=${accessKey}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch images');
  }
  const data = await response.json();
  return data.results;
};
