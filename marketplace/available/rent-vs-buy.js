// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DaFJDVAurLMvdKlC+Y7Ye2O0teScxqJkQSEEu+DH81ehFCShe8PX9ksADoX1KziByXRn5u34wfI3zCHBLZPOXcCT9Hsb6+awy3RILZ6m7f8U83SESQcjpf3d5TZcq2a+B/UUKZVuBQNM0arTTIOsh8vak1AtqQIyL7oZJenUSvc8kf0nJRPbKwRsU4GSQUGQMoMCVosrT20P7BJLYyqISsgG3rruV/MpaSZJuWQ4/n0qcRFHkRUb11vQrVn0q33P2gluQ80PEL9rrw3z9XkZTjNSNPHxbIpdYOPCEbMsrc8l1+UQANYiMUEQfjvLU++aS0XazztTWvBQXqlubkj6EEzaf4AtLWMCTsX9Lp6r+m7hETRl6zsAorQha5brE7XVTrY2Kv8JzmSkpSbYjxW9Uw9YcyfbM41bmcztRb7ZQDhxp2VwCWEuzRu1mVH6kGNSeZ/TC9fQpc6EhsK9sohh7LNegLuoLZxv47H/3IYAsPx6iDcFnLztG28wgsAf65lkPyHBFfQM75pcR+/UcYdtjZb5Ja+7YckjG5cdl23+Rui5DCjhQw7meCsXx1tWqO+VEffJ+GQHyIwFJingpYVAdrtP/sS59h0xSQc/m4A5dXcnGYsG6Veq4xNvIxwR+/AZKutWCLa0D1TVX4C9DFUTfTIasOZw932xDdJCl9pdyf1VN1HcRrRqJ7bxGWMlH+ZkfpWBu89a8FNdmpAuuJcVD/PgnahKljN2zmu6eAqRqMKKjCePTPnR1CvJZSUEkSh4gwx1nh6aR/l53T+7Fxb97bo7gqnX72GCTWIvI9QSgXl7P17QFL9wKvuSc8hqwL98hiYOnFuLbqrtVNKwsbbxW2+v655gtsv6i9MDGSAa7EwDBdFTYSKN4qt0hbox3MViIi6RGDi7cL0VcHp8GJyKLTZ5CrcjOWpyZSCEu4AYYeoBbMV0y108PPt68YKpfr/gWuHcFFUCCew/SOK/Zibfpq/hYqHcyfCGZEZCijOI2zTfdSPKUdqHgwExN2a9W0Yaqia4O4BCUjvyCqSv3ewYeESzIr6XBPQ0yVTUupeA95KiSKqNsiznwg1W0YYBpJ+9OL2m9u58h9bennU9RvHHZmlX8HhmYeXPHs4vEpp7Ow1mdLG3InNVP+rE4hTdEDOhtJ4fD03IzAEoh08sALEjKZ4e84JMdYEGDEReFjrB54LwlVPnTiz1cLdjYWDYV+hBMU4ZeH2bk6sXi4CDbaYKWBhoArsSgJnHS4JWugdfmpQyeNkdh+eEp1IW/I+AiAGugk2clwT4q6MIhmLTKlrQVveMIPUXhrgXMWAZMifiGnSFCwd8SGIXAtbqAxjSxU9T8BcufxAPmFnLlxRPYzLdS89ytNIvifpAiapmaZJ73mII6ktxWIFNjr+zU7xEeIavWkwy9mipfWDrLxGEMyXi5pAGJh0c7yvJdXOKvC+EOkq4+27DitSq5k0k15CJMdMSJI/hM0bSYPYHK+RsNuQM4i8i0yWP0Te1EyOzkfbCw720xe/c+AS5+W8ufPOIWdxfisbztnA9LoybbI/BNuY9k3V4tvfZNfIwUuEJv/1rLaU/RTBz7tQZzlpSZXSkRaZJwdRUE2tbQUUWamTNdjLQL3IBxqilwkbIbbNZy7tN2WTj+0lOR2an8uLUW9Vs0KmOWTASgTWgPlExVvvBg0wkX5Hsf4XoG8VnV69y4SpubzTkxXxgZNTr8/un7MAfuI3b4oummhpW2ipNLRC45x+2z7In6UfM7FGphUYs5mrlZG3Or0yBmpaBiTueGpxI+rje6aOQxgm3tX36eIxN3jY5oV8iaA==';const _IH='437286c1b3ef6d9a6fe34f9409b78d0f891855fb73a6bc985c0e25018e4be78c';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
