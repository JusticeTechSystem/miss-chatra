// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xaOGiAM1n48bRQEZzhhSUe5fzpGWnFbFNjjgZ2COMIUqBskXIPbHjGJbOxM+2eTr3mqsTwPjUZrGorScbXAOx+fEGsuOGXusMmOPYdXy1MASbYNFUanUuQeEu1aEWwfjVBaHqonGskYcQHsG3DIHvnaB9hN4o0sS50z35Mpa5PPU7MzTxCsXfUa97hLmecI/8DHi9OOQha6d4dG9kiz6RMUXLl1nsMO/0ZM9638sgQFVRJrYO89LRzIr/GdWFZKRem5dMpeOUdGZxCBdSibGPXKDUDfsOL/A3jqngH1F1Okk8f/yjVJggl5iydkA2I/jet/vSP+TJv20XGiUl7Ahik8lZxDlDj8WPnmCVo0LYNmk9kI2qh97TDk6Mv9/yUGBK5ombcdpfDDn7ClGnQot61q1uw7Q+cquQyWYZ61/ic41RoXiqX9Q9ClZbh3eDzo2jUqIyWqI7uyIlBORVhQOxKgl3GMbJj1ep3dFrYbse3tDfvUvAHuZ/aPa99pIqPdWXdFFi/6uuJZKfNNqkbkbFdYsMqcwNwKklIO4DmKPqbGFxf/tii2xMfm5E7eKtdT3+mtmTqSjNCK9OMmD+28kBnfO+ultnDbeKz3BrNHOLuuM0wAjtekkzx2YXrWrtexQuX8VU/3rhzE7MTBEoMi9FixvqAbAtGroMYV+3q9JM9LZw7/sqYkD8LIM9ROi05KbDuHWDk0npbny6p8F6+NFGy/ZLxcDXI+2HE2ZGrb3ciJPktHzN5Hr1B/c573k5c4eUSBZU+biarDFUdrifdAnOIi5bvL2Sthi6pBmjQ5ahmy63F10lDbZ/M3igtJ7Pnm0VwkjpDt/nY5Lm2wtfZP2L4Mcqzs+sDuym5SErEsB5xI3smbMmcPAuSAJPmW3RqYqxXwJ8/U0n4AXxihze51TyoIu8NBiyd56Qe5MFzSfghaqm8e9Y4OTt/0CG5bJ5G2SmLPEF+ayXeMjTeGIycRFy04N9dLJAVwhNZ4BnuYTb3Pd/BwMxRBcbJBmGv5bS7Fxa4PxsPPZ+pzt2/OJlQUJeLnnSsiWjMieF3JdxFDcI3wZy6mtc7AE5mky/lTpAFMdKF/tPNCXayLjJK/ZT2nB4SP9Rp4xXRyeYiZiZ86cV5leX39lpJSufWrHFRV7oN1c2bDqj/F0dlWMovkmcjfyARRZdFwge6guYMJNhgNkEJ7C/5MVEOelwMGx2Xag4XBC8NMdJjAgisXTaFrxm/erA8Ys55nUJZs=';const _IH='4b53febf6129982c2a9dea49469cc4201e83917f24807778a76bb10b13e70361';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
