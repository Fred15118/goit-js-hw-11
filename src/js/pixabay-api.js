'use strict'
const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '43978229-66aec4be0aecfd6358506c605';

export function fetchImages(q) {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
    
    return fetch(`${BASE_URL}?${searchParams}`).then(res => {
      
        if (!res.ok) {
            throw new Error(res.status)
        }

        return res.json();
    })
}