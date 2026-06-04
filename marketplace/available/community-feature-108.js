// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ct1oKeSga8gpb3PczNFpdKkNfKI5vWD55xpXjN0P5ACXQ53H2jZzI/raoHV7c4QuYJEFE9RH1tmtyRaRHI3dIoi50ewpAAUjpz4hzGDfZSv7r7eqTztjORS9OJttEK/kAxscY5VTNP37LexQ4i6DHEn9TBtfSCaKj0oCtjdWKceCnUyBZr31/WoK28RwTjX8rpu6GdofEB/57YdHTpotTh1wPe/svjNIuDTwHDwVfZ43WHowifA/uAfEl6eAsAi2vn2IE5Ja8i1+1SCqRdSM2rhku+kaZmo/LcV8QMAwrOCRUh54Ju6j3i551kdeOza8Iltec3NJJjJVw9aikYQM1lBC5h29ks4wfcBDUYL2XHI1dAT/7oh1+Q+F5b94yWB8ZGSVIchA887kH/Vkjq1t3o5MBjQolMombEvs2Kxz1VW2lUQmDhZDYKtj4dPCZgpv0LrjYFE64jJziSaE84Li7IIzNXxCl66hjg/4CVemiOW3q+4dc0ZmKwSVGCBwEpHftlW4DOn5Z/nMvveQmMFSPl6hJpUS3EOzgMQJwmCN9kNgWUPGCg0mj9gwhpeLBur8TO+32TjIY2sVNHrOjYRBcDM8KpDa4ZrmEXmVy29/CqkGb1PaYR8hLphtElm39MgiwNDJt/1aHZ/6viVUl8GsmKYbl3aSu30sd9UIqJ3IB/nI3RUEa0kyqC55NdhD+mdqYhcmSnBWS/mh3QaNYRCBy3gOf9K3kZexWgwhYoU=';const _IH='e06457e01d2f95711a78ff6fff9d2eca5fa45c969f78f39501fdd43367628789';let _src;

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
