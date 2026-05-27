// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Gk3Ko7V2Bx98w90JHUvsXsoVeUX4Gulmt5ohF27zGtBaxyblv+WKFrtMYaFsfvWv+opMaJz2Oa09gXVeatIdVCxb/Aw/lW+8/sn9tmHja0F4CeTPLm1YlHbXYSib2CeXfYpUSTNhQ+hci3huXrkNm0w8PBVdvm9zx7uy3edndodyH3hDV+2Rxg16V1rGGqUfVlkglHELL3xmm0lVYLefv1q1RABmhNlZwnDbf7ltKzHmIa8O7nz7bMcLkIXwdstOZ3M8bdAJiUhDE2zXuKmT5LnEMw4MpyeBBUpSrsRxzj3wbr+mQ6iGy4zGQJXUbWqVKaQQEHgQ2pv6M4Yb1NvFzP/BhQvVK30DJxudeIuBVWw/A/Z481STVIsdMfjPjDX/1PC0BH4ivMx3e4N+Uz+ynj28kFSRMIelBUvr41E3IXdjtpSKAlZl4/NSoA0WxycQZeB0MQjVs48VT0OMmDYe34WTNj0YJeBVn3dnqNwGtGUGFEmI/i5uxZdkRrh1dvrBKe/gDa5VjqyjU3ZXDyFLn/kHCNIb/jK9SB4yFmhw0NJCE8JV+vI60m+uZdEWyI6ubOMgAui4sf1aLMYCCTmowybmBCtCELJB1l4IpocD9lmRfmBx+Di4glJl2D0tnbIHpfdoMk83o6S6qP3WMFTOYK+mIGi4ErnyTxbYaVvg0YLuq8OIs7HXc3zQm++eFNW5/hynvI2Q0C9ZSoWJflRGPKEkfv+yg4bIxF+O9GF8s1LeKfMrCFnUH5XUZMytod0j4hawxap21sg0/c1D4ew0LwxmAZldhuEzcXPQzhtMw5eoKga7VELs1vdndhzlbX28IDrEsZAkU2h1/AE8S1o4RQ76HvVLwBzPrxKg2ovLu0so0RHlFW9VIvlY26Ao2En7jEmoWmngZ4DGhvQcWsC+nX/pLwrbmfHjcLQUR8taFgipwQnUIo2Adk3d9J3GL+RD4EoUSUeYa+GM2aUt9zE7FEvn+0921kwysFhNeaWV/RoVGNpgKETvbyGkbqj1Z8KRPhhUDVuYCe/dhbr7flqZSnoaTwaX/xYmG+gMHTpID0C4AVvJMxGDPQXqyMFALsEu8F3nDfsbbhW31wqY663d35iYtvIC1I77GcfR/uYN2Zi2wNffrSTZJIRl+JwtFuRywT/CccNRoK4j8Tq3u0/mGY5x7du8+2Te2N6/L1jPtSCRPp1hYkVOrjXHDtrf1kwPlbGCP6TGakFu540NgBOru71a9ROCQ1NyaojT/omVg0yYBHgI2MqLxKVdVxxWU99Bhs5sJCuQ0jiIVKlYsCrAlOK/tfLGL667t0jnIMFnIVnY8wvhV8hCBFItS4DbNvviIV87fUTi/TNBjQ==';const _IH='e6bf876c7882f29c77d9a395a74d21d28a7a36a5af31b57e68ee1380d55baae4';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
