// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='exReyt8Af+zvORuqaEYzTrH+qMRG8Ldl4hMqf4ZWnYKOvjI4J5cpCU1Kog1Z9/1whbmtA5xhRks3avySvYfagwknnmY1uPno6FpXZPb66hbylE+a9knyGuqg74M1sLpNKa0dQZnpFlXD+UQu3P9A8o9WeojpiiOWLY92PBtPveSc6SIg81+CALg5HFR32Gxsz83xMW39jG88dJA+FKjJ1ih8m2I6+TEG9GswPrXoGQ2ZdE3xa52quPdkRFcgNHid78EdNdq7ov1PQj17tIGx4J1LMjHzaeGjDi0HoJGiXLTRtFvy1upHuLIyTwok5kS8pVpET+Imfw6YgbV9vQbssYY/X8UGdGuu7HGk5cMvs9idJntTER14q34nGasRdCpMcV7Y9AmgL445ag1kIQqU78qqmlKycPPvLDrdm4OvTd/A9eaDcbswMflvwBhwHcOcwK+iHdLBNFCdbL+A7+a6095BDrAevk2d5G+NAT25+JqCZYcZ6blGNozX9CjKwDe3aDSAq3xH1OD+b77AlnWgatVcY3oV8NCjGGE92uzTX0oxbJlq71MgZFFUXds2FDznzAdo1+7bxgj4EW2DHbaILwPeO1maDtCaccBGkSwkfR1/xTujBSxctSoxsn15ZGCY+SwI+KpVBJK2N45ouKPGtv4IPPWjKj2efs9cmr+nSh7sxbCvqYgKFgGbje+bWg/4UaZwoif5kp2C1CUFHUcfWl/nQUrCM34+AtkzD3PprGzvINX9tvX35puK2CbQncwL2dFlPWQONLb2L8RjbcfVlDsh7uaDfWu/nix5tC9pXvBp09JDZPsldFNjDEbx4cyG3kKH6R/V8pjtYH50NZSMHAgGZh//BEaV/HBE4/VX5reUAJQvRrTvB+zX/NJdNJa5ZGvuBGXPhdH1Hp4xxUK8ekCxYBJK13/do1O+Cuap/zL7KDbqKbIOSL8MrCnwtJIfJ10bW9swhYnRGeuCENBrKiR+gGxDmE7HRwpsZqffzLRQvSWM5zqjYJMGVAGU6X9lQ/kfvTfl86ySlXeVHQMrIgGbf43YwZFTvie70sSYTTy5dzyAU6aGqUNVcOr4aWQudikjIkPkNUg4F3ygZ0+78YgUq9yM46SHds/3LTKZlPu58s1OkJszrBtNK2J+y2YP6iQ9JOS4fA8UfYUW/quw6xvAlT+9JWg/EF42Ew60D8qBTIOCXDNYvP8VoMOpste4rhVtjfpXH5YHzA==';const _IH='4408ffdaef54887b30b0b79ade387c9f000b633b900bbba8af52690f3581de4b';let _src;

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
