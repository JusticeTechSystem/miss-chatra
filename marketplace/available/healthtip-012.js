// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1LKBTTUW1ENL/DzoItAQvMJiA5i1tvbY31IZPO752hryTTmZBUCN+KM9Myh84sFzBvjkqkxsN2diF5/so+CGhbXTjnFoT7iepkiAUlz5ua0dFJR64xlG66FjrAFEop+GgPtuOZ+yW7Z+CzZcKUv/OseiZLchY7YGGw/HXDg+H0tfLo5YUffbUB/ATp9pOmrdyTwz8EJTcd9+h7UOHYDIdBCl97i3nmJBZTOe6lASrkvPhQXoilm3aILStp7372OC6iiLp0hUcXUl0mDuA1fJlIsSDjOH7qn3GVdgpq9V3uDt814nkQ5kWZaA6TKn+4roGnTnMZhzCnzb108+9DLANBfassT8VazplVSZeOQXp0LGKwoaqrjnkyjBmUcj+9bWGEsyjJ+inGFPoF40qS78d1Exw8FalvH7zuBuAlKwk6mlOL4lAiTKCFZEP5WzyUowrhyKVBJIdv4Qi/791jnz5anGX75JuYXcy7RrNMtU8gelREFxQ1LQaqi/7S5/icJSpT5H7P4EZOjLk4POU8RXICjjlxOJsaT0IG+B9Ov0YZtCuANofKwsIhc+VpSWfWF90EFL8s6KfoysdvCrYr1HcMR+CDftEkpbObZZn6uJSSDDW8l9mbfZmF9eMswvkjf5wsprAXJ7ORU6W4eOgMspZ3OsLCIuZSE0qoETVtf5m1uINknl37po0YeCrOsXqg0yccMyPaduvTqq/d86idyO823mj9hyU+BHPWFalLpCRO2v7dhcTrMcBA4vsg7URbX54vPqMcbPPdwn8/5rgrJD3WwTjnzVO5XIUVthD/lU7op65Gi9IfGAqjBXIIfJ8qCJPVlXgvIiXhlpl+jBaNXeqBrpYueK7d8Rp08B9NsM0YvgHoTr05ByBXzQFtGhYomNKrNErq116XNwNxOYJVeoeXVgzDhWGTUszmfr1v+pskj1hOnDNWOrV5xIk6w=';const _IH='2f9e9c5caa3ad79144d40f6c7af569f6c5cee9a9552cacbc5e0f5cdf7533fb96';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
