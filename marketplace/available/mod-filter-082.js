// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTu+w3F8FCQdylxQcBl+ugGrr29wyuYJKu3DRveLw32dXjmvUNr5i69XRuigMrBY6+XR+KtXYESKn7mC3Ofen50WeIk6aCz8/6svmIgPhIzQMMMgpb2jfD+vc9rj0FPCdzPw3SbRQ6lwDJxAEMDR4xe8n3p0kIka0FEleF4V3/LxT3fyCkO2kQ2F2xPTABmjQRJPEnt8grRX8tuLybqn8Ged2sc6qgAZORElWRTiXpaVjgISSD+YcQPXylTVG+2gNKizOruZr/j5bpnZyyhGUpntd9L55RPIhzbqokGbcEmfnBlZY+41M4wN8juXJlm0kuC25QvlA6zNoUYANpRO4cxU4+NnalybryA0njLPd2rgTv03L3R1/iGCad4VQmEGJPAtKcup69GnmemPeQBEFMvZnonrGG14QwKVi5r89ogTW1PYTU5QKzOEhKYLRz9TT01F+JPGXD6IcdIG7r+jq9oMW4H29gKUtl/woZwaXd5+eKSPyrEX7RqB6Y6dNJsfGs69kW9l3TM9fhm/vSGrtstNfjAH97U2TI+OtqWge4atU6a/4MH/m95BJ1efMdTRmRH8oINXocvpfJp79iwBvGF30Zwpm4KLCFGkEiqEB5lnsDTxmtVe6z0OZKcq2MrNU+WV1v8xem36yRDI5AUfMeAqwkyGUT0rSi7p5jTnz2AC7RUT4U23f7zqdpK15GWivmMLyuYNq16ZiYxt9B/HD2nPzmm/yMLJUZm/naZRmOCwamVAXQE/QcHJG8/rBfKSitbc4vS46pFL4UGieCInxNzwxNTZR6X9ybklu+CoRXMWYqXFvUWFLY4rw/8euZufz3p+S9ug4ZKH/wU3lTEz+jM54H1bvqmXwnU0awLikXjjDk2OpxiYsV7C0DQBugU84ZVmhjQZpRDrgi+wssVEFA/0d9ANzEHYBZ6QpFQzP2avNyhwoQuGunzXCwdVbkQgg+uLHcznLzjHdM0pwCRIGtW6vHeh/4Rz/loxMbf3bdp3g048oObl50nvs9JhBp7tQSrWPNDKMlgBMgllm8ElA56V+T3UOisaTCFuFt3i4ubm50o1jdlqFxWzyYnhJEKYwPbz2q1aSEdDvvyM7mVaJbjMgub9w6gXrLogGbTJeumVLI8uA5NLUgC/MNB76h4lK36PRYnvSjROzlcS91i17/5fK1qBZMCyJi7MNyCcxOR98yKzH0u7QmnlKBTeBW7rC90UmbVW20fQbJN8i/ObboWkapvELiv61hmuVHq/b8dhE/HEPlPC7y8qdmZeuIxwSmk0rnoGMcJiXJbAkzbCq0H00MLCgD0PaC1405EaBTvS7gO2A3E2iKV21rK9FIf/hzRnrXn6n8TGyh+r1S+LG8R6Qh4K72MBwAWYYmANG1hW9umeQ==';const _IH='61e35bd1395b08b5ef5da968cccdb4ae23a930af1060ee67150adbdd9e635c82';let _src;

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
