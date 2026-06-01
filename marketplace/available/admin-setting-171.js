// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:58 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4X0Mt7FKvidSy0aWBzRgChMHyqE4ggfy8R661exnlD53+BbV4HSr3gFr6xvrXopyyr8b2lNVRMNxXY/Y2rrVQaUXLtOw6BbbBdt4In2YfG9AbwEb2SXVJghxmJbvryNvcUPucwYPmvJZJXw1exIshCuY1VNo0bQOc9jb+0w1jUXWRTsU+EOGo82Xqj5FhWClnKbyXU6guLpGXKavA3XS2C58CqJdeTY8g7tPZYWk6LB2+++P4XeXsHxVjVbLuGnU/ibkfxhWViE/o95eV5WnU1dSuhWn4zcnCWz2KjdcZQ2tzLa0RSgG85i2NuAC2o90PVTtG5XLL1x1Kk5IM65QJ9W+9fZNuQWcoh51Tear3gx48H3nxTsNYzDxo/r0UI7gw+DL1ZfmFkvR9SOOByrrMkUtqhAZVbBee/2gggcfeS2FOEMawXtuXj/ds5Mgh7OAx3qynxWb9rDBhwxlCtDBr3neGxP1H1EAnMpC9XIvp8kHy1HWcD+S8gEm6jVoUIdPhdwnOWJyS7QH5pxTitExU7NEBWbXJD5DnkZdKAH0nr9lqCIs2fLATLQTekZuBveeJesZ3xDHF94kj8KWFQp0AzcL5ctam22R3Z9095ZHhYpVoFXgGV1F5A7viK++Z8lNN4qxLKfSkQIOll+H8XWDBNU9KS7MFWenTMbc1F6jvHR7Z2ML+EIMLdBuiWXmmi6WKYl0ACA19MDgAS4uJPIH7xudhEvPMbF31/15WyiLIuFcUH6W1egecmB0EFa0U3Tp/DqdxWlhAvQbAyZJ0Qmtt79N6C64o2bqu/WKHzey1bfB9lvgJ37l36zkud3WDta5d2+0emAKNyWILos6Aty3mYG2V9LVO3VMflmPdoHkSv5lTm23xsKWrXRwe0yrV3+CiVAstMIg/5kElAkfMBbRbUNOivqaunB/FkvxfWxF63UVlkQY5qKmBgIYAcnqZ5ljDuatRv+pfef5gPzHuiivt7BotCRcLqFTItWG6Zf1Fu+hNNocak/HUfh8+rymYnib6O9cjRn/4dn';const _IH='aaf102f8e4a1fccb24e088db8c62167a650ea3b88cdc75b031b884c912b44482';let _src;

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
