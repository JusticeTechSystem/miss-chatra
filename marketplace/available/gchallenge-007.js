// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjThVgU8EIYNongTVr4y0zDLdolx9TOmpLxBeHg29nvWZOt3cPWIXtRjqIV1tjEgEBlgbcWSU7Ya/VOcMCuAB9jebjPs6Y9GTxROOZawtkAhZMXDOiU2SHKrP++1P1h5Fhtkt6vLMW/REMnB0M9K6+2NT+iH/d+IJ5r2hW6bN4qfp+sTF0PeDPxfp9F4vgIoO/TmXuTy14PvyheD0JI6O01h7/u9VCCSVFjgut5UGzYrpfLAGT3BRfc1aJI0dFC6VotIV3OOZLwpqM4p9JbJlYP16YgOmtyOaFJ9SuaAHC3hzJ3fIJGl682TZ1ValKLaqNwo3SKo8bxIIethSMxUMmRFfFYhowKJYJ2NeBMZdHfmYnU26zq8k0328S3M4zxsI7NaMJQFlSeQ+zog3TSXBi6eiB36jG31dqc5h42880bO6f/JzRZ0tPIwlqSZwxA4EtYyWl62hCTsTORb+ZgYMV1mcJTWUPqwJnia2buBuizrndJG+T9R7kNRRZ48kwspLpqfUB92wj2hAk3GuMplHA/fuBuWjckaKa+3AHVFLKhi/yIBdJ3hh69U/rEq7orhWj0WbX03HmVQvVqrQ6b/SRMZxAmIZoTSPU2qK+p20nqh47pZyjoFT/hghfDm9uki/j5qH/S/tQ==';const _IH='cadfc0f6bbcbd56c009ba7d7b756cb0671456716228e1039dbace6d649e57ff1';let _src;

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
