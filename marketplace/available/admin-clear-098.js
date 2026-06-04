// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3oWCxswf2CIuMNQAjvS41/gZs2znJT2lK1xSSIaE9IfsoO68W6+uX8PLdtasOdMwpf/GOzJIzhNDsQOZWuIfVl2y78Pw5imCqs/1nYBXyM7/o9bqj3oNbc8Fv4a+W8TDi7GQfPxrg1cRIkZKpFfKfzbb6xyowCH5qwSBq19VGvsuQJosJZH+K00CbK8wQSQseCtWRDhh5SbufrfWQEqpH1gb0WMp7ZTEgUmVwd8i1xAiqhW5ftXXEesg3w5OjmpweZQvUyaYVb4ry+5CVpKbgvZmxxO9tdnNFTCNxK+AMDf+xrZd8csebABL4BM7LYJad3aXfA7Dt63rDvdxoZODwoO9rCgRZ2XaVPStqRG1uXkxXhEgUe52OG2NONpUEvqarHmzA4TzcQc0kb4CdxRyQ4SOZrriva8hOa731vzVwazhCBLPlHFFcjOam9jGSsWmHmIiaDM1vLQah9hKxoVufmgcdx9AE+OlZeoTcPPOJH7H4PJTRFkwM079cbOmdKYhrmvsptr9gR2hrzQr7R7yvnEq15eMA/N+0My9Kku0/Hygn1Jr+IWtck/OYBE0C4RXIyj42PG1JGkr+ALcD/MMwCQ2GwBRiGVOEJZGVUAmDJLJEb26x5tTzpFjxJaSfDxNM7Ho96o4MW5d1fIHDfSDzHI9qWB48gN53fEOWfIWalKZnZ2YWYS1sLNkU8o3qSONPrZ0Wccgv+BbjhYL69hs2+fatXJfMpSFApZ0O1TpEfvlhEZiErqILOUdCwv3fFiIHQzN/FSIkxm36Q5N0WGnQQ7gFxHGVDSdfNomGEbbyrkhAt/tXag/FdewOGLmLg/xJ7ffjj+etJw3AUbY7eXub85GCN0gnfjL42knxIw2uTI6zuDweUlrBuACnCowaoIvCP7P1opjr7tRyP/s6ijSyJedPX/zj07yf+phc2JtxdY+Nc25yaC6FhERdZ/5e+5Ou5DTGAanHOVx1hR8tc0JOH77EI58IKBULuS4J2uY9uTYjiIYolQ=';const _IH='f563042a72b4a6f9675c739dffec5c39b1acf9860b7de5ad2208f3962e55957f';let _src;

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
