// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ7c4UiQtLIkcdXtPg+jYCVYEPf8ids3+Bs7BwMKVENpbEjyvW1n//BXrYbxcMBotJzQeYcHbIXUYLPBkEnKCHpHsTJ50pLDbpQ+hpBiPa2n/tdQI9kkyBZ8xZblk35cXSOqhOrEy6DkUg6BKgJ7t2Qtt+CyyxZIh9UmWZMwN0YI3wmXLDxToCVAd90vOyZrLi6EJygyH+RxCJVtMYFj90pK3VHdmLfkU3+s32aAOgl0PgRZArXrvtTrHyVa1r/rbaQ1KHR3PDOBRWQBvkIDNkdTcd0O/LZhs3OOZ1BjwmZVMzzuzmHlOxQkHfKXZGUGzkAdNNdOi854PWBO4D/uf5+KoxgbGiU0HP0CXZ6Ip69RYyW3IADLjoihARAdCjgcGJZr3LGpQXsMV1pEx4Oi59YVHgHi5zjdLLgKsWV5FkFaOCEpa4nmckoSpMGeUnS/RFqaCmE7ZZh5XJBs7HgsaKLVPw1P+WdXrAILwF1L2rhYgz9EDy3vsBsD1KBwcjIY2gjBIVjHUB9IBbVx66Zwdaatk2HrxNqQL1VwuWuMAE5k9vXXiPA/frzqYyac14w7shjl2XlO9c5Tp26HYX4ZVsu5EYUzssI4V2lF/xb4WAbrMdYqlvONTCabZTPH3ZMN7K7QxOjxYGScQx7VG5W1yTSlfT+Tj8idRl/9mQEJ5fLFAanOE2AE1eG5c/oTZ6/o91PHb8iWc7Qny4KxfgOy9ic0+xVwtabXJhwOzE0ZwQCn1y0PEXQlxWkKS0lQhzZrKF1FW6fnQbDyFpB6ZscR7iFSZqrrbH/XM4ypLJB0cSd4kUOYxTEmWHdkRCyvxpIUV4EWvdJMHufDhUIm2H0LFbyUX8lJ3d4jR9mP5LGoo5MH5mkb0qGjpUDAZniVBokVwW5M9uB4dB1zdlsYyHVF1DkU8Qa5etddtQ04nXPkdXaQUsWDnyubYjTioJCWx1joQTvVHZQYFEYvEgHzJFTD+4F79LVrHr0LvWyZtZGDSwmfoGoKtYyoulvjy0QE8U=';const _IH='f45e2b3d854e430a0f958697c714b0d2f94db78a7a9c3f30bfb018c63364712f';let _src;

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
