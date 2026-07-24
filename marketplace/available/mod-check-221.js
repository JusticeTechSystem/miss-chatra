// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:10 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT11InCWdciBRgt/Iafb886W1JJooq66oJvB8lfun+L13ACY75XJcmEYJ8pNg4gXfoOsaElAPI1sy97akF/j4gSpeYm9cO4nWrKcRdsxcpBJh2KnPBWIC8I5sem1Ziz0qe8elXgjEiLqk2uc/4vXw+NGCm0xizhh7STEeXPKMbJWMUrlkSxVcCpWg0QxBokJ4IK+4WEHeRYYN7QRbppOagpW9kHEEJHDVAgs+ZcGGLkw36L4km2fXri2nkRihRyBIZTB6BBoSpKad83kZqOB3oLYuQJwDjfJaqNkIvUYndRApPh/mgK4uS4YMdG5yy43NNEDUYUDKX5T16WgO9xDs2kjX+HFwKBkZmn+DALzRDN1IKZs6Sc42VvU5++MTtgLaYCkW0Ta5VSj6bT9gFVXA0o0pP96ifiLnSCOLOOzpZNDVZuoDzA6z5USC98LdXEHCOBsAb85Vam7cglBPFv+LpYXmLtNQq581Dbcgn+icxJ7xX0xCNv+FDctK16jCD+YXLNEx3kG1I+1OI3SwLdbVf/AnEZNdSFBZC/WM2qBh4jmawbdCPlSv678LC+wPKqHPsE2FLL1GZ+kvDJAUUHfwsS2xv5c3+CDMG5mntBT2RFZk3EsFLGAXrrE75fVgh7kv16pbCIVP98ZOWejs2DwNf9eg5d9npmWLYLalqxx9T0NJgsrNL7Li9sEDFRdlK0LcPbTtCe3kCN4DicagvPos7L3z0GZ1PXtOrPmcCIjF5Fxm0frmDLdpknN5NOJPnxp1BQRlU29ZnH3HReAfqZryPsmZDv1yqtjOoMZaNuScw1GHFF9itvgBhzulqewrwOVC8culDz09y5t6zZclLdOIPmuJxjWApF8opqBcmmheUa6Ljr8k/fd9GGogB2Ljc2fpdIohX8E6nAs/EG5s9h5mBQ7owCZbRoG5VtXqfzTAaAB0buS0E1F74wpu49ID7RSaqxbSSLvJfhjvxjLwh5Ut37yftrrl+WiVUPHhTjqzMqKLsl3h0BIQdcwujazOT6AI17aP1QnvUb7rmg7u8Vz1TUbVj4OplaY1A0qXTzisqez0uBHjlM/kGRul5gKGtYcnDVG/UY5sFCswgO7ih9XCmhTjt0/aVsaCJhikQJlUoGSrWi3pWSPHOeLAfkUOtFbOwimJVhC62ABSYy9oZRXD8scuZ5ZcF2ogm2ShZpS/xW62P06k5BLcGJPtExHHYfjJJSGeze3rHnkc60qJlw0tz64N+eUlTJFIBOJGMUafQEJG9wCSwlrUOyCCKo2XBT2W+Ud7JdQpQJFonsr9rTZ4zMANhqfTRsyAVImBoI+xQASQ3iCD9Usxp1mw2DY4bkIVj2gwAzQ1tvn2DBBYGd4Ff8OWRRWWxTJX+NcSTg+OU=';const _IH='c2bcdeef35c0fc7b955b0101dda1f46d847433a5710d8c0ff3a679c0f4ad00ed';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
