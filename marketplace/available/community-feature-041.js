// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xpepKqlP5ikFzZt5Lf74woEygr5QCtWcINTp0s2G3XsU8q8HHYLI1PK8IBOaTvM7FukKrrYpa7oTK7IQUMSWNgpI0jYNNM0TzTjuwSjJhXGLi+czFYdRKcBcv/EiRkQ369rfWxLdchz58M1YOwwMTRNEu3ppOQ3+kiNJYt/BjDn7JcR8a033HEDfYfv5O/nrec6BcPvUmOLjs7IEfGCMhKEp216UCvHefLathtQvRmNndHIDKBEHFXocnua48JcJBWzqQ6BGVdmp4YIvuTyp8c+6UiMycSaMoir7gUkK95yPq8R+ITXIv/+rFK+iZuPqEGzkr8+lP/FGxJoyUgwyC79tXbJjZ5H/29r0Lo+/IRkD/OwwEPIQVCpkXXAyTo6FdDozY2jYzHkKtKDPexq4MjkH9BDVyevFglDgDWBhOtyhM3JhMOzdpK1ODtBFIHskTDcluF2kILU/alzmRPko9iirh+CYuQh6sqdGq/IyrAM73ysdGPOarnTjbQ8/jDtqLIR73DFkzZNZAwzOv7rzkEoWUUnBjJIHzz0S6f0YwEJIcwV0/FN6AEZwlPhisJC0Xm62BbcoQrFswuDrfM7/kFakcsAMkmMqXhThIUrcNOajkrBGpD0HyzSRqIcXX0LOHQosYLJS9ZfZQp9mT/wSKQWs9MUVSaeTAhumR+Dlqw0lAvz4nrCDTXOMNamoAPD2rXGZc4X6+onqFj2hl6wj4ywCj28=';const _IH='a9ca400dc8a811a0053cdd07e1878c8e8365a171776cd461a76b8d2bcf4661af';let _src;

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
