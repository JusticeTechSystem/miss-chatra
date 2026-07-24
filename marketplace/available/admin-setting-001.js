// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:08 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQYRz8pHHIiG+kb0S3L7HDW1yfhTtlskMAPTNb/lJlcy0mxv4tMmW0uF5j2GVNpVLGANIiVaq7mUjMOQrtx8WKFCvb5b9HraurP/IPQN5aYWJ6gk61G8j01GQ739RPBDlx3RZdS44KXmaj1Kj+v5XJGAybzEB0UWMeCojIfEDdNIuVzco/iBfQPkjBA5DSWRgF73mEaN2RLzaISlbwm9QyhQz3bzHwiHvV8CRvNt+fpkwOfxgY9GhWdXl5PcQiFDQ4S+lEM+WA1TKP+Nn0Z+oKMQL27V6veG/JMk+e6jnkn9VMFQaVNqpZfmeBbbk4VmWhoF/VxTCu+cMk73ZyR4PWU8nSaw3CSSz21qbAVFkayWDdYogREf8TZQ133ECKSuFWp4OAuXDYS7iJplE1gJa/O9xjq2bnrgOuEzoVOXYovSm9CCM4wcXta77YicekznUU+KNUXWQsZymPJhcbcb7L+CLZ+Frw7srqBWdSjZyEsdN21f7Bpq7BxZpoitnCppAV2d8qL2JC2cgFDBX12WSGXIYVMY6Ig+bUoyzTKfhtzuei0taAO5tzLPCl945wsf5+MgdgBFy/B9NeduEeFjwGpThVCymby+dBbovNNtuZH3IHPMd9N8c1UG5Vc2ytELkQLz6antRbn3e0tmBctGKgRtRv/ilkiiLblH2JUWfn5J332RlRFkukeN2CFWoTxpjTZVfQuRuiZ3ZgY81bXWtez22VMz7MGKnkLRkOo/WWe/03Uu0rL2zamuwPy45sqbIyoSbPHt23fntsgzvgHOb47T8aXdi07pcrlfRx7QuM2nU2CgBLeLGNkXsIpGY8yn94cFxVWmF839JvsgmDW3k5Y/exy8cvqPtzJrhW8OUq9E5Pv7WA8h3Tp2njfPxkR5CJKkpr308hrBgLMTQzXp1K0J1moIUBdnQpXxcLD86aakROK+BcZj8kTRoagxWVMDby0G8Ja/sxMC/3qhhtqqMp/xDxYV38uVjAClMsvc83e/C7ruPegSWjW5QwpvxWoznE=';const _IH='1cb5fce7af19bdfad14d31c5d76ecf28274bd7eae6bee29fc47aeb99e30b473d';let _src;

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
