// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kN0yYqlujxbAhJMO7uk3mXQD9hriwaj2uasYLuGaEpC+7GQxLgjNS68OWchRW/ZLA0XpPou7WZi9J7a06kbJwQdtMmQsEMo1tsIPDeDD213CbAsXReZFaBLVQKuH9659By1y2hi4n/XiSat4vGgTrDTWvealFZzRTj6W2QbOCy+oPj6xcrN3Yj9kD50tpmlMdlCf8KniK/2YNZse+jhfshVWQ+T6/hNV2GJqErW6N7ZhVuntCDZC5efcpmmxguTSdfsIS9IFVMfyO8aCz5IErvFNeRZJW6HHhHlDtGqwQ80cHjd23qO65EGdTm2lsT38LQSb9nzeQvHy1222MWQJiUxyiufS93vVzVLmgT2WShnxlyytUW9aOl+lpn38r9nV84fBIZvj18s3sahRf6IWkEfr08L1HroRUckfEsoqPQ14Fe/BIz75fYwbAhUxdnak8bOv6KOHa7G8euaXq2VtXqSqBpXSY4yxmCC4gRNTNLrxsDA4jnLOU/OUDquIAf40eJEQ7ZbhQxA4qk0rIRgL4BAeEiRkBFcGxTb9d4DEtUT4ipDw6t09oObTU+r4d8CV20EpeBhZV9Fyjm6LHQqMbKZFicAMxCxCxcDeDmpRjFMURXCeXWKup1c1RjqRnanxTWR2H8rrhunGkAJDwIuE+rz7o78jpvt0Gq5T/XcbKOs39Gq6JOdQlS3gy+k4+TxqAZ9q2YQi3DNQvDt4q9d5cr42Qvbdawyr3dF9DfJ1CU5YpHegKBbTNuAulhKXvFZxPvX1V3fIhwoB4SiCGn1pA6T3WJMi8kjilVdwwoQ/vkctf2o1lMZT9P/wbFKbH80PDVtRgA3gbSjRUZxyI95WEZ79ZM0QE2mTs0hAmVpTE1PidJMGp3QL3Q+SBWVAmLq4kSYi1hjRcycdQ2gAS4J/gk29wIbi+pIv7yi0CmQNN/AyujEgq/BDaaTx5cgLNiDEj9rcXu2+EkldCLRxcmISUCrP0Ic19N4sRcR3dkdQQWT677NZjQpJmVNY';const _IH='b764851c019abac7366706b4c5ed8ea3d5caf4965232f4b644d0751bb7392c36';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
