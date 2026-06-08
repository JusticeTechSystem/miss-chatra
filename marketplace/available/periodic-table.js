// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='p+erqvaYa1qylJONb9LLLrPEVRNCq5AcVoU9jPdUO9sr5SjK9XtkrmH1g/Pte6UYfIBLCAHN8nHnA2qvAZzVjtHo3bhIw2Pn2NEEx7EorQXGE6YaZ3FQmJfHXIIJ4jv10J5hyHnuqogs5naDamSps1MEzFFuwZ+xpwCgS12Sski0LugfB4DwdpNS5y2FqlR0qKX8VVNzglDRFLySYSaOLXPyZmaf75mP2InUaFSZ1z2x1IRxTXswHz4kQemsxtHUabbYoXeqMxin++cSViBAs+aYaMC7/Q+d0z8rbdty210XHz6DTw+p3R5dhOcOCcfvgx4EloSGvilWOC3smpJuMV2tP0F4v55vaJPDcIbAn2Yxp4udD1gBON9kG4INtrEAbRMy3phw2jxkgOLnCZq3vM4G7p+V2fP8Syt5S6KdvBayIvOMypNc7WCvnACuck8YU0F1oaHLzyDBV6yxcuT3oOvwhdYDoIQyDNwxOVFI7fHBz6Y0EBlRWMt4mm4R/CE4szs+E+WzVmdHIsWyqpwsm1oAj92W+YgFCTGZZTRt7zhHwI45O4bLt3XyqXdkx9P3MDI7K7IWBeZ6Bvk=';const _IH='988d9104ff869a97ce522cab024d0f62169b91a3d9bc57f8e2235569f6383639';let _src;

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
