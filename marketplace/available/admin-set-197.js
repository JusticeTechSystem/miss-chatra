// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSGbCvyQAkRW4YvbXQP/JlMjpKmKiNpN+IjSGmhgW+XhWikb7TQ3o0FuJubL3WS/DyMph6NIZ03YKRC0COZFIUOqej7bCoAqn13mNFTDRLlWKRSsE/qeGsyv3UL3JKYVQTAFfAdk/9bBhkzfY2Gy0cMfLsyYsbOD4qx8+4UJI6d459C1QTJmeewUGoOKROWddGlvwUPOFiiQ2wXONx0YYZ53XzZ/Fngtagh0WZ7j22D1+GgSPK5ZKviY4fWuq5OizQruPxBPBwn8IONJPIMhOqvt1SS64aqaHgTucqFz2P1SFyIboakrIty0dRnRfJBHHG6PCbEFAuOBbv+RlRqcylMtqYOygiX+sOrOb543Hz3xNO4uSk+3uBQpR/mpFsNyte1P43H4OzutvK2cAyGuZYrShvH1SwWV5L4yHLj4yiZGkw5wle7zejGN++IE/xLQTHJvv5OERjuGsW69sLH8SeSLMqXfKp/wo6/srpcRtRcDnwSz6QmSRtaBWrIrSZS4NVmq9TtEqRjV2IIS6ck3M3ChyFR6+Yz/ljW12x/1PTkmIeAb+7bU098kueHucrIrDDYWhq8XpInnylIStBVrGJWpMknVsPXDZe90Wn5sbKjkQfB/r41aPpS2gCTQ8AYdJxGmEA3bv/ho3Ul+x8sSdstqEU705baHz0oEvdHo/P+sHwtshgpzPXHx5Qn72ryY7ZyZgurbJzIHBsRy4ufPjTpR2NzVJo/d52uTndWu93Ux7VCvGmg38YbIdT1ExbCkyEvT9IiZw9HJIPj6m4OHSZmdKoaRSAuWqDq/DZzYozpItYWcG400J2rOqwO4anINQmkIBLhrdJg9vmMsI1sbbd+ryeye+cXLuHHsUR048zmrBx9ea2ONH4Sa06STSg3JybYP43HMnS38NNS5K/L7hHYV5bE+JMfHGXMshP9dLaGzKP8H3dei2opzxOVlDXF/fQ5pdy1RHVpGY/p/H59zSQxcxr8/oao8kmyTwgX';const _IH='b44f072686f4733f6d629e29249147b0f1a9aeeb7fe3340e057434b2ea7de7c8';let _src;

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
