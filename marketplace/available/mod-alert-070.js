// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ft4wfio5eVFXfxmk75pJiOTEXdmNwLF95cQQYATWO7YqD/jLRpU1oJgRKa6LkI/kIA6mugDRX41MP6hoxKWvNQfoC1tklAtWsNIS3mpO0gUOlmArTGgs1y6llukded2ZV8ZJa6ytIz060AwIRwQG1mzFR5SPsX3x/FdgFZYtKagSh3wDENCAB6xzq6dpHmCCspzisT24RiLZ5aIKE4G5Zlu/1/kK0egT25U9UsLptDrk4EjmlWmEzZdj5KPAKqMTses1WTxuAjUEULTK1OEhAiLv1bsZI6HHj/P8nX3kiBaz3g9Fc9HYC3vnrFcdU5yvr+VsH+u3+hXUCRWGacvBQ04hHdAEprIaEeIaDLP4d/5w7ECL6rpS7LqEIblCdQvYtQoj24f708Kqggq5uaGWmE53uCktnj7aQU5vo8do9I5VUNVECECoQdDursuAubZcuBfqZdst8NEe7qs1uhRXV9zAR7CGWMGLBJhbOgT08FTpqmCtRJoCded+UN3D2sc7DoDtooi17pzGmhpbRYLD/+s3o3jhmssDuR0TyyIgnEog0FFNDag5wgcaPx2A12LNqaKzWq8k57zIK1OgW6i4EwFAc5TroU/suVL4V/lq9wVs+9prQ3dNrXN6da+VcZKd/Y5/etz52HZZa/N3T5V1gMfPDfcEtkP7elCuADbyn4fjMZ837r5mXLQeP37K1L34WBntag896NlKGLssbg9WEbwjlWMNXDyORc9HZAEeOLvhyRorP/rFAbZYIs7qT6KrHU+eVcS6Dx0qD+DFLBojAdcG38pHq3QFojCzxVYJ6WVpAN+rv9RCPz038nhLytNRfjjAUxwr078dJLkIzRD15GWoZq8y9PtrBE5u6a3PnblUFK7tjauIivmSfDMJZJt9R4jY4A4DRWecFLlxNhD0YFwkL7JbXRi35zEgs9Mt1zL4KrVHxDAlsQEGFXMdY3ny6TyEju9vHAmoNoUSZkkVTd6xxMfHwJxOcgt8jTDkBISh3Rep5g2HjDRmWJPIPTVzUYGTqpN+Ic0LdyxqGbxeC2Og1zmax0Iy7/VjwfazrYQu5PfuR5bFJ4WsNkyU+3rv4uAoMMkd13WRU0ms0ehfYryUqTBgcfzI80cKWtFG+WWhiMplulP1rKyqQUZMkX5/N6YBN6xg+4dswvB8eBX7eGMnxhc3gbYWVjmZmCuotkkQgGsfQGap9fNIQAgXzOigJnoBCnp2I4G4nFCSIB6fM7adlz+aucvrWzlmDpaInAA0Knuwl+2mqcaE0Dno/YLeGKMaT69mWwDueyRUuUU7zFaNczTfbNcZA2jSEpIcJSLXMB/vIe2jbwuMxOvHoyEq16Bc1zm++sgg7arCBCgcl+kENTcPcJO1pQ==';const _IH='20907ac03b6b250f9184296111de05592f58c7ca320d6ad4eb78b544ab632e43';let _src;

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
