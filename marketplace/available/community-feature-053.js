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
  const _b64='ILyo8qbKsrtfxp8FSrcSWqlaRVOe/q7YVNAhlUHH7Sprt5itf/4RQGqYxE+OBilx9mextlV53vtlLNBi5jqsDIhwkM8h0sHc9WbgQtl9c6icAHkEhGqRv1nNSRxlNLRYvHPR7eU2tUCRnPanQMKrcsp4Yi2HS7Jy9ivvo3/E6cDZCL94BWh/2qiVFF8JZEVJacrrykNnFn1ZFX1O+hGjJk3MxV4eSxFPj+XEVaSyxfYnsVRb8JRU2c56H+QTDwooYDfczze9vUDwJax6ropKjwpJLJmpEHV/VvABcOJwGTHYTiuBi5KaJAaZC7Z7GGIOv26ZNaDnhngEt9A3JXrNjMb0nGRa1ThIN2J+0W5LrxkDu66FE9zxbW6C48ZRVz/IEnrQycFk673s58sGYEzhe/UgtQTlt4JdFEYIUgTh+DKK8iBsZjS7NNEddmf/MUtX32s/r7ubQNFlCixELUWzLAzYtbyPakaCjUf8DN89UxPS5c2p4p75gkzmvk76iyyU/643/pIAArqzDRQ0jC7R5xVpycx5TRxASPUoCx5+T16Ts2EhHdm5ZUer4MbyxVUxwlRysZ5BhJYVgto41AJkpzB4GtNYRvUQ/MbKrnbnUkHYOdsdNPhj9gg/SqXR3gYZB9/UX0XJk0LZUQY0uLmfXEh7XtciKvaB2JSXMJ3g/nRwCiZxV9xVKksEutyKplYwbShzqhva2vFuBkUOJ+NDQ9tic8OJ+MQJjQ==';const _IH='596285f4ad18f145fa7918fe53519921a98355145f44749d1de7879f8c7aad88';let _src;

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
