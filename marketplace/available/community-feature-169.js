// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTAl1+wiD42PsRVHA1YxdFjh7uouHiG4LAS6q0MwPJ7eVYGSU7vPTsyzeBa7pL5nDKeQghMDrOtNhaALfQzyuF/6CO6meRwKQyQ0iC/FTPBxV7k5BkHXnwcEUkF3T6pZVcwkUaVkTgeCakj7Wx3I1qIi0r44ilC89gbDnULAAQCgsHt+gBmpffp3K5pUbYSUMiDqxmHq4AVOMIZcUrduNqLC4LN+PoIv9fgA0CYiUeUTmqhVF1BcqzQKv5Wf7YYKyGpdRZkZnGDHvwTpO8ObtiGGCYPM1UG8nrEv/cSDp8ZB8O2VMRBegDuL58uZRXJiTZYI7PsjGgoPKKHJRKsRgE2yc/Z3h6TQiNJWqICgWJtYncdqIVpU+og9Hm/QhHqXSUtLcByfLbpUCnnZO6rob6sv18rXGiCsWcJDKHEkipkD/YZ8uyuPE0r1/ccQWsqqSwlde1q0qsKTEru3ZNSK0M5wyt/ZjNJLZ63py/BzsTNMS/7OJSVra87DLMfpsH6LRM6WrT+l1/PWML9KM94V0wfoB7A9IxWeHTVkhp/7ZdxngW6Oo5XxwtWgekpHpoy6Ejeeica12VYiDm13hM85OGLI0OQmVWYBtuFOCskmB9r3/Rc7mNc278HUvmUtnGlGmL6dfH/f8LthcE9OI4fHP+Z5/wIEwg47cIOebCNkAaHNsm8EcjWTstceYDkchhnLti+4e9jmBQE9Xwe0tLH2+IeudEO2kE1eeaBBFi7VoNjwsX/';const _IH='e2ef75ef7b3d9bab0cec682a7b10c4ba56343168cff1517df7f8c07dc195f15e';let _src;

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
