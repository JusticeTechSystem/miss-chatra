// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='e2sNyuF4Kz32uyABYGzkAXsBKBcZd1hNJQ4UQ2rkjZtUvGe4oGDy25Z7gZcGJuiC5OatiL+arQkt6LKjbo4luxsrfDQjwtBpVaJVLkPs+llfswdtLxLeHQiIWR0S2I6hvtg3BSGc9DIYFpNtB16bcCzEbX8aPc+biG1u+90QtzJjJxHQBSN0mmg3WO5Ctffr0YZfNIOBG6e+FF1VBh1tSXe86m973tOinU6QrRnPfGArGznVO5iogC2amGbQdVUymUMeHdGonFeWORJE3i0SdC+nfgL6TvudKiFicld4hWVmpgE+XKANE9OkHmTppZLBy8TKrEbojrF5OurdoK9wU58uGx0T6yZtm91HXrrINZZ/ZNary7U47w+pbx1Ym9WSlPeUUIs8usG3zpRA3G2jo8U7E3vGsifFPePn6UhbnFBIn7E/TV70+dB/rl9Fp30Y/Lfs7vZYzDhuw12xnj6i29alPsDxS2q65sdTNwE4D0YjxJuqQo45KEzORtLGiGDapoMzKUdi+alyEWgoGoH7oEQPN6ChbNBiJvwXB2mTSKTKK89uRJEPb8rvMHJ5AL4rVqX6a96ghHIZJWBWOiJ3NoFRgVZDqmsyg/P8v2Ywz2EfZMia5n1UjT5lfRRBPGyhkE7UJeX6JBYCZbqSu4px0hs/Xhkn9LzJMV1j7x7sdqQIljkz8gVdNHccpUi/7uED0UsFxgbsSW5h6Xh6NJQ4lcOB6KfT8KDZifweJfzo+HIp7gUbttzkty6CQ3XJdtphHudCzV0inRUsn70fUsGBW1lDz0Y0MwaYr44MhfrUUO+48LagyrX+vtv6kPJ1vrqYo9e4Zt78iP9SVLGJwjeecKRMP0mBveAlmawZST0+vM6YQgT2iuivYHkgp6Iw9B0LonTGQaTE/j97DLBzdH0mHU5Lo22vPEhN6Yu92Tg3Wvkg0tyZ70VrxMI0AHrbF+PJ/QagZVmxrcLLqP21B/5IiRKb+eidx7jQetHsE71jwXpbZO9TzwKzntNvAA/u';const _IH='0b30623a82f84777766ea4c9e136115537f013a5db8933fd9d56b6ca84833114';let _src;

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
