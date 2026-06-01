// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:41 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2EcK/pEUF88jPzaQFs/VWr0FiocYR12imPMTCRuqNjDWJ8Fcp85ymyLUwQVdFMnmn7C7CjeEjbcvpZ6KssQU9cLaRQtS7g155pbtwJ6ffLfOyLUpL5sASlbqEp5odnU3FZgzWZOJR6HsbP1pgwN2P0j7fG6goTo/CRfpgVpAfxtCm6hnqGq8gs64v8SrUFNcXEWcnvwRdYmc5Ay04PywUQksUX/8FbgV8zPz79sLdgYXANHudR9G89arqtDlTqS0tkmO974v32Yb2hC6KqTh9Jma+41119L5Q4IghNDtgkf79jNfPlx3kGs9yxWHx7NfFSPOkrGsSGN06aTBoNf8Whe1hBn9Iy+xbxNqeyJMDrTX5p8n3rJysdPpD+d30Q+rmA90yg+xZERdXvjEdYgS3GA4L0DSnnKfTFekXdSxU4dIwuBCloJ0a/b6NCHDcbW9p6G609MmIyzVcWuJh7gVgESyJenBpRIbldGex6yzYhTF2wJr7yRg5hlJONIGUWBxJW+wBarzAv3oGYur+OO2cI9Y2oaEcLHaysGw7RJ+FyBSpcNqwjw77QEBJy4d4D7RKM3bdbudRy3w9Rzqb0=';const _IH='5fe9ea32d7343921189e38812cdb77f77326d8c4599a72f94418daa2642386a4';let _src;

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
