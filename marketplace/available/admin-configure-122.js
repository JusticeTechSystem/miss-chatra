// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SjxE+qC8LRtqYP1h/rhXgQ/tSCiNfQMgdLLvDUkYifhh9KhoYvZRKbw62WxXntyWddXVWxqRgB7ouSgN+Lu1csMmQl10oGjyD1b9LxbDgHLoxqdvCZkn4wIYP4WAO26++jMkk4QGh3nIyltvce7of1Hv92Yw1YmzJS83iVhpHNhPWoCD5mH4XA93l0GTeh9aJwCHzArthlTnw1k16zVHE/7/ktwkVy/IDlO6yFyI0lgqM5KjNu5mm3i/4VjQ4Y6tcmdFtCais9PY4l9ovKCsSJsct3nuyup7YrjkVl8GWPPJ7Re9kMViYTtv4A+NSts8HuI8y1xUya2ZTNM4v9S/f1hrw6hcRRlghXJ5kYxyBIGRXawxsw+c3cLd0rnMkEVzu0z62Y0VRRT8VLOLCRN84sCETFnllSotiWgIu8rg979GPa8pZjrhQaeBN09Ot6A7hR9uRYOwctgdU/YbbOLjfTsAdCYnooMxTxSYbyXJEJIq9hNXzMPG6ARmjUSg1wmewByf7zO56SQ82RLzpaUZy3K9l2OEW2L5z6Hvz06WU0Dm4w7g4UKSeUJsZbmgKIN0Iw2M8YyQ836JakUSYyi3Vn2gZRIZzHJ42P84YbeW7GdTu5z13I3p+En1K0+voW4NOAT/T5upSSYxuZETBDyglY2th/gTo6Rtw98Zqa4Igg2jqm7YqS9e3QOVLlRL2IUVKH4wqHx1OPZHg7odgP/E8wIMag2zz4lSyJGkrZJulZO8eVuoLSO8DI4yT9W+g8IHYsFknu6pGfRCStQCfeX2X/unRLxpFm2GIOE16SuU6olTmp0gf0hxrW5j0EJ2HEefEPiy+N63XNyoirBpXALKXnCtRoivtsFFCyuvTKZOt0kCcFTZwvUfAh1A2ChBlN+4W28uQ2NEjNPG7IFRGTOw+Dh6ObltFzrC6dvgtXyw5kmIv3KtixVt6i8EiiUTFtnzSTRHMSgw5flYTncGybE0SxcZMsmqpxIVjBb1zMnXLRj9eqw8jI3W/PsH9/FhA2mHdaJSeWmaOzqEYzy1HwpK5nKSJYNY3A==';const _IH='eaa3f4961fd26d625b3ffc7c2b687ff3daa0d8b0002022c097f3e89fd3a31707';let _src;

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
