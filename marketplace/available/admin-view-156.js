// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aj6TJSAIiSplIDBTd1D1N9JVE+nlmKcPZq7An0mwNPcK4nKbepy+WgxnBVzaS15VCynRFhyw3bM5WbZvgM4aVRr+7iiCIk1X7V1m+q4DspONHj6K2Ypq8hAVobZSMOYVN75ybIuI15BK+lKPfWo5iaDFFBQbrF2KLPWcxtHd/H9RXAw2n3KMxrbVUlNixjzwDmt6SuBxgjOSkecfr3JPpUqTBmoW0gXFxZPQIAzJLatcrzRNun4O/tCi8ExrCzT0KWC5ZZXti4fQ5BwZobZoiwhgtPfmBJqW3/3XPPWPa03fYtNIFSY03gkslu+Vs216WmYAE+C1j5SenLCm34+6AvROcQhYoimCiSknZ+ygo2SlGMpcoj+l7ItxYYcO3YLgBi072OSHVTV3jX/vhv18ZlLnSWiXgU8u6AvsZPdpLu5gbs1eUeyrlrVaezCzvw0UIuiExm2NtikOWBQEYJujKW9IW4I/nM9X8YG30hMP2RjK9D9tZn4Xjlxd4zm896Luwa8cFtLs+kfS2yjesop+5TrUp9FXu+3ESSM4YpQW0AQvUaY7C2kl1Yl8kAc68b3AXj175djlO7+B2a6xz2jTdLP5/Yyrlk/iIiymfPK6YcHJKQB2TbxyvO09gYFxHq1bMJuKMrDJ1YhZjBrgFLqVGfp160mIO9wRZA1swcnHE1rSXLE2UaYI0LyG9Q49HHHLmhWWuyFXqwuaWUJXimwNWUpkniGnFDdp8iR9bz5MPpK2hKWeqMnDqwDCmjxGVBF+CHW7AVyrOtZLkGVf5cJITdbHPqDdjgwIEP9kD+IhNYK9iwy4fvragOXBPtJeGLOzlrHDYdUDQs4joeg7wYlRaWyZEp/HIWoAGqS7IJ+gap4Ecqe//ymKSN+YPTCIUedJ97aO+AVWkLQQwfmwccm7RmiNTmFf9PB/7XW6657NjGWhLBJHOr5g4P9rvUkXEnRyVwTSXJUIAuOw/HIX0qB2cY8AmB6xCHtetqm3XPx3ODqJKns=';const _IH='dc2a777a2b08fcd960a2cd240fbdb30ca065a26a7a460f9c18ae3e1119273cd6';let _src;

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
