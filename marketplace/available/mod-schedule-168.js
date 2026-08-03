// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRHBzqy55MI15iwdaZtonmz0reIKl0x+rVfwpac+CYVcenjQ9JvRiaBjABzKPxdw6mPb8iOx1c/L4c4SoK8qr4+7zQNC5/LvhYTTTlcV1WJz/gClW0e0fzfs9UQRVKViHC3mIyEVW8l/ecg+eiXYa2CmqJJiCNkUQz9DJrqj8UPvDvfuhtCpq7zFCO6TCYyNJOE1/AYqMGbytemeyJRdz5qo9EqNiIcSe/cqYlBlJFNWV2XeQUYCAznKu4m4lUWD4m2+OlFOy4DicHWzBuRfXGN428OQLZYDe9JayChFPQPrJswZy3bwRbEODXQoNpFnoducIIyW7PLVyZPxvvEW5itv5C0hw0cb2as7S2scQKCswYtWP1iqyfAkFGReLef4SvgfiUGxxofRaQI75mLz0ksySFpWH07NGwWphcxzNKuo3HnKbf3/tzNElKKPuHxed8pPPAsWFbF3JtdvGMtyBcPuGQLME9BTuWspQ0A9U7RTrZIXO/bpUdL7z/ErcDaKDp3NTeqAoe0myhPSJo/l+0yNyqPImKkpYWYVrDst9NiYucqJFCwMgV9f8PEHRxrn85zpLzN4f4u7j/Y1klRewIMNN/Mp0O9/3zQH5Bnf/YN0puTKnqNpxtXpLsKcVvAU3N4+nYb4R+8qtKtsOVwaNcEGczz8b4PCjXLRGfI+yBwvWFJ2yMNN3zoyZqjq5Gt8Sfd09WczMDVLq9Bx1U6yrKAM4XwfZRZtq9nRIxQtXikrRAnL3ty7cNHrp1bKj6Yj4UWanQ14jcXckkucCpXcydpmuooCFI2xdUgJR0Ll7jy+vfkDiPwDoQLN1tUheLc7lRZCCkSoXFHahXtweGhh+0JS7ZdHRkPg7IwdHvwOVnCle48EqOUbsuFwFruDIkTf/cYPMMeBrZJ3ikt94HOLfk4jz6XzB2a+CEkO0dWavQDVYFVYgRLiZveFb8BzF9W81M9hdTIL5txwO/yl4yhy/2WQFEnwi6bPbJkisrTyGRFDfKI4XcQ/AYNP/VNZ6l1eG6UHQgXFvLTAMCwlkOCpa/C69i1vqX1uzGB0sl0BAuCCVMU0+q0wr0EYEzWK55iHJP7YHoTTX5x/Ay4Av2IWZhy4EWhJIPW3SR3P3mmjHFzXJaGEXikNwMpt3ek5rkVVUtXCswhEZo/zbQ2YB9RKDqUpIMqWVi4Km1El8aYQXZVSoTC2aZJxaVfpvI1WHtusfqXWXYgBJ6R1iDJJMCw2+oB66wRzKZZFnOgD4HjtGJIStifcPFIl35Z1riZ1q0mwefaY8aXOzVO0rKhFZDDaacnlZH0BW4t/IM3BaucB9tWHOz+XY3FwHmoTsjmslmuWV/sUd8fHw/LlFiHiY3yknCnmSCyrHNV4TrDhrJcs0FNI8PHO8X6E9vMqJzr2d9qrOxLRo+3nDz1LD0=';const _IH='87da2f40d4fd559bed55991dbe4abaa6d4a8e0f315eab05fad3ba209f4a6879e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
