import Client from '../redis.js'

const Cache = async (req, res, next) => {
  try {
    const CATEGORY = req.originalUrl.split('?')[0].replace('/', '')
    const page = parseInt(req.query.page)
    const pageSize = parseInt(req.query.pageSize)
    if (!pageSize || !page) throw { id: 1 }
    const startIndex = (page - 1) * pageSize
    const endIndex = page * pageSize
    const cached = await Client.get(CATEGORY)

    if (!cached) {
      req.startIndex = startIndex
      req.endIndex = endIndex
      next()
    } else {
      const _cached = JSON.parse(cached)
      if (_cached.length <= startIndex) throw { id: 2 }
      res.json(_cached.slice(startIndex, endIndex))
    }
  } catch (error) {
    next(error)
  }
}

export default Cache
