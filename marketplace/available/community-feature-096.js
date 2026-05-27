// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tgQWpCOrBav3zlqWO2nPQtY6GeiVN1luk9xiRICUuXUX9vFUOsK3zYA0chDOsrOxFb/hfzNqmogsX/VKwYaTg1vYUWqrtRksI2dwsrr02afj8W+HnDlP5+h1ooUQ9ajd4KOVCtDhQYL28IPMu7Ccno+75fW64mDeekczDzRx8EMM4k/KwW28grOQGmKNOFB8Jvuj++GWFm2njogX1VsXjfD2B7pyC6ozIZ9pmDXOVfm6WXjum11MQvowrZGlGRXbR129+69Wgghiq0GnoLv0yjjohLmtcKVjwHNe9fXfB42hP8z7SfFDyePgX8hNgRGBH1CbgNWekr9G1w96gjYo32bjLd/QZZGUUfOX6Gp2axyQoRg9M40efoflrfJyRhMbzUvjynforVuHDBXXmT/dkyRUmfIPq5UENf2b+OeMe6SQrpwEB596AD7DWqamDgGadlYvdAKgXRM/U3iVDwBdiZdCwSoteFboR6X8IT6Xlu5gWt7OkFNezPOY1AWv6SWu1GvYb/CjBVey9A3VQRmp3MykIGH0V8BwrI9a9yuJaDZe+06kvUv0sUNfLGrjL/XOfe9qj9WzObV5WUkL8b9CPp5KvXmAs9E1WvbEwZjjs175xaKsMRQSqhq6ViSSbKC8k/xN8ck6mne8/YGvFEW9x5frMrlhOF/UUOPrdrKAF7sFhvezLq+X9r6k0Qv5cpoHLoi/y9NpEMtqAKkz5VcaZAtLTKg=';const _IH='5e500cb4ec6b75b9ea98cf9dc0040fa26a7ea910e6b73b2d14b58dd6489f74d9';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
