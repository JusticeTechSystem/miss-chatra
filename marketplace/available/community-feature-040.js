// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2MrrK7U3Zmx+afnM0H8trzsEyMwPi73a92nZwTbrvTWIrPSN47svW9nYzW2/lKzB3lGzyCDqv/8jk2fn6dN+FV4/OD6JO/tMAbaOSFlpcrSivOCYtymxY7icac6smVurxK4e+jU1zL8k08fm0W2S7y318nlhv20likqIS3pdUDTAQMIqjFCMCLmGq2onmwkqrwCgVws6V2pDOMV06c/GaPjywNKxsJDGuMUziV9Zw100hObDsFcVU3CJg5xRmIlbxTDuUGnbHCdI0N2cidW7Sb1MdrDmqMgK2aMbNHF/ezcRcC4gK5wa4ysjV0s7B7/8dLRYwHbwAID5SHxB9DbweP2Xapo0JxmBfifCUQAOCG0UrSLA7JvrJqbqeWawqlAQtpDAj9OtwGDwMM1HFH+TDn6xU9yrfyz4O++bjzrxjQMjx+u5RHQ/qTqxcVJeCtTXehKgwLvSwcG+gDHyZwD/DXmOGQ/lZsqLU43Rdbm6Y8FSL5GgrFo3Klis5fO7Jhm5d1eXW+/XTBtIATOSe7BT9x+S7gRwo0BEdZbVKbjDsJWHjLsA+3xzvwUy2zoAatR1QSxdAGaPCX4SBoszQDRWLc+hWXphgzzCTC8HjR/f8w8Kre5ujt3ffOAbUkn+qKYmyVaSLn8eYDraQcLdryN23hAxwYbr8t1IGbqpTXyvXV0jsd9ctgellfYBHHbRAcFNHCTgFlkc0WJU7ZBQStgyouTAvW5cEgA6olGPDvETc5M0ljbpRWM=';const _IH='a16611e8035ecc6bd181f7de9fc97c49774d40d4f48072bbd743c08625069e56';let _src;

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
