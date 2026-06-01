// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:08 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5qkSs7teANROAmTb+75L04WueXZvejFyYoRQ+0I8a+m2JmAOU1RwQe8kc04/VJ+XJepML/lifKmbmf6Jgfp7sdW7BC1WbtWaBOulcjb/v5QKOoThjWdd3D0mHCP4FECO1E/2tKZM+rF6x5AwykcnhDFaMS4UJ39pIqXqoj/iB4jvvdgthaKGbwupOhi1UOtg0x5YvKOBV0xguXLgM2pEQG016t1xfc71hMpgQD3fJ+RaEdyi7hQc8TsppzJjH3/vq9XxVv6aNll+oAymsxQFU6brvxJ7/kFMunBBf27E0eh65BcQr9fItXgGT6r6OoE+IPp6+lETPb/P59fZc6gY9/HpU1tERoBF94+mxZWJnRQR6gnu1n+Cg1+MFCyWyVjkep5ksK/XEY+senpX3DuXx8IPIBJzgIBFqxDjeneQE3sP3r40mu7P174cSnj7QL6ufoySn7TRYnxY1sjKdf+un9qFRRe+NLHyF3NcFQjL0QAMHHSWTe2hwuy4t3iPPjCxxIFEEPA1Yk7AV7BGlaj88xJIYjAmbe1SPghG/z5lCsZ5IVDvkNIb7xgvNSg/tsYnG2DjGVcsfSDhRPasoH/ZJeKz9DnwvY4NI+K+vkhYFaAaSEOun2AXoxdTWeld9xfTe3Hk6Mlv5I1FTVKswcjHwmxLWNTOFv0wYUwynaxxEYvv+i2GfMbV5Nct7/giwlud3xU4u9TRb6QgTU6hGeQW/81Ce56';const _IH='44eee9b507510b35aabbc08bdb6601fd47617989e2fab795625b87b6963aa6bf';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
