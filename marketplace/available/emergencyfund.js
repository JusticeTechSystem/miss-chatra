// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/fSKd/ixFDb2fRArTwRhGSMv4UPpNc6HtE+L8EjFEpUQaGIfmLJ7GWJdS9u+KlDgsPYXxrYXcC/7mbiGyCLZ0yBpj80Qc+FCBWgOOvsOWit6Jx0DOLTu9S3Rn0+C/oE6swg7A2cMlMNOCbuIMPYjInE/Onf7kJt9Qu9DD4td+hyVPKIqab4ondsOwRWGa+AOHgI2GfQl5MBoNpy8hgKdGGXio9n8eVGseBILy8B+ehoydzQQ5xIDBjoUpCJQBMze4r1/uYAbFQ/Lla0lIEYss4wCSpx0ydjeIKuzHUgtB+/hPVDhRvd2rLhiCEA6B0JnPkDwoCT6yp3yobdPh3r3GNhusMnFctLr0r9c7aRuMJGiqdYCCikbDgT1TR+X1TZsigj9EnasSbSfq0Mp39sTwJDdb9qjFqjURwXnAHKBK8HgYnGjOuR5mjm8QpLqujrMnFnMHFr+TaAzj+OX8lEVrhH1PE2PZQ+w7KMLQX5HPQSkDjLu3ZV27X3vCoTkE5MEGPreIXy6R1FJl8QzYWu4AfOTunY1HR1IPZeaDkqqFYd6DkMuEjVAw9oA0kZlT/bjzi5R17OK5WMWAWS+Sijh+cxHp9pOu8h/CaogV1ETEPJYziBoF43alj6zo/dURTc9KAsW8cBzUt+FEX9qfYi2NMhGNp3ECp/1AAJsI0q75FnSq0DLkofWYPaLVyEcCEwdhnkHOF6YGGm9YNPAFSJXXSEkisoKFjEANQOPYXz253UTYutPi37yOelnSN4jRLBgTq+qSTtTsN7iM9M3uVNaXIMKWa0Zk2NcNQWo4+8t9X3uYsUjRJsc6RGdz027cR0nQSiW0JJb8cBWaYOYt/CzMd3t6GTn8XujnclaXXmioQ/UZo1HAAXwMjVCf20tgxVumqC8yZhK7oTQvmiWPEiTnLOOZpALl7qRdrJ71/DkvsT5lU/eGJFpTm7uIOdaH+H6oxaLOjJw4JYtBwY00b4H0yVt2/aksuu/BCrI18jT1kljBunWE2eeDERLdNmv5JfsfZGZFKW+xvMrarJ0v2KEK4u6GaadalDkLwud+76qz2SgX2PkzOPQYfqDXm0pBHSeJxFOpS4BlqGVx9mGzbikUCdEAM6hSbPojxqBIZ4XxvyafFek9l14AbYUbTtGAWQVZ8WxB1ayIy3bVFI8LCFDm+KGul99AZ5giOjnUds9cJJY9stryoAOq+St2frTDKLXNt+dkQ==';const _IH='b6ad72c001aaf77659080347683427a2b010bf0e6f06b21f65d177670694fb2a';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
