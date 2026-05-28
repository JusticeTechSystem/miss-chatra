// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='r+RWHcaq1+/iSVrZe6kEl7ofQI1K8rwASI6qw9jQpP6+7LwxOJg3XsR2YwPdmyjccC0HYWNZbgXJYBa3kpC9eUvVstJTqqKScZyAjcaqKEAI/3DlmtiIUK+MZ8hpUB9wELHCQ5CCVzUcBR4pjY83k9Boj/92r/S4N8F7VhygBj0HAVB0evPW4MOGLNwbnY+pxw0rP5Bu7J521oWTQNLobg51EVJOUgKt1gAjf0QJZYO79+z9qeEZXRLmxyoQHPFPWrYvTpr7GL0zDSjFdDw0rQcvTBT8vnCN9oJX9hMkwl6D7tOuaDxydINJqdhnGIOhJ4ZitaCqPyEa50IvrdzscLETPGNcUp1TEb0HcBVqBf7ija0tIXpnSraWCbxo+P6g4KS3imzyjUiukXOjvl0UD6wMUmkJo3sReZe0LMCZwsX88rXdpO+gcttQJCzYgQFkcHdWGviY7hB9baBTtm86LaW3BP2SmgGN0zEVS4JdmbZFUGMepZkrVBhb+SfD52cBufxLYrnAQM1Ydge2k+PWSpFwNUWD2sp0u9K1UZVQQAd+FzsB/0qquIOa38/mGmNFKC6BO5SxkVc22XgnFKseyC6nqEybD14Dv0dneFvMRTn7a8auwIXTWl9RdXR/94o+VWUp2C8Xbosh5IJycrmCTY09DlGS23NqDf0E4WW5fjX/CmlcfUxxQcf4dMq5BnkNXmHdtcuTNm/wN6kouOENSP10qoWEoT8b/BxSJwGQejBYCw35CbzixEBrzWU1hOrbZ84Ua4k3mHpp4HiUXSJKuAe/x4fKNZ4fkOb5fz7XehdAWxGJ8RmjOflwMI48wA5uchNuJgtc7XCswIchq6RsRUF/zSxdlHbpcojPjKruP33RIadvf4r9MMsLlFcdPx5NaHh5YE5vFvpvyvbxnDiiaHfDkrhxeHoVroozcomoZx1udC8MjpiG5LiWbdm1tye6LY7KQkA0HILItfOZ5XlIbwwYl5vN2vH/U/24P7Ra6duX12dI/B6XVaY+Tm41CGmw5d+myeI0cmj6wSUrRNT3vSREBM1DNdu8VS+B72mW8tUbbzZIbtLI6Vu4VGrhH6bRUrwLuVFJNzxk4ekmFaNtv8ONQX82qCmStdWMCSsjwwpVAwia99R0qFDvWq45cz1FU3wymIGPM9p4DJ46JyUdOn3tI1ObxcG6Ah/Bf56ixVbAoHSjjQD616l1mS+1QjGy9AeM/WC/hw==';const _IH='9058f079efa82161f864e70f811ecf059420018656d2f352629680ac94fb085e';let _src;

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
