// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:05 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRQLZZhnI2/Xoe12WsPXDweJlBNSgDOGuqhpLprXEKD5HyPl3S5AZ1kCk4+KSnr4nY0u/+D/HB7qAQVv8fyd97kOGgMvw8MW1U38HOs+JsXrWiGggo69Rsi0WQoP94uh2+aGiwSUaA0ni/WQgg5xM11CQ/OWR8rT4Gyw2KKhGKt6KIe3+B89OAgpdyX59afl7/7NxM80gZvn+mBnOWMynqKrZFIgfcjR/U/3QagAmiDY7CTXT0/hONMo0Cq6fHEXt0ZVlfskJPuDq14CP4kwF8wEeWlxf0L0lLd1TSuMFY5DR8/GtGHew8+MRa1oudCrAmQxBa3tPqBnV0Zir/QRJSOgqUkGqhLuWFGs3A6JXnU3oXx/d6yvQ2MGfXygZA9g+wnwzDt7gl60ptw3MzE1NtWc34haIj4wBUSojgXXVITdT7GRnC5cG+uf4HUSozsA8GEfJJf04giuEl2L1s8BqD0GkUpyA+JXYzsYH9N+DvrDjtHlSQL5FfZtqA1SOleMeZZY/zi9qYLBVpxhUovre83+XWb0Px2hC0oGkphS0GNKp1MWRhypYMvRJMyB7w9ieI0mFKAh9vVBcxnt7v8QaYCdGTEbvuJVdsg3LmcePZX93vdiK8mhE2JcOTedQzaOa4w7VZOH3zUTJ85sEDDP2/9YcC8iVfhf/8lU1r8kRGvqLGQsSaI/+4m8g+b1VWc2K2Vw+nKpDKo2mzKCtud2Qbw8pgRXfUuW9ZbhsRKWco5CcxcmtjUfMUfOQBqgtgDAWEP16urSe0sMXZUTobGaCuVdul1szIkk+R/vJ3dVEsohawh+piDh1Iok8YiYOrhbM49v1UgxVEuMlUnJsaisL+CPd4PKwW7YiKM0Ql4x/4RNkr4LRVyST9Id7rl5Dx7jb/YJzx2SDU9Kg3v7xeo+pKm+zupW58WZCqkVGTLSwJfhvMB/D4QevrwRWGYFe5SPhLei+eh18Lxcgb6vMeMrPfnpgNXuLJETCRZPPJScCtXqGO7WWfjLvte+SipL+HcInrvDtfwXOzSTPLZ41kgjHmAzLyZnCH72idrDILztjlP30j1zIb294R4lcxdwWfYGRgam80rn24OhKmJp1fGgk0unJq3HH5Mfk9flA4C9+RsLvNAHt10dkCM0Od+3zR6i+Zzx9z5Y5RUbOC0NUczLzhn+DK13s1wRjBJruTCwAF2yUT0XJ4C55s+4aWJdIK712HBRXwexz3oYi0YBzL+Iyi7NbDkAg9g/vHxTfVXKxKERFb15F841icpwvMT6m2pCZzQGi2G6iZWxeP8lGZ4pqTNV7Z2yWXsEVPPgUEi2iw4/gLFGFdF/B/c3dZworT3iY/wYzkBVlprl3bRM3GmXpcBzv9GmmY9RPW74UlnT1Y=';const _IH='6103dc94e14d8e8248597754973ee135777177088b14d7d265ec3dfd0993331f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
