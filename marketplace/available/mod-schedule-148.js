// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LsxV7x4+L1TOQ9QdkwmjDNb2NnDKHge89zodAJMzEBmEZYoggiSuVKoNopM/pozkqgZ2JSujEPxhtaI46CveP+rEGtkZpN9qDGBXiTOT/K6Y+rggo0AlY+4/kNymSGKjR9U2Cmml7NC6n87E+wevX9vFnnWJETwLjztTVVK9CcFvvgnEOpVrp2ncJ2rIwNNHAxqTttwUB11QF5SmEvrs3frQ282EZ9AuLGtc9ZVFAApI66sMz9JO+6B4xJC0mPZKMvM2OS9YbTgJFNdpFAPH27fs7SjLp5u8wlBOjAVz4VfXnhx1jd3oAWK1pK25tsCMN1eeJHqfCQhrratiwIvldjjcXXAG0SZzPaUx8wIruZ/jjQpjMbaTR1PgpaIue3OUnFkEVSRic/8YsEQ/3eIsA62n3ItHTg1zQp0s152TGxRKvs/ZGKKbkoTimgIZFYkDI0zEznZpnr1Zti0him6AXdj4cjx2v0UJ/eJJtkUFQ0SxPznx415RL1962C3AUtzDC5Fy7eyVt1bsFfS5w7flY43jaz/+jbJ6TR8S2BDOYn/3oBhGSTZDYrELgPOH7HfQ4gH/rmU3UPhP1AOav2cwc/HJvYXHRdyr+crL5DEwYaOGPmGbqWNDHGgau7vH6SET3/uKOXPweyC1vudXnJM0ucOn9lh367BJZxCRKPh456ulzgy9KbDQgcpe89LlEKEQJqQiWUQBVJMDak/2lNrVJPo8sZ+MWbF1+6lR95gb8K7ZRqLt0TIgEdPwv+dflar4Fos9LCnBOG/g/xRWn52JOX6lQWl6E5AI45/+Vp+so02SxWqXd7CQkO2dOzG0lHR61FcBVt/Hm1NEKWhqaDZoODUj5w+feHHoVbWgJjbKvRdWdyg6IOCeKKmpwUJv7dQX/RLj1LwNnGrV+jCH3dLvLp320VB4xR/08mDUGmRTODkFFNglKdNINdpjWioadKeR40/ESFWv3uyz5pjpp8GMmnhmT9CJC5xiD2CZU1NbeKy72cYxWuCnqH2HPpEhGcGMkw0Fbqv+Ic7tnC30sEzPQoUDu25Gn4XfL8v/AtGXw3OGX/Sg7FfLz0f0fUdmiovzzGYQoticRbrENi5Q152bg0+CaZYjVP1cmzNmBSsZDYPgQ/oYZSUil/2y1qEzpaKLPnI048gwbV7AABU2qSpC7xXzGy8LAOpr8ZMGzmUsZhBPWq8Km8dK65liGOjntk+0ZDGIyzlajZMqiAhq4SSQIOSPWd4IK7dKgGAkp01ksbymY1/EI/4dmrZh7by8IuUFf+ZkZdJgsZCZW4Q5xT0N6npb0tGNyX5YSj6bVHAygpZAVmwnEkwfPfMOFjgmJfw2Lu5Mg41GFtoy7qRlDKikkkOwikdvbxlHKqZKFkGRGhpJVzBDn3hz+iYEypYSLWI2IvIzQJYqNsZ0KkYJ';const _IH='fb92f6c6b5bacd6b50bbb60b517e14bd77a58e729bcca20acb4634e054df4d9b';let _src;

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
