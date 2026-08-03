// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSp34yh4Tc6c49gSDpT7b2K0IaIJG7SyueRkf5hkS7QdNZXk6uccBLuK26Q/oFb/0ouT3o0Rz2aHpzqvMU2FGHXqELytrigrnrYz5LuuomEVo/F32OohNWkwdTN8Ne5jYJgegeLRmfm74DmJ4kgt8weG82dDpxfiK5UbTxa1goTn2cvLkx5b9hcdF7auWs3pBtb9GYjIjOl2SL1l7olJKHhwvsW3zX9vVNNsTVcQnj6rCsGxNOr2sK9BBERoldVCDwrMREReJtfCjdZ6UlSv3OX2qp2o29q4CP/YxtziBcJQiOLFDKjGvviNYOvUMJmkKz52e/wDvKcfrZ2/QqLBDrPZLrlaR5B94/ume28yh39yEOQB07fr/+SbYPxrbP5JlFlU9taqC1nzjPwJbuYYdLnIwdZcJEdEZjECN9Bj00w231NzEHnC/huCKMlupWuoOi8CTIMb4BXXjYbbiqZ+0ST3aFmzw41NKDlwA4D+SGtn/UZUCD/jDvwORY6qUYtg0mu9IZg7n7txD23Ab39MgbSgwKxH4iADSYPdHL5Ep8vCWV1XA6EWGfOjLm7qXRaW7IYz/z7pyVcpiyOGS3VABif3u3OeklBOQLIjPzL9vGpaEgqNaVzV1zBkvxieLxFjzLUGLP1FQ/4DEm3vmDUnjSpxtl8HTg9A3jGZoJ6892BI6MbxCbuFKJEtZWTsXmAmzGc4RzmNy2avT/b64cArEVDZ2SiwVtyh4xquyQ8nwN/ip4l+e3WXx5trllRgbQU8n0rU/Wa3R7hXPKqZwwaEtzArpWys9VvI0RHBriNUGbW3Lk7Oeo6G9qZ7vGUAOpv5rnglH6tPmD4WE+t9CS/9MupsYCyai/aT6ShES8T0ccZJPfcXVUYGQbqZOU35rdHe/17tMGAq1LzHFOQepYr2QVuy7zp8XWZGaGLfU2J+6tcfjbgi8PYKTqwEnzLj9jTNf9S7MhEJrTk1gxQf38xVFYqYcrtcx9EoOBNUY0VixqJuJJ7+v7ovkSE1w0oo1rGILBPeOGe9Z1njyZhdK30BP+HeAwlF6BMrk9mIAJevAUSV3pdobqxX517l9uHRsAM0ZOThHTbt/41Qj4=';const _IH='04c88bef36db904e493b1dad49925c1482ec392b5a408e693827a9a5e3225f50';let _src;

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
