// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='X9ohDHRKjQy+1GnJB23t/Rjvw4Ud24uOiPvfp0rKjnkCRo5z5fXA2kaBvVPF046lZA1OJI6I/QkM7tSp8xieKjNccpWwXh2ABOt7rxfjReHeH2uBDab5zd+SUqfligClV6/yuVy18VQ2j2N9knutPbMALoIV2GgHRIXn8Pbpj9DdE7E+n8W71nOEZ0mpf/eqw+usBxIfOQVfJX4MzGLEqvE/QyT8+o0vJ+53jYUb4FUsqvadUZpfqL1g9pq+BCsMeZfbFqXl2OlpQmhif3kn6C64EzqmZfZs2pNPyDsOlm2LefT0sQUGb3wZF79VQKqgvyhGwPH5GrSQUGBOWzzborckw9KDotAXqPsrSBZGMUF/mBbKFpmz8a4wG5YybzDuF+j+4k4X3uruom2qxkamveNJuEs6ZygvYOg9QuBE3pcgNsbJyN5ioc9y7w84XxYCikj+ku+DU+20vx54aclj1qqrLj9z383asNT3FLmXhlyyd34QSVvBlTK3oD+L2cwKC5YaCBNz2MFy5oyqbvHkdJHVo8rxgLPK7VZguwUKl9xphhcmgeq+i6e/d7y72OkxdxK7PRi0cLC8slR8nYlrYBYqQiOrT0tQ+nQSVLyzroPd5553k/lwIxJsOcvtZ4kj35wvUnmnvyTpb+mg0X2cLHvtyYRmog3YVuAYhbbpiXNfrG8249VHbSJWlQ9NyrHu+ya7sDdZaTNIrArxrhJKd0REnxCnzEx9qCXHND5cikTTU8G5HIE=';const _IH='f22b6c4538abb73db2acaf2c6609213df4cf92cc331bc37c2380fecbf295bb31';let _src;

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
