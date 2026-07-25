// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:11 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTNAeoWYjq4q8nHiR2jL8hwQ28l5niAQnS+vyVydNQAsFYmyiRZdv65dvw+W9qe5sCoWGsQqE6gyN01NTvu2EV/H4FiGeheqOLHLsWKJAoAAi0w/D5RXhmPOlIKRf15CxFQy4RUNQG/HUYwSf/8+kpWbHOnCMRrT4P+SG7R4psfF/wCMmLkIUcC/llr3YEXnvrwCxoET8lqP8eQzsjU3QAcBqjprTqZsScrjLU9MOzCa86cM4pvSmvqsIpWhWioykPdxTL+b5jSB32PS075/LY59kMB8nmujqhfgkLlkSyd2MwbHhvRHe2enG2hzPfLVFnh60i0Jv3IhGqqxMbrLAzcKPtJma2l4nEYm9eB3WuuvNhWKi21Ov/i8YYBycPAmJ5euvBh8+EGMAJtw5o5gi/q9pNPvEt50wYx4KFRkC1QNReAqCrM6CbXQyEF5xNF7ijwmSc0UCbyDrjAFtqQb5Q/5gFrjcMy1UgHOuzB0gShDXknpJBFbGAhTNY4zjjnqcHiPMpTvm5MEquMiV2NPAOrZZsPEIJqh4GX6w6Ea8cU1JnDGpnbY67Ld7/lDfF/2su43tabUVCymZjQISjz';const _IH='e4b5cf67455908626982155c60cacd97b8afeaf179fe14af7a94f7b96dd3c351';let _src;

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
