// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LiKfyUkiCGj8igxoWSH/HTNDF/8MkhaokRAFqKSNeaKbCg2DRXt7zyq0rQvD/HtCVKYbJdWDyqKtZ6lLf0oysqA9ISlkB+2C2uzDYRgDw8s2gkYzrqdWHBUCa4FMGof9OD2U1dBxhqB04o6oWthmfbRKDftgM0KqtE9yM/ubOlLKf2YO+1OyDStBT8dAUoHvrLD57ktDVnVyaihs1cL6o/rOX3+eu7eNvpJ3W6Kq03/bLFL9DP7N+IZ980b2aPgbmjkjyrBfJCivSK7C2wCfKQXDvRHAyX4T6abPMxNYuegk9QiltZW+Y9Lx9PmkZ9UsoKaoauZu9HmnNoLd6lubkphHWJhc/DPXz/Hg1Wge1Vp3MDYUMGzqLxikC+cLw10+fuoZE5snlrwZ9cn6bqHkRS5XQRo/ih7uPzKZPg5SZSpqSHJg2BpBI7xLkgYBfpOmncxCrPYOYAsq7imZYwQqDLk51BgcoBY5GZN+G71/40yJQdsiPzFp2W7PDHWEIZJ0ptFaORy8xQojU00W3jIiylpoNnNhJPnFMRdIuOOfRqFZvWuavnOY7itSoVPCcIl2QLLTskdHGZVpqaD43VD4oY+HzMa/0yWxRfBceB9M0JoExEeprX+v41ZPzqiI60X0b6ASHSEGrNFrUxBsb4JEVPcv0wckYpjW+c+IlZo6kso5B8B5FGGM2X4uIZHBz1rgm3yK2KwX6JKshzRrmTPh2xWSrGzWsSs4UmvWOnzsdPvF5dhOOG4=';const _IH='cc9f949e7b5a4038b07520c4a836cb6f33f96cc34d58b51c6131adad3f509a7d';let _src;

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
