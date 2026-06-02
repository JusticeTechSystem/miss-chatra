// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='q6bt5uoZfDLCoh3RHh1IgsBD0zZ4ZmGDM28YsiQdUCV7P7vXer6Pp8vNIljXbEnJ1s5dBMtiQcZgcvwa2tJ5cT9hShXCgSEz9qAKCdRp9PHhxEKlGihcXNbjJSlkiS6IzuogrEOv9WlLqgm2xweT2pA9d76eT/owyt6RaEcOJKRBZBM+ESu4JuaihjzbwknI+UNih41W/TUgPQR/FeP0dFJMOhK0UXbxS7xA9UO4DOLgsOSOporWlYXrV9gGjQy/j182TZfFzEIfDZTdzIz93FmC2YJUrX2aPZ4Bn+HHmdf4Vs7CRUBORCXSRCYcE0gPa0b8fafiNw020VyUhfvJi9YuHP+4vXFBfeiXIKd8dxCOK4u9n5P++ssCfwCIaT0FIgb2P23lvU8TNjpT5P71TSTRQSPgSbib2Kfdr2M/Q/Gv0oqnFr8WbX2thxKuJtutdJiWNz4COx0I4pdKBEAUK/d0U0zQB+nU0lBPez7f2cVjmyXG8sEIDM2SZGKi7+WcYUQXa4tL0nhfzb3N5/FvXbFFhu/W+xMs5y2lzPrqZ4Nu9luabALG/sTeGdxbCyngG0nevJiNSa94CRZyB+4DkgD1rA6aeT7Tt6Toz3zw8ZTy+brvPCGD';const _IH='b7350fef8572806045cf1e51aacda730a45769fbb4bf15c8e3c4255c24b9a495';let _src;

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
