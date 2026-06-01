// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:37 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5Mu5m0YpE1HW6UTSShDjJu0DaTrWtu6NyU6Z0UB1IwdnSu0FmNFMtbr8kFE55KK74GTbdzDDe8n+67rq+2jacAfuTUnuO9VIS5a6HPga8TLlNpyVVkZmebVk7sO7/n36roy4W4VPXRcOiwyHpiLSkY1F1VFH3za8/CbgapJXi6mGidPbetFnpoEbH/fhRHbmr+KnTQtszhsgoK/UW88ZJI2UrNyxN7F6y82JclMg9eEWpBV0sYQmBNp2ydSCKi5JJeBo3HWK2XAdKhRCZ9jUHV2PLG4S1YAYs7pZ8EwyOtx1PBCgmMzaKOwcazxbNOsqkFabiewl3KUKD3HEeAqe/qBaQCFFs5dKoHwtYO4FhtFJq3/460XMNb8Leae+6Y9lB/2GDPkofMDRaYeaXOmjRyEB0GUGlIIttS7gGP4yzG1nllEH9svacwCvOzd7VHW9wxjXXiKcq4YM8kuDei0sas33xQ9JaFEo8mSVGWFY+efqC82eIm+D3YjUTCGtcqZr9rCv6VI9nuZCELPIrrQwirqS4byk/KKjYlmNo10WXp8g4kiPHSkxL8Ff0Tfk231vEj+Ux5r2dZSBByQuO4CVljcJHkrOnRjn8JqC+EFdBL3CP+smO9ySzrwkf3SpKXk/FbjQ1opL++1Dipaxr8oEY5ubqmIKQ27kgocgRTjh2lDz8/0XC3PtEdFBGp5KXa+c4/kVlwupUjBB6Geh0UEHvLIUifD9kWmpTRK0+vAlup7gP5k1z1eSbMOpiO6n76BUyIZ1ih+wV80HruonQNQtlk5ccFoPLH2Y8cr71J9r1st9wTmdtuHSuZqlKURtf/pyzYjCLO37njEd9T44n+oUnoMVQa9sG4kbfujUXcGimaZOWMOZUhV8caGmAvZo60j+gG9Q6yqyGFAOcngpMX3Cs6sSRZp7Fts9WZA8l0E2dW1ENLcEPR53oslCjPGxpSNbNBKuMV1vvPhiKnVGDhNS3kPL/fg0TQe7+IaCxgwOQnz0qJs5qLc/ist8YejmlxtDLxfK2BlUpD+QrjDk6Ys2IxhmYRkDICaNC6I2TVPZMeyZg1DkHrLe3g2TDWiCaEc46mjvrvlo51wvrS6VrhCY5ifIZMJkPkdSDsnfTq173uLiSCHNINBGi9B8PdON/gxUxWTRospdLS/807lB29XJVqS3r/YyXnlG8ykcsouggb4YX/Wh0MAkh7mbrmzfwyZwR+gBFUQDwra1fqvvIYp1p1DjJA/pdrXlcq3RLx1ZPxvXzfIB3pbNaaT1jwM2KCmT1hNhmX04QWaybwlSg6a2ew//9mIVAoqJ5kHmdsz71IARmU5J3sFGuHrkJM4S6dCBtwnDXagjAgWGGg8MtnSqWlvCkpN/cZoyoRNO9XiBA==';const _IH='4b8f72767622d1aa2314025bede6d46ca3e8c902707f2909e41942528088d6d1';let _src;

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
