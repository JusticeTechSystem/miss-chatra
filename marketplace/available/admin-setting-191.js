// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQPlJ3oTg30kAROTVUBFzG9Eea3t5OnoPFmlNlUzdb2pQ/A8VZIt5NR2531eHJc97j/MLC+usJr7QhgIY4gD1roVlv22fisj6FCqEVKuFeNuxLI0k3BmPy8K92dsXjB4RZhHyN+1BPx6yfA54YqzZHQv64hjc9sQNgl5Ia/6ZA8Ke953va8bq39311JyRtJgZ9rAT6ckFk6jspFsorfyzJUmyc1yCOWeJlB19H9QQYRK3w7sDcojO+2TFMw36rjHL9MO9FE4XrVzV/TdLTTZlZIpMnPmb4X4dkfdvcdspQ2xCz8ZF7FjTH4gU0/VJTCK0HYESMYN/XEPOprKh7PF9CqyhXfGYrP0gG995sySVZQQkO28TwViBjlVSPQVivRaE9yp73gK5dDbIrPzIRr6RVywyM4VIvOSyzvqXMPTy6vdgBqNrNNzIgDnsMDbKhmHMzvl90BdQL2o9pqYq48riDh+MXXUjiB6hVmxG7yKtiv4bQ+9yWZzN0WaQ/uVFARGbMPWsuuwDr3Hb8M921WgOuwT6pmUsUAghDBCPEMO5bqN1wkYWkxYbA9yeBZ73Ckqku70Zn933G4vx40A2SeCcAepW9L5P+XbUP3rKYmGN3d8hUGIRQOiuD5ISZP1vrEepOzp5PCnZsjdXwed39lcpuAfRV70GAAHTDa7M881u7/bGDFBRTjncaMaBSV05F4bz2AtSTchIxKeoWncW/gX4z6xMgqOxysR8i0GT4EVCE8G+g47nsxRkErIqZwPmuiEcaEgxy56Lia+I4vzKKRBQo+MRjVfIbpf63DwCujxIEMauq7Zq7OyUO8SJ+NzHrQ+m8p2HFNei8OsQuidfzJp4XYZp+7olawpgCAM4AusgG0U0rYkNbpk/xrI5/zCOdQ7vDGa5WnLo67EEyYDG7DIRYSgMm+Xj5VQBuSRYWVSGrYcpBUt5+RF2mMiXr90l2wmTUmVeO8g74jeq/QFXKg09Mcr8D5BEMTwcGKTZHEovl8JmTHWo/TVdUw7uZ7VzrItB92QA9oGkFImg==';const _IH='2a98902b5b74734ae789ebe8d04bd63cd3f5105920848626c6d06d79f137f9e9';let _src;

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
