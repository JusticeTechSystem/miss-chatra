// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='y11F0V7Ct09cFwUu5aLLHdCh1/78P7jkjSAhoF4JlIyzKsDKsVOCoelXYvxYx7UwUW+u9KuguZkA+qerb2AJ6R7E/wOQyrKGLkOfURRjmJQc9JKA706ksEr8ATQV0RdL8vXzDIbgvq7pTUO91suUqZDePJIiqbvK+sSWTcGP/Bm1vGeyEgKU68w44N1FK23SJeQ2PldSoVZ19l2jU4hYTr2AzBP1HnRB7GTyEuuIUrgLarE7fFVmCTwMmz02ot1lYf5DuOccpVEb88zXpn8+hEo3CxO/1a394bxdEmdoJ7aBHSiy/g7VxLUdQ5UC5NdMnsA7FisX5EPsVKzmSMTLJs0w+sL60aNLqrX8FlbKQfbNCpewkzdaOZTtWvM3Cz0uAaD0y4D7uqtZdymv4l/7oI73cEj15SZomLjrgqho6uYYl5bvNRY85hSixsGBLK+qYAgT02MRDmJQLhv/fJCxveBy5cQFcudtXwEBR/53342p5rS04iXiNuugwoAUBGcKT6RkjRt5md71a/WiO9mG7M3j4B9Gu4Lytx+PiNhkdrsPhBOR3JzKbod9dHfI6xcbocwTjpdRSlvZkB5kwNVfwipBN6Vn1D0TiBXLckxb3pdBak3uTmlfgEkPRD7LTKY+wqtoYNPzqLByY7ffKkOuYgiUxtsnrVBqtO+tJgGBGPTqTzrtN2SXpzVnOumTGQGTVedH+Xy1iv1w7xeA1JBOv0gdM6G60Gsi3LkuTKYdNr0efMOHo1I5yusItb4BNCsqq8x2TsNDseVijoA2/vd5bHu8MMzs5tV/D5oW9tskg+ExYOp+or2TRK0Unyi7LNx4Z+vpC+BSi25AOWszKVzPIZ4svbfELtFpSxj24zHfKMHGekUl/i9Mf+6LDnPVugbAlVoF/ZMG5kCFdTT4XqLL1ZOl76Ayng44ufm+2Gj+x5FDhhJpMhIm13tjQJxFNey8kP4FzymD0vbMJytIKStzr24BEGCh0R1mt/zaXGcSqYDD/n9AN5VTnXpmMwEF+Ou23F84iA==';const _IH='3aa815f330f591aefbf7d59c9cf8dd52f00febe7f86c477db1ddd350be9273d2';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
