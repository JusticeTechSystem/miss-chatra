// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRZf6fmseeTuU5CeuXdeqJrBFr2gpgvUQ7BCBmXchV6Xpbe82YGeSlWsa53c/wPwQ7iOcE6AGJslwfwp+D6vTMb4YbUcB4Ti/6xEmIn8cr2/nU4rbV+mN7jhaWOijViUaIL3c4uf92m6Qemv8MJMlbVKIAUc/aRMOF6P11P3ZPHLyN42ziJakvXmMVC70kOuzf3q6gn7L5JZM5Vm86yg8hU9kawwXnNYAIi7aDz4Gj28M1eEon1SMQHbvaPMH4Ywg9+sr6aafKluYwlen2jLk7MLdf5cKnyGm2hChjEB4P0Obihxpmd3SkG4yZDXgVZRFvpd1M9gULmBsu13iIqxzNPD8DcLrGiGYx1LK2buWXj0N21I1hTDBxfc62qTovbivj/OAbcfzHSH2tK1N2rH48i4TFLpGf65vDcueTuvZRwps25+ZuhjUy9eFheoSHdSD6HpE247LkYbbxQAWkT7qzWxunV3HX0M2opElYR3nje0zhhwHHwO5dLyvfTYcpSIpryI12x6dkCeJCqpZN/4wRLlDVy7FqcApHXFw130kHh/QLeZo3PWK2+S/TxhJu0AcYTuYPhAuZecBxhDlGmHpbJgQOWJSkcUO2qgNSeWK0/LxfEXZFWyzH+WzKRtxgqRkSE2gp/UCAEJ9sLFRDm1hruS/4QP+lODqMRi1SLH617jIjR803wGkpEOv7+MWC07KRBUQ/KmPlcQVYriSz04Vp0put8cekfTOwQfftIESMnOaQfpN/RSA==';const _IH='9b7622797f13eb95126331b4ee3aa20ed1efc7d7211dc374d5dd2d537683b340';let _src;

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
