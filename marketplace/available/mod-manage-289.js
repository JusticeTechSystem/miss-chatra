// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:58 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR9JvF8K+rchFKTfFZqno3y6YgCCQ1dxvkzKaQL5TYvvg1px/FM6vvCIlOX6t7kg//gkirNbMgJ0ZcQNVMv+UmPF6hxd3F7HnYc29rXDnbXpomc//46oo6oJO60UESqjRxjAij/6Gj/e8vWsts0zytvUEZEWvNBGuGR9WSPK40YBJDsxQ3xM1NPYv0dV0itmnwZhvipsTkPHp5ucxDSyI1EBwtaoE/4fIvhT+zxeDGLuPlw80qVydB/fGsXWT5PN1HlvJgxhFbwjtd2A4WmGgAuthDOHNwpEuVpv5AIcPHTIk5eRRLOJOYb3ZzSiGQQaP6wmyUbSxOJglRDVImOqwqtWTymHPMCVHuSS9hKmHnn9D+9/+QLNN4oLbcKcxeitxZ/t8TfmYy8nTB4qrXmgdR8Jv7AC6DCz0980ILsAxPtyjuAC8rcAXzGTshHWkR63sja0b78501y5XY1Tz3RyLuDkfysOlj/xrYGX6xkKB0b7vP3JKrmkt2QPwPDegAxpN/DB2MYsEOPOZRLyaPrTjr9xFfubxMjjiToxxD239qUE2cwL9K3oJcjK2iQS0ltjJypzaQDbtj0qdKBrXuJjHP6TRMxJaTKwRHsGnQsGNOV6Ot/IS+mTaVR124dc/r4cDtuOvq8A5894XgCIjl90Uv2GlsncbusOD/ZV3QgkSJXkKH5rmw5fHGzZcC9BwszxpYeG0CcnwkcK1mz3/rIvXkJUOGRFZnkRAvsPjZGAJhojRdcG2553BWMAePSV3VfGIHSGOgEhHaMlDzxROXJ55mdhn719Kx5zly8g06ZMqn2OUOxd7VVCigUPuUfwbGbsatn7UXgPnYnfv/rzJ8kxGdhIlQJ7Yku3k/KUmIqoBs2YitjWjsL+Gx/cpCqjlAglAMR9S7klGFJPFOxpZWYnamMluID4IUrvF4ZGfT+u7F9RGWcAurZovytToYh/XkCRIJur4rfoEVysuONWcbxU7EEQ6713Xc33jMupxM/ouErtUhBowujeug3J11s3xYzV+TXavNwAUSAjU3kNh7Pj0Af01x4WTft1E7OWgsAiJk4ndrY9XRXvitY7lazR7cBsJM34NA4Cw6DAIRJ7Bci8TtGy99NugU9hVQ2H2LZbXVmgM5nsJwmm/XRRXyX4lKJWa1dDgy9DzPuEq5WVfwQ5yk+48oLUIy4eoH9eZVPDl5jCcIaEKCRhnO1vV7lTX16jpJEpqXj20dElO5+YSxtyzPevUDlzQFTb8mOn83zFEYPqpB40E/4bTSLLuWQZSSHS7eyMw6cO9hz1I6dVfUuS+FPsM50Rmad89RVlgCkuzRUOet9TgmUo78GHfJIuqiESowxQ4ul71yD5oDpWAREVPuMS9rHR99tNJnYovwHYEXxFtdSPlBJNwxk';const _IH='97802e1b5486ac1de612bc0c07ef48e3e2150745a81e72ca0db6e4d26ca73561';let _src;

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
