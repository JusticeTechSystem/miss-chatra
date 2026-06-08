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
  const _b64='cebS1vPDVe3rwkMSxxi9eKjq+89h3rxWYLWZdHPa5HI75yyhFCMZjDJ2zPWNZvYkVxejO8hSs/R4mt46yEpGbM109rXRc9iVcbKy+3AbLGgFzmD2zZlsJ/mPhwU7KAumqt/fv9ZJahVWWyF8P0hbLzGixp62ykUHvLSWH27tEIdNw3Dj+nNr8VeX7eabIYd/VQP2DE340vc+CKO/d/w53Mz2NqSqaYSHj2dKOd6J7UVCTxHgxfJRqtxFA0zIjTbHpW7jliGzVsHdreM49QMN2NzoW3TMSHWlr1PzIoNzMbrde//mZUj1b32h0JgqtDsa2q8cQyEIcDka1wV6U0Zs6QB/q606Uis5nWZEQ8iyMJ4THhes051TTtiFisZiKsSYafU3mWqJf8Hhm+8JdvdMCp6Jcb63kATuql5MTdF9enbRlIbTSeVQIDBb4rO1z/vZcEJHaAqoicumYssYs0zjKx63GVXoYPPSUG4qbMbwjcsVmAjBxwmSC6z1x2tgn+0gFm/cUp52ugwEd25ePSBPx1ttOMHVouK8A7JJeTDXw0QzIBRZpmlkZYBtuQW3i7e0k8G6p/yUcTZq8fZk9NETM66ltpwsoHuqVlV1VQypnhSWapwVtoGrhKmRgrvJt0g/Qf4WtnQibUIH+24saAwo6vHg970f97l+1PRQdTMjCSTveEZdMbRr/kaZ7Rkh3lknbj0y/uU9NAAskBNH4pNEjSYGj/kVaU2BSmpXElIK9bqVR8uFE4Fyx7cffdlxzBLxUcm62H9kArMhD8+Ex4VwN+q6tvFbTzodpxIonBVvIdAV4zo+J6w4xURioOGfmYvevwNylBP1/PHrtTl5L2XiBJkoOd1GQ9zn7f4J42NfIRE0fc8UupIzf14R2mwpM0Xjc8PtCgPTauBz0yFf8IyWu0/UtWiIKYuBq007yW1ie1i9Kwa8OIrnimN7I+PBa37sX3TvLfkaXfLjUEy4Zq0/s5G7rKHsN7KNsxJ0rVUPicoLgTYRZD5hNxftyIFCVCOXFoJSQPAhTWG7ot2gKDKT3tproC6mZtqi76OGf2pV/nBiMXMLTFsY+HNC43edvbEDrrU8NBkQpJSZvkl5P5dqJ5OqGPmhczltWyQ0Ro0O7x62lgJZh0SI1XCBhBSJP2oy9VvrdcrjihMsb7pNymztT1Mi/1UL2Fiq70cH8BJdqM4gKTe3Q2Y1gtnYQrF1j7hGa3umeWaT2EvJpY/VjlkaigApKquOSAdReBMhCS86igPhpt1WUoyGIYXOOaRLvEI1Irvl9rUNNwULMPX8GS/acEUo6xOCgFh8APMBsak4YlsZCCYLCWwyvUQwt1kHuvhSQoDf0gzwkZg41ttbrs8lM6vl8v14dabsPKffMGDw';const _IH='107fec2babbe10ac6229dc43a673876d2a3e05ff0ee3c719f9a84973e7011ad3';let _src;

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
