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
  const _b64='XygnBczIu5OBRk4HWX63Yv+T8Vkyj/v8bXHP9xc9IEkandr3B/FXxmemeaNsuZHmHUWv4RZwCMUWNOldZq7h4ZSXY9qSRegaV4Hu3FOiT92+Mw9YYm7bTtAAzjd+MjE0mUgvd5XvrUMOEHDScfMUZ1l2z/XzHmSJFgumsR35hz02aylJcR6QYu+fVh02VC4/M9ryI+UYl7rJZRyn82xOXoJVjgQedPr99qbPLJRdauU9FnrWqdyTm0Pf2qyyrEF/+nFRKq3tOkdQenTY+bubihJMhQ36zUHDM7LsWiNhM3GFoDvyx1ZgP7WANsOerKMXIjrLiMEcT117eK3EzEVZyzQNSbhzmCM/oxl5TYyuv/hbd7LSo7WMtp/7Omtkhu1TXFswGvzVTveiBFImZKS3FPcsqZxTvLlCXMXvc43OykMEIpxMY8JIQKc0rrHMi3B6h8xEYNltt968e/DFlu3Sonzeg364H9Q6EyDJVyDlwKmuPU59v2FTltHWkF2Irf5rerWkNF1J3Ts4LZUpy3oX1/33x222Qie+QGbb6Q7Wsb6wmYv3DDiPKCP5gnFGOyny/tAErQVQjSM5C6uxVPqk4/pHG+Nk44+oYoxPcwFrSKAJYRQVenz9D4eTDBgel9Af+BIILYuztSlB4plCta794fisYXk6IZXlTJmNQXEs9Q8QyfQanzkDigVwFHg0rQjKuCGLb1CkuIk4gbcDhSkhhD8avkTQClPLkiHYYQL87WgUIahTa2S+oRWyI2cclPeRhkKFXORNlbsU1HQV3R8mMyBOH4YrJ00JIr50OmHwxBsAHOcf3w3i69Cy21RFhA1pcOCgf8cYjcDvjZcX5xnuTqV6506CKKhA36C2I+wZ41EoVBnUuKZiDnIgvNv4UHVsirsIZMZxbQsPYItCaDOwzrA2V2LxVd5JyXG66QjZx7tasHXOqUzbSQLn861hVIoWMVKmkeata+x9Jk9mGoDqcH4CJxuo2N57wfy158wjAg==';const _IH='caeaa2aff83d4ece3089beb0488c548cd69deae081380184e5d4fbff1a3da502';let _src;

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
