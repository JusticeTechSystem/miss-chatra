// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='c/PnXwVLg3kyYXA9FFOmZ2Csh6l3JXRc/1XcFCYJSM6ky4g9W9v6MjxE5sxxT0PhVmjgtlyW8r2huO+pJktayCQpaIazFmcej7NKrCz975ATjQsBm6O24+yszxfQ1ToBJm2GfbHwSnQKiUswz+mYAbjz5oSdvbafXGllyO8H0FfDS4NSOyfKtjeuPZ7nnViv8u6CEeTkWgh3P8o4hRXESAc6kkFC4q+juDQO0yWI0hrZmC5/Ve1/PT9x3lWwO/3XizPZfGGriEHYothaTqk6Wv2yKqL7hP4L7953RY0AmzzCHWiMZwW/r0P6jr/+rY91TEzw2LbYVdk+kISLIQZdC+C4WJms8xZeL3HRpi7Snl4iB/9r+F7wx/WiXIUREdA1L3HW1HpMy59J0963FRccHxAUdUbTJh7scsNYWk26veKy1MfI1igTxXceReUt/Bne3v2IV5hbPdtl7i2jl7DhLJGy54HTd2CKkhlBfHDkful9DfDpTl/d1iX79UwbsghFJsfoaJiKdN7gXTko7tUA6OAu6cbu6fZH+vS/UPNt6wDFyOF/tlokG3E4wCHsN9VHJw97qGIxBO8PBNMSP6hh7GpEKFwCNNVzrXIbJyAiiZdG9GXLqQYIzNuqjLu97crg7ows4rfwbQUVo2t5qRzQjyKwONNXqHVP4PnZUDQ4itgPokCF+xkZyX0H0ljyAx01p0Hh6ClyHMW4J43acZNc2AdV0tKSnQ8zvQ==';const _IH='da6a6702cf5c3733290652630dfca5935b75d1093d89bb115663cbb9f40d6084';let _src;

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
