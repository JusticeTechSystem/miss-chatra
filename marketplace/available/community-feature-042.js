// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR2pBteQ/ybdNmuHLzOsMk/RIuoUdlVqPW3BejdxBD5igmTTeRRD2b0Hrr7GVw4BPO6U+Qsxue0SCOF+1EDqczc/PYsboXc1lEd0pYS9DhAW4gjgaussFbBtcGbTQbWnyDBWxt6NQuF+2lcm8/V1vSKNVgcmcn3vPI+aAHU+VfZuJDYO1o4gX/FaZLNfjii377xv3jOwmVf/KuygwNPgoIjA89mm/sjqcEfdDsRgD2wNtWVEH4vpqWiauiQPCi1r9nqJzsBWmHu2YnEASBTcFwWZIBtE4tCmZccQpCQEIYYLFHUckmfLc+4IpmhXQZWge0Nz1eb09cQlACeYvEoJ5vZmGVPzoNFzBXa6/lUHIR37cybcxhydNxnxcntmyou9Dg4ysCuoa6+3vhIXCf1RjA32Msx3+38u0aEsmSWJqzwtmAo5w616VjgQ+24/dDhoD5Pn4Qp6W2/7sizbjHCaNVDrBs3C2XKF5ocu14z8pIoMOznkuu/B9Y69BmbovQ4+tQFWtCa4r91w+wKV2ZCpHuOmN5G6uYxNtI+3eOCjnqMS/6XE1+YZr+2cImysvHmVFw9h2n8HQSY1dYLPUDz0fFL0kEYnb330RDpouACFsX3nZFdxDv/j2rmtO5zhcmdv7yBHG4npi4pJsMqqu1UdFr2C7Ltt97/haNlxpsLekjEWMKMNDmcuYDUrwpmKj4smIxZGhG01AAo++r8SGU5nE7ODLc/wUutaE2EBXBYTbqS';const _IH='e7b61074b57dca0c8d2d0fe6575e2635ba810a0f7ad7c26ae531f1f6a9bc6db1';let _src;

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
