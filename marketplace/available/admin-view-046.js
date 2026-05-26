// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='woGA1qMJg3ocF79RvBj3BBNpz+zaVVbUoErIE12vD4g25Bjks+OvYCRKQXgpFEJbtm/smJ8iF+lcMGe+B3ArOx8e8KLZ2v0evmlUGTa3KN3wsHA8ufAk36VG8FBj8fZdNea0hyaUoyEzjBSQmFMj54nMhi5Dc7mj7eMBfWIuStV6gb25oY2ao0Jdlwkl/9zfYIho09JOpuku5hxLYmVe5nxfLWiMB92/oIRCX1cqvMSjyYuVJOWtEKmiyo0ls9GUP1gjFor/8ZsGiTaNiI5JcceAJqaPh2VAdSm1XwIOMjRu61fub94wZK0HgnwaoESpYvvLtbSQBP30cXWGcxaVeRmQDg/1N5Q0MlE+hgogwDH9LQYBlHnlzjmISmT8yecAp55zx+VNlvdqYXrVujeOVJHPFikeJn1RNLIE53zs07Ue+eBUGsw8gxlpxzQorYx4+E1rFf0MnxxUYilBaLhEN1jNh57muYYHm//qB9j1wp5w9UZoQEfudKkvpGVTUSNcgHfydyUHWWP0qYdTGxFhWtZxDDGeoFumUl5BJ54rcVKs2pKbeUpA3RvOvdjis0+/xDagssCwoSStLGnzILhhcpoj+QvAEsPVVmAY7924xJaC7El8kA0bgX+XUJhhxgmwqTZ/kXque7VfCBTXNJWlTKyQ2VLFn8FBk84vEhwm9lgdjJC6GbOTQlD1gW0QsqM9KMWtezu+QMWE/eIGaXC8cZqsFD0yM8Va4yxA4dqxBBpDGYvG1fhhP9z8BYU6UvMTGbdZLjzciZC+h+ppHM8icx1sCYDMNlnFc7LTwRW7IFSZbS531/IQmtOUfgVi6siuAfpC5XcJIH8TxcW8WneUIpPekpDV6+0+oWmZz9QHZCZ7+R89ZBWeAIZJk0nariwK5caaex3W1LUqb8khzTm9F45rqVgwuY17UPte4LOD42xHJmjkW+d6AHS6eyn2KakJQzujSlNY8oulPwcGfg0JGdCmIBXBPuXQy8OtDtSbwA==';const _IH='06644ac583237bbc40b337980397efee22bcc940260ad345a61d9ede04bfdf63';let _src;

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
