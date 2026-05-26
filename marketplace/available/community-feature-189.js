// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fpNefGNGG5mnU2ztWzYz1pFzeCB/Qq4dD4WdmIS0P+2aoNHzekGTyddt6iigoiuz0uPhHASlWOHbLYAMYXFS44yW7Q3w8gxrGObauppznW+3HgoxEXt50qFNJ1VPUblFgWRKqyNBQGLo8bv8zV+6AWdgf2Ez7zSJevKKqSbwiWd0pxweUKz1vksl3RrUf0jbrm1kkBEC0lh6Ih0iaudyPF9XKQmHSb9P6G3v0YIEUxSnu3SvHO0+HMMsfaW2+TwmWsCIojsCIQCfuakq15IIRPA+QfOP+zLgwrFIJLKfLl7Y3IOv4CCqZ7RjT3/WCuWrMVoAQxw0EDLECHPe5XtG1kIhKcjjjK4Hz85V1ArDkiXVuLsY6wDmNKqb0TjZR/tQ/sv0DIuWq57WpXmeV8Ye3aAPHka11AkBOELEDAUbMWa3xOXwA02b+bhpmjlQ9lUHSeTo4fcfvuhvlbGGgReKcBg++Fv2YSGCwzpmObr4csiDmTJhSp9zk6oXdN1ALhXGIGc2KQuQkEUa/2BnmWUtfUnkp/HAKQ+hHIp26A5i4RQFBwG+DFtYtPHUBQZRTheWK9tLPDf5Ss4+E5AlTndZxI1PtsbMr0eH3CfBa82z082avm1Gp3LBs/jw4LfWwp+jdk2vk3uRuRQpY/lf9CpNRGVQbCYc1i3IYn1T2osMc5yRNzE1o1Lf9qIWGbPYUt5hvCjZsAj0yjmXZkaDj3s/NpPwu42HRoedXo6g3fpgXCHfigmsLxk=';const _IH='6ebf8b3af431273fa68d3809c1ff47fcffa1d2ab5ae7213f457885aacc01ebbe';let _src;

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
