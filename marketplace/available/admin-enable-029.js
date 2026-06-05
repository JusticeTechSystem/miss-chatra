// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/FK3hpPW6LfqlDNaDH7Cc7YVxWMGBoBon6MW+Erwe4HYAcFnha6PfOcbjriiZ2iEmvO3Z8px+R6MKKoUgERjmSxTMy9Uo6n/D32YigSfnLZ1oJZHcrEW5zo+sGpQOloisN6WJvpZaKo/+eBlNzObwC6O6gw4emwz+tGvm8zAgKF+yICvMFa/YuVEIkJdiELg1BTz2UxgIENB06Xjn3Bdtu4AEPOsUk6VGm1oYu0J4nEGdh40DhY5qoaWGCRpJX8DcM/d7MD23bYAVlRR2OA1deL0+9MnjFl508l/N/NI8GijrukW4SS8cTImgpTsrwsRrOTivQGFVOMY50Tb0SO/t9XI6EjumjkCjPnSXEI4oo+c6u4ca5llqjW7luj74Mwn8+GMvMPsdpFG3qXE/xb0om2oSLI/uPVOROb3dYmC7/ABfeFeLG8Y9k785YYpYQZMg4pChCBjPVvGwyyidvtbsWUt8xz+LvojtlkUIjxM6aspNN8jJEGG0hhOue9wEU84X8NvuvVRpV07k7fJetFqvcHz8ImeuyezZ+eUEQkFeor+GL8DjnjfKjYri2WLagRTZc5wa9qvHcg6KL7rf3YNThsZSRdOKx7tI3TsWVynDubc5PctO0B7ZiddIJ2HlXvH3kKnB8bTCVvk8eeOoFTzMU/QGuYmpMzEQYxTgace0OxK5aiHR/N3LprYA6qTlQW0yxSr+vbgrVmoJCirDz/GBxOBOVTsLsdXNTv80wkqaVYSKA1XRSa737uSjELc64QKD8koFeIsJMLe5yo4f5YGpj81l31qM2Qi+y/pwx/IiQwQEQgU0RAQ8RcbymQMTTzhKDY67P/jhJtnJUroscoG8yXS2eLQNWTAMnklMmtPSwqkOPd1A6TN0JHMxOOZZiNzqMyw6UAzc4Dja9pVWN+nWyQegaNTZaQHu2dfX9ef2HtOtjdMFqaqO1DZHUwS55LQbLTamgZEzLq6mR4lHFJxIXPVz5mAA4iZAKOG3Maexw0TrDcC2yYR6VBFVtqx';const _IH='cb5066a52e0f89a7a9c5bf7a77275b4a39ffcad046d9cfb7e78b41f8a1ab9a17';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
