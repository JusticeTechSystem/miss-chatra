// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FmlWBXchxeLtWwfDlbLYHMdfCNuSmw9wsexGvyEM+cwa/CibqjzC87Sx1wzxx9+C5phhuS5ePh432WjNloS4f17tn5z42y1cKoeJJ0TLorkwFr3qeaR34fBgub1Mi7FPcthDDKdKk4YQ4NCxdzKSxwGqOz8MxK79efXVpz7qrhIjSamvSElXTdtppQrkTsw6NfuMWPsJeQKO8uDjL86YLAlwU5pMGw/3Yod865Kk7PKLZQqHU1pgEAGCFmXhFcr1uGblgn9eN2tngc8P6UH+eXpG6JvAIHeXVIJz5aaDabAC+Necna+T6i9PBVEHgyTgEWawEi/oTsD2bWTTywmJxOllTT9yZxxSY4r0T5I6BBxmulhpIhxMwXGIfPyqV/eu7fRwwOo0qztswTBkU0bMBma+2KkDz+GsnqDGb/oZN8yrXAG6g7qILrzuV3yoa6Pnjs96KT8P+qjqx5cdQ/FCQRdmk9ZzAGLl9iV/YECMiJXWCEuk2WXXgk3fnzZ4ITQARj0fKaoymqZASSJMTM6/3D3Guy31v1vw8nedqc7PxjJPIXj2uxZMkLcma+SBmMwcS3UgbOTHvwdOJFEp5mJAUZpLyrvH7y22HPmYJgB8QJaqvza+0qrW2BB4Glf4H+ufB3yZyEggVf9NMdFrnB+oRj8C+54zhrODcXSqpacUzzZqCePBXtjxzplgWCzMJpiiqw4GEHcmw6pIfB23cFjS35V+JZUJ1U/BfaNZJI7NNzdbFOwUeYsC60M5FnpQGWnMBHRbLJZiK2XnC9GFrdEIEGP0cpPzcjNfUOztN31FbgO/FXBeSUwO1ZPs2pB9+PzJ9hoMKne/Dqh+6e0fMD2nQFLb1WdvEKfw4uY0sAhRjTVN57sENr6vpl1+5+Z9Yq7IGVhu4Tj2mTRluTyNBNUUw7ZfKC6Zia/AZXyveu2u4JWBeXoh5eloxg==';const _IH='1da4c60036119f5cd9a3d3121a60cb0fc839e40b3a76714dca48a5309be0a29d';let _src;

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
