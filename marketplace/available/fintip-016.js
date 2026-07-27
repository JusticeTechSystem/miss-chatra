// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS+jp0pIcPss5gOxMoca3+qzHNj1ImDim6YnEX7qxie0nV0yfIcLjrg242lNV1tlEyJYIIwW0nN63H0JnGDDxmbE9z0jzHpnTAeegNjI0wdzZLdFDv9FYx++UyXCa5ZXVlzpHtk4j8rSyFuGgNXQDAWzIL5e9PxUNtrOakgR6MvzPfmZjPLzqX23hyt0EL8cngY87xlLBW8nN3L9UBMgOKygWUVXv0IeE3l9xABAiAt+vMYoAyB8T5mqANB7ejMcf0tae5cKPmdFlhMDC0hy+nRPbStUhCYWzLhfWxVnQfSzyQG8M1u5ndX0Tjr3/+gbtM3rVYZXD/nTHuNcNLC5gwcNhHHKjTHIOI4PNeTcPhY8moodxoPl5grHGCkHNIjEKch4PGPvlauz0dQeZhlW3mck6CB3kzZV1b9XZHAMPIq6duwH7/EkigunKY33QOlMMCOvS9glR9WEfn3FDJgOOgje+WlvHjK4FYhDCWyBrrAaidpnIPuJK7sQ2ANNIaLczU0VL3uXD1tbDnvIkHjL1Gd2ZU6zVTAYVq+emBixVTKmfZ38u1PO8sj0dXFsO6zqxm6FbXnysKsnMoL7jUCSAHB2cvyipwRd8BZ2Oc7TqbqIG7id4le8vksZ+e3qA1mdi62Yy2K+LLui3C8xef+I1HROzWPJwybTqv54vLEuWu3VsjP/YEYlaE9gh2h+bSo57g/s0+TPAXbyRo3iXJtC8WAKenHbJkq34p85ffOrt7SS6byW8UEl8U+HH9iuf3zogLmJ6UhRly+jpKX9Pc4Nr2mVJgEzTmP1xGvF2qWQJU8zS2t4z2pdeJY8AfFw1PHZl6Xecugmm7CMPgpaiIHbX4vjgLuTxxZHg6ALaoDPCX+78/cqhQIfwJ1RAMiCfubmJNoGFGsVF8hJTYww3tI+iJdVU/XVQxmpHbifsi6PVVKamyTEpjrP8/wZnHRhs6JS+IU95FfIrdi6C3D744oHMcL+Tdu+KdwXf/+vmqHwpNpeZ/i+TYZwj9phpi+Ok0Mbjc7DIUwftqZmJt9h/Wrof7qPon4uyeiYw6JkKMLKqV3+7d5';const _IH='8b989d1c404be454a1acb6e88c3fcb2c7f5b6d7aa8bdbc6d320255ec5821c0bf';let _src;

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
