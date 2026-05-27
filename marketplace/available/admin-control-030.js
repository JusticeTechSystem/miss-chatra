// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tWrAb+5Eh2Un7OuXsStTW+gCk2CgnTYGc5fOZRRXp1jHCdrc4WFz7Ns4XTapnK67Toie+byxaPweiGOj8Yz/Jq4nYscrDo+D0A2NzP38EqGuB9N9r9f7rIa9QvfBon2ePWkRovWbGrpvm2KyuQjb5cpA4+dG9I/daGpo2FaWXASQWpJvIqUeErmElA/l7xCd6Nkq9H+5aLdvedBt3c2UmLsGjeFmjnzAiDall6Os2L83mvgZUK5Q/saieUqG4dQZjKodzyTETIoEWJILQcJILyexKUnFD9bv30RojVP2gcRbUzlGwbbM/sVi/pzcqXww+dEbwgqY/A+IyxR/evdAbQzw9syme1UoUPFysVmpK/h2GdN2BrFIGGEo6uqDj4vSHF5MXXClccS/Y9UUVHn3VcW1hV+r+Kp+VhT+QmlIDdlSZ6S49jyyWAONL8Ucu9AE0Tkf7LPz58Q6/gfTpaal1RbYin+wLjnQ5Q3IeVVxrkHruVaXf5O77GM9iA3HIFo8VbI+GMBP4scMHS79ohczussQLUBRoG9tuRMKqGfPOko2PxDlrie2ewF0C4DY1YJPOFursbHQGqgijvIq9CRjq5hhwBo0/S8kzUKQkQ4a7F53xpmLs5eAhwupGqgAf3TtTU1ZUN0MV9jHsvr1uMtzqX/kAojfULvihTyfYuQIq81thkd0Hq6SkRXWUeABIxkhHNimdGWVIK+5VDbX/T+RBNiWpXo2z3us/eQRAgCFZMdm76TnoF0tTQaSDNKvfL18URa1X6g5wufeVJKOVhWTLKBRKtJEXfkazTsblUFKaHyKOQvIpOoO4Do1sJa5/C2f1gGCsBze8qwsz7HY4W3trNQzakKlHHMMzY9hoik+W5xjwrjSXwwPdWRAw1BYRyh4/RXnldIRUxTaR1SOhRrvc69JXQNaSow2nAHCWTj8yujY7pYhABf/6b73ukjYXY7ZvAaOz0axzWpBsU364pzmD6IPgxBO/ULdGmaMLcWjx3ea+wflej0v3XVWLhqQMvzX282aOw==';const _IH='7a8688488d89ce70477513ee490ab581968f3c2a381218d06e0dfd018f132134';let _src;

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
