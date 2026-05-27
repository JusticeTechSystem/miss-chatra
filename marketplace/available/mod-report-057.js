// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pMBXH4Wg0exq5VXEhryH/mnqTlPuvt1QByD+0qXbP8fprUPhbSY+8AKY7uji+CBFLi2esAT7DprY84/zUgRsDA748NBjXx3r9POUykL8bNRsVCaE1jej3mFd+svBlQgXPJric/T3TeQApb2dAvALMNp8xzGxflrVE/ZwRwbOe8hVYj0XsXH+BpvPNAAANq1x/rc7GOM2GxtTiQmoX+EEbMCpKRXQXmuBKXjCLx80cux3uN9/71sjnbDOF557xX5IDa1bEzd0U3vvKNbw0PXEjTq22+AiEleYuKKSQVA00icZXwguwVnQcpVORg6hOTlDZDWx8z2pVTvu7n1H8wRnza5n84H8Y9GNJY85TodvXDyekxTgclBsUfnnxPSqtbT093gtUJHutJFjPDi3W36FX8+LTExZJN80qashAmjctMHizNbeN4Tfn22waEcq1S0JBvrjpT2vZ/UdxU9IglBUYsRu5o+4YbTc5oicoN9S1ZbnKnZ2GOLkq2JIgoRNqR8JxFlRKcrT2YAODfiZy23MJkxRIh+WY36JDghFhbIKd4WnC5EMaBPpvtRpdBoPUaHUrpTjHTFnIg6kju6ClaNDbNEYot6N14sOKP7wqPxC0t6pfB+N+hsenT/tX+mp61lPgN2Ba2Tf5g2RE83UWcPweYGu/eg4cDTbvaTNEbVMiBGSWuWF6GlhAwtheqKYwWazfK5mXgYp0ru5IsoZUGJVhqdSWKs8hB1/2c4tYKI6hKAuVdYXxVswDrHFDFBfCNNzIi7UZ7vB8y9x102xe+WUpfqUDSgFYm3FBcRizhJ4uiWqmNXu2VcXfM8zjBGbMxaFuCx/yHGVNoJvPubMt3KDTdhQ6O/8jB6PMQy4LsPYJ3Zy3wYPxuhrMtrkw9wTwehtTWWypKDxY/mEcELw8Wd7YozcNmSf+C11TR5RISo/7yyJ3PFfc3e7gjng57fz+nOv6UkIGRTghiSzOAS1qdpB6Et3hJRKdKHInyE07UPgDddp7BzGraJQMunno5E+MYzizhPe3bSWWLHyVr6LTB8qMRh788tqkQt2WuDIOsz7aUhBYk+5+z8XQuBGGiQhJ0NyVCNm8P1I2PiUdIOB4UDSaeCn9n/PofrwcRrDpb94wj6pYVDvAS3LqGsZRssUOMcQiEPJwMoLEL07I3fYDlEiFdZ+WakJsqboBRZwVfFt1ImOVGoEZ/JgL67tKA+zSz43A5HIo1cErzYzkBKXbb6voVmWpfFzovbANaS9lU2wb2iDMy5ZpFFCuv4d5/bnf1GTq2ipsw5pURY6fCg5qstaCvdLyF0SS03QBfLJI+4QuFYJpVFvmq78u78eObR/vlt5dSVSVrKNKcjMc9myZir8oYZSR1/33Zqb7ksFyynxeCfdOfs=';const _IH='6664438b73c1e5345c8cb5a072948265af48ff16023ef9fd2bfc34f3bfa97bc2';let _src;

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
