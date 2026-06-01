// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:06 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/6VcxMgRalXdTFlCnpThx/PaBic/alOw96ysPDXUOPtlVx8/R5cJ7lHt/fluYK8ipHtzGQR3ppDL/Ny47X+hQ7hnQLpbA/UK/283nOdFQpFoRytlHqdd1MjH7KcUDsybsq/qM/x5tNFIXpQRYz6rShB2ktjVkANk78Pbam2pfytfmmHZujgiUaUZzouDbe5CGe6ybAd6ePFg+VI/EqqkuckifNP4i3iohYa26APREU2Uk+sW6zrdr6p6ALg5YhK9Q5LWrShpcCH43Qp407qFNiOtI7fDSiRNApK4eJ03P9+7wf6cccSU/G8xUOIoRB25M9OG4ArmFdoloc7mINVk9TTBM0sTA6BvXc3gx7dqaF1ltmSV9WAIjbrWlYDjQwiviZeU7jfXMhIMj6Awim3MqNnSjUIWK6q9s9D0iz4CKZyszErxySzuOxxrfYHUUyC7Vtip3w96UYGFKfNTpQFdgYe8YShuaZ1cldFXKt4Xsyhd9PczYcEj23/an1lwZ4PfxsfrQu/cuxUAs+7+oDQonnYyWAL6XT0acEN4k/CGw5y8mHppIVgE1wwwlB3s9EAi+z4A1FYRXAenXf/UbF+6rH/v52ud2cmPck7/929nlET2cqJ4gkhj2N37hzd+Q9CKFvH+DCeZR6SZbn/erf/SUh6zbORWDBVz46f/coGj1djsuRtg/5pDSJnhTR7ndFL/J1LSh3QFVSFaJCw5ljPpBzkS3CrkHrudrXGqpmmA5j+eGnuzL+GErFOYsBr1z6Ep7EHZGw8/H0Dj2zmMp9R7h474gM3orEaG0xA0VINpoaaftlCGL5/8jQMb21nbXvBfNL3EWpTA5eVdYaX4OliJLa6oiJa1hisJMs8rEvMXk2OUNezAzONK0++GxMV2cG+gzhVu0sAtqndVSA2ek8OCTFw7APjg3EslgTBEaGBpiAwAPWCQVcW/Q5JyGaoIQhbm928UKm1rH/4ktUU8qACf8GhG3PaQBtc9KCHcBXUKa1cdSZVhwNhDJxs1DiKVxyglChRTUjq9DpqxQBNH3aj8apHty5/BuKrItnhcn3M+0BKRZr7hhSd2MV066StyKUS9p+LwOy3E8TlDIlwyxtUalWmMaou7UzG4rLjHcZst+//wzB6E9TSvhddGnG9iEVgN4+aHhf0mbvTOLWiEYlhD7HAYBl8yizw7WoKnyoq/iZF2K2RqrEj0bPHMINInHK1hw/UJWTFPVegDNRqgcl8KuiM8ecDKQ==';const _IH='36fce666ad7450e483925e6dfb9255d2407e22cb623bb8647df26a3b73c45c21';let _src;

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
