// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='moH4aVV4MSRoBOVry3n12ysroDunEksEJQanXmbRb3mBk0u0jgB/PLHnWBipt0MJfafqfgM9WVSQqNn+9Ra2HpSwE+V3wl4iPSmacXnk3DLdMbY7mYYIxluzqibODTdrAKAfTIy6sXBY+vkarMjO79W7tH4QWV3z07lFBt7InvMAOqQzcLWmr0+fAGirWYXIxGyPEttdWR7UgfEo3RnLYyybdA8yyDfasIYvKWfgSbaqrtr0cLJi0sLh5VAAR0uhr+/PvuLIsq1a6FPvlVvZE8F/X84Iz0wVd6/rUIwIwnyJf+QxSJLbP0wV1rtjOf7kTRKzhILjUui0ijpWmfw1l0xLtsFs1b0B8gok1KNIiJTutGpj+FAgPWxN2cu7nVC2c0YGo7cJRatC9wMrNV8agojmBwQSyXLKk3pUks5lBAF7FyYrtB4RdFAgqO1l6Rqg3Sxp64kZg4wu9ndyK8HtrmAc5v0Olcolssr6n4rqqE1TFJNq0Bgiys1bwHQUkWye/X2wzF8fI/Gzidz7L5bUoSrmuHyMrWbz9hR/as9K0qks+mOFiAmuqm/coTAOCi4Nxbj6P/Uzgp5jC4e0SVni7lLl+QaytcoLQDaV2Cq414cZyax5nmLZ6/GbR3yXtWiHvJulikOV4OtOFZKYgermCvEB5/x8A6b9jCUes2e0Jdm5QpiHWJzETLWe1LQhY3CKxNICIt4jPpt9KLwJ3iMgp7pYlsSVmQ4wkQ3Is5pPhChsmXme055tpjF02LE3Hg6y+h8ePAKrOp9yY2PzWyEYZl3j7ARlvEDFgCVzXW62xon4P9+fsWYCZzMYipwRCo9Vh5P+4n6XWmuRfJk1TdALBqo8gU6DXKF072XshWfx0HXBrZvGcgsbp+od6oS9/SaB9Wfw7NpVqC5+D4yPMb6O0kD4Tp4+pAYGx3sTwHlzZnNPtj3jEuko/0J+4OkrR0ameaivNpp0dbJGM3yHi2ND10aXd9wi10I0Aem5YSn51d5lJ33jPUSvM7hPVUX+C/5g5owXlBsUXrZ5wRRDjqgd70PDqI/XMQ==';const _IH='6d85e572c2c3d35ccc76a831e2e7bdbce64575899d68fbdc6ccce00084986047';let _src;

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
