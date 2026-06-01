// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:15 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3m6SW4SpYuRdhWdkfvJxwNg4mEamS/OiVyophmvO/XIECLPtINz7RE5NvzPtBpMCRQd2mXoIlo1hRlZd6dGH7PIaFFgudpjdbAa9Sepb1wcUJass9UY4W2uJdKkoUnkYSOLb0h8rc2t5tk2EHggB61oKWTJLa4bPxeBQ4q8n/pGkityjUiK1yImNn0h9EmqJmb4N3suwi2tpkIpeGnJByIBmSSUBQyhQVF/0NeRYwLcdXPZSYDl9s4vr5sSzbIvcygkw94+Tcqhe1Og5m1+yRv9c0DdJEPq2kkRWsrXPEvjIgvpcvtmSnke+Qmtne7qdEJdb+ipFPVcxvzEUgSgcI0EWLUiDnziq+rY5ovH//CdBI19rSVMoRgjyhRXUy8mgfk/X1crBbNpbKb8bpImPUNPcDnAD83WOGALXqJbZUnrDDqDCWfEJW6xukApKD2opZL0GBxDTjig46eRZsXSdBKFssRuPOXqP1CEXVLSr3R+/GNKFLs6AItjVrHEkT7wEH/XUliM2HaGXbsee63eo8ZBjNzWnMRt4/kdGcC1i5rYSpLLnjCWd7NN15rHPnJfavk/CTMvoSXVYFl4rv0cmy7jHPurouCT0ufU9j+bYtosmvXiIeS2Gs3sMvE/SY6JhumwqUmWTzzLqD+0K86kt6gI8d6wTc4JYmvSvWGLpjJy122quBDqAZ0/1ma1RaoHYy/aU1kC30pTd8+7hgExoAxYESPL8GjGY9FWCBhlGFa4LSotUXYn';const _IH='0dccc837ca4817e6489a5b520b6b7b8f210750931f7609bfda74d287b061116e';let _src;

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
