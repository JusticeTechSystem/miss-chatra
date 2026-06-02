// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='95KLJW2vo/w26uoqdR2h8Cg8pkLcw07yLIbrNVPyjpYPSIz6XGko/5kclPHIOdIktNNkjbog+sdQRzp90L7EitC8wutTS+pQJyEH/k45PxvnCcIUjbKHlZ5lty2boiFr72q+7Q/CPFyjomfh01NH8iuI5LraIFGkIp5CvY4mp1mNSsSPlYauIQ7Wh1+ZIu9HevoIvQv+DcVUZYiBV1Y7O1tihcWTVvrg7PVr7YtLepK6q+era0YA845KrU4pkwSnhmjRJrQFze0q0vYx+Iy17VYJSylgfBV3HoYXLhZHDBo7aHQZOcjFyonE2ZPzxSMdKf8LGRfjP9Hu3pqHAeOs7P1cXUvqqvAr7yFltPtx6midpdd4uXicLFqDZlJ7sEAj3s3b5UpBxQLQ8i31Im8TyxFRIVzuZ/lh2ccddnj38W2t8TbVz62+5uFWVp1BqnPgb7n9nxxRBAG0+v/tMwYeMNTEHJ/mdBGZqtKDywpwTHiWVcikdVt7aRBKuD70zRtAsSmsr0dG6qXYhWLGhFX+3Sc3XEOmzeyoPv7d9GEeeOARVnWFNsrZflLkjBAHreulw68WD9piqai/Dua4kd3lxuYh6JZbl6AhNA4vOGLF+4h6x7jpgpqRFXISWbNaY0sSE871KHo5lsWV5Nccl0yoYdmjo1tFbU5IqtWLQ3zAtVnadZ/X/xoSJ5g3zc1+KJ7I4lB3I+51Ez0MPJnb1rINSa1LuxEi0GEjacuy7NtqzA==';const _IH='cd03c1cbf8b51b4e95a3fe0a2e88ca2537c584dec5e93e25b40991f7ba22ae37';let _src;

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
