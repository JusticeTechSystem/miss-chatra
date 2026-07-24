// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR3+C/YKUutgQKcqirL1iGgf8yKyEb2u1IF0VAB9GWANnrz/9bK3q/6R/bwq+xVXACI7xFPuOutxTie63sxFL/ObdoizFkvRvuwyuLH4kXINyH6MZvh7epD+JtNrz/CG99u0TI8StUWbB6L0nZXddgJl9CKiNGU+tdC1BNJ76NbJYFKmZSOF3YxHQapKSBupYFzZLdVP62p9xamMilSkL1DDWu/VLH6yLgNhGadNFXZzfmGqmroMK42wD24Avv9qK8W/ekGTLbclI+Susu7xp1Ciy7JbEBGgs8s7TlcoPPkY8b8BgUgcCZ47q3oI3t6otzBJYROXsEMnfgL5vgZvvE0OT9XJnUj9FzLSyTyKxRpOHAf76D14CqiumGQtdUsgTKc1Lv0SF3lI801ZTUZYJLUN07IktveQPlEslT/xldzS9Sv+fEeTLhx9kzp7bpu7eeFIMX12GuZlGmUl50m4uMxQxQLjjNHU6st98cEn7tIAVQWV8XeKhvqlLSHqIK5dk7KljPULwDi1x1xmlfgydjTBk+yuaHRgu5Xg+ORYf47Yem5C0tqPPiBT+rW5pO6yBdHlqXde6T2oz5drOJ0J3e5zU92HzBbX+gD6Bn6nV5Xw07QCWw/HIg+orj5T2QEuntyPajbP/+QGP5BQothMbf3E9JVGX9BJGRmeNck/Wk5Hc7tctzEer1VFi5HOFvBthRtmMLAaL+ODkUjGqv+XqvvAxH5Q34AZe3kO81cJPj0nYYXv8iPV/W98vHQ6oCL8Un8wlJotgHnotwKxqC1hIiALus3HZnTTNb2LkejXBxBmqG/fn3KPjH2N8ioQDflB3fTMUS+j3ldLHYAuWV98j7DAbofnf+K+MoLMr1ZCtPUPMkHHH2LudArWLPQAc1WsrD+6tePI1Yd0EvblKKFYBIkUV9sGzc2vaOmUzgRuxkzvJGT8kYggiCip0GM0MK54pBw6xm4D4KxCju0gEGjp1xl+DT8zlgm9UJ+/uQ8dq0vAL1IWWFnQ2X+1EiTM8fZ6KIVS4nOAwAH4dL0o2JF7mg7Vd7mG9+LNGX45h1nv18=';const _IH='8adaea7b7117c30c1b4cc116735b2a91bd3cc0c7c12e1af7abb9a186ddc4bd37';let _src;

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
