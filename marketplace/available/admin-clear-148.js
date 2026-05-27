// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QWNzhFc9fhzsN8olNYdCEFWqI7VTCRfqVApBYE22PiI2wUFyFilAUs0I/8CLbWx3urzYWs24cZFeyjbOuQ0uU+GTFDldKftd1Ksy8UPX9CUmDFmxPpIInzLlJwDpxHHkFkgH1qJA+UcuDBa4xejdcNjMKKMFeIxJ+bBYidgy/eM/lt4/rkj/XE6o17RNxzlBqyhcDYMNbYg0HObUL2UrF6Qh0gs986Oy8ALllUv1LVdNo8afd2gypsnrsFBvJqZ1byVLjpfNIaTLPw01RIUwNaUgyjDwPCVPk92ZWNzIzHEhF+UhEESsHH8uIt8Vda2FS8vAV65+/A7fdN/Sp+LxKORJj4bi5DCv2ZhkrhAMIledjdVn74FDNMrIp3nYEf91///H/ufDAR+7OLLPesZyK+a9weCwo7jNBgEXfvi66TJ6r83/sKFER/yNvtticLgscYpbkunlrrP/KcBw/QGkpx3BlxeKlF32FlC1CZokw5QsD8YSyf1bbD98vkai2C1g3q5XkHqNny5mDmBq2lAsOLOPoDqdALe8nIsi/aoHL5g9SIMVJMSpaucTDhBm0Xy3CcdQPpFzryJsHS7zyQlB2KNYkFrahEd5AiR7jUDKSRpECuiVIcjJqN7YWbkZdugYJD6TnqMlZSOy4xDOm+jVjE4Pe+EIi8ns6/MkFw41jaGrm+xvgp+I2KsE8wJ1Yh/yptWDI9g18cZ1pA6qXKV8y8vnDEb+lZiVVJaKQ6dMbbRLx1iyXpt9PQCdyNyjrgsla6SYDugOjxXCJdFouZ0589wuqkQRCJvgPT/5L4g26JAmMQ4dvGzgygcuAuAz5WnYOM6E9WDXtObyqZMiiJGQds3wBy7BeNsl1U36OKMHtjHpYoRW6qI8rcm7zfL185a2QgrBqrRNcl9daKjk/NTrvkP8oKXpt8/GDm6pxjEIP8ubdebgqSDLhTmXMbYktn7WjjxP7GCv1prCMZLH0Sp+5PFzxElXD36S6HM3W/ZFiXCI8rDASKGdfKku';const _IH='7cd94ff5d86a71867cb737baeec5e04b672ef5989247048a7220ca9c0caacf86';let _src;

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
