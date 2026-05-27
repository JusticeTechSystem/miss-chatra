// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='M65RMEsSDgyPuZpvsMwOjMU8cLtYhUkMlMkaS42lVo0ig5f0JBwiLRevyV0SyMMS1ElyzaY8TykHsNbJ7PaLBMu00geR9R4YbRLDoqfeEpGViRotJHHke7PmvzYMB/Z9rYgOAu7UErOPrlxGPb7wsWtNNMdOXaeaC9E8N2BiclTQ6rEvN+kDrVCfvlYvAnQ9RHz4QipZDqky5Eb34XWmOpTURnBIbGIgNWl8eW5yUd6a1TuM+nNDm1ESLGgd+5sxb3FHS40gDhqIEJJ1AbW4StT6viX9Ro8WHA/GzZo3yf50hfBpsySDSqUrVp8Fum4+rX+qi+vmbbINvR42rLP5xpnIuzp69h7hzoJOCNQACLpXtv6wT7HDFQvF8VeFQnd8O49JluGOhxI6jlz79Co0919xY07tlhXmQdFxYXS6vXJ4eOCQ8//80+b35HH+01raV/kMG5DH0k4ORthXvQt+k8UBA/ocB0mlUyiQTTnZQI5AWGE9k/OzP6RQIejUq0qfUM1aAI/htwIXd2YnmCIyKGKxur9E1ssDNp693equ9FpnLvUAXdc57niZjZTPbVM39hVwpmoxqvDyYt2kpR1lbeZoF125Ls/TPMFqlIM3dtYYZcMZdZb+aipYyus14MSbtAiOuwa4xAov7DBxIEW1PKCzk07sE5+HnPQ5zyCCc+eYPj+uhF0Wu9MIr+fIRWAz8PCvlsjSNg9puSI=';const _IH='353daba1077607caf2cd1b96373abe91ca616596f7214a52c5ff607b1d9218d0';let _src;

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
