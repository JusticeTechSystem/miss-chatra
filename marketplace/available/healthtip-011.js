// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rEUkLL+fpH6Z0xXBuTn5BPa67QMcKQDhjOxW19UPAf8tJrxDcY/F86WpQ720EZa9OYs9SQofP6cS9ccr3dENRtWDeVfCk7VXDvuke7TDY3GlVqGaDofg/QaIAuDnypmmocj79xfpIu95SGUvmiD/9c3QpIB3AiWl9UJRXfSDj+icaC53qHob/nbeqO66JjI5KZIhc9FuOcgN7p+bDE/HWIZVVV3zLXlmlB9umiTLioAVkADyD+Z/8+33ScDBcPBLqHLamzUKcSMaidgh2wMZFLdIOtiXoXoGUHemj9IzuJnjtpFEizZ20JKZ1GUlc6TF6uHREs14hXxJ61LkzV773G8Vqa9TPin1Of0mRpRxQGFlt7CbEYwJZj6zQdoHkBy0x//hEMHN8ID6J2o2bE4dHvPabGTsQKdF9lyJbZId2AeSkT5ebumkir3/Nid+QvzphtF33lN0DZmZf+W7DpQBMJDKIf1iKGEjIetoqRzf2JExzYP9SmM/ShAfMGxkCU3QYFBBhoVuY/p3WnYWAYghtGAhdcN4WEM80j98S8dtakPDgKmn7xmo7GGwOyP4cm3xfA0/KNJacFyeBbXZ2XQQl6DWfjksXV0Zse1kyTTol+9gfwQBiPeDJWMcd2eUllb0Kvd8UFvI/yMFM5KWxXXu6VOl3Mi4eX7tImSzlpvjz+S/J/UdPxXiB+A6R2jRBm1UZHhM5T4JRDxFNWqExZ3yIlZ0DSzntsMSPOIqJr0K93wlmqJpuSSy30kX6rvRFfOGaXEmZUO5Ea4sv6U4w+pzIv0bLxKACWsN8NQNDUJJsEWDaBShvKV+C62O2jZNdAPv0pP5GdrTwnCEc9V7h2xl88+/KMz78YPPir+2cratx+HsIOEn4tEHvcq6//ISjFbjTxFKH12v1oIs34/v8lNSz/9vvYInw1NH9TkTa52h1NwlSamEYTA2mEKV+5c=';const _IH='ceb315b9b9bcb1f39ce73e42aa06bec076a462b7d7392f9119a7f20211bf7deb';let _src;

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
