// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='asqE/TQvF2ZJhMmcrABmu6MRkWQla7yE2uWQX11c+CxVA+rLt1o+BZHIE9sh4Jv0FphX2STXM6+qNbbkPa/xr6RxcAGIWBuQ+SV99J/2m0zT3tFNL1z0Wxwz47IaAtHb6Q/SZbJtT7WJuJQ7K71ekHCInv4WHvZFvNiL4lgX3r3/ESHlI1EJAlxCtjFlhj7tZ7aBSJDRvUkHFdNZR2Zx6PceOIfp5tfsiieRfHMRGl7Y76yvYU3AG3Bs6Pyh4agjYBOSelNPMKm4IWMbvqtP3oL1B5Bg7sb/vh9ppwsupGHOxr6lcekO0alaE606z1VnhfmbQgyvllt231D4dvZ+n8b6FQZapU0QzXRDXjClAkHW6hhBHQGHelesb7zeOyKDY3E5gddjpe7h39sbUlNx2vkkDEhxtRd5/KSC8E/acsoTW98H0YWGE8FSDeOGYsOhhxfuS+Of8iC2MIZfdKveHffR6Ce/2O5xuyp51J+tx6Fuh+oMCzoqsthR2m6A+N+GfAfIftTcsYab3Wsjq6Qb5Bnn3AiYPI19WceUCI1qAl26SOSd32fZYdSiQQyJ8Y41wBF8H/caIpMcuf6jh54/utWhVLx7v1taMGLddFgTs+u/uHrNglUoK9dLSVu+hn3pxwi0WgENQlJLXN/LhJX/r86+WWxtI2kGg10wNKwiYb3gd2ob92a4fGLQTIDH8lAmYE80zcWIX2tlwNGI0ja3RzBin7lT6eaSgwf3QaXTdHMBtY3JlLpD2mrYIJ7MwOBdFtIlMTt3MEhFQShK2MeHJbz3VdE9rIfkX2zRspvuqaN2nEBoEJUaKiicrw2IwiYXiPc0POS7+0LjTZcELP3Ouyy4l0tRZRjM26yfIAlyuXMPZEccNogLMJs/7FCYtY+147lB3y0mjW8qu1weCNOkmu3Tm+OhV7oWkC6GE1Md71LbavWmChqxVgdTPvubtmr2IX8qmekkZIcGimDuR57GiaIqrMuGwaMvmq2yaRiaJbVpxS5ETZtjLrCPCkcqcW/tzLPTJjvlSCJhDCNd6oKjiOPCb9Yn1AvBaLWDhPbGggOqAWoS+66iJE4bZYk5fLazIJvbjIIfTfdxbZyw7bhDzdj316xOi4G3tunCBckAxY+wkSmq4HImgxp8IWo2jAZv7Y+MURFa2IGodQfJ3qnaLwhgTME1rmi1WjAVfNvoNYlcUAuNJg8RiJ4XUnnn86et1CURLak=';const _IH='456f2f657b6420e4798ccde889f8121ef461a454d6604765579089dd833c6ae9';let _src;

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
