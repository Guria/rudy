import { ADD_ROUTES } from '../types'
import { formatRoutes } from '../utils'

export default (api) => (req, next) => {
  if (req.action && req.action.type === ADD_ROUTES) {
    const { routes, formatRoute } = req.action.payload
    const newRoutes = formatRoutes(routes, formatRoute, true)
    Object.assign(req.routes, newRoutes)
    return req.commitDispatch(req.action)
  }

  return next()
}