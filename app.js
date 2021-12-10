import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import router from './src/routes'

const app = new Koa();
const PORT = 3000;

app.use(bodyParser());
app.use(router())

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})
