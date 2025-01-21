import axios from 'axios';

// Could use something better than native `fetch` or even `Axios` here -
// e.g.: TanStack Query but there aren't many API calls in this app at the moment.
// Otherwise, I'm not sure about that, Next.js has a built-in cache system and what I heard it works pretty well :}

export const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || '',
});
