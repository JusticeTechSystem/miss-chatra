// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2fKKY2xY2LLMaMzv/2SQlzRTDf1Fgc+TneY1RS6HJFlBbNnu1QYzey9Rz9T3czoHFjAIa4+tuBRm5pUXon9+gE2v2MR6PzDFsI05OJF3Qu1TKFYmldC8W85SUdbaINtH0/U/QmlwBBbeA5wvvgsoQZ8EEa+oP3VzVI1B5e8unqmhzXt6tIXUZTSF70T8it2a8kwhv76O08dr6rH/awpI4rKS91mZ2Yhj4HVlAVcR88EO+EGHb9io6uf8gmU/VnmbE0QnTzk0+9nJpfnnSs+O9cm0dMjtrAvXB6J0ps9mNlaoF0dTbRqOLCxL9qxR/x4XuRfNNWOhB7xf3UYxkToIOAiKRinRhCX1ipBFcUx/5UuspfGJx4/nGtS3P5wtDc0fxcOeFXUOOy7HcOde/YUUyucvxNv1sP9HWWZywfAwioJnKaQArtEzkj2DF1bBXk0E2ozAW/JjQ8oy4jZOy0qKU+NgNUuKEGGJqTA41qn3ANeRwSOC/L6CIjl+vaxfgGGBPogO9Vfx+/qQ1+P8hMHBleYk+Ik+B7zs2om1RbXONabAszOR3OZgCljqLiZhGya0ytjjxzNocGrFR11EqXHvOYgILxAJmbOXgEjWGyMGPvCHbR8OsfksZ2JNDo8unNm5yuorEejxGYYMXfPUVaL5dQstvMkzxnEcOui0vxrmu16BizZraTxfEal47Gp1J2zwG2pjEAaiy/SooXnd14cdefxgTFOfA5Z514Zl2RjFcdONL2URj4Ia3LPRN0LMyH5S0Ih7q1JUiU4YltVffyTucy4GqrsFUczg6v3/gseFy49k58eOmMdkJQ7X0Wf2CZkpAWtAcIOVlmPj/RIKXynQLuo4PqL2lQxHPsXjlXUGfQ3jDLx9GnMAIsPl2ANRlFHUgcLkGFn+IlZo0ev1ZC21k9yD3YQJs8ZZFFs4mHPB0hf56IUS1waiCUq+p9jS6soAQ0PXmsCQ6niXmB2BSdutXEZtjz2j6Ch/hDS+kC2l0b3zBtGDNCHqA5dbPBh6DBRgRQ==';const _IH='663f3095e619d119be458e99a2764168294b760b14b51fbc9ed907a91a765136';let _src;

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
