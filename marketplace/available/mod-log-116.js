// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JgntqnjZT45kcj2KTSjqv/acauAPSH4dehOavZWl3wFPGpioAsaofHVMGLVWocma4C5O7e+MHqjO2ZzaTcsvWaLYPJikFcsJBpHlW1ZLz6/9xRXr2UnstBy9ie+2A3DE5dpukcxYd33xjADi1mB63k2r3K+hZ0x+LnMEcGMMpq/QG2u8fd5gbqd+uv1/Ls1o3MNT+jfgbCrpfEw2hGZTfWieg0CQoftv22nYARupiPdNDJnvHdptCAMQOya6r6O5Fkf0V6f8Uc+pGUMqzboqCvrebguwj90X4z/ZEu/qUeG0Lotsp6LSUP7EMnDfbs0wNfNWx6IdSZ0Qc1f1iKK1OvFSH6c8NQdgPOt+w+TXVcfzXrrv6uq/VIkeycDZ2f6NCagLxo3QguapeVkwuxe5lgqxcbxE3HsF5nuPpSh9DiL9/af7nzWLarjTI7uPDSz5OogaOoFAxwyUuwa5RhhfVSTSv/zOzQF/oijU2RvLsS/84iJW22KWs/I+zAjXFaBRr5YojzRawR2eQ8p09jFqb9dgUcmiWIW7njGE3MjJ8QWRA5cXVeI1JTf05o6I7NnIzJpD1V+1AJhWbm9Z0rsDLm5iXzdvlhYHNiyRX6XgAbaeYQaTdyDDKdOutCYrKMsrE9PHQOIE5E6+QWjObyIOqLHYFo63R62x54ybXFgIiwmVTmDF5C+FgSAPrda9Cc0XHMgDkkavXzHY355DgK8cR3k716TNzfFZtHOKuFso1jYRygL7MeDFGbZFTFx70WSBftzq6eODlSzprHb4nnp/4oIyjV99aKro6WlQHO9gG3hxxCUKI5S1CJvCi2M36A2NHJ0NofGuSO22BI15N8APpfwDMNJAEGNh3PCF7C4PyxrtZXKggZdPWNDOTCVy2VKdlHSvwaI8YX6eBLOnEheT5xjwxooOJBQ0iwuAyM+OmH4edchWiCRMdO+GJcEmBcmuo2fdGyj7W0U7LAi2u7oGyOB2KNHgjrLJkqHyXDsKGwLBgavAi1BrjMg+PSLWJszbMgATpQMmx6Gp/iBmNedrdXVVuY7XJ3FD+13ipavDWG3jgYcYTdtK2X/ys6j3SK+XhjqmI33riYw6Un7e+4PU9aKQ7XBpeo8oSJbcguuPiwvdkDHZRwoYpM/iBZS0UFgGwWS/rZlwcuX0MvnqZkjejvC64DsyTGVXpDNX2Yb44Ezlsat5hgbk7uJ/TgT8ARDbMj+9ZzPzL1n0IGryLMOKNTF+d2yHi1cPswoxNWBBqxnKmci5LS7AJVHsb2Mr35gCVsOpRsrD1ne5Ei3gpiSU+3m9CjwzcUwEP1UvF+rlWcu1r3vAggsE0hWm2e47TAyWazjqwDUxMILNkQ==';const _IH='d70db8f592ecc8473db5763b1db7427a777a1cc56cb83c4e4f4e703093ec79d0';let _src;

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
