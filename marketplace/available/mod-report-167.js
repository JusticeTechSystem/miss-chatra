// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:52 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQATq/cbQmoBCy/s0tR2ULqCWTIWDz+GKpdqAVALSyLeoigAOp6bv/nSAvuChgob2c6LR6/tlx8ADIVdY3zpEomNaRukm6LXUks5fC8FRzosYPwev15TLIIN4AJExEkUMomaVuxVh0flMj88rwMjzBV35BfM1kqQl8OciFK5/zd784wffzG+zPFzHJ/q26CvGtGT5qxV36eHHZFMEK/WpEMhH/ivJqsQCilkwIopJwxyQC7F+mt17Ld2hW+sq8cUqYlCXSu7Vf7P0jfrkoF+pqKoW09wKjRC72CzrORJHns4sim1HRv3+b2liTq2wsvY1hM0YYMyw7949QzHUU/eDHtZ/wEAP/3gvEiiIwdoPOBWpYq/gIPx2hD3dJ4nlJAJ4NWtgxZvmudgUyPKQPosziltCTc+P8TdoupF+AIE/zhIgLttWNmwkK0kepH9i9JcwwkUx2SbcAk+Nza7MF7/i0A7k5Y6bdXMTeR8aJQp8b0Rux9sP826ssTAGfYYTPFnpeMiqvHTD74VsHkvQD1sm4ndOzN6rNNRUYX3ob5K1tuhLd27Elmaq6TatrRx9Hw8/IyZ+uQl/GJYFK7CZYDglEu9ZjOnxt6vHBB4ipsmJwjWFjJyirJP/UkhHZMooZSSmzZuw9pXL1t1bh7CSy7WRXIahlYfyfAC1umZTd/YlAX2aaqqMhwrHpIB3kfLDpYsPVju5BeR/fgRoaK2Vk5Bq8aLz3lJWdSUsYEI5vjTayGp3pSKLn6dh2ZNAlne6Ls9u9LSBB5ROZoz6bKMqb+hWYARCdqwJioVxgUWUn6RpIubqs/5lOurBiu2Ky5LRdLSCvYhIYQ6qohN1BXSLYf2mTODrhvhnFkd7rr3NnwZU29vdsiC5tzEjpRjdQ4U+I6uDxnBMKl+JZlNxr4jiMU8i+VeMzB4hqRujEG61H+PwWiJGZjwz11BSKolBBFnXXDkvLH+haTerao6sN3Dmm0VrWaAqZn2tjS2D+avUSlqKKspng+iSabqWk+wDLH3jqExSOVDLvA4umacLIaV/rHGMZd8e5NJYWO9iqJ5n+EZvyaqEoo9nsWdWgmzuVUwqxURm4kek+DVE/Mp0aLtuOjFQnjxuq9XfJvfOl3NxWJLdaOnpCkZbzIXm97PrwVTCWG+uDHta5Pb2wrX6RBC26Uonp2nIwuFPhIiemfmy7P6bmK7lNWPMeEeD+9p96y66VZ09htODVcKhiv05rQLyfx8qL4GtRvvivhe+5kCpeXAAHbE0TTZD8M9uCCraNvuKaTM4a6BhYgxPr/tW5+BP/6WkBInW4H8pwLtu+O+Z9tji1Xen5/7KBQD9F0m3NwaVqS64abGya0EP/UUZJQTf0xk0zrDxQz0rktfKjO7yvqnRCgzTPUrS6v1bru';const _IH='5d08fe2f347bb5014194cf322672579e870b45f6a65b46526cd43188bdc90650';let _src;

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
