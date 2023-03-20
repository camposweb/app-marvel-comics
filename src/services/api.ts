import axios from 'axios'

const apiUrl =
  'http://gateway.marvel.com/v1/public/comics?format=comic&formatType=comic&noVariants=false&dateDescriptor=lastWeek&ts=1&apikey=192b35c9d43a13a5a4ad375bf4b13d5f&hash=a631da94c748d4b8d042178f6d74e3ba'

export const api = axios.create({
  baseURL: apiUrl,
})
