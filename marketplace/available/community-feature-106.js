// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7dtEoWpBzTilYSyGmjHeQ3MDSIr6smQapGsaYdBljUQh+Cy0dyh9eQtI7QUIehdfkcQTxDytADt3lqxuLyEBoeCipHl5tajEDLD5D7Chc8cdMVqOVVZoYWtaxvQKwuGcVJOQ7CiwTsdmB0Wnnu2+4G3oLN84IKSOO8jxqilqem5X2ActalrUZN/+LuAVX+s+elPNuJiLIHzHyyhbUQ1OmlyuoJNWAZ/RsOJMzqsuwgXHVFM1Cs4HclVyP6EYeCS2XyjNgA4FG11wH9OPghDcgnIFvn5PBovD/pFw4w8I6GQd8E82zUmXfP5btcBoSKqJCsxB8kIKGOhvxBTMnEb3gfPR+29ldV8n62DiKvBYtb8PndrBLbpcLx3mDWn6RKhcAFzzGu82WcFPgEmV3GFkF8lcUjnF9v/vs7cc7C+Ih+LS1LAAMLTxOTm3j1pNsnkTJIJ9imEownvbLZgq0t5Q6pjFfSQ7SU5lqtaX5Y+v1BTEBsj2I+NnQZxhLySIeAZ5auLY5nEP/Q6KVcmu8ojS+LrcqTwNcsG7mwabUC41Y6RRqZSRsy7oDpqO+nwlBWXiQ4FdjSpRLJPwX1kEGM8xYsmgu5MCqgeWQ5QuKwR3h96gnosJy1mwmylCKusKcnGj9YskfNp7FxXEyiijfYSObQA/SN3rDcguiZ4gzTU31arDLPUg5PtN4n0A/+CZ8ugoe8XlA9BTmvodw+GtjFdrRHzElwsggHaJ';const _IH='17b0294df1021c084b546ef75bbf82bd4c8bff83ee6deb0ace11e2f9e60468ad';let _src;

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
