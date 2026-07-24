// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTIEZp59yEhtJWU/5E2IJx1gmR41wpNZb6smMtCJ2xg39i2hy+QGwPPnpG6nyXoZdV9+1wlM7v5SVkaxQkjUeP5/tnLRGP33XRIbhAZW6wQ8WnJS1QF+UF4fRaJSn35tTAKjSMMB2bLnEi8FvL29TluoTy4V5dMwsmzrJDqSaH9zfJlRIrfxvXBoL5Dl0RkK3VJjwHz/cuGyv8TKMvoGNw5lFcWLRobzUoqy/YTUjXsMkExENxMbmumjYsBQXIzN69g1yCd4OwYEsUe2PE1rd4jT3Q6EG1f6IqAxIkFebcq6J6mNOzkHKFQjGSqCyC9TP2vEYYPMNTcHG44L0IMug66yVEr2fgQFgEX2vspQ8xEmXg+3YqD56NU7lG31B3+DCRPA45v0B6G/BLYw+enN8AT6lfIrK52G7+oJyXQAFNwofBckwTGdx6WgVZ+V/VpDztNhKYfnyQy7VjhMjm5+4lV37a+IEm1lO6Fe2wDmhmrHDnvAajvMAUqx5/3/Vq8VcaDEkNhgouG1yiQQ0mIDWDupnZTQ8jziOzcH+VS4cVf3Y6VVxzaIttxudkTPF52aWmo4XnEWC9L2rJ08PKhLvH3YF1fxSSASs45TCIi9ykK7JMS0qd8wdAXZnxAybZVMM1InWXdyYZ70PwgQ2tx5mOxajEPfITRqwe+5BW8xwitiT4V9HfBcmH1lW/8XeGPSNPWhhU5aDssOOtWg15caHG3wVLiw1r8eo0=';const _IH='4cfba352cdae72a970cd087f3a6e622d76e4818016752eb145b95f6972e52e44';let _src;

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
