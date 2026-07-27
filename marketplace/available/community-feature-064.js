// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQETCfL1R6BYzF98Jo1hweJ7s0db+dwoS+75ezbKbKYFCaGbMhWRrHFLJIgFgu8jU7m2fPtrJTJneczSU1kOf5cNQnH0oWmnPZ2hDOpv1JsxuLehfNl8ZcZVnCQCapzdDLpxoCEtalu5OFn5ruJr2BGrDhp9VKVqeQjCuhzA1ecwzixe2mqkJQurkfs2fz/IT6eOic1XatAhdk+8nMtJIHmAiaVanXqD2ROxKo+fXbPPUYaknodwSuHdnDWGEqpqqN3NvT2msMVoXcSqQ3pH8HwTn/zVVmelWSYV7qEp7idC9HIbLXnQRQN8EWnIt4OSUVoMifMTgb6Fw7qB2Jpuce462jVliTBhceTkl4hulmv/yGWAU6XAS50HR2Gbm7ZFZ3mWPEHK0aI+EaSwWVy6+txC4afk2KdfPBPVMbu7Ebe4JgNLVMXhfhnmL6LTZXu5EVA80vXn9HSS75XWHPbmqAMVbrLEZxaf8Bko+gD1Pwsz5+eKbZc3gqbNC0+pEhY/lhuL56S+0G5NoBSKEL5tpaQHvlTNoK/rMa9JLt6N/NlNk93r9oW7Sx9OiaMAYHOWGxz3gCFTCwSo+LdDyxYZUa/CtwsgwUgtKTA8yeQdDIolrQul1CR5c0pJILag9PLDWRVf5oKwnCefh/zLFS/FXw9Sap5G/OG/NNDKoPk18Y1D8g5W7pMvDBkSJkCFXBOk95To9M65JYE/c5PjxJAPPMTU/u5po7q3u4tWoAMK3x8V3dA';const _IH='354ceb6e9fb1663c50772f9bd9c7d3feb68e3e7cae7ba37ea2510240cafc1b99';let _src;

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
