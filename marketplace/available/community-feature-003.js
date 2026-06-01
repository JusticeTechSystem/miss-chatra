// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:59 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9LKGQlBFX4vtV8+7HuGYdZU1lrK32trlzmde1MCvSlhw/e7laIHnfX63sXK+pzNfOY97ZG1NFtCVb7DWf9qt86DAlIHukSlhhFmY3BBOLBOB1Z/izxiADrXUsAW70bkTPCIfs8Ggp5pV+juJPgnkxU1D+7eUlYsmVq5CMHPabP7fRoVjnDpuMHl19KGOs07dPHGgNRHi+tBo/aRIC1At1wvse7X+7RRiy0Osc5nEy1u1mpWJ7AGO/imt+IC4/hwsl4xkDH3P3BI24zjllzTdlfzmEZgZ+OCzwkyf3C1jDBQMg9MesDljRL9FQa2cF7zlmslA2Ebydd9RX09f74Dj+h9qTCAZvJI/9AHgn4oKIUg550XyHABGSEfg43sJV8yNX7wVu8u0TT5lR0NhdumYKkC79WSoHS0HTBwAolpmid+tvv3bbwzkpW8PAPs4ZT9AEPIxGNgXMvuDh0E69PCf9XNZyar+Id7MbHObSdDPwvKDEyNMYN0R6M/qQpy7c9i6KF7KI140JgjXVxYckE8QvrBv6DqXgg/JkJ4CcpnF0odn6kEYn0SEkcTcMEcCoFGo0VMWxEXSbsTkcJM7gbYH63GiugPaucgpB8gQdir34ThYM/8HxlKOvLgF5xxP+YP84VO8JKbWlkZ+QTZ68AxvqZ0Khback27Hi63E8pkkr8lfiPjwCxeQOeq4tgiJWQB+x9LGaqDcYBH1hQ3BMrHzzr/xZzxYA==';const _IH='bd2d56e9651e74ed04c11c7d83514bdadb1ad25de4f48f754bbe701d4c18a578';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
