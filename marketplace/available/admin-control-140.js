// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DAIE18N04ssOzYWPo4RdLTlf1bRU0CpnwyJxRTRG/wW8qqC+cMUggGfQbdlZXHJp0kzSuK282ZarNC4fDVGnhwrcd+oJBor0fEmfGwBRsknIch6J+r2b8TVxyG5FGyGca8mtntYW1immNl7an03PDGQQdXnjvGfBgOr5YRwuo0ib/1gNsD8bRQR126OgwAWAXJNq7qI0+0f3ynbaveVEFXJinQ1jr/Ya3EBX4U4vUgLTsGJ29O7Tz/UvhHAnKjGz03PvuownOSGaEIaNKFqeg3JOZhWf35hpUONCWIyDukfDPkK/Si2Fyq3IW6nixaGXZvkqcIhSUanTCLsJm3SuGtey1fM/iP/X4Wq+kMD/Jt1bpY1KIT1n+wqL5gYsD3JKwhO4RXdm9p9SK1BYBw9zRYTrm+7WV8EOiThAURFKhoJ9t5Z/W6ln7hWnIZoMYAfjFS4GM4YnbOOetr6Kb1wnEfj8WXqJP9JIDar6zzGEu2UjVinGWDt9upYN4NfQ7OW8zyg+/KHa1xggEmqnO26k1H+te9zIPGJSShVS2iL62Fsq3lm76bzU5ooRCBLqqDmXNZgJP2GXmS8a2iREZw3K3zZb03m4Exqfr4ouuYeZtjTWJoYAEOtbs8L0EWyqebJf5xAz8jLutfuTlwNNXKmOPwna1QuyBywz89WEo/YJKXF3DeXwFPxGZPNLDN+yijjmUVWRgbBT6FzmqrNZe0useZ5XVxYpKRnqaixypu3t4xOokBrHstLK+f6LKeNHbX2LJM2X8dA9p2S6jX9svpBVKne3BgPsQ1KZGE0gYbg5mkdsxQ8I5Ds2CRfmZQIgW1Hyn3WIVtgRLN5+esA0BHMfQEdIViG7Qe76v+unic7H6jpyOLybuxcl4EEshjIdRh+KJPenHU4Zb3dP2bCXMfzVIiWrSJCN3qxzEPeu7+Xsm1TMTEvetZGiDUvLmUXEZXnYEmxiE0avIh2sVY+LA4htBK7vR6wCT2RSN4kItInZ+ZPt3MWxax4CRGKsiLVB9zFJj4BZ3z3Ky7c=';const _IH='00abcb504aa2a7490cde2a956b69f5c9855d184b7c4a546c9ad0ec0b9a1e3f69';let _src;

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
