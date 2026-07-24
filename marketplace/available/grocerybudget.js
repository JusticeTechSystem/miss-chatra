// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTOlIEG4aCmnlUczt0DS1GdYWExteOjvoL/uWaOHoNENDalBlC9rLZ8p9twX9w5fWdnKpwJMwzN5HnqyeULdPIXdB3g/kVFFZ9kSSzuR/GNuPXpR7zAxXWbLvVfjQ4VpfeSSBLh4E4GKAKXQViE0ESBrJREsP1Fi+2G8ToOb7Y6syYpbb1JWCiaHLUz01D7WS0jck5rQEX1Qtt3cSZPsjWMIF+6N/U0hZhO1Kd9XwA5ZQLknW7TveNt1TZCI2E7A53FMor88ErIwuWv2jPXidYZrckGebYSljJ1x8QpysvEoRCq1K1R8IYFbOs1BhRPJfEKGqILu1EV6KV+PDWli3/7C5el+YDFckM27oikBemJ2EREPcDXL9G0r9yqDROmmjxAOl2MVNu+EdPsgeMkT5CS0ubL3dTZm+rU5N7046A5EmyLGnSNiwFnvwBKoHvQHEpHfxuDWwRNLQiaTPCVi7Db4KlgAzLOtLbgOncZLxzDAHbM17F2Xe9oNLeKbII7dexL0D2YG2F1fO/SwmM8SbowZOHQbTT1e3Cg0pC3rToapg/dGeK8X+9EVVKvZ6mnAcXg43kXZ+VkQP4dkERfGNId2J56w6QBTH1ApcpJZU9873m2Cx2L9mVdd/doK93ycGeFu+rZk10OqdFg9IGpxgLUg0Au48Lw9Lz9V/uo8MrXqzRUtQgLRmXMlOOA3WV2GTHgnVybWh1Y4Yr1aNtX4MUSy86F5PYqe+dxqhB1z2S4yibWBzMO4i86NB+4kSzov3ohW3sm6XaMUcI4mHZ3lKpHsgXozuxDs7auLbBiNBHfKIOIWSTrED6WNyQnccxCYaC4TnUwd202fxI4lok3oTIEGtbWzEcK/Qu15xZQcxM+5etA/SV3tM+JQUyiKlrqxOCJQOtaaNf0HayhzdF086A2jdzCue7rN0/5UlmnTqeVlVnNeclGrCguGYjQxeF0UYZBMvTcYBtsnMX6iBNZx19SHGvvcmvCVe7JyoOvdWi0sQWyOVyYX4ysqgHAcXiSGJMhwR4XRGZESRAHiYrKtTQklMrXTmW1S6cmquBGelGd47xX0OUsPyKBdGNkguV39xk6+hU6ztWi6D3Cu+lBA8QRpH8sp8tsTfbW8tXWdNCJgc1X+8jVyUBuI4UeCNGxBhn4OZFafEso3Nx0CjBVWJPd19Kb/CHXhZ2xdpcHqNq0BVnvzl1D5QLtB9bNSoeHuF/Qcgw68KQ5Kzsu';const _IH='bb1eccb87f12955d9744f6cb5f5bd8df401c9cc7f8750e18c11db1641549542d';let _src;

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
