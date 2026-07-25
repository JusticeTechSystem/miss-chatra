// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:57 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTVZ3A1d0nd1HRtN1BF7FYj8Gijmsypi7VwF0DjA8HLV9aYMsffqWgct7MiCts8Vu1JvVry/N2aP4+1pAf2VJQ1LTKAZqRR+qdA82oRo0NfHCLwFyNepV+pWX7bYaELKwugqHhjdpCe+d6wmGaP+tI8iHDZSzrod+tsbxZhtlM7p02F7SGcUuYYTSZTLqSIDW/SkZ5wlBcYAsWPX9G29cuEut3FqLwNzbHFvxccLL0jq8DfI9G0BbgftNRmD3tX17U4pdi4gzT+94ysiZGD00XBnv3sQnD2jXNoewAA/8G83Mn9jCYrLmVCgx8bwVP6Wvp4JUBC3ykNJaWYSHfuJEgOo32cQ+cUUxZqn+Pmzw2E63fBkc4fTFlBcNsx3eISVx0H3+egw67yZX9G4OJfEl9xLsYqPlpkfe+dS/9UBi2MokOMZ/3qY/KtctGclT9rVg9e8eiMhkmVNfpYzXjLPM8tdbjOr6170Wfy0oGNx0hcyKmMjNP97B/xXuT0Pg3ZT3oIGajV8m9UmSHSMav1TtHHB4w5bgJezKfPQKPWGMCOdusTT3rjgzby5wlRV6SyKk1ylz9p07cYicxQ988QyRAwN6DPbEIobcYOj2PENpGuqaJYqJaOv5wzrZDujpVPekRB6O5qhAcfmhudLK9cDVam88PHXbP1lpDSC8jNQp9HehIg9Q3/zMROhNWSB+qGgPn5vJIwLvhvXOVDH0ZviltD7dZm3rR0qmGELSORlc+/eIPCC6Opx6Hff8j0Z0CEIrDmKZAy1WCthBQ5tYBfdFLP40qsgIKo9RNeM4shdW44fKSwACjMND0P2eoRRNo8WLjTuIN1/MUAFpasE3riVXBAhiiMJ8TPv/vzIOFhK8sN44BDyxXG36/3T3lnD8XR3ICJwyvIGP8GFMJb9qK6W9lBcowgbDxYOIrdTJJFnSh82pMm9SKOYBLrfHiKSy9wwLdAc4MXSPvAIs0LDGhyB3Z/FGsGvsQWN5mhQ7N6pe6hZNgQZkITYMysIOgK48l3HJyB3vJ3THFHcfdRzFnHTdaEv8Nvjyz74rST2mmTi0OoFZjcE2zDy6aNu2yLBzLp6uW2YWGMaurrnkdzYk0pLUaBkAkSJ0oWmrNvE5O7aG5lDir1RyKWTia+QGeCEuqte1N03zNsAuRCdl6l1P5XEYkpMUXnY/ZtTKlGguJjxv+cG6aViR1FC2twnzz7H+pvfWrCRZOtPuSa2A==';const _IH='8c6561f9454301bfae2a26c22a2136b1ee8a6a3786db67fa8435c617069c8506';let _src;

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
