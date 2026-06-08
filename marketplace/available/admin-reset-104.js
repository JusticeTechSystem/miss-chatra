// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='c6wnPDnJOg+Nrtc1n+iCUkDHPA613YRQgFcz/KOZTx/XehZGZTLeQQE3qIi5RHSAR6OTpmHH2oqPRL3wNafcYqWFSSGlDK74VcwdrxzXWaOdc6bE01+i210E6RrVQPh5M2lFEx8PzCI31buOTYhF6m1p40jMNgvc+vAZfOUy4QZr8+F/NTW99hIIA1sJEQAmdnRQ1LU8ttmC4aQPKPFFAjj/TgRrmr8V29RbDv/scrva0SctCH9pT5G3k4SBloF0gIdmAxOA24Br3i26UEi0yU2ScPcARwF5SUTwpxPqYKSgqMSt6cPx8zYCNpb8N2EGor2ZMvM8eNEd3RGy8wgqhvTSPC89UvIf3TjD/CgksFxLq3KIIF78ecmswVZx0mmlG7PjcqjNK7KAVQGzFyEsOH210o4f48SJRltejYcPUlzHFzrHsh9xx0tZum566KHOTBRHs/ZhNdEa/72FHtRY6RcAnXcgu6xlJmq0ImNx9bPJ9DAg4gWIWt8PkDBdj/eeeuy2aS1TZNrOE5K07msII51xYw96GP1ciURBSh5ZCIZjCQ4YEmrkmoYOeR9F/zb9y2o8m2z5RZ0v/ZtHiykyturiVUp8eQpkVf/EVDi+AwbNMGyDulR1df6YRo+EiHDAcOzJu/wMsHjVGfjf3e/I3egWjgCD2L/Dm12Nytjhmracx8D3qQbM9wiTP9IRtkFb8mHP4a4aac4yUPGdJzbupP0EW+8cEfVJmTutMmyw7YJEg9kX78vl8BGdK39GOV6XBG7woF2B1ERCtqsvEMkJXKE3zr+9sSymJK18KPRWEyK5GJejI59Vt2FPyNAR5FfrizhrHgEsMaHugXmkZI821GW6JkZ1/zsP4ce9gAjjNt4XFAoO1qHCLRF4ilxt3j6nG7x66jDW7iEw4/7QjEm9JI6I6V2bfxpALxX707ejXNuoZOjqVJwjGB6h+D/M8cOGBFdoQfNCCFuPlQrWQ0Gyne1Rbe3JCdAyAomozHDCuRNN+rU9/S0/cGQV';const _IH='ffe93bb0c8f8ab5604a3f892c63e1bc5d4276498772a19c492ae3371dd0301b9';let _src;

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
