// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:23 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRgyBQtVChwt1FYYFzmrcyL8bDwy9011SkK05rUsA7aUL25sjJ20T84YHjMn0fJDL1xPzS0d9YmSLTZYCgJm4sqhQ9ziJScYAmJ/e+tJHuPLo6/bdGSSvuEO+RliEeVWd0DtJjdeCdDUCkvwb7a3F7avprZC+smuBSL8bbZf0pzU5SPaKJfKgEGaFnEo0BGwctKfvYtpavEXC5IiaXYfX1jMH7+m9FKLmqs24+kAi5+DlbQJy/11JvPiAUSjDZEWC0OMYvHDgWdhorDu7jIJeGieISLkjSYUZvopskFAxwPQn0bMQQYofQ6irYaqrZaboanmJNRVoQ5zLJrUqb/bYztAqLpbRkvSzOXTGTnciepWWdHyL3YrxPE9E8/MUCyITAy7ypHRn3ZWEuu9ShCRlu2Je1e6y9HPj1sc0dqkANHM01JJmQz2t0ACItgDRdcC0LvrBiPv6jMnZs+bA2MOyCXfRp1AULWtUKlRArQ4PaZOhs2Ya0K9fq9l0AX4wtHQSN04n9n9hlid2jhm1NTTqi6//wbgKf0VznuHsUMZcdG2puU3d8TlxBXk6pTJR8Vh5Hswx0tgkPCnnCIl4Xi/yEa+YT2';const _IH='f8d0ce0f95f206c703a945de2e815d5d14f75eb75b0ec0c8161f1a3b6f03ccd0';let _src;

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
