// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='//SExmglRV18AmzMozny07ImvjeRKCej9fo58DYuYGAgRQQTI3TdgOPP3pQU+6rP15KNj5JY9bAI9jxxvB3zZ5X0/cZFJOEaj9Vhq7Hx07AiwW4x4vhDW3yGUCnqsFEsNgBPT+KPJJMaTCKWOSz6r3lUSwqWQZf+JHbWUrOTcmNl+7BsIxMpRgAAlKR+KJPRSfqEfbarioRJlaQuvzVh8dG5d6N7H2hi2uJEmEdVb0iIg71A9GE4huqHOAwlf23FJYaCJoGP4YNvgVkKFfr0NxOkyq8MjZWZXZNuA6899laf7VbDX8SHlhgxQQ7N9ibCJNBR/st4Qc5j+T05BYxY3HQWQ4YDTfYq60gSq5IP/3Li6rNtrRMNI3uDfHC7sMOp1VjHYdV1uvMR583mVdhA9/a8QS8kHJs7Eb2lOw3W52QiVoLPxJMhe5Wl9m/JEsRUD+71IppPdAOZlP2EkaMh5Oc6douaeb9eH7M6ixWmqh2Xh/aErvuEYjWYogq2TgtXRNxE9YttNHYW+RlfAWT5n5tttXcGaeEOTpR9Q+I0KaP9YRCylF9DtlarZpx+BG/S/z9qv3rZ1SCjYkxUAFpYctTyD6llpuhCojawnaiiXn9P7W9q2F2oKf48YV/RnGqn2XzB7aTEJx/bF1qnL9L3';const _IH='adae3bac790bfd1049ba84d8f85395fcc6f39966ea00c46d932d35e393577283';let _src;

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
