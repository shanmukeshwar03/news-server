const Error = (err, req, res, next) => {
  let error, status

  switch (err.id) {
    case 1:
      error = 'page and pageSize are required'
      status = 400
      break
    case 2:
      error = 'No Articles found'
      status = 404
      break
    default:
      error = 'Internal server error'
      status = 500
      break
  }
  res.status(status).send({ error })
}

export default Error
