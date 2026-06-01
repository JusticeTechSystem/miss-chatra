// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:43 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzwoWQH6H3x8j1RcxfRSejxxa135c0bGlf9JZ5YGTTRlQNYjj4Hh5iYkn25Y8qh+CFig2Oays0mVn+9A0GKnYAGhicWOeHqeGYQ95wBHHxw2dh1CAcaUcQqV2IIUstj8Sw3OYT2HSX787aVJuA7R6/yH2y5IcLuBbN2rX0ItPdUNfYjVDtn5oZSb5h964UEHdNza69LU09/59KaXJMWMSCTaVk9rPDiddO5I56/iOmDIlOsFlx6JhEi+cnzwvF658z16NTUHLB/bv3xv8Ly8K9EuVvA8vsVSsD9zyqqOqYDndPOpsCCFjZ9SB1htPrwkGay0njyGqGMg90Kwbk2bvguNu3MFRrOFGkPSzVtLTWmngwfOuh7OuAR5g+5Hq1ZhO/dndpSVHDgSg5QMI1Pr7yX8QfnftQFcp5iiwfD//OTvkzyIyzKmmMcKUEQ+AGyTy+KLaP0IbTxt0WGwAJIIq+q5X1P4TEA/P48RqcXlIqVNNGENpVBjotz2M5WaEOZf8YCdxSAyGvvqMz/DOcrDHdpU2zi5/NtRXIL99f4yCjfdcofjfFtjUCDGhJsxzTAzFqUcqgBtfPJ4wHDdNcv7AypmykB9G0VR1pMy4iN5e0iZ7L3R+/a7/WdrbMi/2km/w93Z/fvPtJ6g0PaNFJcqP3yCCWhla6RjHNMW8bdzQoyZih/86B8/FLIyFNZIpvcaqtCg+1ktWLz1pn5DuZ13nvBIDpUeXKcmOA7i9Vxo';const _IH='3498caf10bb2d6acbf1cdd63d2298033220eaa17b71686c062188b756c8f10c0';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
