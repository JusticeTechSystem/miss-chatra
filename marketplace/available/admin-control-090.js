// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kzE+HrG98QhdMv2lUjlyg/8q+9Jj9mLNQEA+w+GOc9Utra4R0JIt72C4kJWfnDWH3vef5gDy1l2jR5SIbudR68JL8A8xCtH2TGcrGym5P+rRIh4gaL2V/ZtwU/UOTGHH3Ra3Zq4HZ5u00yzIVGJodAOx9Qd7Zq6322fF0//i33XI7oKuy1770jKnVgZO3uZj+71wvskzt5oUGvGDMX8DwqeHd867wr+1LjSYAf8ifeTqFlRgp+nzaPpyVHnZ9rSx4cKBJmQBo2cqMJDnHHEZZW3cR0tcYAcZz/GzdRTxqxNDZrGkBUwIOoDUUhGpSHh4C8OiBR307cbtdjsSogPF6mtZea4ri4sIAkVRpvlF+fMfebqZqN24lqQPuQ6AUpRjxb//7KO/duxc0gm473ho+VSf6sc31bC1ZGTj+bhmw3eR/e3QDRc9GE1DVqmoTdJfkbplKPqFjXNxTOOO67aXTH8gb3MzjU1Pp88tiOcfeK250B99JuCv9+nbziX7NinDJz3BLoye54+4dZpon1UOLB9ucqFygr8N/kOoFqLiy8NcwfAdLhbnVlNGi4OoPizOKxBXhQONopTWkNMiSBh8QBtpBGHXZprL/TE+KR9kJSDiWvmlNy22o+u9uTI5PGY2vjPJvOSp3w/BEr372avhSY2ZD5OHqKG929lkatGxv6r7z8Zs7R2NE2DHsYuau5BrzsaBUk2tNFPn60N6dC0Ku/fdUh/zdv+MvGXXO+/2P7CRcMJZnFc01nu9g4K6+eyBjSNFpOGvLY1+rAtVThEw7J0uLApkKe9SXsOPdiyVANwh9Va9/157qCljXcmM28wsW4wHPs0bBKXYKVWLkpsAnRn0/WNW1xgSecZLdhNwe/4UvZN26uqHDgd4Y243d7/jDSvxQ7z++ges88lj7tiQEJGLFidWjYt6v1EeBRWRfXmPbOc/B76KqZt9/7Bjkc+y5McTAEEr8RzjAgqVOW5v2ePzBdX/q4av4bIYy6rUCrphP7I3g6eBMCOeaxT1UqOzGI8cdg==';const _IH='48885395bb7a9b82ee6f8c06dd299a3b758a92d4606b9645366505090a3952e8';let _src;

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
