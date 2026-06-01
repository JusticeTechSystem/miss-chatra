// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:08 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+FndOnirUFl+iHkdo6kScwEXZzA/CwhshZLP/mQZhPGLkhBoDVRTdYfngccvYUpEghxTg81JvPLaJJ8kxsXgjx+H0iGByklXh5JI3fEfF27PbkdHGo8JLwnZ3urxpqI/OjSVW/MnVfqbl5LvTdOZrBnv6UAx7M9zRsA54QqflIonQdECabOaA3GeUGOQ3MzfzvZA+jwasp8IetdR+voJ4dDAhQq6HDm0pMuJkvj4hxRQ7r5X3LVk9W0w3IJ/7R4yTWnNgsUSm4wX2+t6GWSGLsKbk9Mw3Rwh0EzDzTFC2eexY2ogvwcOhfao9T1KnADlw7v3QIaI+hFBGJHIoyNV+TcvK2S6RJj8rmx9MlbT1XOb6+aV3YR2q9ao/u9WZMN8L1QB3yz6hzjbjyoi70j6PxjjqGkcAD9QuK+NrBH+xXNr0+MxWQH50Eg6u3cObphAjYay5WK5iFWh45jfIrdgpAd9nTvJfjf33IPtckX/B++TKBEMvuaodddUcWMm3UlcNapJok/1gl5OizIrj3UJf6EE4j4tcVWtZJ/mOWIogA5byqPKyeqhHpoOAIBIbrtWzEvI+80IVUVRcGiMTIrVwFQcYWMGg45u3w3tnscrAOpvqI5SIWVid0LSOVE+NYjnakPklZs1fzItDYKVeUhh88Ii7uyNy2CKLydH0q/sfLzETHfHtHe0FztMT2SGHhcoG2rShYKU/a+vC+GYE2a2wquBobQw9henUyG1oGaXOea9mmMP/O6WVgnH/WDl9L+5F1h1Xs6E7Tbwa7X4gCGCEwMqNCMTwll7Fi1H4ceMnlrDKLJjJ06HZPzUUUbFHN8qKGgnMwuz1JaVc/0YtASQsrU81izqK288+GYPLQyU5t14iC6gFv+DWzy/dN9U7VsrCvP1ZEnNWGO7u2vwhjWDmvN0uBLRIToqIKDDCGDV0zgUDAbWTWSvmynP0+JNi2pZx71qmIqW8w3FnCWyXn85fOQrJiM5b1nRzXASGDmSFbgFoV8nUTyGBlBTuJsYvV5qMc8KqA3qEK3FGSe7WEru6raaMTj3dRloEE3VBDcGSmQvTcmgU5aaLplt6K+9cXyYtPXHUzn/Bo9RTRfYQ5QBiIx82yNSyY2EIADUQxauwSTfOyKZoAIyfeGvPOlXOHMGrIC4w15IgDOnSs8HqwK7Pxmy28GPduPPTzs6kZu2F1cKXQ9YtsfviYEGGZTgg2NMSR0CLw4rL0zZjZr6ibueTw9QqRzMTh9zO63OcrBQ2YKP6RAlKCLKTEjXhDy0jWV0cL42r4Ctt9djjVeQNVOoI9DaB7XCCE/RY8pxswPnFhZi1kZX6rkFkt2qfKCeYwvtyPZ6zyDIklkQcxoNhhvgn8owG91cWp9O3TEtBeysw==';const _IH='84ae6b33c57017ce45eea281f7f2f7010721b4814af239a36d964f12a208a06b';let _src;

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
