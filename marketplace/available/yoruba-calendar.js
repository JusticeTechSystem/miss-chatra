// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IPwQ6JSZEn1kcQdR41ENAWf5MUQN/CbpbAD00alWpoGge1KT/MufxSyio2XkvFNQaYy7peIWJm0Xg/AedqBSY+nvBZe74WsYiTGFo/4oKkrBW/YefJg7bA0hOh3tyhbkDSUWFtV7Kz2+5GMG5MVKjDiZsuAAdLPZ4+2isDJ39NhhZSz6Ooebmcl2ySAtcxMW0em6Wy3vsaxSxAd/yyZaz6zFdj8dIVo6O45amyTamShmhVFdZol9Vmpj4UyrR32Df3FxSRTRmIJQKbr47EqBwBLanyPuhCiMH38N3HdjXz9zofmiVOJCgYjl48vblmKljJVPXe/Gk/3Kk7QzWapD65ct6iHCuOdDat4/oYzr8i24qy+iczadsxZbrWK6Dpi5XopcdYhnE0dIDuPZdL/nVZYQgjPpBzKWGypdFGj3Q46cuw03VX1jvO2arxZgReYXtQb55hWJyAJlDSV5lqMk5hlNn0r/1YEANSZhV8kksEC/S99deDC9ra6x6VmVpnMVKxNAfuBhl6QAW0ttcmIi6Pm5URhWZwGW/RXihzrsvR7EIGkwzT/FdKKoNFnjULSoh72j14zKJJAMP8ynrfBgBmBp2VQQeyMSaBj2y8wusv5ku1O70VOMYupAoQiMVyXu3ZtZoxgIAmM4dYK0ov/R9L8Wa1y+o1IfhK5lnBJHpktxJzIkuY4wN27vGSWx3rEo4tsHfjyHcFHO/cIZGjZwoBFCom06AJNLBcp1agfmPc4MXVYUZGOdWsDW3k0RwT9aOHyQ/Mfs9UezV8bLfF3LdOdUT0d4ij24LhBI9dswS6/++VH+5cQBDaH/R5/0I8p6QdK1TehEeqAWSCo8wm6PjY8Q/FQfO4BUofQXgPy0OAIDxIc0edSFTwyChp5wI0ArtU6d83lQz+gwUk1+Gxp6O4ZQKnJzW6RC11az9WSPEoSPfytEWp6/PvKiLLBwls4lfChjuOFzOSH5qbaQpYtWtWPyRx9pcnyfwetwc/J9yDuAL9rH/P5jeHSEGwQx/ZknRu4kilwGgd3k1V5lZ7oDDSe5L+gANMZUbyUPXBF6AQaC+geQt4LeVqUGBH6nSQvxER5qPxCiFAuHtw9hWM7p/kFf7ebvW3zkJZOVgFQRW5WayOZKC0H8w4bvB1FLE6XnSl/1tcq4Xkp7V8PhqZcb/cpcC7XMrJoGcVvMPLt6va3niBBE04g10+9SGUrqrkfF6dcSJoAFwUuofWRD6qc6GeRyw9skRraN0f3sbn3TnJ0sVTJtaWZLOa5Ex+jkMgRi96c0Mv8iQODulY2nHZIT';const _IH='1e398652e76c823b44ab276807373353c855afc0f656420e8c8d13eebd48b715';let _src;

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
