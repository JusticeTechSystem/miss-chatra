// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='b4vnJe0dE0bncMs4vKOfkeTyseCYGMpqVAucsACLz+juPiUlFBwmdlqT4X/yp7VAySDmokR66Nu9EEET9Gd99IWCyCEga7nWks47Pb/414a29KfcKTax7Bt/HAMyAJ9wrXiJgVDz6bSFNmPgCWg7tCU8H/amhCauUlD7h/7SJLYvJ/hiiZGDmF0PpPPyByL02j2gyaZOLgXEO8FllawPuevzdQiBF3hqOAXi7MsIOnZ2AgzEGqozKbDgRXXD+xufpXj7mSVwHQ1+2U4SDOjE/enJU1TWSs0rQo8mZ2gwXaLDOCjWuggGeixI1Lk+Pm470qeJ74PfCV7q6m2zGIVpjoLcrRi8Pg5DmsyQ+7GGdTJkziObT8utPNLTHPah9WTt5EFzQugLxk6ZZnXd/D0oNuKJ99ID036Lq9pcQlzi3qfgqPESQFkSQT4I/A+qAC8qSlEeEdGybPxjoH1FrxhX3gxO3hBvYegdPvbBtKJCV4knckrLJ9SaLy9lY0gSO0gQPXcbwajzbsNS8/PyEXg+k6IHrjvK1QPyc96ak3NG8AWkvS3bjTJdAfrUtvNs64Rk6F8zXwvMb2W/E7/cCWPm9F6WVX7t5EgpQa7nODhIrPLDfST41CmV89ND+pOxiZ1SVb6KelRw2KLFtq5q4TQyb18lI2G/AMZA6Sse7d66dtE7mXHd0+TZAG9mIlHbcJ5n3tBQnXWZKqsR93/wHv3ST8ZliFQutPWP03GaB3XOczhXmx+saI108rMyTtsc8htE+d+fGOKkS3Etjy7B02NnBQ3+PcSs3D2HKVloU5S8ODoPMJvMF4rfNmz7Y43Oh93Ap/2pYAjEoo72LncNT/ytQ+uVTcUElukoaVsBpHQkvYOepb8iaCyE4swLPFUa9QicV1aEksQlSm+U3YYX0jnR27P3VqehbrFSLZ2u6iCi680uTpB2GSCYcuUxUALaKZOZjgQsvzFyuLZeVjkSN2y9VPzOjnx1fkhDVVjwLY95lEHMfa/AXQ/TWCEyts8ZlMSaZfFFxRJLrZxQNNUXRRu25WIp';const _IH='355982750ca978a4726e446cb573c44ae0462d4a9cd9114392baa64663003d16';let _src;

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
