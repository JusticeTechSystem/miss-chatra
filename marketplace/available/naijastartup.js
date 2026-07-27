// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRjOFS7at2fpEXSETwTmI7Sj17L7x1wU8ou06ZWzmAxFOUMv/E68RgC7RBj2TSpME7JbLlVe1CM04+eOJf7kIR8wlYgCnGCxwEPgnB170ei3sAOYlsHeuzD85NSR7nv3zmo8eLTh3pKxHpfWi3IsoGS4cQGZDGnqmcVB0idcTZu8OQ/vlrcmXOZsdCP/mFvZYwJHKOAiQmCav+Pt4sXo9B+53Q6kdb2sZZxV/jt8mIOhPMZRC0doVNhwUmSGSzLFzc1K0Y1Yg9kEfsyfF8m9VrDPP9fAKz9ar3AM1zmWNMU1laRrB4f8lv3eoSXffWk/760v4ZuHR3XZB7Wqe51S5tqNkkdZukfyX7KL9TFVnKTKFcMUlKpbISOoGjSgmZSAz2hxbgMCpMLl5KkR/qeq3dADnrm72FYvGUP3oD1JeVOGdiW4+EEchulGQTmdnTbgeCEQBAwvzLERO0Qo/7EL3jasEAYH0SL4YPkZNrzKo1BA3bCYcJaaeqo/UK4skVuxbex+Ld4aE1FHOu5Wa0MreENA0XpvXMGydfOCEGe0MERD5bXlJmfpwtQvTZY+UWVpNGKLLfS7Lrt9CtJHKxBYIJ1jnJaN7oTyPbnVm49gNeJJtVm/74Yb8zFHGN/9xl6vSCYDtarym+zFtlllwIiudEDyc69/OxuMx5Qe4Q8gMlvMci+08f/kM23UAkdo5fXa9VoxYErCd5n2Ag+UoZGD0ngbTfUDuQTLj/criM22exXeod95SyyF474hPPdUB/Yh0KNeL1XecHQfakTrF3lrfECyobIaxlT6oh9fJ7T4/W7OsHGcVqVi2pGfSMcgoFUZOexkN5vVQRcI9j58lJtAaTuhL+I3A4FUuwDOxDr9HnUhHAfFXJ/5jy5tFVnnn5OV4EYq4zWIXK2PX12FZxBYVvct/irQIZbtnfU6W+q1baPZt6Rjjzzh4MMS0+LNoga46643d2iK5lWykbczzxv9glm1rUO67dklD/WBH6ZVkLdUuog08afOpFK5J5dgNE8XTW79UnTL4KSUDO7iAPSoS7GO63UVK6G3gFJQrBfJ159llxoNfdlMXBSyqyLWip8C1dKSQaNVbfPBPPTPDyCU7ihwGKjchfIncHQlA4Rjea5b1g+XJskAM6U9RUE+RSXk209/1yzgPUk4GpvGlxTwnUUk5PB8ctRafgnKOHFHxkQyCeZWkic5FtzThOVQ+HYj7OZlF+EjH0=';const _IH='1797df6695bfab77d931158641692cefe5351801f90ed8c5f5150e8751869de2';let _src;

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
