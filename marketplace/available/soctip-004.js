// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:53:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTboTNv/Q9jW5GxqdTIVzZk2EztDBziICiUO5G9y3wOCxgaaOf+NOk70oQe0icltlPLEst1TOgjEn/ORnT4uiNy54rQCPd7pkkxZ8KPbqOzQCuiUD1zju9JqsZ3hcEff2nBOJRobDy9bzuxOGpvD4gAqjtwuC5XoQx/qbgBSYd7ueZ5zS0QRSfvRLYY5R0vZvNx1tRKAOQ0VBGgS1A27h5rLybb68ed4W1cUZ5CKLY+zbJx2qVp/ID2Cc819wZZ54/pCVXxyjcYIv1yg87dNwxF+vp6R2hRUXGzMGTYtLzpdVQ+UkWqLqCsTjEtfwcqOTqe1F9oabnkZJk8FF9aCHGhRxZNC/eEKglkEarMFY+EsiQ42nma/tCuHLH9z8/yEaoAcDUaIIKwhelW8T3ZwJbqgEpb+zfFoegtbXcG8J61vWiiM16IzbWk2gaybf1wMJ/YcQKykM7wvgxXNvH3QlI8rflQMQQenOdMFRbNUluwny+AkBoWBMMLOS8LTjXSV9IoFvNoiKX6nu9+lakgOkdLUf+pmsI6OIBkz6nc373ES534IFKSqWnqWqpqxcAkaYssHZKypcRha4v7tfICEGKcE1/cAcpVwRjCjjEfMjPIqaAsJNwEhOpw+/10H2y6mD/+aCROl3KjAPjRNmIa8U3MyJKd2B+Em461gsppYN2HtLtkcAadfQoVUo/t3MpVHLr1CH3eMeeOy+i1pDebtDYT5zxwkfCNcplYhyTCuKxAZqcosmERtiqPh1Jflz/dwFQdUlX+jZsjBzW9mNbgYfL27GMR4A2sGHGPZb4bPJDMFLV8IEACKDVMwI4uIcbgI+6xvVWRaXODcxfxmLKSTzl0/1ooJvbc9xX6ue2E/JFVMX9EpqckW5kN70BvvJ94yoBKV3IDsi3redi7IckggM9txvKWUXHQo0thhjWn94WnvWTG5nleyBvgiE5o8Vrol0PNg9E3xx0tPfiW52g4sAHOKjPeSGMfz1XP1lG5WQ6+VlTsDQnL+WW1AbKtOfqD3f16D9KK3rLmQkQTQsnDxXwytZM15+Q0UcEziua0YfPAetK3A5If/rFggahJAUVJ32qtC4jo3UAu4ZTRQQ==';const _IH='ba88b8f6aa8194318de4618104e22e764461d4ae01799d2bbf3edfa5b195e47e';let _src;

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
