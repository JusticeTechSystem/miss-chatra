// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vpVKNCrq85IrXa881CFNf8+kheVNt0wTqnyp+pmLSCVPcDkyblhnXU4d2ndtCIFEQNR5WIltIupY/ik72EPasE8jvpNMLLBj8QKatqGu7R2G3UAKC6U/KPAMGTaFV04LUbGnCtMJLLmfm0LJAn2rJ3upzynipUx1X1U2t2Fbz202STUKx7NJlVAquyc3QG0VkiXgp/iBoxPKWFk0BgLSJgqzi4GmMPad8TNHjalxT4Fsm0L92NgdxpOxpICzzQpGOi0Zc1ZT+pfw2ZS6lt9r2l0hqo6/uAGRs65VeoYBR5X5qKPj4SFH9trQHcI2hXjnvR4dbO5GsHf0CiAwi9SJywoh5qztFAtwUH8QgLj4o5w02rMabxUzw3rACLsXZhnWWxOT6taQ87jHi6pvGid0MGxosDwzFR8733SVIdyYxGBb1/Z4D2PfH850MlmfKMWFnVuEim6mD32/Q249mGxdmHaa7tBm+MMSSgr7gHjHHJfq8zNnwtRhKbJujrZrAv8D7Kmib3aB7R/v5+BtTa6TOj4FZQBgQavZopRokDCnYwb3qvMLlkvUgR9jhwIOGIs93AP8SkYe1XGYXokxS8sBP7xyyrV0OMFDGCfnxCyyKWIzA4hfjFNpGkjToiqx+aw0Ddt3YfIQubsJGWLNBcq+VeuAm3vFauFe/thDucbZBcA3EKbLUaosKIVZSodJvirAzqJLj7nIYotKL41aIfRdV/cRITy5LAEk3wEC3xTI7UHvQGzMovqI8XBD/wcDT5xpemh/cIu9R27Us1a84JaXROAMVII7Vls0JVs4c8wyK1kZyS7ddDefbB7O8hZYLRdrasGN/8eaMDPYb5ev+BXKqWJT0P9vuBDi6WT3C6sn4VNIbQ60ve0dm/2CzxqMvzdsH+vy/970eIwCRcvmSpJ6bwmrGLquMiR+M8yZNwfxXAS9Mq8aEk0JlNZWTR7+xLMZfqlIHFMPB2r3rKvFIWcChhNXK59YWS0wZFlRqlqVCza2Jlmg2WkdhXGyuSHnpiJrftVPDQmAdsQtUqgw8BADQmLdEorXzKDWJ0+5ANa9k1+qLYNF/VkvfrpcEp6Ov8nE+ibgoDxruzd9h0twa0KPHJ594kdXOVrO1ZhVbwBKzrNwNwMFN+QWrVc6E0M6ptC/PxBVe/odtVuIi9SGjGVcydtFfdI8HcyxrId3VjZusYPrwTTkDqa+mWnBTOpbAQqe9c3sNjpH1/KgREBhmpzsF7pYRjB8APW0T7mqWgiNHKt0hRyZS97u5isVoOU8tGJs2oJMf+PNjlp+MwK2mZRIX20y/GvkjKQ9nIkG6RHYoDyift2GGMb4sqVKMoUg54vh72IXMq6LcVAt+nxPWcS9fCSDk496GY5aug==';const _IH='d5a715ca21dabd8d096e949d71aa3fdd6df2cfb7fceb7d25f69bf20542558615';let _src;

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
