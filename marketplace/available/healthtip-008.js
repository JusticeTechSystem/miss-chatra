// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yTs862hdrxUOBRkAw/A2Qi8zQRX8X2Y8EjDIjfh9DBOWO1Kqg4u4QZ7yi7R7emH7EDKh2b9hZ4u5NDsLL/bHtZKri/uPy+yT4i1qGw0zyuX9agYbNajexh/VfK+2uxi1gqPEo83SHyxX2T+RAtxNYt7NOb92XtHbSHAIdGsM2IyRlsXU23ulH5MEa9/8qlCgnNzNcDUkwIW0Gua8pFgep1f0R6qIQyb4o0UapWttVnYQzY9chF+nQpANC2kWWe4Zz0sSRwbx8kkHage29hRS0v/KMHHuXmWHjOQf2X1/q4mm0aS8Rtik4IXdqTqrBixeNaaUcjvUKFvPFVDE15jIPk9SMzV+iZsUJzqePRz/vfkSEa68WyCplu0ydAoXcgkLlmEFTXX4NEECJ+xy7cDRLcSqMEQnbYRXQO2gROOy3LYhsC8lTT88Cl1a0lqBHVc2BrNSbSEGel9HA+drZRMkhEwu7lutlHywH9Bg15H2pNN1NWlHkO+TD1jk9nQ0J1w84aIOkLsiEkjfCftMzELdiOGbTh6LyfvrGOJhYGSUVBVQKM7loQ6Ok8HdSoL/SdnGAC78kbOUGxL0wv6xheptboKjFKyorSgR4HeXurVikhDtOPy6lQj0/dhx9igxpWd4mO7gXtgZqwkgHWTgnJ9MzpJ0seQWSDVOJDUNBvQdyMduFYUKTuF1n0NIZoBgxQqGfnF1RMCq8uljm2wat7MM3CVVRpyhNnAS4xp7VStIMC6mvuLJv/ulo3XOsXH5i911E+JbbE33zTgKdeYzXN2mYbCGzaNQmAIbepJlYkCb3fjj/kBT9W8xvCzK77uKiTi31ajv7ZSE6ZlEDt8MssI5Cp4l0H2KjI7PxGkFVohV5mqTwsqyCr7SH4C0UECWUl6sfIzTjpQVbgAYA+bQdCS8BB5oatSqNbDJSuS/fLbbQzeakq5hCwAu0Q==';const _IH='7122748744d6090242a39e2337f894fd57425c14204ccce27e0a9359aa43e0bc';let _src;

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
