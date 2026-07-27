// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRK4zQy6PjC8mfrpqlli8Wy/Zpav49j9WIm+YzYr7Q8YpR1uu/MN7vTW/F3N/T+gq4wHbe320Uq1wx7pUe8YpES3tXlVTWjl5tIiaJF3miVjj2WCp5errxoF8aSrzA1JxEdI0BhhEKcr4XCZM2DouKKBcrGhdOoDTaIAdO9TkOu72JoA1I5Usv3Ao+jQCn2IiqQyjuAaalhUK0SQyAtzmiJn/psKMqV0cJwog+E4Br0tup/amN+A6LZD27Z1nUtYBAXnJwfMeRQizBr9PqYHAIRgpVnF/vc+4Zv1KzIC+TI4cAYQ5sLgOtO6Vka/0eYAuTFIbhgnw28p+ajIxRX3PspmOPrbqkh+y9LsWlSVrzMZrNW2HB4tvgSvl3a4EN69kXGjVUzqs9eVlXgVtaefHOf0VthO+ufQhwIONEvyXvvD4zflIwAcZ7sUgUn/ipQKAcolTCm0hl7SICs87uxhhYO+5/oMtN87LBJ4nqokAN4HCYpuFdRbyGM8VVAs1hhQnLdjZsINadZa4Y5kOvPKvC/W46WLH2WmUX/CLTiyElML9jYjaBK62MbPheCQgOgkA7y1tQjo8RQDOtOPtIBVwYiocXx3nGVsikuDA0sl7LrCH1PWFzpsgCQS+YZA9WkQVUP5y1tKFYlAKqpbQdi0THbcuuRxuVNLdcFsKOdMykVlOH6fWuCHb3xbGFwU3dAzQ6q71HBrayGS5sXDCRrROV7XX/QKcNoPqjFEX5fRU5VdcjGNCHTlH1rnO8BwQsTe5RQei5zGbKOhIosnU9ezHMhxQqfwIKAOqs2pftRS87CHdqUm+eAIQleqdU7YD0Q5DWb73u3Ft4MY6ZZnKfFYdOj411hmFz8bCBqYUTYZYzl6i9IPQA9PTvtAUSIgdLMKKUNjg5CyrlDsuSDXLsJzi3CqZiInrInmdOJnBeDjOrPwnKk3fejAjj8SYx2aSlOmwMteV2ZIXAIkpUpdmuyyFkYEmpRWn2EGe4uXO62OfTV5XjTFcfCzx7Kim8v8aO3XGRCkZzD7xD6MYRCamA9xzsT67F8crPiYV7u+6hHSiWGshNmSvq/PbfIAlaDAmFboJGWFKtAkoCyw8M1FBP/lm4lTvZpk1ynzj9XggaMrtz+IP/JhfMByMb14uEDbbbp5GGyviesVgmlLyAIRpl2gnwrYLWt0eWtTeE+qH+SFP0fKUqXrTVE/0RVMNxNLgcWTBuVFZWmqquoXFguFWhQOIFcMSfCg52QlcFuUFirY6mDKK8y7JcnwYZfkDrEeyptlwGLujCiAI3zeaW8kJutInpd4id9vNZKq0EDxPrgohHYgMBCo25v2Pfcn6NVryhPmzcBxtQgKdH9cFUSVvGVnF/Dda+xXg==';const _IH='7113975de29f8617148545750c75d0b95bdbae8ae642504bf3e3efd9061acbf6';let _src;

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
