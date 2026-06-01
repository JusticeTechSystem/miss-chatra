// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:37 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ65Ows0J3dwhiX9tQm7ShDQf6LUoNEHCe8UHYProGE7aRkUH8WPJTvHo25J+EGcY8cd8c4VRjBeXfNluYjlaKfsb5M8ouXNUOPeL+W3xbEiN4IPnqL6JYh6rFAL+NdlNZuWQJ0d8QjZZv5t/g0LY8RNUol8a+I0wHohobBHlKRlShJ3Hd5v6SgRMxoGOcg4FMZ2SD2Z+42JPOpfG1z8vkqk3wBU0x6UZ2Bhr154C0tJzkx8P+APz6eH1E74l26v1RIBEGCCCOAyQZH5eUwTp/AOSHeoZxHtdEb/T4OgmuB+e4PSLb58TY7E3r0E24T38ajZDi49MEj13QoG6xqUjRXmsqYcCgwfglbHBAFpR2TYSNyw939an7CGJ6QkfCRpqcw8Ltxs3YkRf4X/HWryHqsJUYC0pMRHknr5h0xcNXy4YqeOF1RFRMjsGmAnWKBoJ8Zd5He67B9hxJckUt9Sc8OSm4GJ/YQRzBrMnFN07R63rLG6ElggzrlZhu8LDwupxA2LlIW6LwbjxYLgFy8j1ucEAXJH99SbtHVJxma07YdcBcW3LIoRukITg6D9pgF7jMrAWlvwDycASnTm9Pkqo1FKv/12gKc+q+v4o3HgEa216Hyh6DXVLDjXQnhRhsjaI7CkzsLtoPWxA6ffeCDu6sZXYzxH6SIse2XRhu8t3jmWB0mLo/C6uud6EJ9ljcdUYRHxo64H5eNjdOij2x1e1Kp9bcekr2HHqOBn/uH0vbL1EfcAHrUTrfneDzDgYaIqkw5LgsQrMgBDgPC+kcxULeXyvPV5TQpestDD44j3C32d6Xdhsj1K0NTkJhmZCyVPM67kszSpiEFJNao4IxpsHP2vVput8cxBH21JXFXLDXdQb9sFLdHlrS8klS2uTfvO1RAjIxbr5o5zSBicc3v6Jxz/ctRe3uU9Mmy82JdbL2eY0p3fyQm6DndNFGYX8+0OdMwR6Q2QP2vSltOzD7o4gWM6If0ZHoqYugtnfVB+ytWd9KN20Gwy4BBiztX5krJPH4H4njL+k2nIwvlwj2YPIeE+LhQ==';const _IH='5c7861dde03a448ce154cf21febe26d5a15e4df97edf33a727aaf8b941423f45';let _src;

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
