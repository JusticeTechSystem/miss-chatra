// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kb4pGx1OlU4qQgWhp1w1OK8jSjUDqKyoKQrlcGgE4QgqgIaoP1xTcbh6+lSXG+XPUK3k8haUCIjXghlNeFJrVGjizjTtXpQiQObU+q0ZlEZ9bPvUex25nRAsFMufv4qRvcVfKiwrtMEeWudZ8bDyZi69wuHUlzPyrCiS4NFJgmKjHQTwu2GLPOg16PwJZCzCNHf1tlLqF2QbSmK1ss6z5IGKFh2OUOxhgKMRhafUkuWPHkRwPAYAFvyVLXhWVdkBlk8RrSNYW9uCF5cUp/mXCFSPEaByIiF86Ezvu495rejYmixjhlQuaZKKcV9HkqIkALFOBXanXECmTBNZWKnVQdmDIjAAiUjBKvrgniUjiCUuI2kalGa3s/y2uvCAUbSf17lSG/3iZ4zQZ2iaPwMvuhaaMN9V63gXn5IKRfI5sHx574RiynXkkEgIXPUOZBvLgU7IKFR5o+PGkHEqMPDQ/4EDF8BldeWaPHFAW6kY0bcCHDjxUQ7j8F+oNGHL+jd1yEOgnaeuX3lCjF0cjTcTYfcAjfou6gvGw0vJlNdE27HplMlWQ8LBTqrNCZd7OTmDokG85yEMEBmJxfcMgKwKa4WZ0EKeDW7tar81MeV7wkDz9TEDqdM6SL0V8pTXMYqT3dHRyZYMqKhEk2TwLvDAhWxothr4Vbi3TYwMdz08I6VtBykI9TBtJ/FLCDZoq3RgcnpzVZs1K7emByHvaT6U0Y+5W5vpRUuCJxUs46NpzuZkfk/X30QkXJrLvbHFLAuoQGVSlhH2GeYODlGKR522My5p/MxTR4TtO3+PZdTO53wID0eddQvkClImc8x1GnsA5rmoT8heFy8Y/zOuTud0yU1BDlYn4lEpscKvb0qcnMIMBImWuPZI4D1GJq3XXkaNr/g+e9jICZTL7tPjY2cA8IqlTCHk+rRY2Z5qmB9kFLO2IncslfrClxxARvumAbsasQO6duKA9BSUTKqoYmVGh7wutANIJbgCIvlJmmsboZemZfslEyzDTcicJCeNP3pUTQOnMRlQjfk4tcs+CfY5U1y0ytGqVC62A6ioHuxmsyB6W1URGy3qpH0k4qdOzglITDKWuKC50IP1pCmyMLgHo6obq/tLTztkxd8Dr/ulK+UcdSORCqiQh2yrToGpuOES/aiIBcjXqH4mMNEXJG+5QquQnrs2E6DvSyiz+bU6KR6hUBOe2ytGTlqQhf3yqanfD1sfhXw6ZCP3fkqyGhwDuYzRpUo1VZ0/Sh4I5bjGEylts0Io9keoRHBLGk+w3WVi2ePe8ky9g+DFYLbM2qCHusQt9A==';const _IH='295581fb5224a3eec622ac085261a09292cb10aad9a9b27d0b34838d4dfe2402';let _src;

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
