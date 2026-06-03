// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ex4XIeidzMPIaPffoNNZjlqDeT/W8OXfLRDyc/rODCbRGRYdnpPr0PR8epmu1CBYqg3n+aZwHUY70EmZdeSqySdh9plC8gx0eMO5rtCfTrv3V8Q7llj4hSANkSh3IvAq0JDE0Vo4QBuOUEnFMgV/78ndkBJEE4XHtC41n8goBjHC92MkeIqYGF1s+hInNrbp0RXyskghDEmrYuLXqnkCsZXZDXvpsG+pIwjz5pWZL3Cmag7uCaVQbO0cXNbImETUpptWVli3diq3dYcxlolZtuuVmUgiqPpjee3nbEyOEUGAWctvTPlkGJWaUKG6WNGPB7jT/HxWtRdv1DcmHk64IipfKw76fpv1Y4KFezeUrrCeiBS/VtojNVUrDjyH6GEAJdweuFjh2zpUZhqo46kS9e7KdRV2zJAAxfkhy/rnAB1icGTG7GF2EfKYUGHLbqRuCGviQ8BzuVD+U8SanbAzEflexWJzbKvt8TtKUysTR1gRrEGbQqUZXzqrcrcvHJcNWpiuK/Mun1ihiimAZVIeHfg5DRK3za1hmJ7CtLQ4zzSI38f0y2U3ENLgTnhD/Ku3jP03oLP8TJqw7vtgYnHc5jzhRpAZv4XF/9RLsC3Wm8jRAga4ihJ1lHz9+5tyZCG+aH+lsur/WHyce+nK1cpvHlK4rZF/zzqeTX5L3/izvgoHVT2/RvmCzHSDcZtWZyHsMEBbtOJBsx6D5CIDNk1oWv4rpCKePEd4KUuUO1QW0kQyNogezmYug5Qz79Hu4y+uOKHI69F9RERCB3C/D9A6xA9QIPlkAm91t9waMi2iE4Emsl7haM8q0eUPwZHSPsNvK7pKwKJinBGJvBVYfLOXXxRZPROVxVzbhXJkfdA7K1GeKYyTtxEvJ4k/NEYhpBkXYPZKOK2SO7bpSCrCfWyr6A9vSWP0jFBMGYoKyCDCzf+DVvoXtY3FntGHvCHHW+DLnWpsrqEXp2TasZ/mC/6WMdlUQjmAmQIXWbOf2oB45/VdJqEJahO5FRuNezVPZU6TOXnIRw==';const _IH='2c77bda21d36320bfb1889eae7e5c9eeb7fed7e3f2d94b9253fe672836eed438';let _src;

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
