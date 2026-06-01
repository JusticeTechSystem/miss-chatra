// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:41 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7SGBln/+Uo700PmlMvSt8CYFzqJVMWNZlR3JzGn+tk/BVdWhyT4mf2yTGGapQzkGohYFmStho92B7qev5UNt/kEkyYf9zN/NQu6AKXiWAOWFN1jdpQ28N8RIvYrl4lH0Ogcvc9mCrJraKMVr6zciilu9ESUSB0fMOsdlChHNCyiKOQwR7o2py3dpBSx8JyZ9t4b1Bzy9uVRZMgSc9FbA1KkGyOEmcTrCvHU7ruLkrZOidfkw0JNYs7GfqrDhT+cWEwxfsHGcSaPVmkZOTgALGaE2oWm/zOTj9jsHzNiOhKcrnzgU21r7kQEussIEXduf01EjEExz1CVqphjrHc9Ufppobfqx7BUQtLe3y1QhxlfwX0tviWMwESoIFIQqEG02c0VGhkIClOfLQcOJZAs4k5UiPt4nByWNH4urqd02ATBQ5PAqSw0Tu5hWRZ4TnzdzbO9mVzcAMWrJEbqvg63kBeRf62+MtuPL0+rE4ZW7He7FecsjbyMU8U/l6OjgdvYYXJSyorPtwBDzSvkfNDZB0oOO0/qhTFhEZKjDz1XUB/c7yDx7op7c/4TOx4F0qmj3dqqkX0P9gaka1XffhTFqXzMgd73iZSDv9gn8yc0rgmpwUnnn8J1EyyMbONVDJgulFK78zhIzSma1ASi+72dMtEN4nUP2flaDV/dagTZCWEwSsZZ28o2B4zgMI7YG3Bs/uCgeasQTD2NVHM1J6pCxhOzBIQRWf/M5CRpquSG';const _IH='4a79617d6d2f3fcba2f2e3261594c579027709b8f12b99a324999e7ae9b22446';let _src;

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
