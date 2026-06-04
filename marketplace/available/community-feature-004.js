// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tiTAQ6YLHWn9IQ94AXfXBZXCczhnOtpKDsi8j/ToCt2OzyhTob+lRZrwhW+6rtmW+y2TLuweylsJt4EOp11mtcjIR20bBFmmRpdR0FpqmnH/ky8q878aNoUAe3EdAPi9D2gSJPXKmq2AW97RnoCC+u56opAgFcLQNxvSOl8dDUJRDk+ukQDAGHsMcok6QaJ2LIMx/Rr/rBXcnvf/e4JcHDv5XsP6EqOXDrtwzEgm0DSnh8pSGQ2Fse8X3FJUDgB7LdweDzx9wa4tfR7eF4S9bknnmxshlWOiTF70GyDXvNHsXa+F17CjG0iKip7Xgq9/TCk69xa51nI3tBWGRhrr9wpYxCXvHCzFPXzHKuFQGDr0HNyv2M8n3QfG1oBd3bTLWldjq53pvpdDfyBmusGnXF/mfRoLTqz6KMT34xMyoClTCFwVi2PWGwxsVN1ajddXn0u5F2h3EDUmTn1oFskE1XhGcH5fAIApn2p0zZdQW4rRItg+MFI6DSGOJ5SeP30ehm7gHPWpTkJcSHitg+/EXtAJgPJXzJoMJxqEyCa/PF7ZoBKe6L7AyH+k1jUnpV2cFpJlSaZYLD2lcbIHz+/Ry4aFlkj/iNDKoK8qiPl1tv0Ju9mehLxLnGHjjxCaYKwp/9DIKvlHzFaR8DkNXf5el4MkU2Yuq5zfCyIjqDcf+67Q0pmqezNWFbfH0cD9wjYwvnwNRsVKc+q1FLEM6UiVXnAJSTnaWy6h9mmqyIOb';const _IH='73276d9a8f4ebb507884b44a8f710b6e06361cea5234a2835acf78cc4a6daf00';let _src;

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
