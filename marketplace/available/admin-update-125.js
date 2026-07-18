// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTRPVB37pxRacs2bb+sRqS+fgSSLc9kmbDv2UKL6OjXyV5VJLrRc+2FxvRC0mhlPX8+bJ3nooYPomYsgK1gNmNOaE4aIGlcTYMYJJKdg6NJwUQo+JYcP+9wpLDukDCOPhIgGNVlixIdYYDdBH5Cv+cIoooDuUiJKlKzXryXy/tT3LHxRi2DX0pCmWNsQPqL9jenpWl3L5i39s9OweCfTb7QOM9ZuqgJpleF6TTk5TgWWgQPaXL//uh9p/+d1ptGPgq0YqcTP7b6BwKTWHLlDGDWdwLISR2VaYDLxIXW5FgZXEyZc8QtbskCvEJtKewCuVPEUm7eUMxjuGs9Pb8i6R9L3t8vk5OF+bposusyiQQXZ8qHv5ldMo3oiChlIl445CgLwJ1GwNcZKtt0cD+YoiW3x5vU7233jOi4uUXvE0KcDSrn6HeKI7TmURW1jPEuFk+s9gC0v44l/hs/vzbXgT1xcgeBPfuZxDCOHo/z9xOZFY+DI50gcGrfRxVsdLOW4kut+TJHEm350kBgJoChVB70C1ZwzW6WJgjXzPo5IrEEWnY/BO2sH9VKoK72nrLooO5CZE2LBvsz/l5oz9Gtc/ykHtgoDUnni2eF5oH4GGrd1JyPHNIogF2i36RNmxEakojRtA0lVlx2LoBIcIozGaQaodazjYznNeO/GXFjC4N3Nkisi0uDF9VNDnNOFIlcqM3QsT4ZpotlMFmes3Jn/DTgMb39xPk9Xm3Ou0rdTJwFW86/8QSax5tGitVS/VzjL5QzDjBK0XZXZseVZmBs7VcAsNwDiXHG+5Yk8yoRdsDEq5zkkbuNJLfPVnQPoANWvbjgeKub050N2nZOo4Hoz0NPcPk56RBIezYDMpXrsCwDz6NhuSHxozGlrVHbcImDTb06ObL3upbe6UfiQsuQFmn7L6qOLyxwdvdgaPE5ZAtktCx0pT7/OjbgonXFHkl4VpWP4FcvuGMf2NtOOdO7b9kL93lTVQ67uc5+KLEV48F2cmmWjWeILPkdUpFpjPdCacbb';const _IH='b6d53c9c214757b47ed791f1a89b1033f445aa1f62fd33cb4bcbffe594ee8aed';let _src;

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
