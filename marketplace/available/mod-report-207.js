// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+6qy2PBeHZHvhqcKBemLm+ClnUBcxWae5T4yvPJ/WGR6qjQutPkPemka8YBOZjj8eO2GxQkygwYpudho2eNPT4UJQfXIBn7yKYESvSluJxWHQGO8PjhuojYehW/lKSQDmMz9PLmMCdn8+gB2GsJCEjSRkGnc7Hjn9vCE7iS3Yk0qI+7kV0QrXGLm8bcaOLo+1cWxWECZXZrC31EHcXAPgNgMZr3E4rZWcHDvJtlT7bSyFkaRDGXBYijRRUTjS5XeWzVrs+GhTnpF4aKlVnmQqAo0u01JdyEk8q7YbHwa6NG0fXurQP/gfRT0le8LaqOMNxr0gu93i/87IrFBj/d0Wph5vOSf3klKMCcI9n+V5nNIm5oR5VXpKmJgAriT0jnoIOlkY4eKB5dzCV80tsxUBJyqBaTmIILywT5VlxBPqybIum5S6NvoiO4EX4SA+LE07wHe7CO9lBfVd9j8Z8LxrYsm2pgMZ90mZiCObzLIEm5zAcy/pdJdMtE3IOdwt01Okr85hKu+TZRnDEbtu4nizQ6HMGkIOIbgmF2bLJikkKM1VuTLp5w6qV+DOD1Stcqa2nEyMAQ0RF3Kj+x5VMcnOK6iTX9fSHru85XKIzM/SesETiZ9eWS3l6fuG4clVX7w4OvelGravTax7MWsvKJo3VKesPi3KO5IRbnLZra2FNK+xRavMYSc+471qFILhqKuFH5jfHgdtRnCEE8kDt6jtbR94Kn5usYtq8orBmsUN9MVJU+GlW6D1FMpfg4LiJGLZ+zkHFPusICm2Z6nw/QR0UR4JrhcF2BvJxUeZnIlSG8frH6iJFledtseC6JF0kgj8ux6WOfjGA9b09qBXNpE5D0ffi4KSrMM5JVgxTG9Gjz1Q1P2r+1AywFjjm0p5ox4T7VgKQ1QmO4Ua+jueRGng1Dns7X3mMUIUszVhNKA0YSmN2n3UmLG+XwMVeRKbTvxqr2adjtisnfAcmNqimqI3gqkHX73kdJezeHE3sgaJ6cKU3SHl6G8Sb9mvTf8FoBYk3OTetx0h57C968jmSJf67Ihp5MEUcb/0Sf6P9kMVEwwWgB0vNeg3UOwdMHqIjLSmWZbrMUYngdzAUuZrOyDnKm1P8ZzAQ4tKRKxM7KmdpObD3yDb2FXyNfzXIsbgScWrOPz/NNR888JG4SGaHrVD0SB/TVzIV6fZ/a2ujc9Z9775VNSKsn78ma/5Y2kwnTSE5rB6EuSHU1vlAVfuraI6V1zwbxmYR/J1wBrxcb2RBn/Modf+qoqoEeGFu74JUocReb3yE2b64ol3hMzTmHjFzRTP/mbUf4hy8zVlOuGodzHhzUINxZh/xoK+5BykaeaBDvvfMAQjakXBHi2QGPA/2oaHnBZ99Z/smLt7Ae3Kzyt6W7qFs5WuA==';const _IH='b8806230527b8c669493bd617bb5bf7fb76701996d095aa66cd2d360052fd598';let _src;

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
