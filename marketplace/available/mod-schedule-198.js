// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='S+DwlryGR4EED+Fcm2Wom6YuTJt3zp49rvNoSCQmUEUroJySnlWI209d2LDW6sC5RaKPdQhJuXQ+Bx1WxpnPnAoJVGALtZ4Djr4DDo13gbwlVjo5qPHUR6lmccEE5c/GZT4whjCcoA1avYWkYZek4XA0fBDklwggSWiAgD63QTmFEagtEnOhFFUKvDQPfps4l4QahQbX13nY0DZXPvreuu4o3x4oD8ggUsCGRTfpr5Eow7VHqp8TaQG63BefuKF5nmxCUGAN18iYl1hH2XYZHgw1i/AZF4A9495u4HTsUyf68xhEoMjclvONZbWBhme8zzrN2SNRc2GDrgiyZgz+zCiaHSjhV1C07blUgNdneuqPZ4S5C8mTuosdXKiXSneFtn22H+Uy47HeIjLVgq4jsTQn1bmlTP9javqtIj5GJlk0ftegunBd7II3WtQ3jXcEouhDj0aGYCGS0c9tHvxzPsujR/n0KA4nKevJnQNqEIm45Tr7UrZSRW8tLXf8St5/aP3213fN2eLQaPDLvxaq3GkmX31muDwJqt26n5Vn/NkyRzffhFUTc6ZR3PgoxooZzJc2yCM5+kO67W8Uvy4rw82H0AYRfNLfj7fKF1SxZbAJ/N0LQvAu3iLQT1L9Kr6PRBuHK9VHxNpoKf8m7gr/BOpgAW9hm80C1MMfns/V6ffnxw8ZcbUxzFyw8YukFxDkFO8gpfRhYvnieGuGWJo+zWviB4vJPkG5pzyyooRhwVj6LLTVuurY4r3NhP7vxy26FGM/g7gDKwcCGXmZ/a2QK7CAqAuSVRncFHvYwasJNlXG6cCrXXTCI9XLxvqKNtafnzr8iXpf6RUpvQBmd0Nvr+BgLKqMR/BJt3BCczxacJnbblOBy2ks3zEpFkg43GZBAduAquimHKHnk3CJV+1NM0bUtbT0qhxfBwugTWYV8uM9eqXgnHybl+cQ0jfUm9w4G03PToAk8mdLSOzKWrwGwVFtWwrMXv9hX6zwuBA2+VQav5WbJX2LjSRrXg0TYCm4vFGgc+Ll0hSR/RSLcs2lqAQwZ4z+b6s3vY+kQruXiwW0gPhnxwrRcBDAuDEnKEuE+51EIa4dIIE3IU4BzoXfEriQBBhh/BJZGyIpHUe3FqtfXumD0kUkRWH8L7LCCrybdwCtwsymVD9l6Bi/LeyYqkKzQZeGm/2N0IFSw2twrS1mKv4UPxs2tUNwwPrDuz24KdYppENjd/FMkbOagsDgd6oN1ZUy9pxSmA2EnypnwWtkTpz6usFrf2/2DKjBkU00qiQNwzHTmxrvX2TxBNLEizvzDWaa4s7GyasMoJFLe3nENvCul25z+5L3mEZPpXeBLnuHIaEAVqa8fZ2p6kfvv2exJvdGw1Z5Ei452woEmj21w9+SejjAz/GX58uAli/08C+HO8Hv4ZBXPPrB';const _IH='4de8c80edf5bc478b7dae175e3f56f1814d6586ed02e475de79b6d540e8defa8';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
