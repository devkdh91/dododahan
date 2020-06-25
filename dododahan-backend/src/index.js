const Koa = require('koa');

const app = new Koa();

app.use((ctx, next) => {
  ctx.body = '1번 보기';
  if (ctx.query.authorized !== '1') {
    ctx.status = 401;
    return;
  }
  next();
});
app.use((ctx) => {
  ctx.body = '2번';
});

app.listen(4000, () => {
  console.log(' 서버 접속 ');
});
