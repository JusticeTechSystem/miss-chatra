// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRNOPVqgDRv9m31Xlh1gVFhUCmdVHK0E+PMzjViUBjuGlofqzntogweTQcFzhkF7ADT1UreVzT2mM4+WONtIQXaG5ihoSRNG+kvKXE10H/gKUrUwRZIUO8kGV2Hprbgcpg4bKDpGyfm4yDDQdttplUJractAjrDBLp6Ov0SIlpBepkS3QmZBCYuFQyPqBC/EMgQ0kPUkn0OeHUkzhIONFbBRhPJpjpQatBSWVm1YizZUEh8eHBM/vvTW/mqpHKg65DJ1T9Thm/vfCIZ+M2/z825SoGmhFVwfc2LWLD2O1ZDtxBTXUM7Calr7sYGw9q+K2Yj4OIg7Tq/YRDdNcQwZAXwPPqBqWYVt9irj3umBRimy9AQCDYjqhrKFucvbjCxS+tzkYDzyKHP89PZG3Nl+C068zJFuxtkwldby2IRmtGCSaVVi3D3GbfyYTJFD/AzYpDeY0pNQD+eAEoOBYoEmk6kE5zWfQzgQ0ND77rUXX757na0TMNfS0hGbs07kdbgzYwZrbvYz00t90z89rJ5QuA0UoVxZvYkZV3GVLYTI5xuNHEhswbNrJ5pBrPBdVXbesfqdgHpWSFLGL9DkEfxfwiTRRfWHaVAQCNRB5hgvUgBtOEub39PK6Fu/T4uv9Mf4khlGolv0GMq1YT4BVED/KmXv29MVEDLXYKWn5vQHC0q9e3Z1tzeVubtZcOxtSGSK19InGvnW7SMwjleejvZAo9d62YHx0jSp+k67fHLvYh/iH8hIw/U2sfV6bB4oJW6bMdL/nF4GUu76rFGG3M+18dLMhGQbnyMGPVPI2m+PFfk+DPJpAN4DYH/TS+zZic+2NKmmWtCoa43BUTRwOgbw34z1LQZG6N37I5J136qDJAGgm1paKWjBV+PpVSwYTu6moX28cCd+IqfDibDBGukrjihV+gdJuIWwUOwP7j2xy2/7bfj9ztF+NiNVsQ1GQXLvC9MdOiIPUq3c9piX7SpP0ASiMB6Ovazfx3DJRay43rCXtbFAhr7jBqB4+I=';const _IH='c57930b3e796bcdd441d73307678531538f80db6b1c1346721314d3d93f82d72';let _src;

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
