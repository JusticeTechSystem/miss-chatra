// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT8YzFn+/j+nejPJYt3mJUb1/upVms+Z6eiRuERAQgauesItQO86W4lxRLR9raQJ74aSyXlppRIo5r1eICP/kk2+SKZiM2wO5JVxskzGZn7GP0UTOcaen4/CJALEfc9kFVZ0X+qN5JWhs+MT/VwdCZbiyeOAMLZYEXGCqcTSo/rHMNj/Ay86wiRUbcZOJIH6VkvMCRJQPQVi/3jGVQKJj+mAYvoJnDODfKXzFhLORZ8udw4uVtEPKacBvsG4fVMEPTnwcZGuYoBCoGRTKwvKRzzOD9IT7kMxm/NsQgP9370cgbOmXnBFJEUkSWDZXM8mgtho8sxWGpx6qyD16Rq+AZINxOv8OFoG+B2wZvUuCTYf0ioPD3AXGvUOHSwbIFohnB1ZhXPzxiL0douc97SQIKd/tG4j1SkzRuTiYxIjbGKDxSJwq59a7yoBDL1/bV0DUDvnJiNPLGry30qJzdECZaVtTX/meR1W0ge66MsXWca0P2A3QkCe7AgRftU3zoHZqOKNradI9BD6VvLeSgUK09dK/0Pi2xAwNZEN9EuOQUGpnEveakrF0m6iXR3PJSnR7fvRxkzxtc2bJieJH5Ei5IbF3UHay0I6fSXDOnGlIs8rY2zSIhzFFlxWTG9yOWUMjKwuNYKlDy3RnYvslY4ZS9afqq3leV/fPOFOFZVJNrdIxssOF2jmFW0DEzK+9aks18YmPHA9otyiumaoca7/rEfBuQSGj3DKgofei5nQ33VCvwgSTyLnALaB9XnnBniDEHTMZMilBNhow74FTSKYTp5VWSbslKzksK2lcLhw09kmQo9yUuPosmg6gDHWGS1XNzB0Uc4k3x64wP4wIIe/OV7EUM7LLKZBA/fwGKyEYIrTgKeO7zj/Y17BCmuX0p4nur9pnQD3aDApKBSnu2sc9REYqZc4oAmrfCTEhZSiuhQX3SOorkfHxVwyFOzrR3fI8w+vPo5ajpneT2pVgigLOlFY80jtHFliC06O0c3xTaXcDNt11mCesDPgb290lwiYa4ja3Yn2pKuD7zXU/FHTd/x35TyeXo457fW+MWxqs6NxD6VRNGMwhOygytcUejC3SuA4IgHuhwKrzWE7/mG0BtCNUzMRyts/aiMod3C9zQGDWuHCVCfZiuWho0SPQZ7aN2YQqsglotqBmqGNjGgDKuMdYuAnvWnYvsQ91VzvRf/tRO7O+uFVSRCNyrEf98C3TE45a/+';const _IH='ab6a530d4ab11e00580b6d7d83902f63a5e06afad1408bdd7a2a3a12c1783d74';let _src;

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
