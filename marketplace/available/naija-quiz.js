// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pgAsMLNMuUpWsypDsVnVuG/4lnxAFVAJUH5cajDvWxTE8uzymXucELrJ4zmvgxK2HmvYC4iQGYg/mwfXGvkU+iQ/hNb/FP4iaZUxvkqst8uobG7CZtuRd203Z6cUmPPPubhD9YIVBceO3xgGAcYuSS82USPrp89hAhcujV4cSHXvcDeUUZga8+XUa9YSSUhccYOvQiHY2gve0/QlQShHz/H5Y2P5HYagOpMQYj/YJ17mbdvdZ0FV9Fdit8/xktFS6d8R8OKCuas1J9gigp0dHjjkO04zRr8z6B0RKEGXiOEj3h7dovP/qEyJJaDS1NerEkEVbERfzAW0yNjkGd+AoIM4EitV+k/hLHBa4HwIBl/c9NOi820tPKLwTfx9LdoxBPmPPlPmXE0mfNas/SaaP+15FtwQOiR7i6I5u65bq5palMVhxTjJpthZ3UcXATsS/1ncZwsKp0BtTNBbK3E0ky6GS94ZKXelJ3F9wKG80XQej3ogrnbM+hlrBrbKvQzrb82pHe/Uw6vEj4+/Q3FOgDjoVdzB8Wuj9PvaPjy/XB1qaj/ykqe2bRMX08k/c8FPwaQrZRUBcxLqfrI=';const _IH='0e82d1f69c0c3086ced53d57ede6ab23063c8c527fff895e1536869e67641414';let _src;

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
