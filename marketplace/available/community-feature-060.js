// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pfPmu2Mw9CuXuwBITao2azqE33zXTdD1Xt/7TuUD6Kzlj4B70I9EZdatvR5RWZb1Iu41FjO+k5mVlwbaCHyZbrHEwVM3FktDvdQbD+Xm6C2heWvTrFnrsA+73AsWqCncS6N0ItVY+6UEQ+VmeM00jEJXITSh2Hkk+t2X6Lj5WqBefPNPQh7Tjqxh/ucTniDclQfvdQhqOXzWLb3EnrhdP/poLG/NHxW1fOx+14fTgt4mNnhV9TD79WZKmsEcfXflZlZARbqyOoNfsoopkLplvVAyJWzP4RZgbm+JZtNeSRxyDIvEywx2V9B3hHeK2XfsSddqq05qt4M8giPXYmHc25+OJz/OV4gj9dMaFqzY3uiQMddQdJjB4v1XR1vdtahBKGZoHDuhWmvxDsvu7+mCJ0ZWJhfitEpX8GTlM/EKpjV5Wb9F9R/nU6fkvcc+slcU+mfhHJ3NkTFsCxFmySQiqcEenx/ldwJLGGnnhNMfsPfeO6lygmfQ5hD2rSSEnUO9d2BhlCKx8uCZQP1FgrDIiQnSCZz6SUBISWGr4RIlLFNsMQSqqm32Rk3z9Uk5buNntUKUDO/RuE7Xceh9YWwt2/JSgieTS5C0mj8l9invEmH6T9nC2RyOU5NaaE4yjUY+lYMT55IO1VirzY+61ZJYl/BJyKbQFYPGJBrLKLv2SrNRfCbsrUKeP5Wnw/RlgJG2zHZ0UfBFt/A6EljISpc3lkSkjJk60lTkTBEBrQzupGlQceRLlQ0=';const _IH='4b20d972977e991e3a331fed1eafd3534834d34b1f4b913941df36d41cb6f15c';let _src;

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
