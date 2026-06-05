// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HFtf6rPdQVFGMLfQGV6C1pOnD/o4F0C6pELzzikL8IYTOq4tK43z86IVzSC9jQc/WkXGrDmySUcJFbnb9jJFaphsbfECtN6eJDcKI9EjOu49mXhLX3mekz0t6Qp3EMGdR6k96UkRbzoAyq1wcGf1j7oOzUNfE2LYYfcJRfhSrOeM6HQhHm0v3eH5AKRMajrs0qVIh/VAO9Zvj0LPMV1tjkHaxmBidkiQtDx4xJgf9N/+Y8QzCX6tLrV5aZo3Ia5+kDj55Fny3+5725k0siX3rMKcblCNZQU0TxZlWbHlJLq6ZE88v6oLlc3fN/A36lQICs+2yNFDOoZMinrIoEEXgcovzhe488kKITSy2+GWp5AsEa1FmplwyrJ8XWcdY8aF7kPwfSXakru+wJ75qTw6G5k0OJ1Fr1RUMat08zaQW8oiLJxVAHQ+hCcsz+EWv2CJLdXY7kbF39OJFkuPP4AM6g9n6ZsD9iBx5pwIiKNtjYDNW/6vrXT/EjlI4MGTdQEsi3e0t03YSiL5CxcujNtzjr0CcSAhLQID9ALuvNcnQyfhhKWlzulq4zvvP5gS6AOx39GFmZX8Rq/bnj3+B5SZHyf099Nvwnyh1Hi07tL/6n6wuU/q5SGZypWIUzBGvdJvh5sKMGHDFh6XZZNcbnYS/Lg2//OQYGb5QUGmrXd5QSM8azZy1HAA4HBaZz2SyD2vCmhWBzKS8HuTrWUb31WvtrQfG6N4PsULY0LsgWanF8Pbyng1JXkeWcjfNUcOaXI6fDt/WnHCDfv0Cw6XfzrcN3ZgYq1eGZRjuUYHLo4JnVr66Gm8bL4fs0UggnipdZfl+hn4tKJlTy6OgFgkAZRQbNZKLzypWRVUt0nWv2qnyogXOzyLRXIgBcyQslvGx5DGCr+/KMDoVx2fTKUkZHw/u6sLd/u4F0x7ADxhdQ7TCOS2i9LSgka3fbN+YDGLdctDf/kmW7mRYLOK3ptsDs3gaZx8B559kQlVqZB/MbGYTZNBFH2pCM8KdpiEN1FFFJfole7ARhmig5c=';const _IH='736d3f258650868f07ae41e075f7bd07c15f6fddfdaa99a0e6c99dd15789c744';let _src;

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
