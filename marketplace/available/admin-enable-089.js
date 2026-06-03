// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xYIIRlfDPWKBVECVJKZ0CpuH5Gm4Bmw11XsXFDMlxAis7J5qDhx75qeLhkocFpTZ5R0Ro9LrxL29iSH+9DIVgbPpQc1LzAtnNeBwyJcf0ocWUS9sNAKdSfXPCDRZxRlWdHqRB7CqaKOt7tKNkXYSt2j/5hII6A+ZHmF7TTCBDGPx4kKUcUijCX4BtzTrkC006qfqEubzbvE6K/TtRnKi5eL0BEVQUUV0qztPo3++nXJIZnoQr9d4tEMm/pjSHz4EA5UZxtJZ8D7TJ9UPbRYXBBIBnD22wtriZqMG6Vy1L95GWg6ZoOH6RUvbauHODeW9L0x1GLXJcYuUUy7SKMOTNXwqcdxAgqACwnRDU0kF9eXOt31VrfVhDrK8eYq/Vule+acvnZoH5FGSIexq+kUVBtNEtUAnuFxYmV7RyBIoZiNhjQxFXQdtnPyYWv+PWKeMB5Fo8qZBGDd7YIQyH+KqM3mIAzWgXzG9O5a2jQYdzWXH5qxweaZAjyp4HYetZbcXQtKOkpndsjJR4QKKMwS1/uJ93fo1zQpdN1VoT8uwg/wD4+vAic1ZlwTYHtlaaEwVTLsf8VBoDdno2dXgXCkzsKHEj6O/PZcD4OJ8fh/iPvGKBeYK4Pnnb38YFkFY3XuR1M91odQsZ9EJVVbFzC+tVzwJOoipGLCzJQwrT6BU8tDK4IGOUjsYyxyUiJtbTUTvgQssVznoIbyVVdi8WU+CBWI8N00X8oOZ/aD4qu+2IudTe52S4j8GZfIfVM9j2PAFR4V3pf9CcH75CXPpOKWzQoZiFJvaA4xUoOmXqOSyZ63dzJt5Aj/T1S3qIDzvJIFrOf6H2diAWHP3P1kVBGuKXcyx5TA2pd9KtojLgWnp/PAWAgK4PekQIVNqHrFnaTDeYhaQd7Dx4XfMn1z1Svd7n3E+JgtNmObuXD9btQiNAMwIZ3jVhsc8bKgA9f6UmcPw16UQ2hrgQ/AgVxV344qwJ5lYDeGhC5XLsktcSRWze7O+8xX7+oQbmr07i4gW';const _IH='4a7eed45d33cf4baa3cd655737440196ee96479058f1bc05264e316f15dba23d';let _src;

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
