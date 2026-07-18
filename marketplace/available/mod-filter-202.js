// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSBjUcpbefVrrWGoyWo0xOM2Xhgkh6vu7bEjaj1qNI00TRzYsH3mtfRyxYX/8FqeBsP4MkM0UT63th005BL0Rq0CWuyqI/IPddqRJpi3DaRb/Tlpfwe5d76l3Q0ENeFNzT5/oheHay9tGFfVlTxRx0URD4KI3erRHzJ8qt+ASf9IkoC0p8GTPlqQio47xW9pe176LY7vspVRt+FKBztsi7FN2u+HMp1mbUddMn90dUhXL3JqaFcJU2paHaQ0vN/XfbB+f7HfKxU+tnkCxUQe5vRkvSvKCs/fjIAgXHNptLwdq0WfPQjmaGi5CoRxJgypalKNQBurBdyx1qz93Lt+ieYlIYEcsaHH+d9BNY5VmkH0W/FwzRqvBhCycF00biRQXzjX7O+r5Dp6G3W5LUzmu45KysF7mvkEXVevTPOzHi5PDVrooog/9OqDKqhUm6WolInCHOfos/RsukhKIa6eLp3/HmcBgFbhYvpH9ygN8+HNTFLRreqsNUSeRfJhX8KH5SlIewcaZkoEZFuNhHmaAK00WRt8UtA8NvuUf8jXCn4iZl/w+z15ehyb+WcsY9q0lhd4v2+0b0fx4PGBFJs+yWiuwiushKfRtuJBob8FhHNfi8mti9ZPnx4UQLLYMpWDMLR8Igm1TxsQAIKeLlz+w4GNZFAaPY3PJqnX75ZCOKGA1ul6wciUCPSHVd81eGPPVURi4/1bZxIYOm5g/5bUiz9ZERpBUPuTcWkCPjLJ8Et5sSmhvXIDdFWPc/JY6UvNAcBO6236o0EAB06V2n9owrq+oRSe/NUqLyMTmwR60EopaClC1d9wPp41gnFBcIqMY5nFPU48eS2s4qVa95C1D6bKjU6I+34uM7YV02PXWPi2Ic/O39PwqTrVpffME+1oEHZh8VYPj4Zn0qk461CSZA6JEfocWePGoKADQUtr7FyFiGiftOWetNxCMrIAhRp7Bzts/HA2oURCCAQoJZpwwHjNfT+N1QrDCH0Z7z68io2+IP9CQHgWcK9wdsFdEkAts6a430qKBsE4kJbQj9yzjyxKNjy197MGcJw0rxj2+0wa5CguML/hnrtRiWXDRtqmn7/W+nZbhCrWZoaqRvFdw3q9MZqKwlGh/SN5ivuMjWscnN5uIaD/aSbJNBo1fVoB77+sV2Q9RjK3j8yv9tlpLnBNWT4oAQz3FV6R0FRbboDRPJjC17v7vBl/Nm/WyRa5UDFHxLr38WIDLdAzaTDXWU7/1DZXou4tcoXNWT6cRchEaToi6vgpTn1FP6FEM4QleJ7fDxXqTSQlrNUq3u66mCghtQZP8e8pIjaaA9EPVXGm+L3AxNTblVrjv/qcvrnSs/FEov9y62BYS1mxt/7ffvBDObAmFqoSBSUvvkah6WnrdbNV5X5aKIh';const _IH='471ef139acf5f4ef0766bd66524cf8e385380a8b9bf0ebf02ada7b0fd53e125d';let _src;

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
