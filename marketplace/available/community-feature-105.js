// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9p1knjb2HRjSdh+Qyvob1eTo0gHgxG8+Z/2hE9/FyVjv2zxwBUNcUqqbcTmhKsstFJUFxv+89W7lc5mmlWIVS7QscJ10Z7bhcjqyf8aIsVL3HgxGdgsswuIMzTAzieOFv25Ns2z6/0su1+4jh+/r+9zfr+KiwbXmlDrr9GRbtBBnj2wMp+oOFZuXKED0GNFSmK4fdQV3Al/O0wkYZiNmloaVK4m0zpmKXovfk2LJPRa28y7z4lfbEHRmovr8v6bBGbsTKkgc5+rMZtEiUYGc8h+5w7FNCY352koPMQ8BcLqCSYtAeM1To2ujW9uDdxtjOTiGtiCIwJ8EgKDifDWGJ6Ty8weW1TzAupxXsjcNiUzfb0zZZJw2bRZ+xanr/m0KO27KSJG212PVpdo07ZMxif7n7sIT2rjzDzQsP0anMbS2ATzOVdyfjMvmYm9Otm0nQ/p3fJYXjT8hwkJJkpCrB2wCruuWobm1oxgHLMSkhdFi0xAOYOsekDLJykKCoodbTxie6TOFsehFezLi9MglxzZQ/aOf2wEpMtPKrdyNkJRUYWF2w95ZL81B7TFr1tJKYaNUCG0NRHNTYMjcLpxHaOBURQw9GgC2bOVFvGyYixQrrV0rMQalqWBSqTLI1OU2lqFJs4+Z4J/UIMAlbYqZpLCEdA06f9j/5DW/nh2tqldPjrObdZLMoP7vVFp07KBdeTQadm3Ulf6bbvN6McZVGM/aG9kgLnUkMtzzmJcPOPzmgYBM8dBaGQ1n';const _IH='647739a605e71f77b5710271f0a4a900b63ca7e26b347071aefc3253ed4432e6';let _src;

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
