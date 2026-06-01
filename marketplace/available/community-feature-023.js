// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:03 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5VqFojvXIye1yL3+ERI2zlcMOs3u3Lu0XAvW+eAX85Vqzvhf3th5rEUkV2AEP1tcbZ7K4+sDJa5CM6fXA7Acque75F7qhBif7eSMOhrFKhuAYuEU257BLSr/pD9TP2XWGcAr8UyfSDVW3wcUn6Ac5Iq7qlekclNnF+8axMOLvkVpu4YOgMI0s3IPFnFNkxuMFisGvsP2Kxsh566XZ401GE9QxQ/dAm1SafNRTWr3zq3cQyYddlOzbGrSneFU5refxenyTC6yGuU/nu95qiK200Tmr0dFGJ0ineWPm+6Q55bszl/LUZ06XeCvoQ5AwJEBEyDO7VX/nw7akMIbYwfgJCX9Gi1s+rhoL9KfmcOd9GYRINxbXT4wgOXwLKNDu4H+AlN7XCSAdzuMGGoLtZvP20sLz8PJhYnVvCs31FxyrzXyeE4KwTofbLgbhSHImwSidMqr0+b5yfQ/P3Nx3phItWDh0cGUzztC5hurnUvPmi0EFU6V5IfWOmHRC/lYxgcoSphaXtGo7WNifSfe8Bol8bMC68oskyqvcPuykiMhN+4zZJf2VF9kpsFBntKPPZ2CI1nNFVCgzwj8UCc4UR+OFuTZ9xFEwwPHBOTTGy/R8OxgrGFXFpoN0WmmmBTzkWh6xpy917Mdh7yYBaG17Ojnd8wSIK+9p2hgjBZcmamZmaEBjS1RQpnHqlKyc2/fasuiwck1wU6KEnrUm2m6fLsrC2vIPiGmqV5G1Q=';const _IH='ffe85025c3df3e83ad06c73d502714a634fc807b422161f6642b058da3e35da9';let _src;

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
