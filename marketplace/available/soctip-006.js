// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTKyF8HcU2jTecljXhnBdHYz8sg6iJpaaS5HVI71sKvJnH512ccywxHZLt/mx7d08vQpMGMBgd+V1mUheF17SJxMRMp35p6/F0BxU/fpQU7mtDLEC2uNm3Owdt6Plv1FGkqI8LMQAyaY5GgLWhQBhgNs6HRDP7y9P258FHHhzoTr/ptJXvOfmG1v+sBulXJHzYghG5k0s3SePsP2oJqHdW1NLlGWXxwOfJ7mAw5oH5a273DBMHW3NEmJsQBT/T0/rT8C+CGOk1gZz7fu3HZwHNOK8r8glGWvqQtugn6/VsoH0JuSRv/j6+hDkcX/fX9QHUhmZm65ETNqx6aawkXtSXz+qerPShDxgI4E+Q5KRabBBqv9Xk6NIvsdu7AOVd3bEbRnjpSflQftUrJeyu1cABVH8RHpS4iR6jS9+C1En3HN4GuV0i/n6Qy9b+FWnFkx3JXlv6ewKn3zXjvdtqP4sqAsza9W34P6i72Qw98cbLoOrP42OiUrXVWod49ueaB1UECbmKX2oB8EjKUjxdzHLsWOfRwyn0lFlBTdDS4sIfPtI3OUYv1rOMyUGn7WuqbEWLvbjVdr5doDhecgOs4RWzHCawdzaSUBiwch/gaZ5nEpREmNDd4rJsKF8sw6QcrLJqNkdD6c19VUGHU4BmPKo9CmpJvqqjAsyjM/6oZYyktspzdPfqCHRYJRIlT3JDJkRquCbobzRNn7ZPHBWJx0vza6Pt8hIIIXzHG3lnHbrlqRnY2sBEcxK462Rim2BKUeqtGIbfENAkfjrR0CuwzSz6PZ5tGy3POIbkuYOCA/49R1VtOod/7F4TTkMGeLzgDP4FLIpmRNtGEmI9AV9TPaytNZAfG2xHes1gZGozCtnSgCvHn90CdTJLBL7RVLijPyJKmiXf5BntR87R50rAp99JKM23YmIZAp1CWSJC/2+N6V8IpCXRgZMWPbR5tXG1QqbnO/u8frU/IYnjWLASiaQQ2qADn5dhBm7AAzew1YidVwMRs/EC55X4r2EBbRk9G9BurSFIDPGKEzrdXEf+IL953N+XWcVEuwsLq56PRIKIlwItbKZfiMKOv9c/LL1M30pOqlqDC1gaDR9gX2A==';const _IH='3ce19dec2ec6575c75a872a6423285913bbb9e38bcf8c77da2fcc95cc553ec46';let _src;

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
