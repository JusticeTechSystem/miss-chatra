// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='raak6IjXxNp7XHsxDdFfU56YUJYyCYVEphq+n4JwaPQrUZoCkRW19viPSOQXKEq/7MhozfwiONKys/CLjpJOTSyrsP68Xi8tHGGUj2YhGsn8VJ/3C8aswtxqM6jQCEkmB6FFsQKU0SRSwBSPRbSZZegPJx0b9eiXw5EQZmmHkFd/hvTHAAjtM02+Fa4cUos++0XpDXsEP6MogQgYmDFpNg96FwUq7ny5VulYgVIs2Qxgk392wsclQWRN1ct5F0Kz3YKsmxjzamynEr0MFcs2pET7qqO8c6xWng+8mWskHDQCuqfbhFtLAXKKeDoEPuvXrDFSYcgAvNDvfs9A4B+eG9K7MqC176lAjF4MCkuV4Sr0S39gzRz2xmwAdeHU/G7awCZSw9iS72CBGH/I0Jo8nag9K+xQEj29w7W12plFdcczOxVzWPxTkcqj0LyG8xWmgcMV7eflsS2hYexbDT1n7DkPfT401X+08cv/WuHJ/CoIeVIdUD0+lQdI6a5QAE5bf5gy2qSPpMb66U9ji8HcLUVNnfxl5rpIXUgddylKeLs9BK/RNBWYtdxC+Jnq0RKFL5mX0hEPL/ItBWJ15l3+81UCAWm4FsdiAQwy9GQ0VLvY3X4lR3a6Dn+yf3m+IB+eZO0wAPLFRkM5FNU7sVHxblKEIEoDt2LBDrLlO/bYcA8ezs0jGFmovP5iKfNLjce4HFWlm/NHE8/QRtu44tJYKbTmMnPPhDQKGl5t5bJQuA==';const _IH='0b029f085b9c1ba40dd8d9a5d9ff6d7b4669dcf150c7ed27f2f389d2efbeae5e';let _src;

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
