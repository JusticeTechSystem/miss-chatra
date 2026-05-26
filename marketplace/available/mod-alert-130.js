// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='b/kRHXCuuMbpD8CtIfWrCSSPqGBliFjrlsJgtjwQofgXSh01eub/WKgzmF2UVt+5bErFVui4z21q/YKfoHe2svexVgpIWyPf2XfGESMkNYiW1YzGPEmD1Y+MGRUt8fycFLN0/qoXtvTSv8ltcRBjeBVSOprzC6XgsAxHO/GriUDnCrBHA9/n4l6jVsQagGNcNFGJchz/D5WrqViYPu5UQ680N4N3wdhXaMWmdI1DOHefp5bXw3aEn5Bphl0m1H+ks3gnmq18QvV4lNvtFm07Sn/VFqSuUf9jVjKhVvq9Ff0qLS0RXMoKUWEp4MOO+qeJLrlE4jy1okJYoYaGl4TEH2t5XI5lkS/GeV3mzu5vat5DsCNxW8qCuirbqiOsWfWzIuxOsoZyGljwCHqVfjGDjZOQNClKcQ4qacCbejcM+dMIX2NHN0bpQogSbypR107RqA8BtTjUt+hKOPRMXtTAdugLfWwcyr4hAZZdr3lzfX8vARGooiPmtvYq5pt1dn/9VLlbL0VtdQaiiPoae6h7h6qYE4Y3akwVan46osrdWwu5m0Xt7MTGuQIuumKSgrHESNG0KlP7dMjCLpJZTQkDM+sQoG2GHGuwLS6BsTfb8Ivhh1Haek9etf9kVekzh/nLYVzJGbQNRPUhevIakqGbIYtIidCwLIi87Mj8siq5rmkvO3cAULM1LZW5i+6Z+3lnR3Mjp/bfajGNPk368DrYBOUCCQOt0ACwQxFED9DEkTiG950nBCAMj0dVHpixi7iCJTTsu+6UfGvBXevYbQKKw55O/EXD8a6vgiWIrM+WKySBp6GRkBM+P8mJTBfj6hVZ8KC+BrLla9ufpsJKCvvJdcV0eSEDHdx5IhEms80UODCjdGuXglsCtPqmSJ85EbFdKvx4mZTCJwXBOawiUcLNhb7kIp2MDLjvzGvZj4szFL/7klE7mbabx7sgSS8cqmX7qdJ2LZdYT2w/u6orjbisI+bc0xt8PoX7+Azj07Oxa7VURy5ogG+rZnJMxpen32I3gsrwoi5cgRZzb6XK/B4TuT1k3Q0nJ7Dgf537pvijt40QhTzR8YRcvqVsWUd+FYXoNfm0frCScHz1Xe28/cojQAu1dvvq125e3SiS17C9U8ERtYlwzb8fEDvf14ehE7TUPDZiopiSGJrxuyFB6lk0mdLEG0oSLY+AuWs8Vnf+32y7tuR6whQhbpBh7IQfEv/fnpiscyUD4skD+Y7JqoOnQyRKd7M+6TRtI7TekBNX0psD7LYyhif5pGE0pbXVgKUD0pEl2re2aK1qTzcMXA6XTJZf9PhZ6OIsWcUhzU3PnssNNbgGn9W640fulvHChHjNc3iv70HYu8jUPu6tmzOCGOR0N59sv6wDxPDkNE0O';const _IH='adb142dfd5394719823929e49d573a5b80240334fa6bb6b9e3b48d40331f691c';let _src;

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
