// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8p7RfSq8iU0OYMip/fCFeCpI9KyAjxK4Nac8So9crxILR7ZmDVjF4+xAVGuBQCYRlOLQY1BrxyZSs19vLL5PGJdRHIPjZIBiyCIpCtfUnZmqFN25JpW+1JC4boN/O+McXAEilE+aQZVHmowVY7x+SS55AozutiVp2hP3KdFhUNHHaylWT6zzpZT7FZRQZbJCgJwwsJfKvbgS6q3zB/Q7LhxIZ4Po1GqNvUNJIrLHyF2PyIkfscMN61RXPhR4H3afz9RB+GibjgwiupgtH0MV8FLMo5BqPJmJEoP3s+MVLma9cggQDAld3b+leqRnzaX951y/85EERXmHQ0qdKhn2ZbkQxI1jCZB3Mx1Qs+ht+CtcJhYB7+ki+PCY/9iFc8579rk/Wp5oT4faqqfU1AFdcZVKf47UULJxd+4jPN/dew6ansfKu/vkurAMxUHLc4HbdSe3VWmML6SIfojtR4NjJNSktP5tg2vQdyS1NlLh7NVyZu7F/C45xs1cac/B/7n0keW72LrUWHm3FgaupdsO4DFdX3vL6BOzUjQmwiu/+VREsfySC0cAKxYOmSETzC2xlfd5xBLGmVTKBsxB9q04HX9WMvz7w4IxR6/K2S/qROtz1uKOQh8pUEMEUjlOgBDXc408r2mXYOFf4VZXHNmtwg1itcsndKz0REN7mNcuyRmqp0oYAuSVAGKYJJ0F/ekPKiK+ILA3gmvvti7NKjx4jHm7Xe9TbkTxsoUfUBXdNSGI22WY05srFDYSefytfdHRWatHJCYb79UWZQiSNm423csB3nmaqIOLpmHBQ/CPTf8sXWakw5t4DFb4a7nVCAyP3bNlqDJ6QveX2H9a0lM6drlKxJYgJYiqSzaGjRbQSMqptQR9xPxeSvuthxcrQM/AuEQGiEygKrfXuwBOBwMtZ+820lMjDFvx7+fz1UdCGXsoMXXTZ3PPRq7KEsPt36CxofJkh/yyf5PUMQR9KfT2Kfa8STfQkYa099yYciJ/pTBS5H/wdFMi6JjJ6g+h';const _IH='259b7d932467f27deb32e4020a159c7a4435d2363756d21137e3ab5e77a22856';let _src;

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
