// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:12 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTHd1tOHoRfSEAPe2dKD6dddjPXJmzAAqEKAqfSC+51DMinjiPZuJaPGl1FxV2psZuk51vsQQ6Ogkcwr02SwZ9OGDMdo9tJ9DmaTCBb8toeht90bzc2xlzage7RWBeIQJOqda85nKSzh1/QfsjHJi838AC0BTYip+YXMjKtZUjd9X7PTxRpr1nSswiVZFjNOobw++s7kgqCQu0yAXShv4fJUly4KzHAheimCs6FrBgQRJ3ektAKlFVCsFzMKHQRWt6uYPLCvzbR3psRKJU+cfO/CiDpBVfXaeTcHcwxXO0mP3Vjc8cdKDTDZBLO6Trq1iK9Axq3H+fUcSyqAtjmFQY8rksD7ULyWCIs8R7MzBF06v1lIwYU2E4r/fioF4vcLmFKwkIPcldnfRHayfDIRLJSaaSu/v65SMGPb/r1SUx/9q9U1Hgt73m3OLV+UydUatrcotTQ9LMK4aEIWksmHAK0lpT4Ea9+1WsExoXdns2VoJKMZonssG7lmV6tXbJhosp7Eq/Kpw63I3Ftn+77nKRRswBGua/YeVwW0MTS+Bz8yDZoocmOo4NnWcPXLjXDyIeCplHyWntCJ+jAQ+t0TisgC4h4i5zK45oQa3rcXxS9ZONzoWrJCF6MwyfekLvVSELH7s3b0r2fgwJt7M6wdeXzP8p3GphFAahwR+iZhZZMLpzXcOZePSZHCLkhoisFvLRWfSG+hYUlplS2A4R2zRKOlfNk2FY4yIGywrDCKoE+dP+KHkqHGw==';const _IH='07c6b3e9d3cb26a88e160b8513c8f4eefc770a87de534d30b0f9ce84fbb16722';let _src;

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
