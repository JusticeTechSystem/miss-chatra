// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Vr6XU3sr+9+D7iYaleHhniMWADlXXNJxmawB84CNFEJQCIWhBNngfWS2Yob//Zk3AUDaMkGporwBLOfomnNHNeIT9DFj7sUfY6qjXYoDkwEiSaHFGrMsBv5T0zAAZj17lnaulAN/hRM+G2jIOJ2R2cmp5MTh8Q+leV1MJppPXeNiXbtN3uv0IoH4JpkUIda5d1yY8AtN7datgL3JLEGM4PutDKbuf0Njr4knFgCib8/JCZudbYQH9Yykt88H4vyXgZFdKj5M4bkoh3HjXPh3oAsJXSKqSIjxHFkSU5pCuZDZzIoz2Zob8FYown3Zixad3lML9s90vwoLeevLT3D1DhlOuRy0Y8w9sCWVwtbjRvNv8pxUlDOjcCXDOK3smZdAFNtB5Ha7oeUl4L35gMJ12w0db5ZVBDs67JN5FTjdaTfPY+oxdQtgVu8vg/TZV8OlT0Mtnradlm9D7iOXXqXoLsRPXz+DBmjNFM9RD7bWvxOw3/VzuSqr4vl3IzANMd0IgxaoFB8AFwffobPN5CtIh/e4qzhx202nYcYH7tc112bbX9TY1qaZELZc9rcLldTsjPrNUsHhupJ9g1RcXnaSOMKpAaFXbB4JZtjaxm9+uOFAyU9WpUTPnD0Z1+KIhL7Y9+poRtOBNRfRiusw1J7FfxZQLICuhur6B09N+20HJnEYoxpabAM9rrXBNbPbZZ0NGhE2kkXt6XVK17nEKtjcLOmloS8SK5zVpPOXIBZmUIkSO4ckF/MRRFluveCcE8pW+pXLSZODk48ugXHye7bQ2/vtbhKjcThjcBciUcUpS4S9JDiTrVgJ+2A/LLCywsafT/iLfiRg0xmePnJry0uZUDFJ3iYuYIhGkhvS7un7JcZGVtlEfGLnhMofDCx+LrWLpQL+6/FOB79SYS7V2XIskFnip78ogO43WDavVk5c2ID7DY6X9tcJrBRG/8212HBgNnmsIb6kG7nuEzFMXTX8cX5kQ/UuICbJUYTQbeHZhdz/FiFv1fKTVogO5666eTwFlA==';const _IH='aa7ed705651b1ee808e29f565bf6a96cb8a2508a4496fac36c134a0354ce2568';let _src;

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
