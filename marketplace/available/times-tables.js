// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='t5HH3f2D/6WWnHGH0tYsQFaV0zf3z5DqM4AO/laXEsGe2k1WAl1U3M/iEXgLwt8KhBIECt2kN3vnYRlLVqhhtP1mLDJgDp7UU8K7ubDJ8Rfkvo3HWpA8tvEk0orID+zyjKQKzPWaQBCBFBaACNaGeuojXYSEo87SB9XVX86WiTIJ2Jm9x8FkyuQFrSf9/4Bh6ZVkXVpxWW5b8mdOOjkvRN1RhwJyOPoS+31igL28xyd6MB4bjQ6T8j1g5REYZjZf0oA8nCqaI/sSESa9zJtgyJeT9/U5Zb659ncW7BYBBr/GjTU7fe5U6+EAPwRotL5EO+IbE/Elz7XKT+RCcTD//pWaZHOKQIykGhZMU768vUDXfPnLbCXQU/PKdTFBkMn3SrS6N844uwLfpBeTyySpYOfCwtZejH6EHrTSjlJaJ42Q4ZeNB5GIkSUfWD6gVEEu5iMksaHu2LJN4MjPpmSOnbNe/Ci13rvqRUKKBcX0JWE2QwzAsLhISFBcKXVrW9L1PJqbVfz8spyuF1nkhvwVvuZM6lPYPhSla1cME0Bq/iot6ulexaxbo2jXvmjtfNXHRwUyEsC3JohTPuNa7J7Up/l3WHW4dZeMjB/Gpm70YrDklrW8TZbDgYNFQd8BUPgpvT3pdBP9Dr+1g3sHbGGqHzz1cwmQwghJAihzj74gWrxSCfOjipLAfZvQdBCLrFexGoNpcB+SKAFA1TXLKfoglUg7uDUhBUNfp8hkgOOe/to6uIZ7e8Iq/IiIEvZRgW1voNPBzYvjMxm0ItfBjYLdq4bHKU0scoNwCMa7ZB+Qu29SUnjqeMFwzkoNC1VE+f7h/GPpGlCCaRq3/HGN564=';const _IH='9c7b40020e573e1f0cbe3960975f29f8145c0aaa1a75f591e1e4a5af2bfba79b';let _src;

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
