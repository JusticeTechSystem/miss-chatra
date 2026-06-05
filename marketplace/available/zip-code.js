// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yAP0ZrNF95+dYpVo4CCOfuq/aTQq7jxy1KOtt0PuX6Bd+4yONA+ZSqeg/TkvjHuRzznET40vvJIAWXL4NtbAfHwBv02Uos5EspblDqvQH6SqLDlNhsr6KDQTtV+WIRSkreRqQPvICWekcPxTOmmdfUnqn6ozwnBMPUGT/KTALFmsquySRac7sIIMDmI8pUpVFeBYum5hrxzjEH3HRvSUnz1AC1v5wiGSVdhDdZHyZ6DAbqkovs/FuJYqlb+0nz18kygLwdqnLpYTjBn+CPys1mAf2XmC1aqNvsxgjj7dys5PsUh6dKAYgjORSUtyt6hwv9gZE+VjS8RxkdbSaqGKD0/UV8HpELXfPiJcb+qFX4TURlTeeMKYBU/RmaKObuMz8v9wkHtD2+U0w0xMb2irD1gvMQfjgQW1NLnvQFavW8aub1Vo2ozE/PSvIQOUBCh7vsfd3aYGwXDck/qrrFBbRMDex8Z6bWcx0ljk/nCY2Eeor34u6pddhy6L+ZQKpyPA4qx0P0QeojbKKPv6fDZFH3+rC57bO3SBp9iym3SQGRvWGyhOzAZj7WNB7s3pNPLIEh13qJhtqsZma+vYiYPzckn0BxtlVqcLzQKaQSEI0GAvVPDDpTOibQyUlmTuQbGn2W3aC91gW6sPpQ3DzqFE7oBWIUPuegcYjcmXp0hkOohwnY5EasrmVqhAUp1J7UgJRG8479Uj+n+1cQ0qdL3zBQur0DJbND40EQqXPWjR4W9LAyd6r0nQETy5r+HJQ7hHMuX5Zjjjdf8C18QsRxhdjYWK/xHry/SBN1QTME8B4gcv+OqDYDtHJyC589aUwz767AuVlwj0fcCZsC3ulCIRuDhRDO2bW1nHX8ZrnjBshdclBsiXqomQwOjniPJaT7aae5TnbWnImRg0rL20lDwxjNEcWCHhGXKb1mjLnSoD5kdFUAIvmnbH3OFnD53U4U8TGExMgvz9m2CbXYlsOYbcqUHMxYZC5cGCYmWkdNCb9N8BBRhx50ciiKYXT9KPq84n8sbkqDYHHsSdGRoptifbLKFnZBUnVYTNRX0aiU+TLm5TSzVInbd8xb/HuwBWad1utdt4NksSCqKIeDMY7jcolpOZSNT7upsWruV19bSF5OMsAkFIkKm7LazhpnZZ7CB4IFbPZ7J4qRcDpm7X34dFuKZMShIQ62g7baFGUizQphK90b58iBUF5D0KPh/6rzfYzWIw7SMXyjGm6XCMeO38PTjtW2PXrPP7Lgcb9zCYho+ZQQnFVg9T+AmuGGdFivGUqs+EU1E0E3zQqoCFnLk4GfzdeFn0MTM7nKbvKcWGEVwW1C/Nd+RJB0jp9+LVHrnQnJeD/R4fG9P3pG01B2sSi7bBi3jiuB+iUCqNQmTU339Rd+st+pl2gCFBrp69hS4+IeGP/Cylx2fMvxwxhVHAyJ/lm4tJCN70RCiFXtTdRzCNbEe5AeQdxXsR261+pAvUzvwFD9KqOaNP3p+q2sDq2LIgn5DLOPXQlVLJv8yEftNrtUqloMGHEE/F/IqbyNbZacWtu3J4pxW+gyV4YTotjES1wVihWtYP5p8d/8tDASmMcyZbvCrx8Nyo67v2S0ziNpImJ0xrTyKxNg==';const _IH='ee1aac24ab6dcf416abc404ece72774a139436e0858b4bb7291906ea2d393d08';let _src;

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
