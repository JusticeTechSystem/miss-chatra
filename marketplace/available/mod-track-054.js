// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:18 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjShqTj+qW6qJgUFOYXHqzdGb8BHXpdUOd+7JsefKUC6Xqx3kzrWrRxxMlFVwEpx2pCJd1Z9HhhcyD/w/L4Nczs4EIbo9dgmp90M6O4sJG44E4yMhgwoqlRDn5K+UpGh4x7e+f1v203MRcenGwd4QN8BP7jpOY7McKBakwhRg56B7KlwyXmZEAejD19w6Hrvx2Ik4phpc+rqPHQ/lbCWNApMAOYENSYzdPHhTDWFLBuPdlplRVYU/bP9r7lRO8inN+HA0W7/uW1nQaGeZYL8QHrOxWs6gSP5Y6G008TBxEyGCBOmI8m1JBJVxZYB4CxY/LJmPMP4Ib30c+/xrj67iMR10MB4koQtgOF9YipCbJcV84R45Xrcsi3Krlk9qZyhCRE64mfLdCzrVOwzFU2AjNVbzggKw+JS1tUEeuiYpmmYZVXaZ5Wgobs3iSf/wLcpy0AFujmfu7qdrCVP8Oa298PHzoadu2iRZgs2XiIBHNVjPzge5xHA5v0N7jMWaw7ffBz4U/4TzIA5fQfdTPouo/J14pTEKV46ViEJC8idoUApiUq9yALnjz9/4RwO9GXOdfneFgrPOdj5sfx/6R3i/6dGoP9EHmbuSdNC+cOk7MTSvra8mTj24wzA8Bnuj6alvpAu0I7kG5CbaUCThU6fPspSuHP8BOQI3zOHf+jnrsnq3EvZzfzUeODwiXDIVY6dSlUb9BR5ZRQnc2zH4hopepXrRw52RkJaENpSu7hMYtTNoZyVgZveU8GVWkTEqZqpiVVV/5FVZtOZjnTLE4NhwsiCfgFiDXoEKhiHrpssOdxCgJ5lDep5lLZbmQsiAKZbttwtR5htkXb2LmDnkVOpe/ObnxMgd2H5dyHC/jcB4ePcsZZxSQnXH96JyZ03StcO4CSqhrhYZg8ATubMKHnrWZI/4LmijNJSdZhdr4WIWx418rO5yIeyuLUDawNGdxWAn3gZ7GlZnAuZvHI2ZjYEx1paXsSZtTewyjw8tesrk1/UOkqAcaQLta+TmUtC9HDbKezgTxoqYyybwILUdTs26pHP7wdCdZjVpgzet04hjnw+RqAmJwSqYF47WGqm34q8Lz8WWUXWQB3gQDQ/ZunlTx4YLQMaeLsVr7/HRFQ4JHdTPhiJY9YRZKZ7lcK6JNV3JV4KiWJNruF3gfNPoFyfJn4/tJS3zOM+CD+QPlQCrln6nUvXc7WO5u/NxKhEXvJ3synxBcc+kXxsWxFvYKjwdy4HvXf2ryNVem119aSap1663TAtxVorTzpMnsL1RjmvMZsnywokyFteKRSZt9oq2FxxBveyCQ2TjHOE495yv1ebTICM+RWHXuPBYoj0ZC/Mp57BFphjhtiPnhDHBwdi6NPiOuRhlZ+3hWS2';const _IH='bb15420c1e3413b13a83d875b88b9da9fa36a07d2b86d841fb9642544bd112d5';let _src;

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
