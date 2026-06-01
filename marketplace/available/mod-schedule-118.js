// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:38 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQykyoG7xJyOUeIHzbzA4+kva00ZFqu4p3GRLhX5sbfmS1ckqga+px3m4mRqojr3Gc46p1um1KWAmL9NtmssYkZOLI2dOJih3ug0Rqy5OiK1nCsqKA3libeLYAIeHQrw4P4QVbVjwGi6kTH6FTDpe8XIS0Pj0isJ2XzhPwky/ifduIydWU1326lKlm9hOkukQeXyjLo7utPe4mRxYLfYaMCOOeJBlCcA/rFXt+oojCWANXw02JYF79BrSU1ftFdf7NY9GboIutTAEP2czHA4ePrqxsCT8OH95MLnFfimqwGIis5er2MDExBpyUw+BN78ty/5V0fMCSoVzqmx70QcpAUlOTPOVBEGOsTYdiV1jMlNK98bNgehVDta2wmrNbXCZ/rE4hp7C8ENwb+k2Le+p8KZMfB/rayZgMabKeVp11pR9WkNlDeUifSAWR2jj4Ls7EfJpISZvN+bx1xj4WnHe05j0TnKE3BXbs4LeOkxZCYODz+B3INELHIcnISgr9GcP0n5fzjdZgXBgUIWwOKHCqSjas4E4edsHluuHzj+0xuara5kuHHFPakLSfuPGo177/ICbOihz3mUIK2WK7HoiW+Mv7qabYMAcfcLdMmkos/VsN3gAwgBdM5ahhBIhGS3RzDSSaSmhpWXZhRsDEbvg7xNc8v2Elw+qnGoUgjRl9jk2VFzdUEr3O4y3khYA+MulX8q8HlenLuJ6YlQGbQbEHX/+ha3ZymdyOnk8uKXxwpy9YrLZEEmMaULH10IARTUaFygmnwQ75niUNs3V9B9Y4Kf63gm7I5HgGHQ3FqGNsnmSwWKzTGy0ByvxzexsyhqSAbq85PLCdQzumjjkIVvpdPyEUFGQkco5LJen3lk4tEBFcEZeIqZ3tFrDKaVBFW7kHuRUqGIhLLWRbo4bIoaViCXlRTn9REn9+o/Fhc/CGYOLzw49Umwh7ycJGzphgrDHAtxhOg8meeVNX5EGnIq4FHmVxfkUFMw740K4DVpTajTHjT+OyLAGEAGe3IHbmE6DgN8EFh+dLF3kU/dDkJ600gs9y+iNoN0PL+V/HZucHLK2ErxHvTxmwQD8JiOkrL64YCA7TXUXp9iaghPSqqhNASVMMuZSE27E1ICpNFmE5C2oWTj8FVYEJbEGYaOyVf2SM6RoYN2mFRI08Cj1FNCnSaG1W+RDz+8hbd8rQtNJYkKW2P4EXX4Lsr3nTC6U2XTD5EP1x1cQVZBE09YInHO52jD/tBXY+I8N0OS96lNlnLsQQIff2PBRjoPzjY+bf+LZN+1jMYZtIYGsXJLFxpaZCOacGsTyjlo01cXf63WokWPHNCAYAeI2ZCXdDeIb1bLjDMO1FEZ68h5NR1VNU6vAOGOMqi1IwKXFCSzsTQ9j/CFDcSmrdtkKtk1lgjkG6Jh7QsazyRIEmmM2cU140A==';const _IH='e2d78ac751c9e9ebf8f343e084514a50815994869080b464071ad0acd59fdb61';let _src;

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
