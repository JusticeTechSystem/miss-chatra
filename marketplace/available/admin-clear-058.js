// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='h5h/iUYphGC+PG8KZI+j8bxVe/h3WkEK1d69BnScapvqYjWxGHIs59vbDKLHws+LgnIvqXL4h6pBBkppSipp96+ug5QrIEHNsNXb/diPbIWZFpf7+psIYKgu+eZc+2j85PU5oMulU7IsPIdJ+bSE80Fsv0ct5jHIyUfjd0rKOEluWRYSBvC/2Nh55nAguDz0+kl3dCyoDhITcAvoNpPWqWtZDLuivU0qapO006e3F/tO7pNqpfJKiU0dB4HURXuNrAGr/7F9E5Bo6yJv6pcE997k/sLhOU5YXoQrmj7+iYrV7dFlzVP7yet8KBMEjxDy/qOdagZO8vVi6See64Kh+jtwwh5YUP7NBTBZcwVIYvozb5CEGUFXWhr3T4iv5rPNUjRvouaOiY3ajiqcFxSrVYR4gbCOLDKs6FE0L1BeuBau3QKN+N5A8OMWI4jbpz13Z6S4GVTVTWGMuwB4wjgNK7RN6nwgDtXFt+HzLA0GaF4Ix8QvSaC7N8R8ToBgHTmg20/utjW4lNfep3p0e4V1pPvLBzFIK8dhTHQfDsrIh6i6HbAjQnzQDfJAjswUoDi5eVheGqY3DfB1IYfwb3UalgzNNWKkgTAzXX82zG5f7wj3P3w7HxdZzqW9EYnLVxTC6ayLS8MsbfWoPM3ZrHTGLRxuzLcFb2Qr6BwbqqnYpXsaosgEz5r7G3Fw8CZGk0FND1kAbZDwHp/zF7pNq55OLDd+GP8Gn9ltQ9BHD+qLQ3wLhN8I8NFEI3TaVLE0ge6+CYfjpWissLI2xBMxlZjtSEahwIVnR9qA9E4Oy8wLQm80RSgNLHSBSaF0xf35Iy2N8xXBzL4jCrMQZ+Lr1aTKM10409mb6qNUSLGPmZXdEV8tj4mbNaCCs4O6TgqfSuV7xmZjRy2Bb1sF1n5LMxFHwzFVxg8GhYBJwg63c3tSHbX7BoAANftrvjtuc0OOArcDkdHn0vwdlScp60ixa9rSINUFczunUcx+lV9fBn7uj8sVW+9eO10=';const _IH='b00c6ccb9740e468e81345df6429644c321d62e59a5bea09a7a0977c3f0bd7d7';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
