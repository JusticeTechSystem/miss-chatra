// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='H8c0NJBWwcsQFHvcF9uJ9mb/en/7GwxleJc4u+152lheY2lgbZi7tIkGxJz0si12zwhwN2+UIXhjkJtckwBKYSmoJoytyaUHIZYIcOPs2QdwDFuarF/GlquO6Yg+gIY2Vy2a3XuW+NWWJjAyMukPLz7IMxRDi5GwzOUXCK/VLfbZcC899MKwhnv64Tspkd9KoQwogWPNLB2zaaDfrLoMNY7SLHtWA00Ml6th9rhnrI+6l3QcqIrqeVfyh0MrjXnmUf8LX5JryOrFrouSP4p2Gr8itX0jV4Zd3LoJlxKSETnqHstJk+Fb884BsEJ3FSUXx7NblfxvQezZY1nYnr/bptBdaJaPl+eZ10rO4x9pVoqK2aKnhV3aa8dX/1f+n4OaSsv2xiBjDpaOSxrpv27XJmBTnPz/YIWxyvWvfV6ek+Xj3Ehvv5t8N5RwVF/NXNmzr1H3dI+Cm3Cn79BJ5jZ0GHeR4YTNWUE=';const _IH='a88a2fc53a9e4ac750c689dfbe6ad71afa1bbf715daaa315a2a908fcfd09800f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
