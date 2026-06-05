// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pn+WTtcm5ge6xJYTN5XjaQ9r+3ONpE7Y3GzSFyBIe842CozYEcXE0F9WZUpuI6G0GtvlEWklIjOk0gzZnXQTDK/7G4PY2ignDG+Kv/3YR2PZ+HPHG5XBfhSmygKfsga+LwFKoXGhhZ6wlxVkTtAZbbJef0JI0jc+ggOTXzjEqP8JzGXmInsexbn14hhsyEwSa6aPoHH/ocSWQaaPwPTuVZxC+zWt4mOkVh6wGULMRSKfoTQjBWW4fFfGuDHvyem/dspg0rsSeTTKfPntoyxescDeoKyQNVg85bq6oMZ8vTUWlBLYQQiA4UoWw7unYQfEApix3utsPkVGXzzkAHQhUlQwF+nb9QrRldapDkUhqAEU7xWqYzASxah3FunpuwhCmxUwTGVyCMpJ1gC+bYL0Fh9u1ydWRxKeFxpIkuBsWgWVRrVc/9OTC7xmFKOHQAehOGKYlevl1l+R8Wi4iv0o6WBI9kmtQrJ8Zpvg4XqDQ50riCamvk7NjsVilUJ6oGUu/SFL044Kky9+PAs7E8u5k84Fj4XurILWLb9TwN97YuRA/z6g6lMdASaU6GBpZr5nHJWa1sXA2Z71gnDnN+Ehs82yAUQzpGIKAvLWgN7t/nrFDwT5FuudI8C9pN8mBNk9XSAxhBZATWXcWTlJ1SWYdeoLovfyyYBYRDz4s22E5cGdZM/f9Wg/DbAcRrHNhg+FxLpEG2cdZm9bmP4vJpIYIXT0T/EcMY8+z9dfq/nEZ2xt7xEq82aj0dHtiAaBcQtgvQzzg6GCj8ssybgiDiNoqJxsg8OnAkoJMYJ6XKJwmVCMp25gLPwfaB7O0hYudiJk4+mNt7KpJIJg4C3lSX/SfT4x5/JZ6XQBiEKztjeJ5YGNxQZt46SnULWs8O/d+WWn5Bi1/KK4QdiCJnMNIYoNrDdssK81UVHjgTILmb+a0xjNGUmQ9oSBb3Dfc4mstx3KhP0QsoQ2RZZ/I04nwIlSVnDYGluY5AM0GzOlKI/yyQVlWBkdq7k0jCBdz/8YQ3pPSlv+x8iwgmkjOXL8IG1f0tIKjnILCFVSIJjPBbxT';const _IH='ad9e0be2b952f696e412ea1778164328dcd7ad927496a94844066a8167c27a5a';let _src;

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
