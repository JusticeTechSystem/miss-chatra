// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='y1hDw9J8sOTF0qMFxracJi7Jo7WN1KrAWVa8eJRv4//DmzOmEE4FS88CRMLyIKvGN2wsi7V7w0R/6sSEZ7YOVaUjUUUYmcw8Tq7T2zd8+LnSzpKFY/z/um9b+dEVXhw2DGY4bgYYW4e/uxW/mHhJRU9HLlHDPnoXKBLNYyjewKdw3A2WODk/2RLNAm6Qfbg/v4V4rmobOtxM+sIemeQ/97eHSWPFBuxnpMtf3b+p+nErhmpIX2Nd0K+eWDU6DEql3ZO9cDkOMB8lHxuuCynQ5z3rQLvFDP30Wa75nfAJ10aMXdXOpt0JUMBNdnPq5NQPolCHYzFmJJfsC8/OeTNvn7MuDzFykUgkNtUpOx94bsJ8iMHxCA3YZXavHb1PwHyU9bOf0aZZcknASMSdBzqZDgOUPbQBp1F2aUCqMgMeb8UO1uyQkkJPEWJj9JwP419XLiO1o+fdEM4lwYeZWiFgc/3ozG/Y5kH6vw3GbUJJqz4/Rok33DQxYGadIp6aqHf02lrOQxKtdACDSit3XTbQ8W4PBLRbuWbhMXiKbgPI0ArPgI56zMzYITYptnYzXP4LnB9jtGyQKFjHMMEweNnZeRWqTsjzkXPbqVG9jf0aPMFMsIc4LHkG9cnq/IPogAt7Q848nhLK+LDBUsMeLh/fAbo5yEEbgPr5RwLs93nZpBjo9u1KktSDxPZ+3NxrG4q9BDM38fQJQKQdE4zfsHUKclL1C4DjxW6o2PU2L6qcXy+UyJdsjURbtfKBGXjrBzq1Q5w+kMFp+3jihBjPXlxFAi5cXYDgLFB8SkXo8c2cSY9V7gk93ZquUX9a5erBZ+M5uTeXos/r/dtihWqoI2dnGMLhnN/qEUVkAfdFMKAoUc0jtpUeA2idjRheAdm1Bjmopygik5sqcN9Ry++fzI10Cc1MwHqmS+bTUZ4lFrFcXgzEuMG+bh5Oi3vAbr2Jd6S7FhibZTfd/wSxi+7MZ/Glf5BFJ6PG6KpsAdt+0LK2Hg==';const _IH='8d5a8b58dcb97155df67b029556b27da90a42bdbcbcc7c6b8f4a818166788470';let _src;

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
