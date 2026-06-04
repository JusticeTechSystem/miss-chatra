// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CLAB8JCQ18XniM/NzefiK1aIoW5gAXLBUtDslbMmc7Y8iQIwAVKjD4rgOG9BkVEih/bTEplokgqDxyYC6hpZ6adJUnIwfwNVp1mMrhBsseJX6PeLv58wbxy24uGJBzHHnxRFwWo3CqfN8kQedG727RqQe1B27T/m34eCXC/JRmZ1OX1kel1a4GjvAxsavN+iaAsBtQc0sP1fkWir6h9imk8ZswJx4w7brxbJgDFyz3MnckCzfsNYMEDr7bgDZXMNJLdcduYQcLkAqNAU5KAZL1GNcHGFZO4EYRqxRNnY314FgDyOjr9cReIxeTDeLqpSyMid38PdWvtIQyB97x+/HJw9aDAA9z/M/2eJpB8vbQg2PCMPGy5dw5KmkUvmAk8A4dFM1TAa/nJdycIuBBroKfZwCm81CJlDo3Wz+Hz20WWmGRjmC0TQgWZ43RliBpDS260hwTmnVDaBLCPttjabMFZGqsBNENXhjPPjCHIi/fRUt6YHGaZeqVrBjnHoDpWHhrjAUI6XbEiXKKJeAwst75l2UqMnor/SZemapQCtAxiOM+8fHJOUuyJvWTBtx/XeGz4rdAOGBla364Qx9C1SgP38N7Gu9WGQEkjm0SJOGdnakBl0dG7RWfZ27QHuJGSn0Zp9HRtKWzUyMYnHJW8E77a9MYlCjmVojl/Y9JzmCtKRizC2922akj1kGzf8/zeWxW1KTjn0HWtraEM6UfkGRv1B5xfrt+ntLkztN4a1D3m9MA==';const _IH='b5bf29055ea53b8be080ecccd94a120f27a0814b00c7998bdb13b8f27ce87c95';let _src;

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
