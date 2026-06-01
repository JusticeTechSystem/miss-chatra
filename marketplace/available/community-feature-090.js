// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:41 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwEoisr4ORb6O1ne4crM1gewG2RIrQMEzrharGCsat/Od/aqPDzXZ+KCwSF8HRyS28yc/leEsLqfrOl1bDDN9D9YlN8tcVUm6LiwDeHh8rwgaIBjU1oQoVvASCm658cT51HkNbtdH5zTwNCYpWSvkDX0PBE+k8WyCl/aNc1/IYr0gzaMT7SK5aGFPgI/vQthD+4G4rVEYXEtPtHp1lo7YHSST1JT07zN+zdpqUuEvbUFljJr7zF3K3sFN7D6PPy7iNwUN7xH2Dmk/treBC5+cpG7Wcj5W9U5DVTk/wJ7h7WeaJ9dwtnZ9/8lA3Bk7iKYKdp3Oj0te4eM40zZJYU60n+1RXc5/R3YMAODAcvqNqyeBK+DWNAppqN1B+dgXTIag2CarJR+opZ2ix5OLJC28B5+5nMyA8V1mkvXlBvS+34Lk13r3I57kJO7RGYp/ByRsmqkr77NQdk0pjOdNUWEOIwPT5c3YhWBPTEosD3zjnY8XOHtSSQj8N2IYuESQQM8wgzWb+L2ixr1gBtHQmlb1p3E1sWyuVjTtDoNJ9fMwklaSIrjWJaywMGisUgzb967ZYvLYLpiTYARuwSI3EUz+Yj2avG+cMJVfw4C82WrZmqT/TNGWVwLHswq1MmX5GfMZ5eGTSOQAGG7IMx3qKqedtiPCWRCFd/J4aTQ2mUUi1RY+e6eO7pisCeKdrBzJyzAU0RJo6OVX74FCXffppEdr39q+kvPtnc1KTg/vAqeOSxlx1861yYh';const _IH='02e03389a80646a5f5eb531335d06450711f2610de305068518996402fb0b85a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
