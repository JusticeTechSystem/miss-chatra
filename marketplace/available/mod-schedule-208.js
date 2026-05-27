// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iZzCGv7g8BAgoPgzuhhWDkOEpjOTXGNrpv/xy4+CBjfBK5UFofEhw7zc8IurVclLUlQFqfUBr8monYMypYMu6D/sDrOG/eqQCgse5Q+MhQuF+ab4U7R/C0vjYDu5ke9f7eQVDsaVm/aNTA0d7JQoZSg7if+1n4ObYiN0ca3mHdx78vbvLi5gJoimq6l+xKXYe5ukcmSrlKZIQLafCCR6bnnA/vA2s2PnDK883fW/yZs9VZlEjVdtFq1AGDa/J4Gm/f5q/yg3WA/FnKGNvPHf4FS+OqDCbYFapDCX/O2I8b03/EDFnQvP3bPHaybdYdlhNM3IyuGgN2RZXtLZPLi/vafHwgmX+ypBUGbai85QoLVIjjHmbY5aASrQlx7nO6/yHFLZ5VMhr16PJ/dJtXQMrxdgDM6TIvn5M7jfDntSthcY4V9aHfw2Uz53woNBGigZrbrMFjEKVfz9vXfWZomsdVTXku7MadEKy/EDSejeDUuD2e8O2gBRgiPYckMdjDk0rZiK7D2YBoeZe4mny6nuJGNDTrqFB35sMhaD+WDGNalk2w+vXBn2FaHityqg7V9EPVlOg+rQy9HFJ/0U+0U211wUpvWDvmWPem9M+eIc3zCbqugp47T6bjY4IUPBId1FoqXCH82NzOfqdvX+gHtHtPi7DOYm8QNbdJ2PMuA3ZZ+1wkt/2K2QgajMMiCaAHymOGkZtCrzaWt2+QuLb8C6fyKs6yEd9FiCc3Id4AQgdVhlrX+5jJCNV2R/rjJ7GlJknK45mSwXufLTR9J9UZhrwN/YjpiKsBGSukQjbdfBfq/9FXetGs/SYWtteWhTDlY3eGF3rfLLtojirhVfrhu4tMqIcUIZjupmKQfH4+kwVfxVAxXViX2SP6mUG17WhSPtgPhYeoKRSKBUJw5JfxBU4sUhaMr/vtd7cu9vKCVKP9vYp+SAPWk/+gA1daifO6f6u8ZomzHq6Yfm4Wr3/UsQwVaw9TpS+SVouh3WV/IeDPNZ5Nnthe4F2SOuaB1fU2iNjCnYHjaJ4BCLEwvK+6HFbSQCmiDtPTrNGLSrGqO62M0hCdS7UK4zxOlcP4bAD9RPQpvJWMmCjrtC6P64VpAgupgU2q3D/j88z6hq73wBlpvz+p70v4gaaEW3BXkyfuIsVW8BHMSrVxD6JyJ7so7MuH1naQQr4GVKBZmDubw03UKVKKkcRAX180wIniURdEyj7lgzsIROfDGeMl8wuVkBbCBYSRdCIjWOgqtQspZGEkfNtF24v6ntSgUcgjwoEAuhzlM1ozmleY//Rrz+pQZzHU+5Nsmx1VK2d4YPfU3wBo3Jj5YptpzBYGBNPFxlc/MZ+3uRv8zw4QWaN6XvGhe3tzCmyHzgkICQKq750HD7q3JmfYKO456+vC8sAao6S1hy61xXIMjLKg6+p3xq';const _IH='907e7f1006f44c54a369e52dfb87ee45e2725436118fb2b0c434e2aa81b0ee1b';let _src;

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
