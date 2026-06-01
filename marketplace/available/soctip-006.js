// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:19 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxtiEVrICtOXLZSer+gKEA6uZN5zEBp/0ggUWEGtvTjsJOxoMO5KsofIpnC46yDF23VtElDeIGxLVA7/cadTwEACQhD3GRUtjbO/0QhIfliUN5HsW6iGwWRipnKtojUkKP0gK2h5rGiXcDPisBmw3ceg+8bGbPH8bR9n+4IGHixPuNtkkG5JttPjPr/Kosy/s/CccX1DGe4pkqm0wI3+JAU2vs8Xwy2gjpwvM54NCyB2L4sgSWCs6CzHMmxPRjiG5tYfQdQI5ZGonROeUUr2Zj3PsNQhgp4ccrhNOqaWE/aifoXZs3fa/fxv9uI+sg0qIc6jS5FWzoMY/VKKDyc1PUXhLapBZCjgk/SdtNTsfRHnjMTUnOqSsk3TEwvN7EZqrvx2NkvC9FfDkxZqjjTOqz4CzZ6k/TzTgGNyUdMBarnx8a+J1uJozryNkyt8UeBf1DWx/s89FGIiBU0YL27ylE2kX9EgfD6fDP9CbrdModV6PJyoOhm8KzpmXUU82VKS8ExqScZmLGgS0deVJrIfGl0qEfgjotZPjlkY+R/Qj4limXIaBrltB2c3Aq4Zl7sDbZ1Ly4txVmz5LLPK7HoZyHQqspsgXYdbzp9rEo/34IM82hSypS6UfzrAxqI/rILlS9z+O1hhxtiUYbDqfPZhJXX0jUJWoPyEJxFUUm04SgVxnBmeY/2IwkF2y4HrWBUsS/b7wV2tJnixP9poijZoQNKeCcBV6sOTrlnCihD3XKAmE0hMHKnVdE0Rl5NKYiUq+u6IRI12aJsyCWGJvKsZIxOQ9zBbT2BsuwAxDiA/t03DTurrIxp9bMhJfltND6QnGkYNgyiTuATEugBRman1u/0k68HhihKGCtIqThs80NO3QAr/Xn2P7q2AgZ3v/QdcRDhipn6tiZJaovHe+BFMgcXEXhuDv14E3CbK9PxHpU+8Q4nk/Y5+tV675QfHOxRZH/wHiNc3TnwQWfWiEEQaEy9O/pitHY0kJp1feM78siJc3YmSAosgZqSaz3fDha90qid7V3kFvCVBoRmrG9ieTb2vc+nX/sTLlStc9cGeXBsx5emWys8zEpForJ144tRntc0sm6bKcn7miT4k';const _IH='06faa7be9d675ed8f0156b730b9238c205448b3151fb35f4f7eaa2b07013f94a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
