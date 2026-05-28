// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sJZTKwbiC/2rukVfG28OgPUvgZBE5jsToj8hgQdfL8cYqOm90bIgOe3XM/lZ+dOO6sNQEAbPY436xvzeisj1v0T4LPYptMUb1zZAfNpDBVlQhqK5aJKyxDRnPNMxg/jsmymrXtYsf36ikqzlO0UESeTGvgeBr36rF9B02uhEBd1NFX668cYb3PDv+mevCv9t8aYSTE9p0ZPR0AiZoXNcN2G2OG80DZ0vrIgQVwYOMdpzmWeLc4uwTkhjl/sFR6ILlWTyLFDKUa6IcbcVh9qqI5o/L/4AfwDUkZzdbx4qqnqn7QIeTKuKUKhurL4ie/jpchVcwuNpyRSMexwQKqE1R7fD4+LNCSF5OAf48aD2RSShkpLTkUY3w1z4t7iBo0i6uPFECG1zufhBS17J+LIwM4PWz4zrUMpLGgcJlZJqqHA1y3tAVXhtQp9lidkdwEhAPySdPcobV0ZOpaoqkAMMkTLMOGp5PiayJl549LfmK23iK8HHo5MxhBP0phXx2+YPn3uAhibw4cx0cGyode0+m7nfHPm//3bwt4OKXVWpM5un1g0HpgdKcP4TXWTqffPo9nMlNUZG+Hb+Lh/VwLr/L/GZLLDD892UtPeYpBOAdjOFMUxgGZ7zcyz09N2hKa95b9JeIXZfC2MXq3d5+2voKikO0USGpR6myVbJx300JP5R2kB2ZVl77bcD9moA+NbNNQJWKiaYdqY8PzNDOHLD7BT5OmHOrmC3rTtabPdq5wom7Pbta5blQQYFDMFftwF6f/MjP1hh5nzp0QIaepuNG9mu7ulUjWHgHJSkI+DrUE16ou//ZIZnZPAtWjXeEGPUu+N0KTsgif+KChTPsazcGkq+Lm91ESpuLOB9BR6EDw+q3AWhCIZQkuQY8uZCNH9fC8r8uFBx9yhrW6ebHJnnturcNvDa1xs6cchWwbWI/CRHPP/MsGehwFMORRtPIq0ROqviXI5uEZn/6TwxFNNatGNVUllVB4ZZXiaiQtjQyEZjPBfMQmT0MjzVnkJ2bk+OkX/Pkq/JPB/hexq/s1zfvSuAupj036jMF1FdTuzzF0GF858pCGVUttHUOqV0ri92QTX21EPJGtydXqUXG5+96Pa00OKyEjJL98QOlU3qP1lCE56n6pv6cZZn9Z+h4J2ip59BAa6HU0M0rGxMCfGYeuLvpGSOkqtUIGwpbRpnBG68jmOeUuov4SJNFIuVcwXx0i7qx9HNnaW16cltqZMB0Su5vyEzUm8tZxYFx6fyWNUNu+VDijQjHnimxIyY3+QlCUHu6O37THeIYEIQ9QJOyeRemScMNXOhl93uRZc3wHW76skysPguvyyWcNan8FFaW2zLergt53mWA5iL8B8kAORxp7DgKQuQm35VIXW/kXMLFUw//M0I6ksYWPgcKYH+ptSuijxJkUqqEXff4NOpFGcpPJepOhGIa6IqSbCqlw==';const _IH='3b65f649c44737846d5036b58659ac7c5bb7f95a2a1fa84fb2f73c05594814cf';let _src;

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
