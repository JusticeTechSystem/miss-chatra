// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRGusMOFFzEP0dBz2YULDbiwQk6yf/hHRGfxRx+Ai9XJp58+ZHddeTEwUpchHFI5mAv8pFzlYXFo6y8Pg4vfI/dDUGFdZzbdOeMH0D2CLEiCn6SyA76FYp1poK51U9nJPBPf1DKcvfEln6MaDKj9EDsv7Qi/oA2yQrYZ9YBsqW3JyAybltBbWQj230ZHAOSerL1BBKTvdiTegQW3iLeVEDgaLZaehTQPQuu/D5OGRCSlwYwkJVbx6RfFJ9eGWbJPgRds/koZ88hLJGIn8RaW4eN8KThBwv6zp1TV1mhTu05Gz5ShTTRHY1PRvSCeYe9my+cSCXXbrMEnpXLkB4jaz98cPxJSu+0xOBH3Lk9vOCHkw/eppCAouxVaeCyedx2OMpIY2f6lNKNicJn162Egu3/0d/hzOdRjsYCz8sWE0RsKFwp6vh6HvZoQbkW79m7dHkEMviC3fckMq+T2QOgKAQaQ155WHtH9e7z94HrUtmBd79XDhYBpcvkz7K/R0FTr2RkAbDBwgtzmzLo11c9/orlJk046yhdcCwsK0H3BzIxhK2KSFPfSf0HUFFCsBQorAF9C9F+urVv4B1wZgj/90leRbVcxFnCknWjXQm/zw6TPXidjksJBBtgFdNDO3HwwCpOK2NHbesjI8J/GEO+ND13vwNf9XulIaYPLa3h1BMxG8KAu+GESuAURtDvuCBcE4ILg5/9nYowjVYI4qUJCtydbkIL4q+YPRCxlQNRnjn53PBL3N1E7pWozRQHU3Mie8CKxlSc+KlC0tPhFojDZzg4xHsOwPgmcukQTwk80mFmy6D2Q9ZO1EvnxcaVd0yFsEzk4BFLcujOw/K/k5NqVQxbosaLjVf00YBILVQZWuSGfi5bCBlURyF8ENE0Hoyy2rIBKdBfBgGPGPgmtGyzezi0d9mFfkzn63C45+uAlQuQmtFOlTDFp8Gnw02n3OwxJUq7zWsLTEKd39OCz+4v0HnWL3WYH3vO3o7sIXiTPblLyocZ/a1wCMKNqZgSRepLQ3bx4g2RExpzhdR9kQDP8C8q7SVO2MoiZtYMTPwgahU2Wg==';const _IH='b2ac2d810e0a9072b2b4eb83a5d0bcb3c1971441f9e731bd347aedc1eb6cf275';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
