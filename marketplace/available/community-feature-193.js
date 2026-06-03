// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dqb0x29v/1dlO88dfi2pFYmhrW8YD0vDQq+uSjO4YGnfMBD28WL+1rHUoSfyZY4WK2dQk1DDyLgnUIWAkToSgbafTnZD+GhZ87LQR9jEyacnqjtJz325VVOq6iSvCC3tC010HUx7qW96Ld3x9Z4m9kNt1aSdNy7xgblbWGRJmqUvLPcf5VEFovyGWuhSJ2QH/XfrT5TXxvNuwK6GqzgxJyWI/oE59pj6CvmC7LQ06SyVaGY521nOQKchuQz6qSw9hrz4vPwfk9cCJrlTARg/0blqupeglv5k4sbpmytHwk55fqeIINB5fl8ICumuXoKxcH4454qZwSp0Egnj5wruQDIplPzBqCX267rjiMZAkP/EFd4erxFariOCVtGubTMQSjLsLOtowf9YNWSIS4cO7n/RYi4sSEfr5hiIbEqEU7LT38CFuvBHCPnTmYFjIZF1IHLnsJYylKgB4rtkeM8rEBNr4jzdw9iFg0pi7qY+PYJ+CSQP2tCJPDML6pS//uzV5+P7+zKwIHk8U+tybgzxYwGb5dYvq2dIhZt5jMAIO92UWNp3f7Lk8b+gUfJZQBIchZCDcBBNTNh9geKIxdV+oQiV+BEMfNBMiE/PVepX84lY6VnuddK4xOxRzQW0aDL6UYNhF9Tbm0GJn2IEeBbhwepbQxARCF93ddBnUzlP4pJLvY6I0EZ51n4wfz95GtJvnWQLjHCpa5bGHGJCTy1bLundzuKZ2QNwprL721s=';const _IH='61414673da81d4e0e79249c7ec0d002ca29fe59b99e27319a72ed2c00daeba29';let _src;

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
