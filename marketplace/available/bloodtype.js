// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:18 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1c89feBAUMX3RK/ocBbKHmSVzl2CQ547z41/BsCJ7y97rtefpND0avim+2FdVA+bYwU2xAMmF3rl3TXWs5neiKN5WKgyQmNk77NpQ7rUiE+TE50tosZk//X9JQGmOBnas25mplUTQt6cOCxvA5qD0iGAENh0pTRphedS9yrm3/lfMc+DuYcZSKky83bT7xFDcNwZhWzCTxIbuWSkKoNPLPWrXMq2iirgnb5088NXzgdVtSYWCkRT2RcRNFErHcNgFR3rnE7CqHcTPFFGyv4WxBWat4xZtSb2wRmLWD7oTkNY6MG4/j1bBsVZIRhSed9XFQaQglegjlmRmr4FzIv8X4EhQM4FGUioM0L/YXTifDdmpLkMaOw9G++111GCLcER6s7dCOZL1d5kDINSv4rDi3MJAUi3QDvDNjdYaCxUyBqAJr+7Pp+dnj9LmPdvMx46s60HFW3OlxPKNbaciKRNbio+ozSmudvJNDs2XJbKD5wcAT7Jt9VCg3e/1pSdbuvCrKi4z6T9Pv1ZBDr9Lxn0JnKbdh6Zkj2v/G2DaMXN/kTI4/txxOU1qMtynCQlUWB617HLjZdRxSL5Hma9GqDznsoboRMMC4uEdEEtCDagVJIOmRGZzrRBdWfKgru0bjQ55cFoE6NLL51ZaX3GVBXQ1Lp6RU2oWrZORZRgETlS1W+Oo9Jpx4gi8afTTHtM++qKLB0Adcq3o452ytwEjctGyG0pftEgBTUj/K7PJKbgPPr7wZ1jn1Ye11JN18LxTUkrscmRP8Iop3plxcSLjgIh2nW6+jQQbVRWr2nrx9lXGRzcJueVQy/eu1+rS0ZEfp3S1Y7n7eFSSkC7sipPfsdy1f6IuKX3j2HfSR+s15Lsl0sLe7Px7t+hOPBZFf7NnpoQ0hBB2Aj2O9t5UEmLE4AnbFADlBMkttkzjuhBsWnXSS5g4pxXF4LuAlnAHRHyvXhbvsv6pAGV/BAdQolj64A1H8lW1p4GGtW/jfi7Jp+iwMWFaxkPiif9j77lXtW41Rh3Lo2fJ8Fn/lW+2wGqmMA3LEHqZbJMhsbVfi2+y9fQvjDzvrTEUYQ6DdjitTTisVk1/x30QmTR3Fe28rW49N9mdkL6c5iHWPb2YpzRArScCVXWAkl3nkpBJAsTAszjpxTxkRE2CV2ri2qXBFjSFcIlejj+ResYpCE8yrmaZ/zy4jgVNLPFINO8th3fEzIgnkKQ/cHpUos';const _IH='f0fd5d5979a297abd723e69f27bfd1e854a41caddcb63a92f42eca3f256d9347';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
