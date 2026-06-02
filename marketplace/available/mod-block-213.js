// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MIE57Xjk9nuhJc+PEPSBI0YyoGL8Ri0mZ2IQCR2kSbqpYTA+sgiEjPuCB24s/YSXr7sgmLbownWNm4u/FUdZvyEjBnaVpJmupnE0epJBwxwXaurIugxGdSgbJYJPonoXlm/ooIeXULPRPfdFJA8dXbH2BiPxApSXFu4L/NMHKqC53ft+tPESbYQtTmmqok7gerQ7B1A10t9hKf6MFsf9gNGaqpRy34gJEUKc1pqr0l5o+qF+bIaJQKJwsmIDdseHkNGtAoi4sBOGHXQgEueaKBX/YbgCTctlvSkD1WgasLtP5Hi3hmGhpcB/+z+7JJ7+oMydUt7af9n+g9Zg9UCrsL01zDPgf8XQnZL1YBqgN7MT/59Y4QW/jqpsTgpyObIYBPzajgQ/DkZMaEtuQg6Dk21us8kzTm1E/G7R7yZ+W2fqLOnKELBxEo6V4503gsIqPyuozXElvMfIVFzy197eahM03rt1mqbYoVGz8r30x9JYlKCKkwroidJxyB/kXHvlmedfIC8tjm0Pngoa/Zpvqt0RBJhKb0onuch2eTb3wZhJ7AUfBcMbqdxqdBqG8OPYLHKlknUZBEEYutkKGC8N/VISrE4T0sN41iAmtu2fC5JM7GIMDLDPCQdYguV+eIWrb1814WZoweptMmqxqq4VCO6OQANPpVtSznaWG9jp4syFqaLdH+3Zq88rVW4ELXLf4hvN/DsALXZCO2WvpICWN/LjbHMcdUBiM0uv9xOi/nkxF8EJegUIyb7MFTq/uQl3M6vO/1csBnXs1HvK6jWOdK5LMoBCSAemI1oI875BJLwH2yedvId5DNAJ9oXLWA6AejRFXRqt7m3AqO5SKjNQf8FPbCKRI+4sR0AgV61L/iU1mUHbx7w+ZRoH8QH7PEj3ISaB1fY69GIiju43mvIKzE2MTSJMOFtXplV/AzRU6mIjdP9qnuAi+OuEOdqWRoNN6ykOdyXBYmzwmvB/So3dxgxh0sRN7kC0m55WB255oSYsKkwDUo2W9E6UOy3gS+9z1X1G5zN/icAxJdELbsVFoiQlZ52B4C2FQv2pd6kP/FvNkXaehloNyADQLf4o3fttjEvnnfmlyZz+YOK8aOfFmYxPUr5w9CdzJsS5VxRIMdkvVv4EW4XTCLKB9nF5Mb+iqQ7X3usNKXP51Jh/Yezi4uu0PNS4Fp6wOWrjfM6FZKdAjbg7egyFLsfK1B5Sxt1fZQYmPYIPrJOpU+jB5UQ9XXLRBXRzWM3re2pbNxk5Unz85VTFgbRuD+PrAB4vR6F//yAB5h5svkNo8BoRR4wNS1BOCFfAYb535ncth2IsdKcEUENPcY6pHbOrIzILfEEnF9Oi40lIDj9PywBtJQfdciFgR1zrZmRb0Dr7zlcH';const _IH='1f6325d27aaa010df69d8f05ce8339c393ec9cabec571aae82138ffe3cba8a47';let _src;

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
