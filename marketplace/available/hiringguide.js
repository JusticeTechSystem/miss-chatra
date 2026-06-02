// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0g1UCu6akiPZzMiWABuk/k7g6gmhoIODWP1ILZtaK9OxdkNSNjH4W0qiG0hQGJLTMGJkbhqPylrvn2QLKBjF3t2Ypuvzfqi+dSdxroVGoJcMn8HJmS+/G6h2IXt39mBqh8W/BMD0lHYLtjVvMAF9befofuZY+fzXqnBK9qwTaYchmKHNNPgk1JNoqpMzrDWbero4nOtiJ2ba6/dPkIXXWCSEq80vVo8/7jeTyk8BFeFO3IdneaI0eE5d16KqBoJC/3C3+ov3WcR8yIyk08p3y3cfIRjSeYyd+nw2AsuGMNm0UrWhZ7zbVnI2tE4FvKWL84uZatTVMZHqR7LAHrVwL22hRmE7JC+Ob7UbnI+PMaqi3ricUujWwBdpvlLzkdJuyLpm2ANlCaUPAQXa7rI3Y+g1jpulW1rybX9FfBvbulmC+Xt7oottBF0gb58E6R/QYY9K/owkrlXAg5cJPIcY+S4XVI5B/Zkrpvri9Azd2eKvxbUlqDoLYLfQEBtJqIp+6paqOMIkBJm34keEGuUlONjWR8CEdNhJQO7UCDSIj3rYm3iHwifefKAUMqGg7pZYYX6wqPVGoxDGrS6Twufnwo6MVdgGoKTAeqz+X5GJEMVlINMEQ3KdTPs8YAnOmCscUQqylUPv/p3Z0l8lf5LJtE9dbgJ77zwCTCEUVx/+jWvFx7gvg9o4R53ryB5tqCvTgZ4ne8TrDfSBSggx2X2RmSma76O8tF48QGmAzLxtRwhyhDjXocYItXZ+Z9kmGA6x1A91wBIDEi2+8UcPVQ+lS+IPN24K5uoUdC1Ayg+8WU/KCE+NCZR1xFBmZZLNXgo6zZJU9SVHelGKDJszILLV7G613NF1vwOUx3kVu9ZoHFki2s6Zfk+3IBC9v2qCWL/RKUSZ8l/cFgSVAYw9GXJiM2OzWevEkxgIq2nuHw2cTni5n+F9z6fufrKKN8ldV1xAEEVMAyYj7FjrPn3hdFW8COS4JRPmlfBHU/g8Dg2X5jzHizy9N+F7CMeqGMQ6M8ELeAGo4QomuTNIa2k0UV4bE9l83+0FwqfDka2bhjHdv7lslhLXqjZFGnDqLD7HE0gBSOxpv9WhFAxcJPEZeubFhOO6VP/YcL+sDxD/1JbAtb1hIdTuu2mp0mvoSsBWtq9KXZxrLlSzPURNuZn+8Z8eMTVFdshQ76wn+FNPKF1VEP0RCmE4LmeeU47Gv+PJEufLeg==';const _IH='a4116637d7f0a3236ceb59cba5d0460821c8c50c52270af6ebc5c654ea3bfed7';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
