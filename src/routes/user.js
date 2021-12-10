import Router from '@koa/router'
const router = new Router({ prefix: '/user' })

const middleware = async (ctx, next)=>{
    ctx.state.user = {
        name: 'John Doe',
        email: 'john@mail.com'
    };
    await next()
}

router.get('/',middleware, async (ctx) => {
    const { user } = ctx.state
    ctx.status=201
    return ctx.body = {fname: 'John', lname: 'Doe', email:user.email}
})

export default router