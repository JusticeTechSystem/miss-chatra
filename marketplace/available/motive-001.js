// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BHJb+KkHGgSEuvd/IlKKZOl1q1O/RVXAwQj8YBcGd/r5l1UShgXavdMc3ezv3tiJpf9OM43hJiTglXy53INipKhCxXtgY1dggCM0EJGH8oo7yUIhgkE8GqIrDRrQ6N5WNMVXod++G947OlgYybQYrGIuxqLB0FN2MKrzmrNhs/QI32PtyTS3pwkSxQHp+smXK0jpxzvv7lusVxIqRkUOBcUJgBFgPI0SS8zsb2wpMwnyFKAsPrvDhtpFqaajeBUfWFGcfmxIF+bUiPHhaxJYgTln+0sXde8HNvVheNEbZKN66IGeUmL7iR2unYIv6KzGAVAT41Zz893bNosktTaZ2xevbhMeOWXxZ7upT/j8tPjO5kQzy7fam0B83hHwG6lDQW+aEjAINM86nDJMAIE02Ws64LJSi6oUWfr5m+BwOvs8UEJtkRhopsOl1bbh1lNGxGx+VuQIYFLv7KHGW1N06eMDbDe533Y5sExF9J+2gMESSo3cxfVhW/0O8KdSf+V4lYSaVYJswju4KO8jxezgjvBLEKQLhLaDsW9SjlmieocmN4VSa5RmXh1aPPFlrQ8xnVbh0WGOhc1j0U9pE+nfki94gG4gzq8Qi3Bc3v/6GjYmbP5TmEdpaPISvG45CqGqIm5UJnjlBoR/jROgLoFOuCVMbwmIVfOIeNB5YEu6kvlJMjZxI/frUPhtIbFX+/Dq2++vMeXGHZ6nuEZcTJ2CJOUHWPA/w0IjarRiWZOn5us9C0aoot9uVwWoLGkr5lz4d/tFDVGjSE0n1r1Fm4NrbCiYQLqb9OlYqARCOFlj1in6gdthliswlpepip2v4oCSipdaFrPlSUaACmWe8CuJBKBIBYmFKziuF8wqjhspObF7IoLj9mBZ2Z5YeV/aikiolvzObxwDKwlVNy5rrBGx8/ViVawMuPj8XQHh3x5hOAKxjqMmHWIYPnghXMrytd8PhBD9epgTzN4exZ6C3oZoHQB+RJnTBzv0BVJMTVmhkfUAJ9q8tzG0+BaYI+T9+OSS29+QLkKhvcJ44dDhMFc=';const _IH='8d13d7b6aa5cbe365803ff57f519cdf3a5fc93c0316b22c3f54d1694d21d56ab';let _src;

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
