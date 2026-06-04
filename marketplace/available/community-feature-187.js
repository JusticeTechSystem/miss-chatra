// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:50:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Y75NRteZdnHV6CrmO4Tkt6JV3rjrgIEpeYwqthU2Aec41wZaj3NKvrcKb5QTKAXMyD6lzE0oH748xc8XhHzRZ+Gx0kyVE4pVs4RGVtH1nTCEE/ehnLZcSy6aM9JzYWwbNsB9c+1cZnc2zJJyUGtMar146fHwm5Cx0FJCroEPWebsUxeeoOdOU3iKPnFLuXxIVN72I1pNQjIzrfXrtNT204zvIDtGNv2xJNNXSxJJUJV02jY0K7J4bkRAafZKh3wDOTj45VoDuPwxK7ZVAAPlLnuFAhGRw8o/9LDOTeea5d0tQxF4TKUKLAbMix/dFahECObCvB9qMW5IentKrxDM3K1J0pm6iw0wfewg6vE/F22QzVSemp1L7xIhb15bbkJNx0AoX/L/PxrVxngt73BAvdIa5+NfIR579GsoSISVl516e9QEBnjH29S61nyry2asb0KMhoVefZdkUSLa6OTHPbHvAuIa/h/Tmyf2xcYTrgzF/BiyAVVmsVCSWy6OHelAyLs0ZIoy14TpgDHM/k5m4nAQaWQIWfUZJ6CK3+/JSDW/8oiqQcTsi29OH6ziRNszvt8NXJYoq8xmGj+54aAqsZbBS5TusDHEq8J/QAbE8SQlyGSMtGGbQg6Z5mXGeN1e6BvpT9h/WiB87yOkRnTaeadUAyDU/loFj0NmbiYMcF9tuObR9K2j/MoWgHOpPUa02cHOxSovPJRHrfwfVN+3v5ZtPSPyWfyjzzJF8MTI7RzFStw=';const _IH='2d25c34f28151ba244966d9c5d36988a34cc3d812c2724ae948c131edc186d22';let _src;

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
