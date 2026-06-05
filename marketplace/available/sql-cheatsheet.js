// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Qf6WZVrrfDDgKOD6nLGoRfEzhLY9TVHvBrUsbuDXdXQuo6+wBzxdMQgoCPiS+rPKqyHI1FDbG4dMsdyLfuA07A8GXbRvC63NJp2e9dAp7xGw01Bhr4xHtbfAmCHbdp20+EeDc6U6rIXWBGsohWfzpf8ueMfpCjiwtvA1QRXzkJasCkCBWuHCxtUSM1KUEK3DjokkyHiPEe/F9AP1EebWR10X6ondrwJySHcTGzQfjGgWMTv0OPJaR8cbeYOXn9cynjhzcMjxwqoM9a3JPNfiqqchOcucJtyuQKVGJ8OT/PJ9SJbYPqHgPJwQ8mcDk/GIJawFoBtDYz4soV5RBDytYLiCJ4zNG8Fcq5aE+z6+U01OFqraVneXUARxxpGtki6boEr5PvGCNnOewll7SO/377+4fAMs6lZz2b0H6lrd60yVMsfu523cn3XjqWHm9da9OTTcifXiXa6Bz38iKTgJi1Dt8KSf6DtUCOLVX7dnfbylOynvmtcuwzr8f7LWrco05sihsHKranZXWchacEiHdmmNAVCZU+7lmVt/Idby4abL7P2XAj4H0qOCwjHmU/dlSfNtavIvpMsst4H8nKoUHhY1Y1elt68ekpRzTbcKIlnThHRTH38ZEG9S+E421BwERCHo1uuOJB/pRXxc0mTUAMMYRpABSh7CwmVkxm/v03oy7a9A4ZuUefki+29EcsexHJVHR9FgDmtP9iPniNWZUU7n/lwax6J+znmpGAQoGGDZXKovRnwUfGm6BBh60/IPvdn9awoRdKrKaqnGSkeixUweYKDJdpUEn9jTX6c4lZm8Bqjasv5LP/k1/e7SHofQHP5LFfYr5xca+dsFzMiZc3l+18JyC5j8N97iypWC5GoAUQ3tf2FIOom0J6VokidQY75u5SqE4iFghOm84PuWjNW2PlDt30UvxP0vfIeM68QICxO1jfb2q7+Dg6u8t1uYldNxz54du+xH+h+ykih8DoohRWvMY2muAK3mkeVdir7IHqG2nWXNeWV4rFMbKziQYDrzuwQIzPpQqg41vuCjevV+v7DkkkYGF/NeSa6VU4hwLdBvd0FuBGcL6P6w4ehHwZL3RmocEx/KfejHQwU/E1xkOyxgwglhimcFenXavFGptX4dluRcXwNES4spUNN7CFUE654mLz/XLzFikDpZpxOeM46FX6oWq6VyqjdScCj1XOF1L4O2WJx4J+UC4uBiufW3VidJgx0+1KjcCTBucs7aH39dIAdeo8BopygVRaX1eBEe9zKzBho2an4M51S+WkrDtEythGBH8rARUCQ4op6zbOhOjgfQ+/66Rt13KV3AGDqaQrmv1+pQtA/WqyFunntfR336ARk4CLsFX05RpGHOU2d5TFO4Xd+00X09kQHJ4cEMpSNvFuaSUH5LoBOmiYkJUq86/oUmrEh270xOqskESJRfJSj0K9tQkMZK3I9f7IiRUwndDBGGojUjJwfPLkdB1UdabsGToVKDXYV2aY31J+4jJLPrTTkDTa7zBJHlF2jv3d37mb+fNabB8uIm70edn2g8PTB1CO8Hkn5q3/Rito+LsV8yFK011nFbHSi9nIjxiY2Spo/tBXms4hAV6kAdRHRX/F3ZdpgnZhJSlqobvNDx6hRNdU11TPcwiWlkwAL/VfbhB6M5AZmJ15cTu4HSoQUitW1ZwUDf1kWl+tY8gGc7E0fn05Tkfe6kP8LT6RiTcuIbZESaHoTrfnDDULRgMsq4KDFQbkzbMHAtFeixaNkRaXSSi/uuctMj5DDEpWmyiLa4C3OO7MGwxLyo9mDcvQSfa2A=';const _IH='5dba453788b0cc69b52dca67fa8dc487b0f4adc29cc8bcb5abf10c4f0bcd6ecd';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
