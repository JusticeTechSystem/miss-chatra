// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PXyILmUUlIGFD3QjOrY04fg4fR2uaJ6Zd/7rUX3b3iHvaMqZW9l3jN8WHgjJH+dplmFPGHtQ/9ErBtPuIQtZs6mgm6S1ICA5SsgXgNGBWoSvr+Wt6JpSoztkPUvgF7IdnGxgRj5zgw6njw5i7szLUKQ9qOOX+e1GqU1thVs/bNyDaGKr/HmMbnnlrs5b31EErIcfwbbZSo0mkY2rdEZdrfZhrbFk0i7MO807FxUthuDxJ7OAITOjfPmPzzHEzZgUIeo5WxPGNoNEbFDLyuay8qmrUDRafRyGfxmYvq0Z2KYx7FEVlj5Yh8bLvntFDITMZDlH6skz0MRaUVd/tgjFoIsn4ZkxK/+rhOAZQVxMLGjKItCMMuCB8lHPuFGagVk4Gg5HKtRHonIIPH7+1rdhDuN8DfQ3pC8lwnJtkCYA4EYWUYRPQIC/aW4XTSQzgezC7l6RkNj9Y+tVV4lEzx6wWNiRmc6jFQpquGPYFVVH3XCOZ5PQ2hOWMrLjPAL2G+z+gP4s9f8D4TJF5sAWXJY/a+AOW1TmHYv0qqz46Eh8ym42Wfp9MfWl+Xx2MXAeIgR0wyHzUQcIaXAeUzn0RpBD0YwJbqZLIJfHomrDuabrScovKY290yBrRAthNH9AqQQEtgZPUkY/HaMCigM7bsxckBlOkewZ2A47Q1q9i4t7CaVHUWxGAAZ8Nyrmi4p1NOpIhggDjaKbMfe16fgn9swWkuCRHdbl+tfee1E9BpzxBZiBux14w2cybDJ1nWqPL8gQH6jEEUeq/SPDyonOBcer12+3Vq5sIw/PVgHT5X/nM4tt2AuCtNVFc1K3VFEuaAk8OGCWe9UF0z2SyKR55vncDXfz27sHYMTW0M8JgImOOK82Jl/gv4Lo6x9BTdAhhw6p/BAi2PHukfGm3f6p6JAneC4RpOyrzXa7pyKKvq9eoTK1Pmh+LOt4zKbJ8vnIQH9v48MxhSraoP8MIK6Fp01obSXw20y6sgvc+pS3SW2CUzIh5c/S2v/+bOH2W5gwYessyvIcKar52g3kX0O5C0Q8V0XEovD9xbx+nuRxzsRNMpsIRhZIxJX5y9wKz/zoiX6SLpZPqc9JOTVp0O/slbPkGafiPsHppx/F10zvg/CdpfplbGiCYMeH78pSPfq+OCEk/j3WwkYsHHUNG/lZiyv9OtspPDP28xA0nlbFHgvhCgm+';const _IH='28bc26e4dc258d070bcf7c2b8e60ba1f3aaa16f22134efc1819dfd435598b750';let _src;

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
