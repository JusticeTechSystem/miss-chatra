// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSbanvtsXZ8YLIHEQ9IESTD6Ga9zbEeyxMEaS+N2wXDdGL95zKekljUKmMS0ABEV04cb3Mn38gF4vsq+0peAwanEwGhYahk224ID40ppUtb4OYoIlV1N78bFLYz8if0u+CQrIqlwyov3RWAIFFw3gGsrAWi6yML1EnKZ57kTXSFaQdtBNNLryWSh7Cqr/gOMlUei0dtm6JfiAsDGEDoOJ7LoIwzvbY2Q6OzUmuzF6wSoBy1sP8vplkikS+tPf8bG/5RwcsX5y+SJHqAQSKwzlPufW3JhasNfrt/xFo1f2jSqrivCqUcHxvIVwWjHXlfBGEdCODfwMZOVwy5yeSJnaZA2Kwbj+CIf99qA8c+Wg1ZI7v3wHcLHsVGlxssrm3lTnpUybOZg3guARhBA5T/KdttJJeNJAQ2BrZv3xMCAkxCiQXvPHXwuCfGnRtyLY7qGFR4qhULU1yP3u0p2uVeO3b8/h1C+upmD1SUEf/spgFn97Jd4QlTb8to3NJV+aktPW04EVPulphU7jJBEG/VNglSe1qIKxIaiwFZdqZQfVEnn4IFNtYA7UUn9o17nk8GAhqLZx+sSL0WBqavBXv/mk4XcnhCo7O0USnZyzbBeuybwp9tBcTyo03XEknw0x84QMn8zJ4bBCChyFINGoUMpqDWAy2g86qrFp7HZmSHOb+RPSf4pwsdf9vKGfZ1IdJIJkvbGfzv9/iAOrXXkf6FN+gs/0UOEvc5l+g=';const _IH='49289338fad9c921e0e1960a5f07c35bcda678710024a758b3dfb7cfddb7448b';let _src;

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
