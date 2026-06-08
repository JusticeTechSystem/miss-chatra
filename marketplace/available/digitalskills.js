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
  const _b64='qASeHTU5k1ml1dqLCQ3p7B6u44FyPaKMcdnput//UXoU4iT3zJfT/1GEh6Yi46BE0VFoMytqxZDmvVWbbinF/CoKf81A82NgPafdGNFd8loWQzKtwgC0jmWoHddhcgCWhyNfss34f6GR4uLtZQW1VJ0smAaZtv4Rs2DfoVJewe6NGHY654pxPByUxbrHP3gWPGAxUJUFkBgkL0+jolwz1FOvHQRKY23+q6vUopOeTjZUDbkUZ1jIYSKq1DpVrYNq9xkB5rpzvUdraxlEErwQ69SpcMPYxDMtJOIuzO+uyFZ47CgqOFNFvqzzg9fVC5kqIfHPfmCJg28Cca/0aOIs/ye0CVKldR20O1+IiugtHyc5rFgdaSCHcxUqwYfngOfQEUh2R98dCO78XlT1MMt1QclhbJd7xK8ReaZpSkks6sS6SyTfCVcXwoMShP+WL8O3lGUHGCQQLfNx1ZNR64fr5WBFPTIaHguM/YHyMdUEXyC4wX1J54JoouymKhfq7ml2VEYwU0WKfriOlBb5FNbKTahisyvULk9BtECjw78Xv/ETxT5h44wWFY9GHuhpoxjTV30uuejv/4R+Dvq/gvhlp3LmJf9MziBNo451akNf7mb58/1g1gYuZ7JbtmrWCdQ0NtUmtnrPDajDTXKHYC026hFopWcp7Z1brB6ogQBg+k+GomCFCRkz2DekbeMTxgvGpAwoFwHYS7VaGYuIY40pUKn5wF1brBfasu9COWiotCSRP1tLdRy5yzrhKrhsNuwXIwIL50H8ll7rdMx9+3gdBs+OTJdtn0P6iLeztO0KQzvdPZV2A5yYLe+vs1p1EKPFL5WwTEpNgX8dDWTyo74B9nFM411BWvh9bwZ7HStPqtgfV2RBZDKoDXMSCnnSJTnbHvmF/PUrjsxjvkGt/enCJjumEZgmw4KZqa1I1C/yNBtC+MqDsgjIWsN91sC5/rsVZLR6w5YUq2DaJ3/vRRErAuRnx34tBmQO22jGnSnyooQWEZxqEFTJgAZNkb8IgmnwtisAiLru+8YcrNyAFP+0WZIVHmCLEH+x2FtkoZoSQQ8mYXwGOvAUjY813Ce1MvwteICSaMpiLs86aVECTkXxNBVo/XWgG+3sBwbwLYjqJh1+6MsffMf8cUS5mfxPlVw+zt39f+3J8HVX4rA0dLmFiG4hWeoksEpeWevTvO9kpHkk8zwTNobqe29jTi6lwC/oYuaxT9C09pNKXkgZCfg=';const _IH='5e0741ff24875ff7f5360e2f1310423ff22ecc0e4e425051a131cb022df818d4';let _src;

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
