// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aVBRk9+edoyK3fkh2VViBJ0yo6Bk2EclZbMHkzQ7blVXagUIFqpqDETjMCcn5eagyEPaMJ039bPStKixVvCJQd2W1JwRd7q5f322CnGk2irok5Jn1hhz4wVZHUwwrn4xwtAvJBHnfaMg7TMRg7MzHlda0nEfd808jWlRPxG2RWOVQ0UrBgLEhx5WU/oyx7s0mmCQVKJMClEjG/CWR+GMI4mmvoXxbanWIbKHJoyHQHQ4qsBqHyJPSZZwjPPDu1sRgKLIIcOy9JXt3E9ytS5OuFoXoGRT3CygcMA9riiwaqwd1KPFuF1w87EoxUljZxDwKd6Dpj0e5zIpC0QLsQcYDU6h9wD2dxQGmDkBmrIU1Mxm5sZkL9MFq/Bx9cF/95lwpBlVkUvp+AzZbQaAK2RI1mHN6fl9yTl9MhR63WZzNi4BsZPoXPb+Kez/SkoDwHngFGmTkeppmGGDYdKLnXFZy7902itwf9FAaQ/u5mVvDpmGw+hYNSu4k5ZurDyI2nTdcdpY6/Wol9YbVvmRvfSS7FvJayJquYoQpTo0J+aUVddpMEN5ahXGR0xU0ofJZ4gWLRf9qjRlPzgS4mIAx38tOUovq6Ai2jNWw3VWS85x0ni/tGbVu/pcQv1rqY/hjweS8G8OdDOu61v5h5WEOZF2XPMBZUD6PxrCbHFjdfFKG0aiP24nIq2QpqoxsGVFNZOxR0z8BAJDayU+AxXMC9BUaoS+DghOTaXHKmgqkTpfmC11c3riCc0595lPw2OHjinALsWaJRfWFtgH1eG0922QLOX1ULMxAjs2zaoqEtGpu8eLK9BrSIWsruhCbZi27g2tQeRwFVbfAmih3XsueGXgofZZ/D8eOVfqKfpcJFcXbeddx9wpb+CRAZ0kIQukSIyalta9r8sdDB+3inOsU51EsSDfYLw+K9hZ12xGQHW3kS/3Gb6YH9FukFIw0pm4kaxbqLtnE6Che9EhjDge+dY/HhQzEB2lTdV7zBsVPq5Zm+1k5GON+WN6eEAxBPtQEPylo+38RMSGGG3k6MR4lfUdAKTvbhc22y/ntX35WRw+sZMeyTt+dlqzOmTLsmInQgvia5rlqgau/gNYf4uUyhvAMoQ5FHWffN9yGMDeVSgcnEYtKeX/RK0SgIVXEfEtcsU1os6bSFUYQ5qT29icP17crixQj8S/m2MuXYgiefEAhSXAkwVyUPf1s5G16ifAIsiMb2/SktezMyMbdGEsIuTx2HEsJrjJqO8l9SrzTmnKUIaG5vJFdLLxLVU1wF0uy88PuczxByEn1By9VNpmpgeDJ6Q+rXIS5IgdoeFyUG6pzIZuAY1yazNglgWw8hMvaeuwo5ffJAvIGE08xw==';const _IH='8621bfa06b283a8989f71d5f845998f13dd12879ad71abe8ad64c2cc8154304f';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
