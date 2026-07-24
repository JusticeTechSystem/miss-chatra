// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:01 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQF/FwEHuuoYmBc93imCEXRdiKiJegXOO2XEeNgiTJfIXotm0CuVmQmUoXqbv4aj4RpHJxkn/KZq6sGhD3zQ0aRatiUszKYyhYI+K/53niuObq4zNNk2VjN2CuefQgMZY5ssg1y00EECUS0G+kBN77RSWWE+uZfc8/qTac2Hbxjk3KpK5Cht2cMTGJl7mpY1dFW6N6LKcfqwQ0lyjf6nW7iDHyWxVyMcPGOYfQly0/C3I+6Zt6winztnRgk54Q0VfUueHNTULuxKxJvDFmRfaev5zKN5/bUMZyMTIfyUwzZ1Vk8EiSTjrNhREyqWECn7VJ1Ywq7nX2+Vmg1lrFBItIV5i4n0uoMNSgrnVIJ320TaKwpxqzWxzdgmgIYTXVJD3WJr4wENRbuHkJGPugD+ixfOI6f0kPYMRZ8TtMk0bRXYunD3jDV20t5gD46Urb3ADgx3aDjTXO4yJAzUPx3mk6sxVQQOHuuCqC7nyrHzFQJFMwybiP+XisjN2XsJmhFNUhxDHfNGu2z+pv+gtyZzWLw5Hii/43LXorjMjKCZhhrb21Cr1lYCUxiKOxScoiEZqVIJHHmUBBhC2yGbDWJ25u1ygXJodDkapeGy0V5i/ZU8esbJz5RjW+kGXkICFxTjKkuCJLdb05ojNFBHJqB+3vnJhfYHFTkwyY6ZWSF5q5WLXajY2uta2Gydno8smpoJHZJWSchdDq37XbsE23vc++2jfHt6ZSywS15YEuGZvJXBuZjLq4StqhQwAIQbH9RbDfnOZZSXGbJ6iMn8tKh2xSEZoCBlqdQSDP0RLNW3hxXjE/HnJmlMVwaAACxJQEfEzuMPgwIlqPVGQiRhKqWwM6+HTuHvLx5EtlnjIg7szpuBo+bybwcfhpNEgZ/fSokA+3L1Ms24T+AHlTw3+khY5pIKjZiK2UIsk2EQm9nygYhbT9VLgsmh1M20piZ7fHzamREqFiCB2zwaqNsGA+6DqVBWqgNwv+KruiobUP9HhXCJ1IIXPXGEZS9Yu0iloHwaRTM0cCuE2RxI2jNkCplQmexpePo/2C+7Vp1bwVALOSqTtVSHj2aU2t7/jpb4nqCdfACIrPH57/Zz0qb3g==';const _IH='1dd3552da7b7724b19d1c44f278270aaeb02fb7531c2ed9b5d0160fd1bcb1078';let _src;

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
