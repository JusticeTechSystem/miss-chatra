// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WljCeihIBsVI0qAEcSHb8GJU9UqsXmSsnBYl4IwoQfF6h0J5CQGOPi0NO5u1F2Ob5OwUmBd7U7o571hZbqWWxNy2V6cuUlp9xYcZHF7Xm74Mq6BA9PP7g6d/1G66R/NgsS8jw7ONgh7Wfl/8mxUPWdEIccAgDbRnqk0a+AZkZfKGvfiZb+VsAUEX4FN1WvauDDns4IkB73ZMJMTCb1ib+V+Sd3RpGp+XXQ7cN+Er/AkJ0Xfbmk4kwRCiUTEUWkrO3UcQTElvguSGVXiMNQcH5hLmrjNu6iSvkoW0fmV13cl+c1tPex7KGy2/bk2eqbYkGWyvJYk9mdf6wvNdTzR7zO75TlmukZ+eDYeIjcgBvIZOBAnqxskbTNX1BJyl/MEwLuM4jwLhzgjpGmLKfaNbHj7EQlPlauHA3B+GsVL0ASVr3Eg8tiXdulCAFAsi0tsRQSJaQO3ll0gPU41PfkaVHHP8Re+grhM6FFCDvhQ5oo/r55kxMNlBSMWw8u4u2J6CSJE6el3rtuno44DuegrxVXWD+3c88hEnfvX+NStEMNmqV1F6JZQq/KlD6fkJzIfbJpjMNL2lHqZGfzUxQ48/zDy68ZBuF7TBShgLkchVel1EFqWRgeabAdVBpccaQ8VCyBBroTOmTyZXNJRoekkAwWCsDTNiS84lVdLL7kldVcWAGdNCJBuVcx9NyjDHt7i/Vakk9Wqvu7jFsg+/ES4woTtlu8+rXqwAihHW/9Y84Vx6/Wf8hL/S32NF5ulitogqUi2H0vBzrjTY054zBUkdnutkQrrw6Y0N+NcsYdmZJ/wrQHMSCYpAXSLOYXvXUq/wsO1dr2cIFAM1qYV3hydB2Kdg1EJQGWlKlt4v+PehtC+PRjxQy6NXvjRiHpX5QQF0mr/MpDYyHMbomNetRqcvpcoVpjxXi1C1qFGFdzMwiyr1ExP5aSS4Omnb/kDGubkAhX6M2/XncytdQ7iVTODjEU5NkeCcSPWiiXwQiXpZeM06y+KRjAJ3gXN+GT5o';const _IH='2a8e32d4836f47927bdb46bc745156da61a23c9e500646b32c2ff1919cd5405e';let _src;

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
