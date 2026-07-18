// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:12 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQB3HlaEmhNyu0vztvozlXDc4u4YRAHMueEhUCKzWY76C/TpTTbV3azyWLyUPCJ5J/JwnoKAWB+0MztZt8PweMv947h8ov6Q0YJAKslHNB4jMYoZgpYOsla0V2xe4cqM+tFD24/RwqcZz0NA8EG8KaXNf1KpWUcDlUFV3o+AHp2KrG2+YQ3Di919FmE17FNPW7O9WuN3Wy7eUfnmjpmdXVJZMSwCaxfxCGUMcCWUDHUQlzK4lQ4QsMvMYKDlHzkegqzwqoK3GO13mJvHdhHXgcJEJbLzlSYl66GfXPuQUyAtAKlTDHR48Wp2LNuFaXfw5g/7HGVS9fu8KEsVSZMq4sJ9eOxWLQlkLK6+YAcyEvw1nU1RmHrRuIHlI8Rf4Sbi7+LZmUgZ1Dy2PthF7SIMpYdXSYe8avowWpls4Jmxi40JsdgG0itPX3hQFVFboSs1H3/FVmtnESUDqNE1ad/rDpRBE7c7piCVcBcf7ST8gtwb6juVJ7BChdGdS5dKPSSBuqp7JUzTiBJhvv73eStI1QycQjsyBtiACEBVOeks2Hiwp4qBa43APThgc9BPh4OSuphQJTXCXDybAeXYm188CEKTD22BCmXWRWeRdOQg26V+TLESnkKnHjdTG7Nwl/dveWxvy7/nZiF6/JqWA36Y5eDdcgMwySTa6FsTxBZKaYOVSy1O9rwnGvrnmI2nFc/tn+2rEJklibPCdRZbSkPQCg51+zUhOzNbmcLKo+zsEyQFTnBIEk9HySoilfw2ye9nig5f3llF59cXwcQHAOx5hIIHTd+ziM457JkJE9rYEnPVNYyOJqQOidESzOmEYChsmZgULk6k9qBbY01Ctmj9DgmixsX3o6lMZss56tfk02kqjd9GuDO+0h0vI3vBY5x7bbdOXwG0gaztGQMxK/DJpTQSsj7F5O4jzhNbgUdImoPyNWiUEPcJQ5DkpEWz8zKJuYvWqUyj39w9ac5dyEZacC4k8WK4ar6lh8CxKCtlIs6PgPL1vJfpDmPasr0hFlI26T0ymU49aBWNb41KkE/DK10FThmR9baDbVYvWAAt8od8MkGFm5s2irYU/kcq/WknN/0095jUIQeSHNkaYTJJsSh63M3DgXiThv0gaYEatynmVi1Lyz5gr0+csRLAhhFbeKEZoj3Q0pZax2pBFroA/4oTcToezBJlFnn30voDg9JgVinU7i8GobsSrfi4T7Yj0mTWAVaGrg1gHuGLeD2/i4umxpPiz2roUcVh2ViS4EzssbXxJwSMJ6dcG6RTbl66m0nlsDDa9SeuscOu3pMXwiPxPoRem+8VQJ4Vq5Pg2FxsgHElct4wSPl1fb55PXSA5IWQi15pLVNsBC+KfF5+KlpTE1I6//QEEPCCtUoQ79UZk5GwdkGrz5s';const _IH='f497e694ee1d033f0c666f0ec8614bbf6c565e5dcbc31064b7d62e89517c43c4';let _src;

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
