// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WuU3LTobDWcEs0X0Hgka/iGKkVvqtKg2CatwSWyHcQFcjui36ZMEczNVpcopxJ38HuFejJdqW0YlT9dHg2qtShlGY1dOo1GpHJPLYmGpSicZ5kffZazNPvFJRwKOlPQgNouK6pK36Jg+5Yr2LMHiXFGQzZUBVEMaRdb0OIsmVrxIQTd3wUQGJmeF4XQa8YRfMalZB8a7kYMSwK/+wMMT0QgKiNb6mFsFq3scDjAaOHa7zZbEmCCfG6i+NhPPgRb701IGXpJPi/yXrq3UL87M0raV4Fi9pSXiL8MqLYQ166iRRUb/OcPAWXHbl88GvuHUZDFWUzoNd1UwDTkXoEjlQLkAUq1/YJHfy0m+8kKWhrzHYMWclOGzsZZXTEzpipha1NS4zRTY9orMrZVT41ZK9zXe9NKhN9V7R5dV1QvZKn9vk6SMbNnaorSDCi2s8EKu7RQ3FFdqwg+ePM3D6iifQ66oVYxtVVdS0bFpwJisLv4+9EMawDsT9fRYn14n1A3eQstGuRsGeGebxrUo9C9B2QzAGaYaUoC7uilb6c+75fO3uCmY8eHvDaH7JfpGpJTLSlXiXXduyRl6V5DGOPpOhbBebjRF+X87lFNMorXmdHZeHar402Y8RYBS3yVPxSyisql9pqNoyzqPU7Nk0hzAfIMgMWPAZX+H';const _IH='be1dfd3e48c2c5f9e39db1ba378d0daf66370ad583442e79e45a9f5c1189f0d1';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
