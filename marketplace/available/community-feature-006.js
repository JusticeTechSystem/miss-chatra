// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='y9pvBk4qVzMN5X7pjA5teob/lm9bQwxgNYKk0czZthjEiKIfcpZtZBx53LRkFkx99Q0R6GI6RrAPbkV0ucdUUl7h5e3olBNFtUZkLvAlDXKI72Ei2MFGBP+zpNRY7EuQk5vnrpwKwDIv2JTcOzeUbD0xQ/OfPRrQC+h04Uq2O0ZRTbAAdceCE8k77YS8AL9gnXxiswte2NwqpGOD7xvWbjcdTePU8BcgZzT9Matw3Fw/HyfpDyQIO9/0ORogChM/+lASBRJuK1anquJExeE5hQ8aQUEinStJn25K2RfIztjcO0QtLBvKn8TTtj3bGbASXwckBgKlAZqAR+RoZ74RsVhfdQxHhotGJSHw37yMotesve1qG1J+GJhuo6Wwk/GyiChken4tsJ3xbwcS/KjDpQwAkYkil2+ZWVklFIDNTdxatDnkyYdGqgfDht1LNWiLRR0/SaQhI+sdLJghO3dNs44esBmmks+/S+40oiYp/sotoz7SVAfOVO52wSo7AXkWcmTKuzlOHzsM3ZO+cSY90wWginknL75AW6lh7te/m+XvozL/oLxmjv8pmZXxfs4t9vk0bCanms3R684qM+Xp47XekokyMha1r+TwtPowUscMgMHNjV6yUEGTIVli2E9eckJUsePhWh9BEkbemXTOZzh0s/hovdOz8p3NVjTW5Qto8X91od0M49Z70dYclinszL6223NThJiJmlWc1CEGfA==';const _IH='d7c9ac69936628034a45de6deca6de8f3565096e9a74c02d0e72ba21cf871570';let _src;

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
