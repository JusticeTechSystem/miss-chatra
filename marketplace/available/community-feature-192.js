// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:52 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS8blq34NWjXHYbHHb/I5fmXTDypefEhRIJ4a5wWJrXiEYk0nn1fjtGc+UgB+9tVHoD47q1kdNH7I69MJMui6XjIvwnXTQggEKmjZ9YVfZIpZHQH3GveXjetfdIfMoIQrK3d9PxbMLKkkpRBwCVQ19VhU9n9EtYmuFE24uSxK3IFuOr6FuileOjc/tON5d02uVdPefqAI/RrUBPOFXBBPrJhy4XwoZEOgsxMr4u48WdCXyB0dLiCWsD396sFrLNrZWdDPKR9tFWMsFma6mQBYEEhKNqoghH8UtfxMY6dK+POJZdG5id2M1TZS2hTVmD0ZgcKq2H2PCpxFx2+zD6/BBC8VbmxoEAEWNTdKf7kghvanZZafeHweI2CJwQyk+p0TdOOlszr+hW9Cuo8t6NuyUBVxeumE1zP43scu3T/CuEJqX1TjvpNvOcUtuNDUfESfYeZX/5md5JeFMmf7dpWo3kCEBkqZ3akhm0lxWL9y3kOi/h7EJGpWmKKGpemsWiI6OWxb/SZRUq6t4QstqsaEwkxEQmcPCWjFTLNHERVuJcMwd/BDOsbjfPZzCg1TyMwSyeXa4r2vwuEXsoeEa4p2iZuiDB43rxNRi0lbf6p0vI6ieSpSMmFPnk0xzEu0Jz9q7wg/Qt4NZPJkqKvWTklvOKyaHZhF/IgFweZrS0mLlq07Lz+CgZS9+kylavol4hOZNHGY6ROChJM2M8BvkXiaej93iORbHdIyBTIUv0Rh/NvhB+zw==';const _IH='b99909ec093e373e9fe075243790f1779654ff19fa6157f22d9d090cbab0c7a7';let _src;

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
