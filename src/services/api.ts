import axios from 'axios'

const baseUrl =
  'https://gateway.marvel.com/v1/public/comics?format=comic&formatType=comic&noVariants=false&dateDescriptor=lastWeek&ts=1'

  const filterUrl = `${baseUrl}&apikey=${import.meta.env.VITE_VERCEL_ENV_API_MARVEL_KEY}&hash=${import.meta.env.VITE_VERCEL_ENV_API_MARVEL_HASH}`

export const api = axios.create({
  baseURL: filterUrl,
})
