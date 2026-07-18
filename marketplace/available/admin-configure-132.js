// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSA52FD/USMAjNlfl2QTyrm6XkdOIprIvzPW+GfbeHyscI7e7Ey7aUVsxP0Y0fn89m5ydAz7W6w3WYBxqSVmq53KoU7x6Z58ZEZw5Spx3zixWGJXAjHP0dgEgNi5wQcGAsg3+HhiIx5hiVx/SyYMgV6LjQ7HVDHMx5CnXhaW0Z3yqlr1+4UFLZEeZIiBygvHAx1/teZ/h99cbjcfTlRO1jUBOk6go0hm2P7DOoBHoGv7X3YMjZL/MTZ/BkyyXg1PHFR1EJXL7zjIHw4HFESPmfm2E9rwrHr0Kr8sbnZJ2I3RE3FK3cPh8Ur3U57QnheFDKQcbTT+2k3+xYO1BLVYorLvsClHSGLduRm5VFwSDIZ7puSRGCxHGgT9yq+CTocGRKAeSe8JeBYlKca02DbtEFYKR9mCJ++GFYobUqCUZG1GfcVQE/2EiLPQteRkAzpQxarqALVVErzGxYwEhu7Ykr/llIULhhlhgNdBmyfTBk62RSSLURBwYw8i9fhrc6kcfz6/l5tI7IY0enlYAsrww+Psjix4yA2TjIuils04CVvT/xS9zF9HuW5DEGwox49mMqO9QttNfyKn+DF+Bp8yHogKIMm8xOeEkGMETHTWfVUZQJ+9xfszCQGZYhE5QPFJ3O2adaM1ZuebvPMO66+H82IvnLJrH8dMuTlHsOboXnXw/q9btPWAOGLS/YyxS+4ZJkPCHiUyTKembkwxeqpCytrPV8lDLPsNI/MdfBr2VJtVH3C1iFJT4/FyCNPfOMFzexJh3Z1qrJaS9x1B9uvQdJqOosD3TIyJasr4k6gDr9fiRATOhpZzbYAuoLMvmJO2swDyjKWAXdnYpVhD7bXCKVMjrG+u9wR9fffuOqhaAUoqiAWyZkwnZh0DczcjCr3H8wRTsg2Zjsd9QaI0gOlMq862yZgqMAuzmsLisycOeZhM6gOxGsXXMNAASdaE+S1TjKac/DFuqFk+G+NO/JlqRd1J+MNn8FA5y1z1KFpq5cyYXndawP/CXaEgdhXyK/1WNeU9kOgYMYZGDureHXFBc48aMLMe6wd';const _IH='d5c2fe18201a711fbf03b67e29365c569f46e80d50ebef88694b294dd52ede94';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
