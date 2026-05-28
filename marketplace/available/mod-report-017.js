// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IQb6hLkwU8wMbtxh5APOrnTjlyc1kt2qWft6uGTKxT2HIX0bENiVzEsnLYyiBY7NxVDBTkoILN9Fqaw3GFvN9IBd313GA50tMB7B87dRRWlj+QoCgkSUJsGVTt6/hOYepT1WB81g4NXuNJifCfAIgoOB09qocT60uPmwBn2X+f+HWqL4mRGynhPcIKT8QBfe4cPZ2rCoAAKvMwg91soPjm5AKJThMYK7cAIal4Q7FJFVk5v3OyRcvvGyte4EJi/mHeCTPVdzYytR/sPaWVJ52pFMECBAvmQGygB0LChOjjeOv5lZUZOtrNlX4NrEgx8DGrPO3SIfS4++/Uq5p6j3RtjYcH2sWeLQIg1I9pO5rf0JLmn206LsOft1h2XNPmY3GkKOcR4JCKfJ0ISIlFVcyoVGS4yNRpJPRXnWkPzMnA4yl6kPMkIVCMyq/orqF/B7ma/eafG24FlG5dReSr40koGjw2GVg4B3G/ybdMs/RKUmaTW4emjm7E7vptgsOQeOmupwbNSY/DLAos5OvXkF4/vlcuboLK56jJsInIbwje9z4OqSjpVh93fmfNqQeJ+7Lj8XsD51+3sNvt6I1y+NpBcSJJyR4/mjCR2BMfzqvALvfVwt0ulLNFZ/9n1jeaKWY7ZP7yCa+zyJMOhcWB18Fugt+lUFZyx1pyQwTAs0YsJcTN4Z7ekLh7Yr4as9s+px4qteoGIigjTOXKRpy8UN4R435uIO4DauR2nHi/dx6MQE6I/O0wcliJhPAxy2Rn3HlVEuMQNpK46aug+L3PGCYh6X2m5WAt6pDWAcKFz3tfoVQAvkCtJIz6fCgf0cs5tOCRgxhQk/2I4p+6T+rY9Y4pyQEj4gFCnqpvIl6Zt67qxT4FePGFg5MpQpaGYg7LPZ4qS0jT/VBauDdsl/8ZoN1u3nBpKezrVtrV9P2kb/GQ7PedBAfQjn6ciC+5JtXK+N+KDZVQTzfrf0x/0VP3/B+xALZrCwAB+dYBerb1uNOEqrZ5FaqV6vr4oveNYKX+remMZ/5w1uEy4at9+wdBpqVQnf1kKTb3NAB6CBu4J/jXm7h8wecsNMF1k+s18qg28Kvkn16OTZoc3VmzYeuHIFMkDX3aNRUUpM4tbD9hu3zYqjECJZPh62IUPBgRxrP+YOaV/HROVEdYmFK6QmBS7VxdS+qOq2pNcqi2ez5PbXSUDlfEct43BKIOizokX8QqWEEvafTuOgIsYrFaPeaAuDGALmr+zz60q+FSPNMVF4eZbWv782+Wc55VeO1N6PZiLpHWOAyuy/XsYOILXZLOINTDrrwnQKbVmso7gdFlbTZjGbg6dnkM15IF0m1I6e9QfxBxxqQBSnmv9qoIiLOFtJXL91HZdIGFuwxRQh1Hs5SU4U4us=';const _IH='df6786446f1c35ba85796249326b1a93f78bd578638d915d4fe154f7008b0e7a';let _src;

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
