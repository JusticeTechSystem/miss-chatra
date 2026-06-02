// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XCr1+Xwr1var6b5yRj++pJiTaL9p707qN/wRPdgpYViaYfUq9npbMndRkHebuuWoEpOY4a9wZjRZk8VLOgKJs+ZKrENOkccqVe4N1mNGa0AOUx4fbsmzT+REOogJb9hiAFgVG5zSSTaa06cTCjndjmyRD7cbF9dHS1u2a2xaMAd8NCDMucChWN0W6whAdKtjw+SlWOcOo4r+kueocdCnMxvurMY/tdW/1rJlntcILn8gypwdlDxQ92012O8v24aobN221sNcy6Eb5G9hmGScK6y/fHhcn1hsa1Wi7/gsyh27wVJsbb0Quh4XAIoLjowZ9ojLqhqhkBGbcMjsFbAPitHgReBmrtrDI61FJuROZRui45/tT0OK+7C3XCKoN9i/kAAHp+x1RBGb/a9iZierdJ6E6k4XFWE05IsgSjTKCrv3ktPP7w90fQiy3zrgQhldCwnZ5DpHXqFGB+CI0Jx38F9Yb3diZlm5ZgcKIfvFZXbsys8wHYWuhK0kOTCxv6iF4i5fJfefOhVN561f9j1ELVaOdLAJz6AWI0/lMdgaLSIxGQPtndzNOip9b7RqUbYEndrHfs/4OfJKTw7Okr9BxlKJlctYuBhM+8AtMe+L9OJtwj8CXY5cLnLmMUVcsag5tDFi2KSp0H6O6Ic+Kbwjn5sPiUNPOM1iKGMfnhnyT8KsOBFUpZULAgA6aslMKNGMXFLRZGB4wVUxtanCIG0oPfwWoy+GdNUgfYQcH0rQRrlAvcNE9dlS4D9gP+7ThJuavnemgRNITQCFkiSnpyZlHkjZedP+O7RqtCHed4d6nyDo833YdQzIiA1BBu3NTNxagOsUOY4C5ZumvFIjGj51tPDzBJA5GHM21xYb2JPzvZrtacaLUSy5u8L2tf0xDuxSYdnELDPm00QEtPbcAS/dU9ILKV9XAdQmr3aDFDN1pY/cHMLQ3ME382a8RDG4emwsorX2sUTEGHkLgCSQjjH4cx3iKd4unS+ic652BOa6wv1tBFveenIXrW5s85a/2igw6aiEkGgPFg9XTzGCPAxc8iEaE3r5Ck33OGlr+42VkhBt6+IxJbuitTtuTSwEYiEifyO4vSL0L+ojF26wcHWqnkMmSzESfREqxErdKpn1VXvGdrPQVnzIEQvaIZpCjHvxWMPPTI4vT2pHDRB+b+wRl+Fazy+01f5H6aC0ilfT/+v5/M6bl5mUgiLw2DlKiYS534r6xFwLm1f85/73MSDYXDmS482ITvMn3ZcYex7/asN/lTNUNu43NtvIVvLfuAX3LbezcqC7suojlGDkDfNVe1PVbVAstStx6hpp+5Z0ntADbrGvcxu87obJ+HKoqfAdl4k19oXXv0TGFUx3nI3u4PWbhMBvOD6tS4TI38iv1suXz/g=';const _IH='616dd21502e41fa6c618da5006f7c90b2ec4b7f8b5c7784e04bac3cf9e16ea6b';let _src;

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
