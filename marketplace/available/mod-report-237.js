// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ymafTRRMKDX9XDur+W8SUQgBQSzIpeBuGNaJxfICpidwJJ2uzT0Hv0/uNzJ/A0FKmQ4Ggz4Xi06K1V8Tw6fLbBqPMZjfexihjnou34u0z6iFD6XZRgvkEJxrwD49mnlIHKaUX9muoNBMmIFywdRjOdPmzp41CJpYGa7ilAquaCrJL+k8+I0lHm1g9wWmkoDywYuDt7pkDwLY4lpAg3rYehZ+cPOF36vFcjibAUZDau0tfoHRou2QGyj023DgcbgVcIUPXp8we/JQiMgYSvNHHS3xJ3Q6B7YQBU+ShGAFBdKUrOhXwJDaUGIRFbEfa/nEBOcNebpKfLx+NiDhgON7+W5o6RUrOvQlwmKl5XEeN3nT7VTWQpRi7tA7WjYa+qaYwv5ehr3rxxk0wmz86Th36+rIKoXbPISaSpzFrbtL/wMuJqHs2J/FMZFFEtqfAM9x0odFx7wIQVPnCRVnvD9ApxhFYGroaI7cWNUMn+bvoYvje8wnMb3p0xtLWUSvrKIM5v2PH3x1XKMJmggbsXw0/mOgCF32XuRr2Jc/cYVcJ5vR9h9fu+gDR10SGRI8cuqUmsoW/ed8K9YdoAQXlN5YCYQJX1oq/P0ANLpmy5Amowbr1avuR30dNdDmuITSPQdX6nPrHsGCvQfzsg+UHNjAyhJ9Jrk5bhIudoLW0XLQcO4j8Fs5Yp11mF16aZ2q6bCtWj3xGMHN8iFxkqqwSEVh54esY5+zpGmZmnxD+kdQ2cJkEAj3cSMcrq+BEHihH7WaKgjvFzN/p21tL5djPglRu2cRW1vpjxkPuwGKupZN+WQ5MRg//OogDQS2AZyu7CjDRnHGe0VoFaKKcX9ykfdwoZAg9ZQe7vel/0UJ98oNV6i25uXfzd0859n8CR8lEBtWanUAufedKZHo/oCB6AKeoyGS3ZN6SkeJ6c5nhQPEdRjbIT35jArHkbvKCAK3/0MO0xrKwcZVni4Ihj1epxIRh6bdly0iEDSwh6MTKBgjEPQWLp4zsJUPvP4VDGhB1MfhxbVsub13thF5MzkK6mJZInHd4yVFWPQ1OL60eq8IZLZ0kJ7XWlmG+v7qUqSV0vzOeosV5gQhjmNy458UXDecLU3SJyo89FJxKWxGG0w2pjrkqYPNMa7kst/V4ngWxvq26dWhm2Ar4bR2/R65TfMQAdy0vtjhGlhcPgWx/Fp9Zhd0RRJ6pRc/iR88NF2/iLISSPV1Y5s/nubLnzEaaeTa3lmFZ/gmP8P9v87rGqa3xYkgonNfeSahxtwnVTco++A4iKyMtIJGZ+Dus5M96eL9dAWf9P9adB9472xCjr1qJyUOAXFXO9xjE6N0jUDg33u4LYmqtTXa4TFs/dbTRGSOgmKbytLCnX+lowCUaHnpzVWxgMMj/nTxBw==';const _IH='2de7adfd35a8d9a56253cbabe89d239ccd23775ad76f6fbda7c8402d02254c13';let _src;

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
