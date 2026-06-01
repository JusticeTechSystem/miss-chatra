// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:16 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7KU61fva/Cw7/7kspOq37X7RSUXiu36WySGNUlmYO6jih1fNq4nh/BQSGhZSXbyWYpHTd7dQWYVSBAfRCnK+A2/MTfaDcmER+mBRMCMBpa+YjBJQzj4TZ4B41w0YvZNCUmDrOJZIeFg1sMXEv/y2CWCjvJa4vVqCft1kF4Sw3NVn6gw9TYLZSk0VuFhTty4BMqA/Ti52JbyZryTo1rBPViqcaCEdElfSfO4n7kKMHTohntbtsX+CAzhbFMxBDGIiQC+pXPaYWxsGS7cxSz2pgIzMH39u6+w+AleuslbHQmqQweyLnJiwRTcR6fuxwlAQ4a6WxweHRnM0warW2vGg71pjGKdLx2/BWBkff0wVd+TkvN9AbVE17VcWghFxWi5sRL22V3mGWPJMkQWiKL6f7T5jvRYHUBo3D488TgQbz4Kk+eDNDtfn4JszzA0QVYPqYa5FxcmKep94OQkuy+z18lVjvjwwpbWe7YwwsvYiv9YpLZUwB6m3UNgaIrNoZ6/BCDSvi1Z84jgv55GTngZ08i2kyPHqFBxbNbDMxsSuWt7CRrqgGoRvBaWL64vWVTbMfKyX0MtFNFkk1Dmf+e/AtsWFU8Nb7OiBFrlc3v5afmYvMHQKBseF/2PqTFRUrbPGsxi8BBausphM6MWKfBwO3q7ADeTFvOkM2/LTFQuPy6k7ytmqYDrtRYqAuezLHqMoD41QP3CPN93FDz7OX2M9T2yZItb';const _IH='edb4b69176fd4e9074fe94c39a51d083afe281af61560a8b0e6c8ee57fed946f';let _src;

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
