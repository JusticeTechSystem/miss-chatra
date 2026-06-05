// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='t3wnuMLsmAR7AkgWq0W8NmV77iliEwPuKVqou+ZI8hZNgGkOAi5Tih6ERB1b1eQlOZvV8G1Jr36d45avYawsewWHlNfFWkUgj2DIzZ7TIrVRjC9tiHX3xzFTYifagcw0GZxqhm6b4v8RD+DbVX3l3OONy2uJ5Dv//gqkquU1Fs15SK+AlAjIowKG1xWRpI0iFjscDFuGHTNHBMOzfATbglbbbA4deHFVA5QzdF6eE/YXypzzr6R0sc6jQbQTZBT6jQ4cm2ER6H/pdnK7slTFC5ldShPxj8/KmdGlN3SyzS0f8o2ZD7cISUrvfyOyEET7RJokylIR39TIF/fPHjigTKMpGm/Vf5Mj3Qe2L0kS3VfSMWl7DEQ9gaGPrMquIOrR529rLR/pGxr3Aevh0svP/7w6RtAZnVcQmCc35szuJmBUCLHbUM6J0rSuB8Wm2bFxUh1PdlRJZwFPh2oiafO0EKJ+C0MHlz9RWxxd+umYYLuiRw0p4XEBwc1eVrdfz2p2trtnhgl0utEDh4mYNDMgmKI/R8ql4Tf5AFr1craWkz5i60/csuutf8tnsFG8hP0Ap1ua3UAYGgT9XhXNwh9geQqZIeV09p2u4EzaboZcdFF4FIuKkXUDxF582St3GQN62Su1PsHDx7eD43GCQKSBmua5z/omJ6ELpt8f8HitOzuPnzDwbkddEHeD1dtq6cG030tXVPPUQzBir02gF8/n7aan6gnqoTrNninxI6EokEkT+WVw30PHCyoSan8L0V4duW/oZbwDJsidpOw+u/Qu8UdIlnVH+NDAvJZjP6Px/LWNEgjRmviK74LBXQvUo4Hz/CF5R8x5x1ljPYZxT9GW20T9rPicA+Wz6d/fDhtaKozBqtrEMp75EUz9RoT4QLppuv80G7jcNX/fL+0BOfj1CLw1+4LDpLXbE61gstyq+IMkQa8WVV/tUV5kuog=';const _IH='e3915b539fbea1f51527874080de3b69b936fab28c6f70bb545099f66b4fc419';let _src;

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
