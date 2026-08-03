// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQiJrEZIyaTWH2CfhZe71WxWTkhF0dR2llx0cBi9D+uqF2IuXvTrIIHohnvQwwtcUnvO4gWA85FJfSmG0KZfdQH2XrgcxbWNNvwqVt3jL38GBnJGJs9OO0jjtSGCecCQ5Gq5tsJUNGZtAcMSoH6PudDFYuC6csLgVYGiJOlVJj6bYCXQZPuDcePvGfVw4sOtPYaOsHPoA1VNTmSsdN5wCYE3fdG2oxPF1zIRtk9K6Nnjncgh/7BVRUamULEsAhpX6Y4i9r0+x99kizacCe9RONnkCmbXmQvYPOoNWkzmkVI72UOB6FHxMXwWUdJAXj2fcIa5zWn1UmPUVJ6LZjEMYiXVUQxFaC55ICiI4m8p2mWNY2pJeHEJvkCofftNhGQjf9rEtAtXG3ORHPfz5TGnYhSbew582hZBiUjkkYx598ngW98UP3vnmUIdnZelPMZVHBuEv2//AXvLYcMZGM4lZakwunrE4S28xEqL6BVYDjkA8CDCR9z5unVbBKzj5385brI9rgIRakGPPajhKoL0xWOQrhH7aKxXWyIEIVJwFdN4w5h2m+yNAphuq9c6b7Unsyqo+lpTHjtilT5T5c25y9bv9CT539BkNjI0bxeF0uNsm5qONmkkYG4ETYMZTnvJIjtJi8165dUl44+Y/fXOoOPYSdI/3ke/ieb8qsJghDx0swPLBVYxeu8VOi75FaDR9nIbbrx81RtKqlmUpnA5AsrdBui/WS+ClHu8KYUBx1QxmOjq+yKbVtOjUyIlZk7XO9DLGbp07iFpejFrekUOfL6fKyY7FH3q2c2cd7hOpPNuKAPNW+ZBFsWNwxMDzTWKoXwtN2BB+yYMzg3FVPrVx/xeSGIn9MH8Hy8u006O6fvUExouILcIex0z5a/jQb3zckJibmYkGt99FnK+DFEypZMEAfxZd5muA79BZ/6/0ztta9H2/K7syoTQUgUU/E0Ayp9gU40bgDTt67zbc8PGcvOwVsJqBrItzBRpsq4FJRcRS5xovfNrZ+pe9PkoORiuwSTGsXWpIecz2/7293+XoyOFV/QBKx4wA6F2nN968/kw/3QYUZhkvxzIdldKmTzpYXJQAMFEYlexb48NBLBM2uqb7xVhxZh5pNwIvrOGfRWegDypEGv2a9kJ+VvYcmppG+tqzMB4udGognVp3uD3d2Qhp4NqAoey3DZvBBkatwtY6wlnk5Mg8MaZ3Np5rW766rKt/DBXVVhgWUqYWfHggP8dmZ1y2iBZYGHEeGIbrpSb//hN3Nc8DAvGbcXBBoqGMjVC89/aAfzA9i2mzCROYt6aftfF6PKKNvYhs+VaaRXSHjb3X2hkAiSjsyDnJgkRXLzV3tdphESXe9Ua6m7Pp02X2z6EqlIfptWNS1OJVOTQTk/NHCqnHBbXumV+q2HmAyWxtIPpTMLT21Pf/bYxHW/88Z11F+jB1IdRLJb8J6mP/h6uZ3otM82';const _IH='ef320680670cb7cf6681269d7122b435e571167b014609a2dcce83f782ff40cf';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
