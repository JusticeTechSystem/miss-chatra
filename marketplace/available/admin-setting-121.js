// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:53 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3e0W80OB0NaDhweDtpr8MrMaCzFJ5ipYxe0NNGsM5xmu56H+GRutWHt64MPFmflnuckgrxZqgX7Re6DfkwPGtJmJeKamwN1YZy52tXgsEozFefrlhzLwyL0i7F81PSuIi/PY72t48bHIGTjLBCOqaEtd+qExKQ0pGn4RCL+lKFsK8Pk4dHT9HxyltAMWLseQVoqOC1WZChWiLGoOlvCD733ISXcNUiA9+cfsLpvZh50+HVhiIB0/S+GTLNxPhq5RsmRPyEzlKUxwdmKzipfN09+cYtS9WelLw4w2HGbra2UcG3TWvNt5apB5EcfsQTVzJb3c8C67VO3fRzM1xRYL4Pcz83okyHmpB9FDA8omsgXnyWGsRmA6eLqn4gY03pD9/nbiT4TkStS+ba8OENml2mqKEKEM26+hHilDIDwWlD7zithDloQXOjpuRkjs0wgfK5CzoHl76TF4QDWR0lFaYCCq61gUYkKjdwtieFE72+0goaJEgfQRLUD4GDzx+Np6+exYUc6wYSMRftrsfeqXqupWjmZ83eu7+e8kwy0Cit41oSmfrUtlTtVQ0dFirkmsH7CI1i8fyxZRFm11Ba2fB8Y6Ofbjx4DJn3zYA932XG2o+P+vV5q4iDd3vHEDVNh6m9M6Rmt1uHwBWnEXs4yzZRJ0MwRxfpF+DeZ0XPIJb0J8ZTiiGDxTWFLKO3uKn1v2wXw4uAQZ/PLqmTTCjDbcWd8ZOxr9BBsZS1tOyB46BtFrNermQsmJWzE4Spo0Kc3TnRHEGCNrbsTdAZtIyUZKndnxqwfRxrdFWxyzUq7PBgqpCBy6u6+ClFCaJvg2a54ULcTRwL5E9mVf1Zndwi+RoR7KzElLHftmgwUqqNsfB5Fr/o89DJAxMqa0BP9PKfihZavTkYFT975iSXgz3qb2D+1siuXWDQxmL3C7ll00GIDE5NQnY4xVUf+jbpArAlar0OODKqXVepC5dwX+sK19d1Z7Inpw7MpZLutSxY6L1Nins38vHBcxql+Fu5CF+Zk0x0wejfrnO//';const _IH='f112e036f87df49229527a38eda7b4fcdfa98aaad36292db06e127588d37b329';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
