// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lUMNGFxd8Jl0jzVigKac0Nqp9QLLJgTwwpBWjLZepT0nh3CgmUBVrZPUoJ9qV+Kwz2zQVUlZR9GkMfZPd0FuU01lGzkgxghQGtvKbBP97IdqwhC1/LYXowXSPhd5mps3qZMcLxcRVWMzWSWVsF5ldqLnQjjeFTZcww/6Xos2O4mE/BTUiW5LGIaLygLL3ceXIODL40PjNVmMF2GhBnrlsavIeAeLRp2J2nefmcfpGd7NzP6bwuuvEU8nvTP4xW7NnQe/d1V4uT8IJ8ZbOkiipymCWNeQRi4cwHGiwKuOweKAcAXE25trz3S4t+3ZUsUjFqMdusPjUF1tA+NXZieePx+4/2lpyvJNCL2ifGjXznQibzsRv4aIhdrVIQD5nMFEp6MbFP20L3ZRJ9J38WLIiyNH6AOthn+HBtJUDQSH6Kn9DDLFqJAXIqQ0Bs/nrpI3QvJ5dr5KMhnCz5l+jmMj3ow7skpK0omXy7dQ8tkMyk20Hrl1fV0KfZpry1aBRtqH3SRoq1gjQeA3RiNvSuB0Z46GXUb2j/sDBCaiNfWQYXaPXW2cNfzuuNErwAb2a6RE3UHm1LHmoSaSalHXg3nakQtnUwbnZmDYUG9CwwSw/tpHHMTUivMGww3E4iUNsBtdAiYA2CJ3j0HA+ik4AtEGkZSsnD+YcYIbdnjRIZG9yyWoEclKc3JTq9rjt0cNKadwUVGzkvZWRe6Cg+2Oe8bFmHrIrb9Wi0VOnzcz0t0=';const _IH='d92b0ee94455fe78e68bf4fda1471351a610df8d9a1410b2d1237918ac81e16c';let _src;

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
