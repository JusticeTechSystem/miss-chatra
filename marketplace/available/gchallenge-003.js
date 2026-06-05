// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8eI/2vzV8CXxT8PVpeRn/9ellTtdRfHqA3bhGHEcIJ5FgMzSEC6q6dz4NyfDI5LAGvDZSvlX7oLWTLptCVua8URfZgz6l1zg0/bNlty2nMDbiLs9i1MZEYOY6Ub+GL+a18xECsuXXHsaXV0KLFcFOm4+mMWuXm9Pjnb4s5JP3i9ebNlVeNVch/G+Dl6HNLu3z/b0siTlxkyXF0KX7b3c4YGWyxAXMGSB+R/+PmTo7wlqt0AFSWe6ngHVP8Hm6uybWioOfgMg/r12GZJ0Q2LwnW6WwMfnsJy0JHC/mi+8slWTzgDPfmDvvQ93FxIX6ZHD3Iqt0e2manPmRJLPu6pndDm2z6ehs6R29VjEdtYG8mxR+PIFOdIw9zjPw4ioCe2bjcVcwHJPHcjtNXIt3HfmEkFYZs4xZUVLRU7NHxqPoRowDoduPaYvlGd9kY1wF18lmTQTxR55CEk1eRDigiQFtmjefq2Ks4ks9Kz+SlyZ5XraXc4Mcya3ZG92F8weYuXcvoCTBtq6jjbQOiCKbSAvwP6UMt4I3tWsB38Cl4RD8rTyiGT3S15pTEZmQuTgSkle7W97sJdKBwo0qEu0D3RVRYGd8DaLcIhkDDk8XjRWeKBIp1Ts7zlKqOkJAPaVTiFLZ60u';const _IH='4236de3f09fafe1b3cf89d5ab32ab9cc59aaf092a6dc3bff57491c2b9bee9586';let _src;

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
