// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6CgSFuUgsS919etjxXnkwZbQ6Svl0eQkIscLpSjEC3H4BVVrBvy1xRjHov1goU8N8bLjGpgPItBj0l08LeStxGKuRDt5o0G6ryaLdnrmZOL0y51/JMQeWboLTUsD6cbidHD5hVRKqAtTeXfy++kuXXm+sQsZr60CbjwmrCgx76t41zNCgHVHBjtheKPCFvYs89IQwCgVVRj/qKByXiDM5Q4jf16q858fE/YMzfc6xJTU2Ux0YqHPViu0pZ4NLQvlWl0keteLr+b0z6sAhYkTjxRod4fineXgFFMOdiIUMA5/nWPgQS8lGZUw3aSryk5Ds+lb5vJ3ZZfvtuVqdMfBRuUf9MQtTvCwBvw0fKJqjGoUSf4J31U9TSkAedkUknCErZiXM/msc5xtttf0TFNGDxyyWfMT9wP6+ebIB44RWm0trQ2QmBamyzEt3lPmDVhuSqPSXpCgnbG3/M6r/v1hUazrrsc72T1Do89AbsfAz4GSEbuVF0YwYnu7Wl2lyPqx0Gq7vjS7sTDULu1BzEf92i+kdzy21u3ge3IwiSNiib7Wb+wYj2YkOyAReLqGC8tKT4w7k5Pff2XgVKVM4fTTDSlUjYvQZR8UTx+/2Ib5+EPZC79s+KFtsVjM3/4onFc1ihiJzWMuDzNDqNziwzb8c5g5cyoqh4z/BcGgPSSfOMlTHM4v/1p7PMieXMSKKCXM6Oum3p6to1/ITT7vO00vx1W6LaPB+2+/Ik0AZ+f04XZk3vD4e0fCkdOlABNG2DcGC0QGfYOCC6LnSw/lpKC20cg0oBJQuJsUxcCtzC6lMmJwC5+cJjJTOX2/AZ++W/KVF4ygp8azQB3Y6tNuF821CPEMxWBBWd9kAGacAcuXh4iRP9Gzx7G0pKp/6+xPZs5Tp/zAbF2KzgDGV7VTd+oVjlIy1GoDweGJuchgHa9fbhS53rP/qb96PbzhCLhO1S10BtAFrF3eABUaFgw/MHXogA9OwY5JWAcew6MfOb3eWjZDOE40TSdS9mR81y/38YksQaZZ0818tzeF6QF7yPLyYe/Epahu2rUC98RRBryVKlhEBMu5VRZQmBxY47jR0SS9wfq19baesYsglJXaUCGKQKTMu8LBZgLw+WZzrWHcgX5YUjP/wrz61qEnpZCu81Vz6wmZSkDStEYWwuGMOH+oztYFXXKar7wV3CbBJvv2kbo25oOAqpnJua3Z9YkSN8yLXQYRcXo=';const _IH='2f5a8e889b5f2f539e84c85eaf412d73d7828e425069c7199b85ca47006875dc';let _src;

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
