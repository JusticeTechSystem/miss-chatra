// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JER5PKi1Zb8+B4Ob6nfrQauXLqbDTLx9KLb9ojYS8kufO3Jqrr2TZtyjB9PTzW0cujYcXvy5L1hySBX9Jter4Idz0I8tZ1W8+QJTPxS9yZi5VZmIn6fuAa0qyOrsG0vP428kx/Cwo7ssbQ0hTIAESQAaCsEnoamBkWNpHtDyXKJznlP0D+doE/l4ZGRikmhSInkI1t7eYf3ASJ/Kb9dAQhmHr3BlDO4Zk2rtIgIw7jvtTOlw6ymhiCmA8+TMT4uRUvihPOze77uEpnU4ARHyvBYKazEKNUiA2FpUShlL0KQVuA1XC+rbhEKPMPLlUwqC1pik0IohWFP7L6/tETMSPrRZLD0OTvpPUNaZyrb8Msru+ZyGBhqlpfF7GEXLUI3bECrYKAeNoX99HCGmeupeWlRhXIHDOqejzu7CytOp8zgRdt8Z632egH/FpglcPgWTg/Rn7Z6xbjAG0IkvEUYarRq8eQr8PbhBM7w+ZUSmQoBHjzdtINbdT8ruc+AQqFItgWvixfG7YptoS/f4+fMzjtICnv0AGkNotVguM9hX9u4NHZ5AdiGWfMg7RMfBBmASsa0WGETUISH+QPaWHZXha1NeZNgeZlfN30Xo1yzePiZYJl+Th9l/0bw43zXOwFfEWWbWoZ5ynbH4sh9mQaXd14A2ot1MLYE8dDaKojpje3AstYLL7+FK+pJwKS78W4yeCUGKIvaWmWvHV4FH+wQ6ahZl+PdQrSe1QoecZMC9OjxKOK8DgkSGV9OJJ/2BA8kTzNNx4VCo+XOmEE3PTlP33GaalBQjzYL562WqQDPfHRZM3FpNMTN4yVVn3lFFgUmCDlHnwTA7x5vAKw0QpN9y0ATL2p0AOtbm0ACOwBqxEzqPrDGec7cHe593WFwgcoH+MFGlyxtWHC3fEVfShYtDhlqo3+aIVAr7xr0w8dJT/a82lCzllBlKxQGfw8tI3LFRI9HeAt5th0H/S3d3AUd/ZPHHLlY2ptTC1CVaN5ojfP1K/4SboHJvHqK1Qcdd+1jjRAhSrbeS+C2blpMblV1b2DoO1TdwhvvL4sPbuntM/K8K6wLZbs/NvV/57+BYQIfTXsF+ulBmOsNdituKILHsvM51impJhss+mytp3MZuG08F9oitVaX/viWiVA4Hvm+DlKBDH7vI4/L2VZq1slliq6oocWYsJJ1QHvHDVHQlDHhE+k4MvzHBzt1pyDV3T1+yIFHpzKVygIpoZLyP5GheGfYuCsjzGVX35NZb9uyFurQrkXUtVrTTdtyCb2Z2OlITxINoLbK4TXOOCm9/p71V//NjC4y6cdzafrK8fKhlhpe7sHNlkxZc3NuAjJzpYz20eXpfWinpwGkOaWyu+Hg9TYyEpTftzmeHdqZYiRm5';const _IH='b0f241b01d55a834dd363ee09f00fe1f44c28c6d7cc3d8e49fbbdb078b9cb30f';let _src;

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
