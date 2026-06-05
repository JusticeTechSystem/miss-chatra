// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7480FR0iGY+EzZuKUV8Q8R17WIOo/JKaK1LVXcEV0QyCjCbn+l68alHPC9SjwJR7jiUTHNj2N+IqYQRuREcVHLTwHEyPlKQHwxD8lZfKXoFcIj83qRP7Iw2W32xCJv+xPQRFHhbNFNPuHS1/IHwZ8iBUVhckS5+qdcjHSAo4D8GYdIwwXkAHHbFgbji7gRFZFv5a0+3xghXBcsq135FH4k3dXHlmHoeU6banrOuYgJOsnFeEK9KKrJHDtC0fguiebKIR/CGQVXyHa3MqfFj5F32OH+iqfrLdWaLJ4FdhFAjonYhIm3JvYd/Dmpa29lrAmJ1ZLOzlXVPC1JOOJ2i5xcwO76ne7XxJ9vNbt2sID/USyS9jBCCmlnHgwc8VqVhRbWv5Wk6njOZsRIXn3jbb+uHcZF3wzZ25AUUa1ia5BWm8Bav/wNjBrsxRCBxrxGiywcmiGyeJ3s3BwFDcPumeEDQlY1x+Rei6yZQnh1CzMH+0vaN3cXNnh4/AxhWIpGVmBzUY4mUJUi5sLwEYNCW1704SRUlqLchLkNAXAZx+NfC8+VAH4za6shKgE8JXSOMc0ig6x8r/T9knWC+PVCNcYPPb2AHc9lpiVsK5t8mhv+jPta2Nw6C9XD4mRnlD7O3Chj0wsnTW2GMSEd76VMK25ISzr4wz6f2oVvOEjuwRGAKFxEdGeMVsGzlFbQFchgtkL80Dw5QQD/ohiZk=';const _IH='40e9c42b9493ec1f6ff4843dbdc2212fa1825661fa9c200fdd4d4f0ca31c9508';let _src;

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
