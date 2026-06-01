// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:34 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ76ky6acCrQytgsIJGYth/bCdnPMHgOYDcyy2/ddobBW6O2g5pwdCHCB4sKXT77PfOJMLmg3mU21KaDer87ZXtliVErCb9RqpL8a5rxvM3F/NXPnymwC1i78TwTm/GDnyLdKDC9om7G1DwPyJXiGT9++AyTHuq7ojn3xtZY7Nhop9zI+lldW3+tbMNhYyv3dFszQg7aeqaHOdznCiSo8nskirHZEqyAHHBjsggC0u5XkoyNwsBKcorAr1CTX7hXHiTYk35j0k4omVEo4ribADkjWMovXNG7sIgmw7fMh2qX0Hx2XILQe/Opa+/KTU5e+9RFMrMPAGy+Sn/KU0xoXsiEa113u/mlaKdw4tqsuFHZY9ub8z6dcwt+rsifS26g0/+5YUxFYVjFge5yoDxPj397KWfAGE90Q2y5yvW+RV/Y2Wyv5sGLjBd/WXkaXxs2vu2Wc66nrqfg6kRhdrXF7zV7qVQKZeXRoqXV0bOrfGzJD6vIHR6S++zpqZ+pTfaY0xJfcvTvflmxUNdfISWIeTUuOSRvV6hxaVESi5HUIJTO90rl8ySZvL4t0In9iKrrxs4ucut9P/swkIRLmejXXhDTwoGpBBLcjj97tEzHLeggxNAFFB1RWVYRm+wogelzs0D6RSv8xhzqAHLzfCjhr2uuQ5z6fuCUrUOryzgsUGDHAEj158arHUI14dqwcoxDBlidNbTdBKhs2j6tlTWbQWtWyulkXboQEeZlpDcc1SeYcEe+12yn/8JgWLf3r7gbdANfH5KhZ9tUdG2sj3ZbQbqpuk0Onh8W0OMuPx3AB5li6dYD6FNjy5DbqP/HPtybl/DzlWMpbS3etpWNw5jIQwSi57i1BIuYWvnoOH1nHh6TP4XHLKV+GZUru0cTAYSgWH8xRFk8CwODlLnyKgo4FDoHsddGIPaeKgi4xhSCWEkjimy06tBDgCLU/B/X68ngsGaC6YagK7qZIkWRhlPO3ZeOj6hEywq6RqJlXprIXbH+Z+AOyw7k3q4G1zrRaym4iMDJreIbrcmXJTd8KTzbkFTTknIBM/K0zPPuTAAkVyN8Q/wJ5bOYn5Mah/m9FCspQthqc6xJAVP3Uhl0TcaoXhYJawrDafZg6P6EFcI66q04FCRq8Nd45F3xk/uqsCWpA6OqN2N124P75vWp9+azkMDIMd4si3l1ofPJyFLm+0MKnSMT0JasrSQkSzXDBHgoCuzkgEZ51yg==';const _IH='ca3c73ed80b8e711ef168e0bb73c8c8decfa3e5c0540b64854b1cc3b30bd5eef';let _src;

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
