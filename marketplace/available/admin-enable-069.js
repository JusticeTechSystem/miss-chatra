// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ew4dUisjBQ2NhdVAuu9Ejqw7pKIyu307hjCAfrb7a4VPUfiqa5fPFn0QbIa3UT6Raq1hiUHIUZzgULQV6Y0KRmniagTnYHfYi+OzotU/xEt6RbvQ87besKBCd6hvVGSY3304CHjHXurITivSwlSwwhNr0MVgxxTnxLjsGEliuFiQpWaQH/KGo/0eG+zGQoP4mCkMcaxCZwzmHeydegNtr6uvrCBlYOGz7ZXbpbQu8vmJbFaKKPGTHsomQge8GIyG+sJCOqHHuubvg5EnUN4DFAwZPYc4UoDln8WE3E8JlaNc5AukzLjsf/v5D7rujgKwydb6yf6M8PNAlq9Fcopyj5hdr/L5P21F6vgWfOfdGYO07/ZK17czq9Rn0EqrdcBu8CRNOleSHX/YL0cpNOOe/3cLJ8l0O24nBIwMjqBgTfD08mjJhtLHO30wjDpg9mynyMVlvpshGWmIjYko28vttX320V5B260z5rPCMML386FM6ng1usS+39RzcxaDZFmxwXoBZ3H+y5UUvUHrgLUKt/qwTmpedBJgZmW1QQfVlFt+q7mh8qnWh986IuBBFLFEff66a8obtP+Zo+k2a8c+MebcLp63VMlgCWtL5a+C6vGiE7YTK/sBLNE8pw7OTq4qZQSQJQusQVk3Z3ztY+ix2lHMS/cU+89K9sv3M7b6s+TWdENao7N19yUZLNHJkGfFpikSGBxkb/Dh+STOKpjxe8Al0fjIIGhGKB623F5KY6L7O31RYS6KwgZdNcztxCoRlZ/jqsU5UArrv1cIDvL65rPJ0jmRDSCdCb4BtzZ65jF5NOtLgWnroNZavv0ohxCu8f6B8CZc6vSwmajF9OmZAOJe/KrVO7K/L6LvBZhArwbiGFOMVe2on5y/UkTPv6ck9hg2h1ZlBpDMoJqHPWV6dWFqRsg6E0Y60kNTNbnxh86pxffkBzxfunjivbSffwBEbT9IVYuXMX8nqyUB+F/FLThZMTDUE2Gz+Rolo9NGl7/frs1lT5yjZf67Sbz8';const _IH='bdb84c7c2dc692a55e99a8ad33620897955a3d9d30106b059a23fb597baf9333';let _src;

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
