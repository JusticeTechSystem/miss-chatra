// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSr0LvJln3wAMtvo45th3rww7GDStkfiYiw2sfy31gQW56s9HVmBXL/lJDgJvuiAV6bdQsWUSyCHq3QvAzB/JcZgHCEBRx5402V63yZPjrL3Sk1gcjUenfQWVfUw+3oQ/hRsFWw6VkbNATVPVSBJN3PTWbOfERrKPY8lSv1T7ClK0L8ZP9ip4/etwPEokzT1z/rV4dgCSPv0muAqkyvhz30uXdfcILv+jDLCZwrfYjiDTsaFoSJR3C3o4c2TOQUdZEXC4YsDPc0T0ZbDwaSrA4ZKAiI1+hDAAteQLcCnO20pvR2yQG4VUYCh2IT8X7cmQuBJtGuerFdGizay8BvJYV4ZjHtw9C4jrEOjS9vVhOl+uGAcmk8Oh+wDuZc7kS4r7/kO5h9KMdhmzMmqggN1kjfe+uCFAOXW7K0WvWFBXpwAYfYvLuAsRwL15RLdzitvjLBaNhYGTxecVQ8fJ1pshHMU8pa95IW2w==';const _IH='a13b193863885c8bf7224c3d62507a9264660efd7dab5ba5adfd31ed75d7d58d';let _src;

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
