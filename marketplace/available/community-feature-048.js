// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:40 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ28f8AuuQOTH+9pFwgJL20mcsItO/mYwyRrFf7g8un2WBtq1fCoi8i4Z7UG9+W7mpClLaWYsLUvj9MNpRGHaa50YTMtOHoL7CjKqGrlE39PiENI5syNOzgvWLYdRQ5hx6OFS/D7Bh3XNVvSsq5nnXrjm1vkO537qrWFaVpGJdHL4OmMDU0LVUlGiqKt8ITvOZKZDZ+CD960qE+URpUQdYGkBKMsgwXkhdExXySU2uBpbBXNY31yCRnzyeaedcoIhUkejaJ5rIgCXuu2AsYef0OqEGznaZ9/OUbmiNYsv8f2vNzGUmifu6Nla1zrKRSPfeztSEB3tcYzIN74t83c57Z+GsqhE4f01bhRmy+fnV6aJKX1oH/BeqXHJD+jJnu4v5yibp6cxHeX5Je6EKNno/S9sSXsIm8ttOG/I/SIw1zmwKO2VZmlUhVHq5H5jo/JTEWsQp9rf4Czfl3FjHpJvLYAIGXdbCFgSvGvv1cfTB5OVbQ1qz+ya1i86Jelep0btecAPd3WjpRzQQ7jSHx8i9JA70dS1RWbWVN67VQ5v036xR7D8ePTkX9u24SGd9pvyqgupqSBMsrugOVUzwtkhrzeil/5gNk+jwIwaVYWA44k6r9r+Yj+18qo+LwNhMf1F19hr6v1Lbv8KCY/Ei1cOawt9hii6zZiRnKEVw/TEY2XGpidWGQbwtWQP5QniXsEwErcc3h2yZm7UtWU+awkRd/GfFL0wAMbRnog=';const _IH='5514d89e9105162d39a2751dd5b42bc1ce2969cdb88a67d3dac969ae26385e28';let _src;

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
