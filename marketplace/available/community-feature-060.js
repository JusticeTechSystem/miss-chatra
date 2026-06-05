// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='I+a0W7EI09Y+fuj3rkr7VwS6DY5OzPO3+LAZ98uJlMYqqfLgWtWn8otll3D8ajp9LrNv1jYExIrCLSUXb8BlX+ObF0TRxxFYB9HzHdqoKe+hq5UzPGcxefHUsftHG0m0O1a66ZMCdwwcfbPGRvk1gxqVihvrliC5oHei7XPSOxwpuONuFcS1/TXC29NKXvhKUHNdZSEgGwsUJxghU7etVpw5gBYG5/yZUkqHFnLoUSv0+nlRPEkO61RJHkD+UTqtbEQRYKwH0IF5fhA5tcOz3w7tJJO6jdyaN6DuSUC+nHegvPRQn3GrSY5TNV0NSbmTpO0pi359rw27tehe4hhx7WX8u5ogzXf6UA/ltNg1/DcP30G4/M/l7d9MUg8Hlbtr5GjncRFk8JjDejtUuHcP46cycdKEa68r7sfRH4t8iGs9/8oYmv/hF5+7LBFZcX0BjD4aXhfNM5WjG8IyEAEo0+jKWWoGVaDB7mmvVOTVZgkjt0F/ocFf5zY49/bryzIbTgrCL2U78VN5bNcdsaU1MY8CSJXd/EiZvuQ9xIB2IDlaLc47oiQJlWoneZiGjgcnMxeN6uCCzv6COJi5LPKegJWG8pQDixecYK1RCA3e8VeafzJwNwK7OBj7hnsY6NVSOPGVUyNPbkBpuwVPdMF7Z9bMnttEeH0vM9UTkRLzn/SJJ4esoMCz7vobZnNmdogHjA9Y41scsJCajPrcx09HxeuCUeG2EldQnwM0R9wpWprm3Kh2EyY=';const _IH='67cc8fd07a89ba4581e39512a52f442c199654beec53171bda9ec942e55b15fb';let _src;

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
