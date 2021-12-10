import combineRouters from 'koa-combine-routers'
import infoRouter from './info'
import userRouter from './user'

const router = combineRouters(
  infoRouter,
  userRouter
)

export default router