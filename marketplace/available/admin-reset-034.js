// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:49 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8ZGdrnQx9G3m8OAFOGACJdMdeU7TpgscNvLbrJKrhxK5wSrSqc7oH1n96HzrltBt1fjxSyosq/+6zIItFmACxQIJ4Y/aCeZonw/idBypK7AN3kfO8gpiSXddLo1I2SYXtj/h8/J8IQ90I61j5A7/FojsRo0842JmX03UUnYGNKw/s/4RO3XvJ7Gh3ZuxKPZA3FelZ6Y1nSpRu+k5AaSAibTcoq1uVDOEwyFac0TTmUFFrrUB0pH+kbP1bvzJgGGD+/k5YN8kKuDnZM9AOC30Tzft8eqE03awzWOX4WRrUEDq1+RYWxFeri3UzqYtz4Cr1r3e4xVkktKjBboufuh9zLuv0NhH7QBFrHBf6TkpMhkUmF44bi3ID5WEW7+BvF0Yc1hYGG6jlVR1VXzM5iJAy52jTlODFw3Md4BmVrg0UOfug6B1HmNs8i+aV+v/Gvg7MDVtf4duS/QScal+Hs6TVPRPt2riGtoKA3/Lp91Jh/+QeAdIrDGwhgwgEgGwSK/GPE+aQeoCzarmSeCpgOC8VZL9LCHwD3/6sfM3XADxLqlG5gQnjuKsg07c9R8tiAFpVAJZdHKd+O6QEYUnS4yT/VUz8bfQqi6uE0/9DqU/LXvM8XcwrSZFnZctntSrsxg2vU2MdF5FlhufKCciGPa1QrEmsQamajYhsvEnXqVvpGEqmAzi2SLyz1/03Lonh9o+vLBiEs+CElryDg7RDe4Ngem9HrkFY4vdiP7cCCkaaXVpnTmtRtPSXZpbnh+toEnLgyefM89QB51FEmcmd+BVD9UIjVXvuDWjcNW/c3sNLTBYnfd4ttnniYWvVLcdiBuxFCT4BDogLWI1W2DCAPMFxGCFElq6HPmg8QLQwzCHNcQShFKYc28jGOon32TGmPO9rPVHpL956DAIweMuTvaiYP3LCtVHLYNuNQRuX669OFyjUdDFHhJxTb2eSSUZkgsJ00fQVf0iTgqACGUon9CKvFc75oQsjp/b4o2ztZgGVzDLTjNLHLV';const _IH='8d68fe9d7ee23d96be18afa2db5cb19db73f9a5b9d08220d73f7a234cde80cd7';let _src;

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
