// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+v7/A0MOjbyusFSVuoKcK720t0+gDP9WjpVbByEZEEPrx02vlq9rW63SwLCF08lrRF7gDrv6K1u40rjHJq5z3NuLr3VNhbpyaHsxgp4vVBiGGy6xY4I/EcMHJXZNXG2+tM3Nz3k2jsQKosJnPxNc7m+JVvyPE/WVRForLfwk1akWlLg/qx4lVfc83PyXwDWxyDtRrz8H1xK2eMlh43guvVjIWXPNWBw+fdQa+hqurjnRTX1RgKXGm6xCnNrJhn/9YMRvKj43mVYEDhF3OVtkncZTNVxhQo7BZJ7stUk9nid/vaglMfxU2acbmUHLv44XtSJhMxsuQFglGXScIDTmp6jzcrZXGBLou7GUuUGSDbrNFhB1ueKqp+MTk2NC45yghINHiBlqG99+1cCLzUDhY8EBzQR9xdYzw2vPnKu2F+oA5zOEmNSb+zeD8IT3rAmfUXOdOB/k2uOIxsOMbUzz9Wua9HVN1YBkVEkZlR9UkZCsJcGcLA0TPCU+n3EkhnH0PZ9n4VA4VpL4F/bCZP10uLn8ED+PwFbcnuKlugLiAZsJZQyHfV84RNJHFXAXbDfksT/CgeXM7nHhZrRJDZXcDsr6pONTupYm15OcIfnc7f/sZmCJoSz4gjjOb3GoKkG3AlrWsUOGokop+R4=';const _IH='cc43f10867e0453c0c4ef60e988b25aff4440018aefcae3622d2529b39c9c0f3';let _src;

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
