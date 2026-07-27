// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:10 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ9fPIFRVZ+OZGqjq9nilW3fE8r8sywR9wYVNpm5LfzMBaEEDL36qA6h8Dmu9inma1Fjt8D4TwKyrFfjIRT0iNO2mXKtnpkA3fvZN0n0nAdD7+XojhFa7S4BTTaSKhc1C4lVO/PzGNSL7RRSuiHABXWMseWEdooMHQ/ToFlGTiteHvNCA6zSybhev1v7Lp/mNcRzmCD/6vFHAT+uvEnFslQB/kMwhf3ONIAbBs/BMVu3YvwBl8QJ2aXoHUimvgQ6FRSyU+unGUQEAtFaK5nhvTDxYuhGwXYwt13a1pblBDecwT/cUlmrA/PuroH4jDCbto06Pj27WFgugDYTinicdmIMITK0zcRDN3dQKexvT49yjAZmJ4mM/8YUFuX+JG5je4asOJt+n3Lvgk2zJvTDnt2vJGTqx8nIcy3DrmHJhoolLoQtM8dxl+LM4ipwgzQdgqJAhxPJwDkn1OuRP3qkVF6M5ZWzGxuw39ZpsRc7/r5/lRNnnAchcEytMBbrltlRbwP7bUh8fvyc8RZ2PVzTPESAQQzOd6bUjSffSWfNrB5MWqWburoaozHSBc27gZrpfiyn8mzqHLDgWO3EC/2/DHGuGyl+UhWYD5A/SJWB0x6c33q2JSRJQ7H8MkL5ngl2eAlTWhICOFL4WDMR1QEwdpWl8Ldyh0CbXNpm2orwYVgKx2L9gzOTynNF1/myx6uIN8EOJ3qbZTrplQ28ifePfRlQ/VUV/Wibq7X97LWtsJZ78Rkv/2418d1G6ButIdh4AljC05ki0w3+wMGCR00KXLXy4bPHLbQhOdxz7dBQU+cHRu4BSiNE6XiyiuGMtTbN3/FtZ5WGDVLpf5It84DFnJuMNzBshHeCFMbsHd8lqVx5tHkMB1ByqKN6ArXA81Tl9QgPcpOrt8pBJEraHS9mUj1rM3Ftu2dqMy8u78U1KERdG1jTHn/8Z3QQcMXxs5YU7HoAzipE3fATxEISvfyG9kjG4tvKHn6PK8jac3UXzohqVUjng==';const _IH='99a5848a8855c84f40cc15d3829999b478966d55701f3fc927c5fb525cbfe96f';let _src;

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
