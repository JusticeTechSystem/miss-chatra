// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:12 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQw+q9Qio/536fFOvfPBYqXMSfZo1kl0uXE4vJRtZURChgLHwgum3FAqW6TuuuMJhwAql2tTgvQyGOeiWw8WARq/e8VefeylH/P+PgCQknqFzHfMYXfRv1hgszg3isKV6zA1wIlFGHTTDFDeVAE+fTzqigR1FxPECknIyK99M6UWx2RbIbgF7tz3to9Ep0cB5b2D3VAcvG/jaOyGROD19fddHFub90ItbyV87watCJvuZ9/oYabua5hxOU0bRYLW03dm47pRLEBN5Byggbg7gSJ6Fr54fHtjYLQTwOu0oAWab2a3kqJ5pqykZV6bome9IL/Mskms1dbA0rGaUSI1WPwuC7yVwXFHLMKkevyOTOCUqQYGrZ3W7SGZRtGZY6M0rRMPC0Ynye+5a2tN0zaYYYa4B7fl60070GwYq6DPhlSD2u+aKFbtu1Jkjwmo5ccz/BAVdALGwGcssvP8vtDDaOHw/Ye/8YLrNYdt3vB1edf1nIby6XQRGYrzgxjro+Idc/RZ5IbGwMg84pnwc4cWja1AN5a0k8CkZy+9ErnPIGMx47DNGo0qavOq1or2oIwVGz+al8+FiCB9TTQTo8Z2ShDGFtIVAwOCcFAH6TqWpmWc5x+lEqP4eoEowictuJZ0eAyQnKGrQsKTFYA9C/FoDmZiUSyR7hjMxXIEKLp9FzFLqivMRjPMOblpHj7sH5C2eRfQVIBSOvNDo1gpRQnxjyHCMoIew+Afyu9czVgxecTJy/mAAWU0IaK0LlwEtYw3rkNqYgoQlRfQ2aTyXrc0sNtJ1ndk26H5iZD3JHcSq8HWg+8exm2dasmzL1vg/6eUH7C7J72TbCOqKmJOUJ58y/QAkbcDIgv7xNTUyEp5pRE4hMtd1Ug7pXmb/Ub5dBWiAqd3mB0vuXO3qQbccnOx/8NUweyDGKtn0bESoeartcYf/PPaKa6EMb6UvxwQjh6dEmXJccyjSWD6RNuZlDUI8x1vMPIKKkZsgcn9Gu608aXa2WZjfQSD5CVK3kjaEQBz2fE/PnxOavdyiY0FObwbWJ/5SoZnb7E2iq8LoqXi8V1103aO0Ox9DJk4XBFAvWYG4ceyCxOInaO5somkZx6qFoF7++7/JYvgW/tFB4BR9O62oahjckm+b+A/Cbofd8mS6CiDb2FGbaufSUlz1rYa20J85W8FHMhz5ffar/0Kc6osnrwhAgiWTfALS9ADkcA21vJ/nGNHE+MHE9Ro=';const _IH='5e344db2ffbc96a9c63345a65143b1fc6d834b867e915d11dab0ece83d1e074d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
