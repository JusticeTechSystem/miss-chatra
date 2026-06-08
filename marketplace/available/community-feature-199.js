// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0Qu0Tq+mIN6zh2vaVkWRGxS6QSQ20Ad6KLmzVBoXiJIgS8MP9AtgxjPW/KgIAQXngAItXCJTiCrH5J3gm8oIzTE7qGF2TcksCWA9x41u50xb+pTdx6enU+S7pudCDKfnTPrhQE1g+a/yIC+gseobLXHfLOeGH5d1Sje0GXyCmMEkHjBcu3DOvCg3KDQHDgy/8JwihmA11fORv8QF5ejfPYk5lZl2UEMp1Hos0+tWpyDzdLWc6HaGyv3hF9b3GpwbPZxJpAOmmyWW7g7hzG8UHkQLLvGX/wZhPkqKrAkcAA3SD9vsJUvATHzHquFruaK0a8hwdi1Jbjq7nPcfOp9cigfP60uiR1k/VMV2aZgBsryZX63IUV39uIPHC1OA98fHYd2Cvp7ZRNnnHJV+GbhwDckwRA/h6RxDG25cnBRXti+eVYVrP0gb3dkVZRTn/8v5ru2fKUW02F+V4gs2yWBieLRwaE2vZryRQlxdGQUeC9ciwsnArPOCDKam7n3+AjQoefPWCxDr5rRWzoFm84UnfGrvefmGjGlQwrWfus2QlWOApusObQPxwheIB3PYx2+2xOyEbmo66CxjK+ss7j1HyLHElwwyKthqPqdTAFYqHcQaq2iHq6fJSxEOvMHLC7AGZnn6SVdCyO54bMASYX2+StBKiuBB9ch25Cr1C/OA3lokA4wUMeJz5erp1YH7kFdt4Vwr8o2GDl8b6SyzuINu/A0KsbFbFsbvTg0Pd2ZGMOz3ysMtiFI=';const _IH='7a8a9cce7ecd0c5c52b936b2181f3d90610103d240cd6ff6a364c2a745f3b863';let _src;

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
