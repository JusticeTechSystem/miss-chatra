// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UZ+qHLnZIoY8f8QwpnJnbS4BR6IyTxdqvRmmpJed6ee1NdtDB4si2L78OMas9JpZ2RxL2/edTmDM2oYQgDQei1wJUBGCD8hyi9Q33BYjMt0Lk9WP88M13Ghm0SOojZ8Z20arCwA7wZYNcmJ6jb69gEBqeAJJm3YPvhjHyKwN0o9AsEJaGKsDl1HGq5WjHcrZoa01uee8zTMnyGGukI3znnmbDkRdL4LMsc+0XSszW8Lj22lc9Po3Kx0u5w3FoUDQmFiyc0AUL0E1+zcg42AiTLmF8//UxFrpM3nVicDm832ZJfkU/5c+l67sN2Y5nvvS915E9LDuPtpNdGK+tbiHIkJjuERnmKT9KvUiDfXWQQ6STcTWy7ro13rbQibxlxwwN8ShwbORmVYj3yk7+HhqpRBgqEWLyU2pt5VKQ5ZbFRyMWbgKPH6vzcGJDnk/6JEwvXTUWPqD4t3mgWHtKrzrJyV5f+WlG2YKtjqNFy/gLPF9FJgHrqCeUmk63kG5rR53HGQO+j1WSs/xqQB7UpWntuPSYrAlUKhCn2M3/CUrC9fVL6zmk2qIzLxtucbAioOCyu0vsQTAKvJbNdM=';const _IH='a6482184853cbf8f3f5462c084895b3612353b9594bbad7e576b113930893f82';let _src;

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
