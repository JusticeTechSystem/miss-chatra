// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bd0DPJsMbfiVtbT4FuZNbkVBITmaSCcaqIGJ/1Z3lLH6IRCNS/Gu0pLKqSLwsfKx7ru+CTZRPYzvUOTbXunSptPhMwfMDmHlclJ1Q9CcrG2BQIYq53cZ47RbggQSWj3m/WacvyfN3prFbejGS7Bb74KVHZr+GQO+/ikiM9j6UKQF+GhuinxPztI2m33BtG4L96T6rdkb/HTSAKHzU4ZAqvtGsyGQl/brPOeEhzhxdQ5Q0k2mgX9q3XKh0vz3E5QTMA4SU6IRUr8e8nSorMFi5ktgIv2h4imxtaSv1/2aosfHt9Y8AHThE1LtaLc726r1XMSvBdXYJnpG3hchDZG8eU8ZBRpbPX4zdNc8yrEC5brInhL20xBi1iHlhiiUmlgWOL1RaYDieg/7xE62/g12+yFLJZ4cFcgZrImuJSI+KVuuSdjmfBzBA6TwNjb1GH3lVsph0Tg6J7yx0NArBjPRPYnxX4CYv5sw7opi0Mm3iK0WLrDkWgew+CbgB2Bs91Xdc3b/4RunBu/58Tj3x3AbHJpsfnlX4QSsQtuM53McBZKKO4TYr0eFAU3uyBZU1NdgZGNHPI3zyBujAWKYzW0spJ1j36kvGlQg+3kYraqf2h+HWt44P+0bVSwGe1Xd0HRe6uaZjfmzo07VhgpzxncMS44CFBrkHswarXwCpIhYEMij74teMPoqtFoKNM1FmHZQZkAabQYsgPxA5kvhUGbgamfJ1/TUd2BNIEFwryTO0QFBYHU=';const _IH='4a6bfd336c5291055aa2e930165a16ae909221eda828a028b118b29c2efcedb2';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
