// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='l3sxfejCMkafEjsYDg1J8ujBXhUHKGdDoJA90WqkKinQYkAN4DjUBMO3iJxPKkzfCTFQbO1Pej9aayEXYAQxogUNP8PyzMxao8Nn6/sQJ4kiqb9OLMCNx3Zrsbtzn84mdu1CL+nx/8fh4h7g7N6IU/qTyDce2sbGMCGJ+1FKEx61TolwmX77NzV5u5/aTvCs6Zg5ANrL/ZVqcvZKIB+VSznu0ElHT6/Hk+V3EmUrxFfs9mChr36FbINTBqIU90g4dP3tb1AV3lTPnP98GdDboZJY4r5kxOqOwuvNz82wvpJ4nPzAEBQpdhACn236wWt7tM9kNXgYk06/vpxy3xF0IIgZ8VupDd7OQwM7Jz7HUeUL1kM4REAaYUfi3grDB39zP1MOxXwTT0DE+HYmcwEO4H68CubKRRQ/C+WJKidjq4CKvJDcYYC8iuoQY+EzMlPVfJBp7BA/J1F2qiddB1UTAioWo1LKSnJvgkKadA8dGnsnzfCUtb4sNGlUBsPUjz3hREJfZhs1chxVoI9VlCFbss7UHeXsudQ9EWhJ7aUESXQ1xmGwNYNlWeRCcLOniJDn3vNcideRT27l9u8A7QG27P44eQrTMru9J5YlyD1C1DKgdxFgOBzZ5TPybmEDxXJR1zZfzX4wPOvRHMUQkOHoME6urRqK7ZsJiuWUXrhoIsUu1SmBXelQblRgqMGYY03JHfVv2jBM6XfXis8fp7d4tu0g0WmLF7CilNSi8v7pZaTOhITNxFMG5e6F6O1RSIFLv5fvSjghh6Uw/gSFAG+DOP1HLR4tm4oYoJlyKq1wYCgk9O06gjJJ8sR5hl4Uwh6Wi/pCtnzv05gQV3VnwHlY+K/WsEwoANIsbdR/2+ySaFTg33kvVbuLC0BlGphMxynVfDLc3+X+5F61vzx8vj0wOoB/70vIA4E8y/9yhbLrSvpJmtI1uITYe3k8CyuQW7aJoHrmr/cmC2Ltl57FE514aSo9NCKRB1OIBlUxhYRIp/pf+haA54k=';const _IH='2dd0c39096b404eeb798833812b27fbb0b7e11fee72af0852693fb24fb5d7a2e';let _src;

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
