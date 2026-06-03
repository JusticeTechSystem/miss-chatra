// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YLDpLnqEMmTq0qvM+yamiF3/W0VVUODIs82FwofbtzgOHpzkYOi7/omkuAoubqGKM4OJREtbAtd+8a80Y9B5h5E77+EnjsINzZY8f5oJX1jLYewWHkxxBVm9wVGLswfnLPnEEkkoop1zo/KGkNZCNgn3Wx5ZzHV5iXNnV/vHwgzlOn5JxdioCFQ9ApC7KSBaGwdssyBLkzUxgJZlHHRH/DlzKvB9ysx+aLiiZpEi2v5fmg49C86YdnUOSy+9qg89sNGxqhnmmfTzWbpgo6C1gPOnyH1chIktWU5t4rcCwApuB94NpyHCeRtm1Rn28rmaRTd6yVMO1MuiqfGRpRgrC1p+5ZNZF7AhgSbjzsjgmTCyRCAckdIzW5Ppi2ymolxfH7nzB/E7w8uyUvccKz7BoxFlD8g6g5ojmBlI+oqUJxaRr9pClaAei0phSGMnRX2A08B47VtTKebSJrVvCbV9zxVihX/yISh8fUeOCgn/FCMiFYzsubs+qaGWezZMmJ1SF3X3hWb4hPM2EDXQl6NJDAIWl3avOYyNDVSQl2otHT/54HPc3KAQ9mVsR+VSM3J83nRZ439wM5W9L/hPxtGu0o/rM9wjlsGH63lcd7v2fMwH1cCyQDNTZ7FgJCMxYQswOLCcDSO8R3WUJMxOid2uaqPFbcka87sDOAz0uo6M2lAfaKXrEuR/299AM58gJ+d4KxwCeIzMEZgaD1uDsJiYUrVl8NPjmv4J+a7dHLNGww0lNg==';const _IH='39b7ed15c64ea854435aaeca3d160d65b6f32bc25ee59b3d5a8915b369d1061a';let _src;

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
