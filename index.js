const Koa = require('koa');
const router = require('koa-router')();

const app = new Koa();

router.get('/', (ctx, next) => {
    ctx.response.body = `
    <h1>嘻嘻嘻，我又更新啦</h1>
    <p>host: ${ctx.request.header.host}</p>
    <p>header: ${JSON.stringify(ctx.request.header)}</p>
    `;
});

// router.get('/', async (ctx, next) => {
//     ctx.response.body = `
//     <p>host: ${ctx.request.header.host}</p>
//     <p>header: ${JSON.stringify(ctx.request.header)}</p>
//     `;
//     await next();
// });

// router.get('/cookie/:name', async (ctx, next) => {
//     const cookieKey = ctx.params.name
//     const cookieValue = ctx.cookies.get(cookieKey)
//     ctx.response.body = `
//     <p>cookie: ${cookieKey} = ${cookieValue}</p>
//     `;
//     await next();
// });

// router.get('/setcookie', async (ctx, next) => {
//     const cookies = ctx.request.query
//     Object.keys(cookies).map(k => ctx.cookies.set( k, cookies[k], { maxAge: 2*60*60*1000 } ))

//     ctx.response.body = `
//     <p>已设置cookie: ${JSON.stringify(cookies)}</p>
//     `;
//     await next();
// });

app.use(router.routes());

app.listen(5000);
console.log('app started at port 5000...');