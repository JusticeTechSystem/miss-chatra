// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KiJUhvJqNIAndOF3CCoS8oXY882AGywcP1siZOO6877nMbM0btgMLxIk36qa/sdZxe8hi9LPK6/EIdWqepe0zSM9Gw8hu/CVPerL2mJ8Vrg7EsMcvN7ajxSNY3XZG72fehiI6es12xIIu2cEAGkvXJTKxeHHvWbfxr4fYpsoKFvvbymr9VqCMot2PaTcv/6hq1YV71vveSFuBhZdMhk17dsr6o8SCBByuY57qcDxr9pZNSdu1bn9atEWfeIRSJZUQbdm1tvoG1qglo/oaJHbAWaC+Qq7X7jJPUTreRBieQs/0zWO21n1g53FJ2B+7ODvuHTgt1fune+2ONeiIMNGigAMAjbHobE34voKpegQq9YUDoZHslpCeEAkmMWaZjtLQeEwlI5KKpN6Q14LeQZ5jHt3KP4X5D3xJCuNoIgodwJz1uo3OExELzVXJp5dBL1iBedwy46KICTjIasnsDPv/TEwI3eRlqiYwl2NYXTrFuc9qpaUDfReP4vrvJ+kZsjR5NXMNRyGSizTy8TwInpfVVoN593llX4BteQwUHwejvl0IGMvUggUXR4ZjLM9bR6H7pewInYcv9jMi9txPa3Pq41JeXOZGmQSuigLrQYpQQPK1V7Y+RKLWetEvNJKdYaK8F1SEMYdEC4mkV7Z0Q+KxxaAdF4baDgdvxeEl+dlME5DJyknj/aU/x2u/jogzzmW1FBTaX7ODis=';const _IH='d495c8e73bf72090965a6a42ae988d44b460e5fa93a0fe05fc2e7538d4551dc5';let _src;

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
