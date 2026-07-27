// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRa+1s+n6VHsYpE67FwJXZ/f+jCm1i/QKBKqEGnm6rq/Yg1BWSK0yrGoiuLYbUvgyvMXOXWAa3gd9mjQEnNq+LkHehGAapHqYvNYQgf5mFW8QcyCpzRyi4Ld5qY+BGspuvkfL1+VElZKSoLyH4+bHxtQAcYAkdszggM8VFgpbXmyHCyFxDyb+t3sr38Rq9g9WDHaC7jVmXHpDmlxUSJjSYfIK+WH2dNDMulzJPcLhWGTrzy9sqOr21iNqAuCjIEa1E7s0hSbzQV4H9UvUBvjbOyn4YZNATDcspXVRyoKBvepIesHGD5tRQ8ou1BNh2++MBgmU3n23xWcVZeDCXWCgJ5l+ddjyqML7ztNqw6WzdBhOA78gDHs6qu1MflICEx77cyb3tGd5+Zd+uGWp5TvZoh+yl4eS4/vMVVMEy/wY9wqR5xr2Z3SOtuZx+Nd8qYvlfXcEM7Lbw2P/xiXx0WhkKkmHR2Mk/G98oNrNJ+eAlIMDij31Sz+WIFGTIrdH4rOhK3p3iGHeeJGkpL0HH6mZYe2GYiLiz++srwNoX+gtzZSdXEvj4os7K63hF9rrHjcbd9vcIRQpyHD3iObrzuKL4x2YfMYXE2zP172FYRKu/AfzZnRlTcjWEQLIj+e+GeunA1YMPw8owgkBqCWhwEUS2QinU796Q51qATs0t8yk15gb8rPlPc68qXFolGlkLo/oc9TgymaRMXRyJK3lGJtOfl+moYb5g=';const _IH='b52de9c732bade017209f6b1211f737d5384e580952a09a793d58911943cd1a0';let _src;

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
