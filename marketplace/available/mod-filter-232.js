// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:47 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRNPX4yI6usarWeeLs8iyFgh/rOtWLPsns4uH1VLYAbBX8OnPZTvrMDVUxKKqHOBud2Io8NQoFFKQuTjftlBST5QC4Hx97pAcQeYsal2YwvVL95vGfBGHkIsMyKNtLruL60zuc9B79/BDXCGS7L3sW5RRK7LJcrFLAEz72ohcF45k+L8ObvAOraKFb1UTainqR8OoGWFSQoXEvGjXJW9q9EPALXHas2nzRSq862b5ZNGI8lvZafd22o20+6GTwNkPeIxN1gDgaA/UXfDqcCnDKa21uk3WyICKRbDA95X1JPCnDqvRZL0r7lEWzN+NMqoLShXKf7bKDwd97/oVQhmyVXgHtuOTukgEyflNa9aNQov7pC9rxNDCdGkW6O3an6wCGeVRC3un3I+eGoZspLAvDwOrFc9AtRsCeQZon4mys3Zjksme66tGz8GoHTY0XDMIMGQhwQjQEhxv026w2gJ/2p8yktylQmdgoM39SzrhJAPRKEBPYkIBeY+bcuwUbhaOOd28KpOb6uHArmIqmENP5NDMNYO8e1yHxF8MHYYf0JVRrZHkoFdW/3I6Tt7WTiGIRl77Ify2xGAi8v1VfRhtPl0QX2NCUN3bcIjfNoBFzmcsG2P57u9vqF+cBRhC+dHkovCEjW0nYfpiJZWQMEcCH5ISC5KvYt+3lCPMgo6qr0koh8pO1EyU5BrhKJc086/phL1lmbOw57LaT9XxwojLKPR+qoH8Z8Tw9Xju0GtxFIntZz+959zomJGCqhESRPFah3EhJDgIMoCcGuA2uz1wO5KERDUKGF5IyDrdEloYnIp3+MdfxHY1KRyT837iAJC13ooD5BrTV5Kk/FO+Pzdjbw59CxgOMI6OiznsTlUBipmVqRH/EggquDzC65LDECAO23hLkyaoLhcdpsQmSgWe8pYINHmXKAu/pw/exWrgAQON/3/nStLnDW9tRS3f3lkIRnJy1C3Qzt9bCG3bxFGnBjOi9Stt63nVNN8JNpoKGaSYPatbA3jgj1sdFaFk5fYtPiA8RWNWcQnhbQFV4c9ycdOiMEyNdMDc2F+yKGF3JS7g29EE35kUOqRNgk8zCfZW4YNdrum4S3sQqf9oSJfqTUBMS5tmB0miYktqjQ5CgYSNM6SFabEEkwhLlKyZseY1EMRAA9qbMnmO7lqiUiHSEh07WFyJFt0HRvsdoRzm1OpOyvwj54ClmdrCBe8JGKZHRVj5ozjcya5qcMlZT4tN1cjBz9aI2tiGzW/sH/RLNDWD8UhpdQJOrg10vS59+MbkrYdwp7kzQfwmYENz+Nu6DheIstbwMd6574ywcsMwzupSkk+xtzrLoGXlkVAtZWEhn4IFE9WsoKyd2DiUqhBQxMiG0iojtYPTP8/q8zlQUMzXK2BQ5Rj7GH';const _IH='9d70b1bc37a5009e10964a65d882aa32967e0bfe7be04d7a7d79bbdefe1462de';let _src;

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
