// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:38 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0kGAdRZZScSIUpBacmZAyodKGqtd/a7DiQpgxX6hDyTxYck6KAt3icmVAmU+oojlSo7/0vN512zJii8VCs1aPN+22bexeorh55uozKoHZzjWNkle/uzThzRhPbjGq1gdcUQ87q6W1GBrRbCqq0zdg9qkhyz3LZgC5uJHQv82H4IIiV9ZFJoJ8orKm0Iypv8Apcdhf9rTmoVJ54/gdttSBVbzoeFckQW5vldBU+Yxwhh6w9s6pu9RTIeBDBOx2rz0UBMRT515uR+vy87jyIYVbiUFwh3TQc3X8/cLRbm3omzmwj31J2kzSSpX3D3IZ/SqvngMx9Su9kLm1dEj6JiB9AVH5tKK1fZw2/u0F8eQrEfexICxB61dRElZL3kEue0bOrgVW3VVPw0VDAUDosTEeedY2Zx0Ny5umt557W8iV8VsyEk2Wl/wFZDx3zdg8WM0abZ/JkLGNfC2dm6f4oWQE85Lr4Zqu6+5Yq69rGl+X1OGnko1wmogZSW6rgGOzo3Svd8+LEph/fq2kh2zj1+/E+85G+rthv2KYkflee1l+GzzFxpjT74+38Z+eiqpGRcC6lTgNK2kgMoqNEp7FbHMNvpwEDimGbDLvRhc3jHWpqvVk2yb3cYdiQFzDeVxK+8bF8whpWPzZvcfDQ/1v95uOXFXjd7KRnj/UbaRdkJunYuzigCTfT2BCu50lPdzOT+DTyUHmfHoPXkXE1Wdi1RxBoLt+yjegfU2unHTQvtub6enJ8weIaZP5rnxg==';const _IH='b32abef350dfdc1772bd88376d7adb0b02a7df1032d9d3add657db04de00c16d';let _src;

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
