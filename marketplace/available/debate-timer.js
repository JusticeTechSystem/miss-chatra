// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XSapHoINethLp8VhjV3Li1aCWbnTgbv5ujFSTzBcvfyM7Xpy5tPrQ9dsiKFkzi0IVIkHMYS+iPcViC9j9dlZ1PdY/MHSoWOW8gEvfpOS9PnAeETsULMGEyxTSfnkljaVS83HE2wmbHHTq2rO62W5eFh567K5y8Ag7R6bFmlFgFE+TEJFaZaqhF4rRvt3ZrKPW4DDGKgHwoiSoOiD3ZBOB43ZOr0QyNsSSjCZIcPUuN2irGb9hFgY+MDHeJjSf4SZcUifTaI4NiMIw2oHGtYbtULbhy509NNR4LxQrTPb+WEn4pmNKScXMFihe2pvoMoOEOYXbSRw15BiNlY3N9EUYp98DpVOIUpWBBIWh2QNOfOGByiZrGHmBYokoe5rqK4F1y6hjfk43xFgFOdrkeVkfAOgQtMQ5SFl31G9n/LeO/pkDzIG2qqQs7CAwt8G1o0K4/ZwD2UrPxSlqUfqnSp5821TbxgUyVI9NGDbqCGMUeiBsfZnKKGlZYpLcHZC5j3MtRS7sw4rzILwrwvAzcUwUQJ/tbN1u/OHju1rskjyY6Lqzdvrvv3kMj2yJC8/Q9X7SDIQjw67uxLmrBUkmdISms4XEv4RY8V3P+YqQGeoWUPhzeISaUbxraOCGntF24P9CgAD11Tzxr/EsYDZywr97x2HF7cNNzQDGt8nNaPbPSPGulB0K51B3uCpkiYe22rh1SfNHU+HngGJgsnJTCdUH5ntW9lTz3+5LMFl5qwO5CsFUgj4a9xfQ8/nz0sLNsfCjPNz4jFlBe4zREmuIqBdQWid6NoI/quz8r7sIN66zvNaSNbc7alAaU90O0UNGAEynIiKWpM7I60SDLcqKtjt/MTN4g3PMKQTpUrIQxHu7+49hLhOurFVikb/4Iq2uEnYkI5BRzqPU5qLVyqqKwJGzBnziakBCadEr8Bf7zIdedR3r04y2v1uwM+8YIY3JXV6FD/DOUR9958HB8U9oCrsxKzr6YSSHI0L3K44n385LnMnLqc+TPsWG7bF7boYtfNlA3TPr+6QI/ePW9lhApx1V9R3A4zFQtwuJQn2onW5kJiRIUqMSilPKX5qDuA5eHr/PxsEVPiMwb7kvKnNdcUEqgkOgXuPhXNy83TSrYdKPxHN+XtfqTuf8zOwtJsXoeMQ1qryEn7nkLR26OaiE7HqyMNYKNMGVo5l/zfGs4qNXSbTLwDCNN8z2ykFICqYwBEoK/apRWzt1kqvx/bO7AstQCQ9yJZX41GfX45FExFCEkAmbe80yeILgF2AmOEfn/40sw==';const _IH='11408f6e3d4f726d06c8dfe07de264f85c059af2c997e62124dd8d1f79efb04e';let _src;

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
