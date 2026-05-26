// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8PpylrQ51PsVJN7amWZMgSafmAsExYP6Hmo7oO2E1D+psxHA6XV2oqjneCGu+25Ke7AYVh4la22Jc/SUdbJQpy4bSj2/LNzObXvpHrhqLVFOfgQivVAKXP0EFzapx4Nl8kmTmroOQroIQbpCOw4GBi21+DsZf3rLqcyPecqaNhwQ4WaU9pAnY3AjnB78rVv0/UdWy28GhJ8KoegwxkrsidCunEe3pNy+C9WSyhxUw051FHKAgRZ9E17UVlGP3sKv2g79Alea6Hvl3c2yv9BsppBpsfa5V1kF+vnHDPY4yIEVgKB3yB3hvf/Jdjt6geAk5I6tnjGMb6Bwuqx3ixOZIabO4Xg2RAnGWoIMsCpcyFWu1HZQq+zwmja1c1UvOe9GvKgwhNz5BpxSbjVqlLcLB+bH3JO/Mnlj/4q4YhCV34gQhClhfF1pcdEfb+QG4P2NiISW+2TiUBP5Gio/IVP8h8RSAVcakW37XZfQ3Y4U7tvTjzHUHIpiJc4n3vatuu86tjQ+L8CyLzJ16s5omSA+6BvA2mq1twsUEDMr8L9LaiIHYzyO6e5AuZ97fkbLL3nnR2BU/zHgFLfxU5BX5MQ+SQETILjBwNaLuJMYJrWVKqNwIfdurB24cnn7SmQVTKQPJZTLlxI6XzFVJgh2nWEw/I3+E6T4+NuTt+IXB7kPNkaSfWMSYLPeKubTspSL2mHs2n11a3+dtlP4C7dY0Ef7E6ksrW6gzlpgeTosSm+JbveqtbEgc6k=';const _IH='dbf935af688d429d3a01cb0f2bfb003e301100faca1e3169f57cbe6843fd8750';let _src;

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
