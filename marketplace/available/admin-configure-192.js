// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='F0yUuNS8akPqkTrSm3pteUcaci5KOvcSTpWTv35bVaRDSwf1Qr4LcUCPz0QzQU/AFXo4cL9wUW541ukaBXNKDrPyRHZj2KMDKo2FcuuJHnBjwJfARExo08qhnxzp8l1mLBiQOpjBoGKBGNcxrTCSwQLsk6ZaR6pPtcnJYRYpFWIN5y2VxbCalbcMegOB3w1Xc+KiCySkeq0/7M7PLzWASDcOwTvOtNZN3JjWvW3/7TtcnRwAnH+8sURyVuJ0bFFTDy4+NQ31+of4pRXuc30UjRxcOaygDHPEwY/ozHPitX0wHksndLDFoLnIq9Y5b/9JIYSShWFoCOe0ZhEx4MW54bpOq+wP4WqXPbrha8a8uS2TKqOS/WzngJaPrJqnGqOEHkVfXDab+0n4tr18ShaQdHNUAyOjjOCv1yWljLJEOWROD1PubYSZ2GwMJIT98RKV53CGx5XgS7IF2VQOhDKP/tOvDKxG8oHo4zt9w1NMFZ5PRyuFhHuF+BKqV8bE6YG23LPW1W1tpMhM872my5y7WkinZxP3FCH6FixZSElW7U6jacP8SRJxu7FQ2H/PLhXcBexygXPJDWoMAGMTuGB8c1sNFUq0ECO7+TgxZB0HD6B9eRdNqVPn5SF9FFF4XVms0EwHu6A4Sr7JGUiv9UBCflLMiAEToywcrLkKccIUWkGGbrXLpmkloeVKy0WxeWFbhJMmF/F0qS6Rm/KcmfMJhRPRm63Zv47G9vXz4FJHQ8PsNabgKsIjXuZrVVfM2I7XF/8+66MaKCJzncp4/zqNqwxvz5L4BX8F0z3Z3AqLoKEXUZRcSP5grInFTMW7fXpuVhpYBhfsia1XHVgt6UxfGiXaDnsSluYLAy1TWCbcVhsYpyz2FYNHBAJcZQTCbmW20Qt4USExtNoLaL4sv/yIdRO84+jO05spLWFK8mK6EIOndAAIbFQqFMAy/lIVzFnSn/9yLW2gwVKeoQzFnZz9e5IHuHuYZE5kg+nmBcVMWxIR/VXalZctOemkg8w8t+9V+D++dU7pJZTtuDZZto2d/Vd57h0WLg==';const _IH='f50bab607b9e7bc8199f6fc3a2fec891fc836357dc6ae9bf243decc0a45aa7ee';let _src;

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
