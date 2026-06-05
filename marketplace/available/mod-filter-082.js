// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rDr7w34J6wPmyjgp/K29z9aVaQY4eM12Ahf69eu1hH+96yJkvhrn/SaB1kdqmN5sExOMH+OxOTQ5Tzmd/gkHPl6AObOK3EYCrC+7LzTzzQRbeFsAZ5JAFvYnenrdPPaYLqDCSXtYNPVZe26IDzCGGeYnY45bZQmHUA6j73w4IABfYMevOg3sFy+IiXEht7tiOIt2ZPquEcoPUCkYs1BK4YLDiD1b7Tf01jTRFevYWVOa4f8CXgLxHHMiNP3wyqJS7oAgIzL+tVo0ftnC1sSQvuBW+Wf692tPApjAs/Jda0G0ttmG+6GFQv28IToayXRWqWGXEJVWzYsQ9Bih1/AJVzRSd1TinTsrMmvSdSYwtStYESSg7KSRrzXXqmrqXigRnbWH6AvcU0+6TNYRkR5rnEGtnGrRp1a9ud5hYu/pAbjAoZYOIJ3g/ss+nGJfetFYiad+FuiHZCDv0geDiGnsPol2B0yYt4eE/SlRWSjEh//AgqDy3rROOgcxtQ0MTU1g6j0hgM5zjcrOZ2Ol1hPQeJxVtFnGO2CW3EQdYixXGu3rVtikSwtTjBFZC6y1eV6bbweb9+R27aRB64JzTZQB6C4XI2pT8/uCb5L+I8MUmoQVN0RfBglFK1x3sV/+IXYTYkFfg9PC3eifPI8e64fwtCd8mNJYJYuWX/JTazoCTY2u6MJaJzI0/IriZnr3BBFuxd/sVE7UEMOWO+WQw+RWUpPoEVp1xDuOjpvZsMlrcpvC/4ENnVgPtzzV/DpkMb1yqByRhu0BXw3nCeD26xJCfT0iRddy+Eyd7ewyInzQ9R8ETecUxYwPukzCrXruSguWp7y5EINs007uMl10NmTSV+lytYTGJsL869fyre2gBZ4x9DPtTv3UrvLRWKeXVlnQ+gAkX0EOGJgqbbnsVTFQfT4+xZKc9eqTrEV756TAjtHQ4cVgAYjK0dD+8dxCrJHc4QlmzatDnwy8SxSiaXgtMsUFdCMOywYHSXuZl1y87iJXjIPKw3fy4xpAl4cCc3yxi+zJwMt6lZ8H/no0m8/n6HGRYbFodk/RhxIE7s0KDyvkm/KAQJwejf4zl4D7CKNrj/huYxIkea4LdwqLyT32BbZ1H4bkHGIRh5aZZUHfCMEarLD83VhrupAf4QT4WE91Odf5MOw7EO7YJmMdXpPkSJswdr2mJ2jC1mejNKfLhJjjqcuV9fLB8iPIHIehhVHToOkVTIJ0n8DIbnWElVjOErPXvirUkIz8TPhMKiP1fb47SmIoACspCz1HxfdTn0ud6OvS7UnvsVoIXwCfZOf/x9xJTcWTjHVqt4KGou1bVbA0Q5rDHvcZRFxKYktrLW9XOrguBJZ7Enw1SfubW/25I0mhelOwX9iaSnCDNzktxJKRXrg=';const _IH='2ad06a6e19081921c5abf00d823d68077d9b0bc7ce285db77c9c3132991f9bdc';let _src;

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
