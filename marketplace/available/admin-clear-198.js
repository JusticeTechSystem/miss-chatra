// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='W4ogwOZ5PEQF3ftXapd0SB43ZHh20z3EsI+EvdGcUcJkvU7l/4aWC7ZJqNjbS1RmHwKahJMxBvm58dyA6H+15fkhnmsKc/7l8iUdCph9i/ZkDpeQd1oe/m9p6n4OCSRHkj0NkIX2ns2obbMQRV0Si6ock/GIOGOHYSMCp/hVTiKlKvrOwR+xEuXL/gY0te799XTo3SyNMWVyryBp1grdOF5gYV93ERiOBIRlpY1OVKqtE73GWaAko2Z4eFb7bbvgpZpmBUoOW3H6m2aR0rxtfTJgrQxxRgZCPlTsg7/Yy3lDa/X9CZPw5kX5TRtg15qJ6DUcEhCRKFTaD7SGttzrvBrD2V7XulBS1cQRdwqJ8mLBZRUA6Qn83LY9R22gCvSYGOOrD2wnT/0eu5XP89nK5f75vOU6wqBLPRCgfmLL5+hudszu5pdwYkJuP1Fw4j8/lsZ1UPpxlaqCcmYS3DLTeHi7FYBKJk218Sw2GUZrPL4JGFZOuLWvXynM3HjZefdobLTmdAqarKPkSqTB1mhteQxRV+dAhxDFKgkg37MuGBvITbKpT3OnCTx365OLOEBm0MauQUFhwlveMjmCyTIofKGk8Mh0eBJ0vBDSq7ChyWuYJb1KOGJb7PQix5AhhlnRQsFwgVUyMy/eY/AG4xGXoZgHSEIriM1AU9bwGlLCW/xDRLWwFMtLCrtwvEp+RkdwmzD3DHqF4J+KnnQuvfZKd9qqyBwUtZgaOw8Xj9qbE7klClT+C166swNAx849KKPnVUOEqQ9joCmQHi0T2Z+D3pX9SqGoDcCRKLcyvI1YpQnQ7MuDbQvbgzx06wuTY5Ib6yE9lBQpUHhlRpoo0JLFll+kvDc0OZ/YzdafaYO90WwY8K4XOP6To350Lg/OV0HoIIpdkKGXJhjLu36bgh/myMKthAY/h/PDQDOGCoAuAwxZM1DwjSSyWLRd9tHAfYcPxEl2PyRG4zjU0B+Yfx5zgJh1won0xP/w1ugwPILHMja47x1ra7a7bLeF';const _IH='c60bb0b057f56541316e658df462e4a77c7db1adfe451911cc4012ee60001ac2';let _src;

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
