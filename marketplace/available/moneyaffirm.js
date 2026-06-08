// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HMLsbKLqe3t7Ovoe5IZ/QgEAdejQTXkOmaE7AMyatDPj7H3Hg0PhmbzXeQUid3OGxdzekyxnWpgHxnbn+e0kltqe7efcvOBWVGI+pY/37RR+yZMoFjOycLnZBz1RZoK5v6DLPDs4bR/k6fE9yfLOvzukPaGz0C0ieh2gx8JflOfAnJrSD74TCUd6kA6XvSIBbZOonWibxGjxCMOjW3LJ66hN9kwu0gplKZy8gRBLw0cq1VzsiAlvREwPR45pcQWmNRKjLpGO8peW4ilH6k6ivbhDGR4A56L+fDPJkg/CYCyanpKVqFe8ahmbS3m58FVioqlLQHRxfvWKoZ0wL5UwqPDvxWOaCgX5QmCIc30s5PjGUQH2sB2XmhG+SPdpVetqMh+4Xq0bngb45IDFANDmgNlDdTVEyI77k72PodCzu9uOkAsX3pFEHjbldE4f9wwboV/x9Rlom6CLomLLpLp3mOeePDCzQ1NK7VkxSXpruHRVK16JSVpKVGRBvjvIZb6ATjvcqfwA0GS66vaEE8MnFvB2OleOO/F+9GeObB3cggcbNVTmXk5RQAB6cKRJo0AwIsAgN2FAFALSlXFF3Z3DlziJtYILzJRsVU/nv5bsqQKGmVQxH/pn3MQyFG14O6zcysEASXheXW5pyr7SjknoO9fJq39fdcDM2pWcyW34fQfOyAt/dRyExVI5+RoQ2yoRxVmu3Xt0+xyF9EY9JcuadHEGOAiOU71H1G+lC7pi09ZQ9LNCn/sKaAssjWb+ixU/DMpuMKYNzXcckXziVppz9cle0Fr3D3Pe/1uOTZKHEZ4YjGaCknEFZeFgHyBNx3LLDGwpEy2qMhmhHKjYqy00R5u3nl6pMOK8+0wW5kMjIb9xxvCWqm0Ts7QDNuo1Tvr42CLK7EtwYXQCl2JrnIy5xDEIm7gECczflGH3JpP3qXzd6iY4qnKGI0IUIdkhJeFZZHUZvtc7NzOxRZvKTuTe0ZaZtuzebuL1GaS/sOXUtxsEg7vzc2XE9+AOiF8l6a9SdlIYzbAVozT+6Zol1MCNxIqiYNKyLJbNzrxcy0eh0oSzYNdEW7dG8W4oQjbayNhom1aJb2wFbsKO3TmUO/YL8pGFQCXBi0wzvqPsyKlJhkLIb5PIAJmfsIjOz7vmGAaFhfZol3ZJmjz38+Eckvz9ydVTZ5Oq1nzABIx9ny79cYvTDGJpgNb8J8iM1VCpQJc3Nk4EYLn5mkhnwbfXJg==';const _IH='ee0c9d20f80720872ab95d0b84440cbe36944f7df52cf618e39d21b92776a49f';let _src;

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
