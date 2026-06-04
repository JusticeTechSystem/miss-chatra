// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='G0zcVUGKjCe2U83w69H7zXlNBHk71pRkdVtiBhpO+KifNMihi/zTvGSzDLyWf2vB4QKEMZgvnsEmgzKZTW6yMRy03vYL0GZmToZCJoUjt4eEvYbplYg7hxTJCcjXxdy3CTuEfDtA76WmfVsE4aaFxvr9BmMEMkV1pjmpOywp1vPdSS1iaurlihISssordlE4RpxYc0uFVpSiL1JWRbNHrBC/OZ+p+O50T8j5l1rOAA3Axl6nQ1XrbAJYKoRn2Na6U8Jh3/Pe3GmHpFuiiKU9+1lUQ7jVPqnCTvB2qmO+uS1tFp9RLZQpyrgg5+Mvul+EpgsfAS7TaIuC9Rg6hhmtk9pbvyCfGtkiDmKtKNY+zG0DuY9BaMgyjey0yZt6fq2vAEFC1pk7xwZ0JBAp4Matvp5qVjhB4YxiQHTkF36bqcUTwfkAvRCSJiwupQK2Uja6+0nsUyUJt/XnSjF9dItUjyKLOj5uQoW4APYZpS9Xap3XCe5qWbaO4cGjbGabA4PaXktZf6XzRQPuGCk2OR9i6IKYicKVu/SJpddn8kyf+3JXsd9DcXRG3CRNl/qG/m77RKhe8kUCWambRvVNhd06cyV2ZXYlXyWaqECO1W3SJCnEhJwXYbO5dMLjhURBd72nncdMWiOIYih3jRaz0omd75gJSiErr1md6D9ElgjNIV668rZjUeXnHUdHnYToXwhVPdCT6htGo97JOTNYpgr2SYUuzPK/+P3Vn+L3lT/A5oq2yA==';const _IH='8cd0d5e7a469ab387fde74f8508ccb999f6bba1792c0bdf768add5d234dc2113';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
