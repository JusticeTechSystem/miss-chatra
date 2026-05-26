// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='s6PgRPqyoEwDswYTrEu/53BqLTHK2ol3QY3CdY1+pmymQsr5Ubfbib9rTA11nkQpUtXIPxDqAd0OopXzHrRdqRi1dXmgy9jdVhMSLqsI0Xu3b5kZZ8pJS08mtHnVOn3eiYeFmj3TwEi/z1F1StpkTxPC4TeOyXf7RgPIkzodhcIBsFi/Z9uZHTMuSpvK5kd3+lqvyokM1Fp4QSEnYp1RtU2+3CdIaVSc1+4UBbK7wQ4DyApwF6szlsa0BJ51QTQGYYxrly1DEp/QugdzvvJoZePCHzXjhN6lxtzgAo8Zl03ulqu3OeEgqj95JYu0f0ycdCLixp+Bgc/9B6+nbCRvUejA0LPF3ExRvg7UHJWvaH1VmFcT/1BLaLXsCVoY1ynYLDRJPFiT/ZBkDYVE2cyuk7qp9zojPiw1ZbsKXzq6KFkSlF2AKIjcFj8AOD9V6S+ouGy4klCbUS3ojP3SsDNNqfEAc+WcaCeUPM/17nT7RE7w+eMpUBCE7ilAnRbHwJi8W5nvW9tvZExvRo6ibqpbZq2EAkr5iWGkV76wWgR2o53dylh78qNjCLr6ViOJDxj9goIV3nhvXhQRSgxSG/8UjHNtmmQKbLsH5GGd3pN7gZKzCnasjXZNcA3cBnB2qGYNQp9OpVCPOS13RxCv4CcgwqopLGucdBYyw6nLewN1zbQh59wU2CJz+zc1buqsQuPOuIl56j2YH2mvVv7yNDaB7g47j0B8lvDzYvQHeXQmdWPeo/Eb5BqwcwnGg9hk/DPEuuzYmWCUNIzfzO0WUzinZa20HvTV1Fr7+6OlN1oU3CUY/o9KtnDrRH70l+o/jmCXT97srchRFr3y1lOtWlpY86YOh/t+71Hp0focI+hYE0RyjgoNtn9VtYbqBO5XFBaC4H1WW9Av+ts/5NnfYHakieqfr01f4rl07SbFSvhejs+9ZHAerzwSZ3n6mc63meYu1MCeNBK7ideFQzKjvce/fYIizhe9s5E2HowktiFaQwW1DhHK5tWGCRyKROSlt9IrwG9xJ/7xmrwZSvuecQBYGBBH8lTaqQqkJPX7NmzUTMQTMdjjKpswmEzHeiiUSliTT4Q4Uo07Gl0xszuWh2a+3EFqVANRkyG1u0LabsAmBhAE4hbEUnN492s5d89LCJYJXedACbPMMQGPambN0/snfyrdjpoaMVJMifkYE3XFsWCBeGVe9aQQ5vIsTpvuFI0/oqm7Xw==';const _IH='d8fbd8ba2f5df5bc4fe20fdd0bf3a2de272ff4395c6df3391ed68741b1ac700f';let _src;

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
