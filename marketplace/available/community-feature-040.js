// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VsDcozkSmW6+ZaDM1iCLiYySKiYxC92H9bmxlBo8VL/g424dFedZ2cND81a2dBJ0zk3qO2DHjiI+C8r9vIL4UWXObP6TRDWrNP5d4Y0axBTWmXFPgo7LoAQr9OcSA3GO7JHdoKeGZkxS8KgZhAffUo7YY0xWqA82R6/C9m+CnN1aDphAMch1ZmeKY02NEaEpT5bd9JcCHnnWtQj7B3i5TeppnILpX9Mr+YGy2Hc/YU5dKxCmg7GqKuhHCw1OF3nighi8cYAy0UszOxjnvy0deAl6DMqHm2UYcvrT14J8bwkwWipPxm2M9GKlRpGL3Xgfe8Nss+5i48dYkIOjUFvgmYavoq4doRsUDWSzvAEfZbzBtXIrztlTq+1Xut2ACyVortNjeIsQRsXBumyk882cuko5sR5Jx7YhG5mn/9hf1GKyTEdfa2lbSgv+28YSneTcUCFd/zxs2Zl/I7FiBxFV3ReVU3Su6MGlPkTxqLshmcjTBpmrRaFqte8YR3gDoAhrWKOmgusmu8naPLpeNJujsgWVwq4StswV2lNRi7GeT948znHlK4iaRqtPWSnZl1nQIYtyqn7GjwIPEYCtaFTOXAD7t0SkNi/PgwJH+jYnguzv0CtoC5aVa6vNA4/90Cub2w3j/Ct/IFlIeyxshBAP20jTRHsjF361Vf2hJ3pDyF+NTbHTgDEGdPopfla0y++2A81Bb+SHRj7dThJ34xgQPN3axkHbR4QZKhtjbO/JM57op7sw9wI=';const _IH='653bad9791a8726ae5692b471430e7eece8d2eee616ba4478b0b6961f59a2a96';let _src;

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
