// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+Os3qqqwxiut/9DibfaPS/DuFbms3WPEYCmt0dbTGXHaqyAKaZ3i16Rl5hadJ1vsKYqtvfsl7vddU7A2uII7JZIK1vS/8aqsY+eQWf4YjUXISKOGh0JTVmIYq2O0ifup2Ci1V5cHSGh4X+iFrzgIAqsma6Z77INFlNEDTHN84nby+NeqlRSb6PwwC8pjxbspneuizNIwkwR1nFIx3ooBuSyrZxEDHB75418berG8eXYWoRjovt+9Qo4LiFpA3vQj5+zejJeHABCxnBfzNVS6+1v3jbwuBkdy0VF5rKcJ1Fz8ofllrHa/2cDKjVGV5/f93jWwTBm7r8XQZj/AuYJqJeh+m+lk/sGDVQhZN2UXUcU2xPt9ZgCg0BMtSwPgS4PgrG4E+hG1YOYdWrbYM3zr6ZuM1kqh62aNAgzP2iw9nFK9uCE64nlyTAkEBO9XkVu0W0F/JSo4jPRn/Bl1CeK/0819C6S4Qm+Md3GBdDU83V+8mDN3BAD8BSaV38etp+A6WZ6HzI5KPs70IdW1Q4enhPKqdhka5K+e9wiTlv9UmkZZ4Hi2i8riE32CK0Rh20nDPloxC3Xw9GTrGeAlfb6EZmg7Qu8v2scGvxmw2sAr5YshboaM/UCLTpTwwFaAkgefQYrgNEe1AQ3h01yWW0cHnDhyG3sVgXy5xC3Hdv+DreFerP/3ZOobmzD+AvbPqx6gNip3LyLEPYca7YfvyYKJXksyCr3hWh2DFewsNYnqo42obRx/9BkUxHqIO4DLFi+nUkkVTP3XEJmFaGt3OsPIhlWqKN88aAP42HYZhSfuvBTSrCFesEyulOKoYpBMDPrXyZMI6pE+ndNjOeEYswbxGcA8dkwTJYd0wbBY1SLtYd5FoRhF2w85i154ar/phvq5fJNvMWdmp/C99riq0M7jhVfGKXxombmYJ1lsW4AtqbG496J14Vr/TKUfuZlWcG3ELayLpP+iTZAi67gnDZF7PGVWxYBOkg2QklBqtP5ijq9Fc1v+JScn8B13dF2KUSuUS6VxyWlTaOsSptRFwunI76hEqFosBVoex26cnY1k1ws36kLCSvH8slgNH7YSwyyDxzQX8+jyvydqjPo=';const _IH='f826153a686a8c120dccb7138f9e1b03f03d9384b8f48280302f3c88dcd9d59b';let _src;

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
