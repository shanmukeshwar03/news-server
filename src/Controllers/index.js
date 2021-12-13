import axios from 'axios'
import Redis from '../redis.js'

const BASE_URL = process.env.BASE_URL
const TOKEN = process.env.TOKEN

export default async (req, res) => {
  let response
  const CATEGORY = req.originalUrl.split('?')[0].replace('/', '')
  if (CATEGORY === 'headlines') {
    response = await axios.get(
      `${BASE_URL}/top-headlines?country=in&pageSize=100&apiKey=${TOKEN}`
    )
  } else {
    response = await axios.get(
      `${BASE_URL}/top-headlines?category=${CATEGORY}&country=in&pageSize=100&apiKey=${TOKEN}`
    )
  }
  await Redis.set(CATEGORY, JSON.stringify(response.data.articles), {
    EX: 3600,
  })
  res.send(response.data.articles.slice(req.startIndex, req.endIndex))
}
