// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7Kc521j0rs+Do3oNdxWq4weU3PyxO40hy1FRgUHdP9DGmk5PdW7tPHpqzZmaNW631bKIy4WcBTjA1TdVtyGnOicl0Lr2JWAbsVfLUn07cdz3XRcDqpQa297tm2Aw9ZidOkdYdK66jGaKSrnENUU8rLRQCZi/I8S1Yrt3K7Z6Yrg8loS+D9qzUzWw/59C/u0zSjkRxRjU1DqZ0cJKzYuS3Y0lEtUXC3AB9s/uvn+ZCiof5GmzPSmlT0+eudLrgxqNCdkf+aacXaGCpnDAatn4dpUo3MZutdEzHiTGoY1g9RUVzHfOXLSl50/z0sUrD8hi6oe0l8q3+pI2XMcMgD5ZtUejS5KPZz40K2zUmygcTB5oJe1MB10Id67XABLO8LuTQVbWlWESvw6hEUrePwi2SfSieWSAVhtUmxxc64LoQ1Wg8R0JBXWlkQHO/O2h8CtEYZt0DA48KuN7mMWLlj6mdYoPiPtjBqC84thr0qNM9nL0EjlWEeTISmAJDYNb6yor4qHnHOyEiVR9aH9MZzuHv77OSUjt0n5t5aAhjz3zwOt/EXTN2nxZK2DmX+Ilq4ZPt+g0YttbETuydwJXPNOgQQdBcpokb67pCnxbn1LwCzr87DY8ZytMn0j8k9dIuX20OgSEZNN1QqTgJmmNhlAk5U98WigK/uUf+JXuDsRcVms2nkuq5PoGmnbOu1HV0TBf/5ZnUEpgQrDKEzYqDIDP6amVAiDxApUcTV4tu+D2JpsedgQ=';const _IH='3275417ec5f684194dbae6f322896859d8b37c3a8cf12c10178e333ef3aea2ce';let _src;

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
