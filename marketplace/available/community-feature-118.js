// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5yQdZgo1cWbvKS1K4mPjYG6fqqBttnb3X45qe14PNGVjoT84Dj+lryNy9SNKIy7MTWpuJDJ4avm7fl8BnkU6mLtyPw/YMHCJImD6ZnUWeqGaGNG/KhV6Vp86TTM3odrb0zbuRvEcUC7UnAkrrZ2Y/Y5GctE2b2cI32IkjPp9uA4qcTkQAGY1tWqkb8btG7NYMpJAiN1C6VB6YUxtDsOy6ucovAx+s9+/alXlvIXdfBV/Qu4NCy1XYRfD10XubaXW64sWdYykpoo+iO0mrDYtZ+0F2Y04iSp9Iypgx/iItcAoN1o9fAX/13A4Hfi5y10gQswT7twCjXHgRVmGlwfyTEq223vc2fp6o/m74HopaoNXsxL1kuIEIMmNdTTE2mcU6BR/UwOhIwrJjke6HTU8E8Cc2/Z1Ch/v9clLkeavhh2dRkuZpd3PbJHqSyIRutAaicryudNFAqL1Ct9f4XlGEH52xRIVJYQL8L8jhzzQzOU0xTJO81B5BI8yZT1YZAzCwnIjOTR/tQw+RglcAEabxImqHhAyQxMFt9NaoX/3r4EWmFLSpYZojGahcz0DOdpr1rJagKFh06tM6pXlmkAikpGe6bOUzHzoDIKShvAh480RfaLtooDQT9o7aHA7x7wa1DySY4t/bo1VZ3bh2/0rlKo5/THVfXfdwJpJYxcssn1efdLFTI3a+OW1cJ5mrnt1dbsBGBv/s3CJAKARSjrSMix6q0ub+93vyMKnjsg=';const _IH='8ac365a3e1c5a79173175cad156ef0fa9aff7f3f3d8e43c3f50c25fdf5ad6cca';let _src;

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
