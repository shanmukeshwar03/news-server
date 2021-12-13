import redis from 'redis'

const Client = redis.createClient(JSON.parse(process.env.REDIS_CONFIG))

const connect = async () => await Client.connect()
connect()

export default Client
