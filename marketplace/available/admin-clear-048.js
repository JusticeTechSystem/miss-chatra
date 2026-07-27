// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjReMDNcy5uxzQBlcpCGGUaio8nvF8+0Hv8y9HDOpygmVHlqX92mCH2IPr7GL3oQUGRMfoiLQH2UvYJAxUA4YwTu+kzrpIFYhI7I9CibOhGeGjunXsVee9FZ46LYy9QqdXQqnjMgFEBPnFhZL3yaH5DGlPCKUjD7vK0pzVlEo1HyHVullSQKTfv+xgSvUWhMSLAgTJR2DCuC27OtIn5nLoKoNZxeY7hKm/wGZ7/IMMenawRjC6vrXMpZ6soUz1vG9TI8k/858ZffTfr2C/t0RKnq7RmVqfAAriGXCGHYIQ6xH91oDCRHhn+d+zVuz78QCABJs+i824akf5k4rHNed4z3u+ceG6cvRA1ipN5iMfNPWJPbQE0SxbhGcK4+rHF84pEyZ50E6veqgqfocS6BZL5e71cb08eGxym5lhVkIjFtVu2pfoRqgA+rcjYzpsRmKxiJCJow5pud+LCIyJvo7Mx47E42L/qkrMoHMeCQRcPkbBFKJuo9s/KZRGb3zeIVlJTv7Njvn0i5+/2QquwTOXeOaWqMKjbFUalyHiN8JYv4xkPHJOQUf6uSWka6Hz2mA/WFtcbkc1IqHBJ5fATiGOGwo8MBlTjxGOOiKeQMDwozOEsnNLf6k5Bu+9ay1u2pXGwZUuOFDjSThzL5DqJfJ59NagQLXAzpgOX8hIM3wipkHGfjG6Z6ypAilq52t7TwEOpWCwts8rJQlclkr/hdrGt6ShBQ2Sdb7f0WrhrcpvHYf1yJfSYFdTWHKqq4b28ADztsBMOGNfhfi5qvIY2ea8rk83aP+RABcPxHN6dAtKRx+BLojRgaduof97USmI2Gxz+EsLzclIuXwpnVTUxWgcKMj5JSqBS8dTy7d2iXNY/hWus7tDyzOVHLHmvLE+EB+dy3cVMU1Ha1MIgP/5PFlA3lC769PI1fJawFzEWrCp+Fs/goAMgG+kW70+BGlJYk56Nkjk/486rAzTe50DIiisSMqSbLpazgXM5zmaANKeDl2IUBHUG6MA==';const _IH='6b7fbbefeca2818b8ab3706d710b71a41542b05a1018472e4326a8dc4af997ba';let _src;

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
