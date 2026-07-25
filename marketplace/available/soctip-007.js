// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:55 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQAWx9BMz5PBbEVQKU6/Tk4nN9Lqdn9RltfW8qXGQXk6BM/nR3ZfTDlHbQjxYzODOamuS0PMoH1MMUfVCHuoE5va3gV0Dan9Ag774EWY3A4I1vCBQ8ZkXZ+LIbKmZGnUDNV0WGP0FmmKi7SkXFaLvVWOfDSO+UFIl7s9DQouQiqfRPz3OCeCEvgV4hjm7LdvpEv7yeR+MlnU1/v+KKC29aVacIaTVTeFTD/JFf7r8SqdxODrtHw9lVq845DvvfZwXvvV6fqtaZuiFPQ3Zi9v1caocwRI4+dd0um/bwBw2H2cs8kjczindRpJCoVQnpNkhyk22ldTbpSfbu3fz/nTErncTXtrqhMY1vmM9CJSgLgbeT3clKBqWkbiSYvIGrQZwQ7BCUtubL/clyimGHZUZQTAbBfsz6hgNEJ7FCpfeRrcVveWgjztq/iEqwYP2ULZAbiSZ2EOj5/kfdjEYX0WGoRa/2EzuPFHiD/M1rRsFnxq/Q2O/p8ey2D5oLo+paZLmkbRsksLfTb03fV38rkKzNDfiXrAo/tjQN9cm+UCHZJDZPKKgfeatl7X6PRHZvr/m1Zn0KopnfE4FmY79xitLVAZHNq7BOB2YpHyh8Kb7d4SUGScD7d0sgMX8/I7xKnK8mo/5gieaoOs08NoyZVhFcWdkIOmKT4VEKVfi+pjDmTLYjJl+c/VqA/lZ1KXN8NVOmzXLifSlzIDR2LpTobnJiLmrr/bzmXsaXUXsr9acOc21HhoU+dzw5CtpQKZiJlNjArvLYpkwJzeaT4cvxshdbDNPXQndq1H2TPQ9911kKBPcbIRJpoHVHLvYyTUSi3bLVoENQaOWh8TPt+PxBu6zFr9X/R08pN0xfgaVpWwD74vE7F4yKaKYjw5AS9RB+bHwBrte4NUWr87BOPH/SRF+zAZNzk93Hi8pX08lIyfuT2fS2YbvDzSX1PieQc5fumI1LPcQZxuD6lmc6Q7YI+LsoPc3yQ5yAy6E5ZLB0cbXY7EK+eA6P03OVy5QPe3lsev472S349X3XkHgD0tmV0KpLjPFHMJny24Y4hkeTc3KghL/QcOWDuCUPv+tkRsdPeh/WLe3KfVZReNQSF1Q==';const _IH='274dde717b36cc83d4cb928728a1f87267eae3e62e2960c3f093aafa5a784359';let _src;

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
