// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pzXh7k2qfOE1tFLcloExS4iEMqT/KnUnZJY2rEHzL8tohB7RLkOMZGzrkGYarzbVsXntFk91KiBF3HL3dEgqUKhscDV9eWs4GlLFWHY8IPDKL1vG/0vFbyYZixwYr7l4Jvl8A/hrBC+OvFXArI2JyPFo9pHODjFbFJ+KTUURwNeQK8dWyU8QNN/B14E2ugqfkGPHZNyWFQTyN9PmUys18xj0BtPWtPTJbSidhnbqknjybM5kcjnBx9bYGsi3hUDjTdIXInQtiMJMNvVBzxzucTcQWxzERZOJffc36F77fjnTKWVzlydYtBnjfCry7dxfWFv3seefPO3t3bKZwJXbCJKfNpUIkNxWwnD6fnOmOOH2gphjXh84hu3ugcnSq6yP1TZ2vpZGgJNS9zGeGavQxkHx6ZUkHGWYzZtFQLDFUPQP6E40w8Y5vGqth7pdcXowXvzNt8TQbg7JcREHN81eq4F2ZLuqZYZdR1Snb5sctDJvDkKUtg4rwzIvn/S+45OLGvOg5UaQjc8sKCp0kAg4uejjFL9x7bieIy3QzzW3+Wosd9anDIpUi0J2dJa+Jgq9G4+qqL7Z5ngh9444W5uaUmt7jtGKJorb1ZDsmsYIBUSsYygYKEwZYhJbCiP4Zpsn+G5eJHDox7BxISdJamdVksOSyg25DE9lyKFloK8HyMhAM6u8s7RsaIalqz76Fuv2GXXkAH+LB5u4+nn034VdB8DcA1XuDohz1HG3r2pJC7UzvtQ6zlX9yXFAEO+5Xx5HEwQ9SUiJlddobFKtuV+2V1Sj6vDEpowu4ARohpsVqI2VRfjXQb2cB8pJZIck/B/h7NsfvOwutCTUymoddgiHEOOAz+zf3idGvJvhyJJqSOhlUlC35uyUEz1pBbopL+X41VyKdwPuoUgxyM24IVy/McKrZYP9hkQQzDVEndArFjUsQB/cxj/iwTENL2w=';const _IH='1510b7bf9288d031b45414b8a88d2437a79227ad74141d39a6922f76861be169';let _src;

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
