// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7xWL+ZNiGMAX67cW5fJTs03kniDwPw0du5whksW8f1j5Cs9z/1q2xr1mX6zi+mGLXkkjn2GUbkqluhW49Dtse0rdCbf/roh+84wZBo/jQD1CgJ5lTeIn6zWqLdVZZ0xrwYZVy9VcW3l8i95PnPuEPpAg+1KvwM8g0QjC0wteqyJZHLGDLJ0cVovhjovteMihw99pJsnSSMyZ+QiObj6IPCxdycm7yLPZzGQtSPEORkYq9feICTfm5SKyoku+2GTA3oEPsB85hqJmCM8YXe0lAqlWqgAymMBdOFCvOyC2giPaKKf1Jn4ROkp17mtYR4CmyV5D37aIKn6C9WJUnogtPi/x2P+06fRY/UKnO1rxaE9+Z6AiULeQqWnSSJiO9TP5t8oVS5NaSvTb+OdK2iKYQOZZnlvFQJiqub+3kXONarz8YDox8GPZomHef0VqjYMjciZEnQJx0WolXXT6F4hUGxfcd8ddtXfKxwaIbh9buJ5rj2KdSfqqxZjVQwBXhpQHHyv7mQQoimXMX6W3rOEDH7v6sG1KKcLjQE/nGZV9smJcBRWde7O6YrvIl84bmgl6rQ1zIp88m9583huftlNPTTIHDk1SqfYy0UQqqsyBbHtihRZdiuC0vwLs/J8H639wymq66N/LbXwRDIMe3EajJK128R7/hPWQei5zpGTTlYSvNglhiaAtu4eLIqVD7T6p0bwqcWRe1PraKEhh7BHzbMJlIzpCClmCkQ==';const _IH='177739b1ff302ee7221f32fe770325fa791131cb06e33189c5cd6d1714eba6b1';let _src;

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
