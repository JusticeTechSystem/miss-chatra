// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='N1YhhPHwng7vI2MPOmpaCPjYi7t8vHYkEvpaayncoIPnHO7v3UDj1YWRIUVaRBP3zzTCIE90OqEQa2A36HGoD3OqOey+kIVOJcGF4F33Bi6JyEeJaiTN/ymu4EK6GmrgD8QHSR3HSHnnME+1QYs6Y90x4u+5aQZvtK7KLtDdksImjS39UbC/JoZpwG8m6L9hOsKU9NipjqG7YOUPOY9fO5h0m4G+3DKZBgBQh554mFALf0WTd81u5UQW5DrJbO2qqjhHQr3juP9eydjFos923lb+/fPVSke2igjqAyAXdazA2x39skcw5rrnbAWqW69+YEP1BPKeSxbXAd5fqxgY7NryCutYLJzSsg/d7kr853v/IkjxehM3+Edh40esnvlFWSx8XzhHUQT2boIiH9ZJJO0eDz3zW+I9Zc75sqgvhQ9vRtylK4IQRDZkBhSqKZbzu80bVbYw0EHxqM/yoPP847BCCSZCmX6zRZ5LlcbitDLyJ4SH0BoW4JsEIgELTFiOXtIckMvqiv4S84rsfa6KXSHTQLNn+zmvoVcVpGzmDh0Eqrc54eM4jRsf00MFnUxtsI0R0yS68l73it9ibr8i+fwaXVfPjV8Zb0VCkjrRgAFLvkowYyfIBD3lBEANoumERdQ8GEXM5BREDPYP08npqW9RenjuBDh8zmwt0hsxIfJmgbK6M5rmXBqW0f+W02uTyQIlb9vhFqxCsQ==';const _IH='5327d292bda3807a05afc4b64255d1ff6c2c39f73ee854ec784bb922593ea986';let _src;

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
