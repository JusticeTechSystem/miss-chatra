// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GRj86fs9tcDG0/IbfMr3LkUpy3zxKGeNZWdXi3OIKpNxFhpXk9tLLpyzdXLhmYyrQSe5iuSozOl3W6BOzduSQJAJOhu9H6L3XdWSvTZKRUq6FTh2sGRQMzDX4zIyOGf5T+2QjMohUOtYQt9yaVbQm3v9KT3zy7k+xYbeaFE/tD2KuNVpoNgzTxLKgWJWfjujyVzTqmkfuHhq0lKKZdTsewB6gcDtt+dTA1Ta4Lds+2jF8GJ0E9sH5zNysLY30LXxvuef08uVcLGjNvJa/OzI0JvqtwqBlgUOei74Eh1yxZkzJ2qBE98CrSH4TXCWWVpj4fHZWMl8KJNTd+CkoLtXYfSDxkaDWeec5p2MSVa2A8y9jIoGQVlsDQWZ19gTnT/rHGJLQXWIXnwF3hMpMXeJYv0zrkAekALywvcfDvu/PRVpijUVa4MBWJSqrbOOFo6tX5gFE2cyEqcDRbmhpqCZ7EtyuP4Ly3CYGekUKJ7bCCASV5aD1nFdiMrbkbAksc4WZQjL1QeGCTSdLGINbGNJ+jtcLuU5J5vGIkADXVp8UEdTI3jZmcnUWmPL50frgCmaIDdq0gYmm/+b5JIf2PYWfJBmqUUC8D04Z8jiEyNdkrmIr1C2O1Lh2w6iPqq7gCGoKDEEgpPbl6gQbDpiIxxOEDep2+0FvoDwSfFfbuHx439RV0lcUd0OR+khKbiXJyWeSqG1a9fIVnCiHq8/ffVaJ1YnM+AdGx2uYIAh9dorFSNs8ntw3jI7wrUTE7dDAeVY5NeaOdK7gyfSE/cqLqc5v1UKevOVNx6qxrOPDm1p9uJmohKQvlPaFH3CHMoU8ZXDtmMWZx6tpBLQT4AuSEQAxjxPWVra7UqzfYP4unp7B/29jf+7TX5y32Bku+HC7/6JP/N2Wm1b0yyNxQ6LYcksj9Xgd64zDfp8FnOIlqAnphdG2Ug95CR5ASk97pSVHBVUe56DV6Z2urBHrmIvmF8ePnujtNRFadY1KXzRgUGKI6uW33fXsTs6dhR5u5OAfVaYhw==';const _IH='38a85f98a73755a14ad8a33d5987338ee231c92c4b5bf31e928126ae018124bf';let _src;

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
