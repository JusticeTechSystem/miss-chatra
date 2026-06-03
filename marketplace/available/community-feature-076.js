// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qPinusLpvU7CKbuwt/bY/4Pr6FjwOnl1ZoP5ksbgJTrI/b5fKwU6q3RLdS6tcPxl55F20FNjw72CnZormDK0Bx8Cek0qkC255bVR7frPUgTywm0u3tOwNM+P5SPH67Lo+iGTi9WMMx/KNCfrVLQhKk4slhI+6MnUVEvFu9WucpCBgR1TT33Jin9GALKU73ZcOdAnOW/t735wuTgS2r8ZgK0Urwcas/abSoBqwmtlmGo0OgueLQ8UUEH6aA6hpMpNZoiapK9jYxngtC/nfFojwygchk4HuNNtsLIuI+tcKC+NkD9SCMgfQYWU/R4bM3DElQJHHTG3Bau/0vsCfe2XeieTVYhe07Ch8vwHBlIYk2hCO7jxMD7KYiM/DzS5oxB6u9wk+FI3+DLaajH93y6m/Nk0IaluTt4AkpFz/UixEBKonQHzfvX/OIi45pk1zq7eHxfQkqMM7QEAOIAcY6v8Ivuyck5vlpjeN2Clw3wI+vSRXjHgrGqVX5z3k/yZp/nkJPoM/p+ZPqfEDRqW4207owZibdnWM2Y95r9o0getegRDo6APYQ41XCYKN8RTgugKBHAmmZpcFOLS1/3BH5NU+rmlopfuqgxhN6aQm7lUPOEZ2gENOVyk99zBzxoK9KpvEtsq2MiCUDGLrQE1N/g4IWxLqVoNRTxY4wpSOLzO6/JT/UTrKw/uOCPaGq9b2TV/q7IRJ482PYTRt8RkNpASs3RRyoY=';const _IH='3ab26aa5678dde8c5c2b7888b686f4bef485d5a39cf2aca4d4a5d86f82c07970';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
