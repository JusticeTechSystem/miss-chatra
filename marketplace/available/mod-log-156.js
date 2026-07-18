// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:19 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRALq1kC6ngeKgjz2bfys/hx5UVJLZ2CmGqJG+PXzxmmYwWYC3tndbCqzDCL6lINRtd6PJqiMAdl4y1+ICm0tz0Pe1PjjSt7ElrLUfmi7eeaSknYHuRw11xtRAOwYRY4tw5hxC3KdkOBrSMZAYP/H9xohe7jitSXeJSbi8yb+oEW26HB1aiKCqh0T+xwkcbqqowyO2grIshw3m0fS6MkVOfeFgehD+VT7zcR3bc7ssxdt+5oKNv4PnQ4ARaRETVqa8AJof5wKAy9veauGML/puLmKZH+TIrCXQ6kMRyRsJK7MvGBdkiY6lqgDbbJJfnrrEg7IpJYPRGqwxQ7VV0rQmbuhAnReMUuLJRM0FwEJSoQt+u0E99DlhjFtnwRTWaD7cKBlZVqBqcnA6WdsNywqHGcR3epcDxtnMziEKluRH9t3UYvgTUoNDpz7NoMGrqmAkA39aqP8frh/rixjiH5ywh4O4uTl+oofsiHM9jOkJa6L+f3qZmsegTmboBC6z28DJM59LzbJllkb3u3bp2TMv4l9qjo0B6mhIJZGCNykiWmr96wAyOKe+2jNu5ZBq1mtDx7SNVSMc/rAjR7+2HGEPZhz/JIFwLLYvxVO14bRx7qcf7irBFwsRVb4n6l1iQFc0kCFTthmhSFamhhHeu0FhKgC3Qk9yvzPHhzPrt7FH4ttv0pI6SBbb1YydafbPenXxBAjF/bt876WuCQWMhx9IxqNHr9mHSTBDykLOz3lrGM9UJ5AsE/X1f4ITKHH8Vt3GZHT1VJPeaEf1Vm7zXkdkE3pNxvhXMAhlIFu46yhqgGKwlLXmSdFBpliWqu/SNlgm03DhRltVdGzlx1DO+M12V9r6uFMXgv4DPIMIROkJXMB4e9bRvyT2CvbAgMKSKKXsUbF15EMzm+v12HPEEuR9G03CJ/QMPKatHcYv1pgp214/xkVQqbv50K1LoUwGG7pqJ0ajdG+omckwjJGpxycD1U82sppwvz4EKR4Ou0/rWFCiYsPmJJCzApodNVuW2mjT0Pu3AwTfcm0nmnDNdPvQDX4gpeuHaCA1HCYtJxp71x0YqbYRsyZiX3KzjLmzAf3i0O8jc6KBoSzKxI1AzPF6eNth6RyoXzADiJixoORz8SokpAX2YTiFBniIXPBZ9pQRPxQlwXdB2Clh3AbEsRGnxdPW5ZUmQKIb5u4Ea6sGwhzgdmaafih5UxYPsgssW86hCntc0Ogq33rc2vi3cSZjbY2AYO4b/CdyL07Q4Pu3Td8dOURwpulvLA3dHwrsnFmmfLQjLseIjkImxaEsAuLARGFTSqIvpuRaqmA4SOlP9uqy7quXOpDTp2wsVnsv1spfI8QP6P829k0S2';const _IH='f0dc9bc29eacaaa676acb7ff5999c16d11da6aa2c297daf275b50fb71db3a81d';let _src;

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
