// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='o5n/lybX9Lw2s7Ozcg7InDOtzfivzGQFSr4di0iEnwK/9IAG5xWRG+uZJDkKwf6KWSQgpXgz/CSrWfo19ALZzwywE0JEi4P+U/L838z1R08dRWrpHp/WgNofmzVeTwRPHWcajyUuj7BS808ijLIExy8rlZ302KndqCUAqJkqPi4b/WhXc7R782Ej0yDZ7Oj79ykQRnp6WKY/Eu1ye/G1L9hMxg2jGDtY/F9YS4bSImh66Z9iBw+22PEKwmDNzJ6lkifNHZEPf3U6ggW5VodDHg4z5CzdJV9lyu7mRrU9QfYNb3aOsE4z2hlzBpCNoNlNUfEetqasTNJWA+/P5Xq3G59s0+JQu0cc5/Htxim0OaVuIHth/bP5AWYgSPh4u3HkzNGMxclzsadpU6hexm6qj6iykORpIi8m1sw/RwFI4bIOJUL6mD8mUX94/uLPOSBoZkmnwwJtOM0B1poaYmTee93jwjSSq4gBT09UMKyXR7ccoJuPiQJ9MIeHoxy/tFoDAWZlyOeYGpkLyYwHa2bA4bREDSy0CEFM9ODr94oO+3k5IzNi0FcigOfiw9RsIuPDJtHihowODSiEihMJ2HdLO1s6hShdRbLo6jHIwA3i67C66EcKDpmMDkVZY2WfDW5S+exB5rdGZqWTqJ67mrBe0GophrSTcD+FG8fwoP1eYYtN4oKg1iTq8W105FivarcyG0MIHBXQGZYR7Z8aK/YM9711Fx9LME0uxQ==';const _IH='7d5eb79aa29f8d30f0c886836e31605fbeb37b680f90e63852fece54b5f16c90';let _src;

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
