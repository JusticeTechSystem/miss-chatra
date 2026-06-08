// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='i0KuVNWEMXggHq1djaLOmyqKWAMBKSLj+L71ieWQxOB6bDwoT5+DCLfslx+nsLxx2YOD7r84ugBtzeUcGoWwzFLol2AXybxnuz/7Mi7FurWs+I2HXbeXk0L7yrSuztuPOdrYPRFx4Ku2zAoRR05pSIjiTe7gSuwNKg0Tctlgx/y7ZmusSvUbUIJr3yehN7ieEoZ0Yvk++IBdLAssEmWz6L7Q3egr6L/2hiWjkCqN/eIWp1XhCExpeZskowW3nlEEVucVZ3AyI3HYAvLPVbep4VCAg8RnaJTMqRpJa/9nJSHha8x3S8iKH73fvRydi38ASfm/bPR4I7PPvn9UnnaeEcmc6QvgrsK5188B4lDgh1a/WcE30lWDyONDvJcKZZhZpp7k6SvRKa1jcXugKeE+WDB1FSkz1fNzztx5sTKpf4H4+kKUBGwOidBPh0Gi1S7vUG1cHoMPnJwi5hoLb57gKQCCGJ5jRa2pBqpQgtf6dBV/NSbX2Mv6hmzt7IH97XG4iC7JpPQ/5dhnNcIa8B90FP8zD0/liyL2AU5qyXdlGHpcemDWuNJtIECofY8IXpQ4Tbe4WVQJwCBCo5pNhnr2sv6a/9wcf4vDbRlH+Pp0pUD6hh4drv70az5WGKD1H+UcdY/FHfRoU3s9FdEIQxdtrJTVZr9dMmRgJ59pAYk5OQGto5Bqlu6cB1v0/FxwCHYKS6hhkkrIuNBhEaEwCimeWSzuHLydkcwzEREH+QnoEDC1X3dRxOiXHswcP2T+FbG8mHHwKPd+BtUldSYJxdWuvOt9pmEDOEigWSjenAtyTdOtNJW5V/NLGx6QjXXcOm6a7rD2yr86tjb90tZVwFczHvP4IvY47ytn84EJbdrBcMHpF3eHCwQBarYAKqnHdPKaauUCp0iP5AxcM2qRIHjnY4dK54VESghtEZOj89hJJUkiTFyRK/99tLtj7USxxaHLVTpYVnescbXdbu7MCLEHEv76FGT3VMBFeISqJJZVpKbnaG0Kc0FzkvuguWnB+psdyVuBX3ZXjpbhofjh3gbvqqFBPhJFiR3T/63j+7ps/rGXY3wYI7o/TpBGQd9GToXyR9VYiZ6C/YpIhvDsQjaT6JCsZ3YaDYxBuGdF4GVn6g5Gtp2a0hE5XsXyUaK5qHszvbMKrdOBsaW+3n9EZN5Vdw5PxXG00jOO4rsIShqKto2uGYLQsX8VHJ9wPcmMBd3Nl5x1sDyc539bsb6h3ptGAYGvDbb9sQJrLC4kihzWMbIIndQPbiOF4uR+qJawZoyTzt6KTJkS4ou3QhoRhS5VEBOJLFOUNNHDc8wHtyHf1Y5JZJp0UkEqtCgRFUWvPUAswywA9lswEOlLcQzqOqK+m8mx9XkqDKipXImyC/1BOUWh4zfgbEFNrg==';const _IH='84f7d7672a5e575143dee498ea96a64f6846cc90bb40827ce7e62c498aa09f00';let _src;

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
