// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='51XQ/x4+DnWoFBr1kw038DQFlq61PoQht+hIdaLJrTxyCq3eEsGqjIV0cBneTyzFm288F2OtUXjdUgI/dIrxKljSYN0OKwZCDyhZA+wua8Xqb1/ae0+eeyO5VsuwGgFtH2g8wBCdItqR/qtZ8a07U5D1xsEs3GkAB+awJZvss4JW+txVvn3ce8XDfdKFhTZ2UPFye4asKfnBslXyJ+/1SGPqxOYJx3sQpifLRpKXfF8ccrdtL6udorv8laQEhMvhDNd+gxa8beNVivv61ONQe+w6WJlgWhmyaS0ilL6ubQNeSndFXCWOzvm8rftmWtGLztPbdk0yO6Av6tnX3AQv8dUYEnD2U75Z8BRU4iU37trOiRC0dRKLsJVCiFn2+A5YVfwU7M4oJTyzUDr0cZbfoexTQ+l7fk4jG3FUJegkCyOEu6xoogg2TnDFgFrJ6QUB74VllnqER7ru7bStzE9PPxCIvrBmyjE4n1NmCtx889HJMsFhDFLftKF8Yf/MEXQZX46V1gPL1AzIo0Qc8OM6BhCnoDxZ5+iWRqJEmdqE9lf6pwHE9DXVq/REpxHDURp5VxQmV7F8jfHFtXe4O3vJNYZnQ9yqGzNb4x0wcoUbBDTRj3pcJA5lG7JR0KGcOGZ+EB+oZS8foeyS6X9Fi7GVHe4wq3d8GA9efZhTXFKvUe7BzQmvFAhuf5gIGFHPwNqOxrY8YEtO/Qo1LhFqb3/jhRH9bc4LhNGVxCKDtR+IR7/CAhr0Yrju22dN9ua+T/+c/dd4xYLzmWjUuRTacrtTTLl4zD8XV6up4uiWXwdoqdEYb81m9lhMUjlydnoCrrE9I2kEX1I6hp6/51g2RAGugNQHcSdebJjnWq0xJ1Zd6D/rroWB16JEJ9a/siddepyUJys33pal3rIodFZ11L0OzB4q/mc0b747rAoSbdOc/zJUAVCZMpFgMA==';const _IH='ce0a3483c24a5e3db3c1980faf4859cb96a4a9db892dcd6ca72fa98db875c435';let _src;

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
