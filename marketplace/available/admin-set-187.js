// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:57 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR8JPQXwhoKqnOClUTz/OT/VlG8+eVLlQCj61zRDS2I9KT+JQv1Gp7HOMvRJq3Fu1SZVwB/WdTs/ApIrH2W6YrDK5ahMxoTz10rVRBWUT19L5qjaIQO2GM8wXBfJlBcHnv8y6NMwIoFxjZ9tPwFagGxYu2F4dlpyHie6ELXbmbe6TfwZIERQFx9aSAbhyIwPd9gyruRh/KPBg+mWHVRi4wYdITYyBOnA2F8VrtCcy5wRnfzdqVSpcCsJbCTLS4eaqutZuUVvFK+7inOiNgLkcKDOGcBXB2k/f2uRv00twsXdKJVSzArNyN3R2EzR6cxDN2Y7BF5af/SYdPcuWjpsWPgny7F4Hkrl7+4Rz65VTEDFnFQReyJ6Ufr96dNuIpBBs8vgNLVWgjakxwF2vD5yQuh67vhBNeZ9MTUZHljNVVMg7zT+q0fg93w8ajkhekPMIEIcQkS1oz+zs70vfZVPwRP5StPTcFR2H7iwGQGcXUoJNNeA949vqZ9v3UXqazUqQa6Ub309QUY+4Pm8vAIWVSaoALSHGVm9RL8kn9QmJf22WMfhw+VBIoBx7AVKrvv83YOYOPY/zsaCq5Gwe0h2UKCMEQvgakTFw/7CmxKTq7TgF5Ct3pzsN+Rsx6tvfbs7KZuFshORixIO3ZQVVz25rt8GqLmWebjjBc7SAw6FtID0SQGmnX3hBqWbcAt4rU22R4U2SieKPhh1fvOmDCN6yYttefFcj1ZHD0UY3tqnS9pUJHfAUDylRhgvZCNSLVbbYjlJ6ILWumClpU7R67t8vX3Wl8yWRl9juBQuh0U3K/eOotwoxFizC5yNX2B0S5ehQEWkg9Rf3vh1y4Hf904jEA13WqMpmtvmKeTCTg2ltMmZk/Kz3Iu6xY9Lu+Ao4Sf3ozyWLs5xISRJB8b0CyXHkUxf8TLmW2dO7SGKKTR5KdQQasFnKDUgp1GDdiVdpmSwuPh1YkHjM8rOPLJTNA/Qe7M+sZbqckntCMb6iHy';const _IH='67a852de941052cc0512807c396f4f1fe20270403be96e80ef32857a0d1334e7';let _src;

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
