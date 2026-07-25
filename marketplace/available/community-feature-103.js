// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:24 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQe3yOF6T5gsyB8mkCeeoPatleVMBjJdEv4fBHBMgdNyT4hyHpop/vrLhZMmv6TButDqhotz5F90jykE99u7HO7olhbn82CE9x5m5JXG5AoskeQDWx/jC5ZqOvc3GFILN4BeEtqUP/x2J+Eh17rV1ZDm4pobzYzeonQ9C6Dik9Wru5DxtNQdAVkwcA1v0XzB4GF+RMVdgQGj0klF5kubVBecu41t9Ww3NPDu+vyUdWT2UKMRqE2elaTH63Bh+SQoesUqkCHESPDiwFpD22+RaDLf6jPWC97+oYwkwN0tCzl78BjSMMUPG0mngcSdMNLheQ0/CWEddHRqjdkgnQUus1uYAVSnpEg/mSHGR92ZsED3nqTSYu8y9T9oD3Ce64AdyfNCQAj7V9SRfElqXFQJsAjBHQ8rZptz90YqghgSVvNMRl6fmm+Ww3Gwe21neJTOptfaGp3HF334i+atErPWLOprxixwtnyvZkDhWqgbgjV6iKCJtv6cX8Fxj/vZvduq7yA5oDTHkl5W9vs0o4ipva5isg9ij5bvLS/c+HoMlynTbeTLpJvKF0QFo8qg3lk6wyTv/YIMsH7qAHG0KhG4i2aOX6jEBBufajKa6BevRIWUEixBqZ2qR2fxdukNNPhEAD+8h/Em/ZASbrpB1k7y4se5Eg7FUWGBWIzBsQJ9e5aXX1EOr1n+GyU3YIVvJAH/ZeVSPXSMrael6ZzUjxdg8S5PsqhiANHh3VmuD4vXg==';const _IH='e2a681f32afe85dcbe5a53a12ce0f25d218a08434c1697443e5078c683f0e899';let _src;

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
