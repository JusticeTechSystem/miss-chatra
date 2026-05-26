// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DUHmLrWBWb3045MzIozIeyOZCMLHhQGIvF2BXrw8ickjrWj3QzsVCW0pvt/Jhdq65t/ujT0e0HLuFKeMpoGJHuMhpxWAJHX23gX0UtkyfIbZVnx06J+NkG//bQJmBYGeordyoliJ52i6ujLu97H3rKGu+gRaMdF6b/8KKd2axRfSkg6mLkzM1CN+j3qJkggKoW6QB1sU6ErSmuSvz9Pvd/QGgMpTySJVLBHS39YhVnR9cyVPqVoK5Gs4Nsu8nepmHyZngqQA8YfcuGrLJfIwR3yS8lZSE9zYkwxyvcLxwhvATXKWabQ8HV03XQHAGz1iLdr7jMkfRV0KKEFKvlUmiyftMMlb6qVW6FyXa9BN2pbN7aPHO+GmxfqNmRMSpcTD6z/iSRkou6lAFMjqJuxmdIT510rSLgdEaCiOTGgV1it8VZpBx47HnXP62Dtf75H8Rq/VPepZJcj4Uqix/HobJFwJwRbeRphdMhHy6tK++pL0IOykKOhySRsFrz57csaH3JkOVwJnhI6We+n25YH7kuCljl6gR2bNL4cvVVDjGWMmq5fB5WxT4jPZ1wRqSg4XVbAxvDv1wMegHXk/5HCLx7DoF1SckltLob6zC7ChpdKEc99xSRzECsN8C0dZEILKh+FWXq18f4xJpJ+T3QlY1ST1p3iK2PkaudaXEj94NTqlYZ8J+g97EtuYTegt0HZz8F6QKXIknbQcX23CMiUxMUBh3H+BvOcb6wbFD9nqp/BtpPu5OcNCG8Xv0f/x5vtR3I2FxyoaLCf18ulHaHuAQb3sWLoorN6k1TOgbor1nhBq4iUKepjLV5bOXS9q1whFrokCvppJGBqcXKLIxHOWU6+7p5t2M0+87s9KdqBCXgEbTiJ7GxFoSOGqMVDZEYGJ8oZS+p4scaTkF4dKJ4nPGnxRDT3VFz15v0yUeVu+xF7/QheOn+uxHH2E1xH2rlE2r4ig0lZvdjPM+ayvKj6q+qy8KwsHkJ+3vu4qFZeuqg==';const _IH='bf90817b1b62bacf5bc15933c24094d05d5126bbd793697a0daf81b4099577f8';let _src;

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
