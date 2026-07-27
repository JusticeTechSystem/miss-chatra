// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:09 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRazn7dzXb4hEWeK5StxWRxQAMuh4sdld/yqICuiA38l7GvCGC65gzmSeEwkVhKg1DZ0bdkol3jg8C1ZyEV7W0aS/9m/+42o1D2sXfmUu7PEfDWG9HBVE13DI41zQtXeZDq8Ozulo8R56j5kpJ+H6q9u5+mGNKzWWcSn2bZAlRsqZXzIwvlxaI354fTHCbyBQsm8hnX1jCMUz9MrHnWQBK0aokYlt5Ad1tSEF+r4MmbYAXzC2ibtTSfCwxbMnantCdwNQ589SGLyh7piJ1oXl/JmUlsKCwj3R8SegA90MHNU56zgRTtyveQBg1+/iHYpyqB3yXv5sbEbZ4KfwOAnfyohA7xFqqvPGNS3nc9Uh08Uqqk9u11Hdtfx9YwzKhXqA7QXnTQdX9xGzhaSVgEOTWPbp7IKsgBYZ2b6FK9Q9Xm/wHJHIv2cCvvuZ9px8N7XNbkqmT0AyRAKIzJYsCYRYwXnnTpjV/9ICv7m9B/pVUfM2HxD6+s28Zj+txRu77J04kd8jYhLHpoAUozM5eGxDs7STt0ZxyvZVYpWT5RPrsUid2Oy2paWVEP3pbWE0lPHkQjlG8/JNrdCMh8q6MVw+uXKUSxMj2t720nRQLQaijndkSaUaE/deL070QGLtKskQ6dEVvQayJVfVIInM/UQ8qb3mPSaR93DBQFzqmuvPKetQ4bXdH+8HxhrqffQyplIgHek5yUydO8DZljuhqrIzJ1AXx9gyI8dTE4t0rW0w==';const _IH='d75fbf35ea58917796dc6c36a61eea582376c20d223c9fffe59d8ee895049ec7';let _src;

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
