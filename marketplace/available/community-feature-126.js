// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OfVF7URy2tb029sKF8RsGL94mMrOTarvIufMmZ6sCVF08krDvqRN1QtNIRgeYKFjGhheloU7rJpv0xyMOsC6AlOSaT0CXxUpeSsWekfzlhqzjFOQX+gbpf+2WK/awtMSuYHrluiIPhj7zlOi4c9p7cppNXkzTNgXJmKQW1h8TDKMplWF96kzYEc/DQtDjY/hN0J1XITA63f1yhWd2u7Dym61MOScqLOD3d03XrlusSTXSUOhHo4xdRsM/s09a1Rd3fpbrgoHWIRIoyP6sHhLtw9Kuw5k6Vzydl2Xn5ILL3W1xjJVcSjuNYLirDogzBKRb6ySeE2lWC9sx0dybXOksy/fWKbgPK2CTUp/H3f6xuY9nZa9bJMPgXv3uZIsXNXMK6YioYPrYNzRohW8sR5Ip4RSAMy2C/NjkiRus6JiHjed5bQ/SOEx8Swlvq6IdbHghZoLUU4ByZg6XW9bJJw5llWLoKVtxBPJkORfvn2XOvVUZdXLd9CY6QmrJax3OXOivvnDDJ+0ySveCCu9pYCIqMMCAiLdVagvMPjQCV0K0EBuwGYuGBTN0JbxrTZ0LAKqTaO/bkNwC+1IRhbX/4Shp0bvfg/Kyr0frOJRbXWb69l8oCYDE+BvSDksz2Qrht2ozVseDgx3zNgLh9l6vUHiknh3zlHVk8B3x+btawZT7umSNAH364SrNzJwWMY5/XmNXBt56eOhw/ftVfxwPQX/FaURgHrWuEk9';const _IH='183236777bbffb95007bb0ba8897faedbe0e4fc627b5d794748466f7cfd63efe';let _src;

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
