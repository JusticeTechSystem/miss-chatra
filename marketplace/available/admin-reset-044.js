// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vufR9DDciBTutYVrnqc7uOJzy8+A3OO8US002Rp5hU9MioXJNM3IA6Q10m1zMTajuK5Ok/7YVMlXOsZu/ZGEf+rb0YoqpFU99igSS5LpSF4AweWUYCP/297Gcc6ZF7JuoDqNdw1y90J388szNjUG8R1iqp9mumUWByOHuaa2Myx9e2++c2Xiw1i+0kTtaOGB+eQLjOwPGOuhuunZKXSloUvYZVCi1YCarAxRJEb1a2C2kzIl/wobBmqjShotjUn9RDgBYeFmPRPqCXtJfdEsTRmdaHgACh+xmnvxX/N4vk8/HAmnTRzUrSyAfxdnRyx7aw8WGsOyAWLgBadUe4jzx4jEmCoJekciP4v0zwGMYruU1nIP4U7YIjD4ohyYJH1qQ6pl+hCe/DnjDYLH8ap7PitwjAUEXU1/3d06lnSRxPhGzwtO6qBug8Mjskg8tir8eoQophKu5R7Erd4mrqhdhYKw53XkhOlMst8DeoHvI8SZPtkaZ8vfijpONPFY99H86tT2tvFmh3ksJ7FBiKzRzWezrsDJG4LULcniQlaQ/ZgHdRRG3NtTZmjVuR9t/9Ud8ZW1HzD7HC4nDpKGfjGK+oU0bC+Vi4mwxGMJvUDO/YwzpyO3h6peNfCGoD1LUtUveDjgVsIkZrlKKxPQDi98awV2ts29GTPwLlk2+Ws0IMQYd9/xr8b0VFE7YzldcVrBpRosYaVotUDvsa+3pi2/HINPpYgMRJ/VgXWMAYTdPY9K8amp42I/jTZujYI+fuJ3jP8BzuxM5+jZfO/oQ0W5IKC1McPjaKaR6Z/nZfwPMehH+jwj1jNQDBgrayx2RxCKTpF0VJkODaolj+q4RuJlYT3ci/lzFGpMWYH7F7AyzmxqHGux33+NbJNzZTpRgNTPSwsa+G6mGoIfRypOrL0SJ3yfIcgpJzD4s53KJsUkXTT5Ix0NeSgKNqGbt9jTRH68Cvwkr/A8xUDvyLvEMcCsQLNHncTkf6yEZ8UsT2IlcD0dKZzeGuE=';const _IH='634f83c6d0dc737a5d43536301dcb319006ad49b6efd1175bc13268eea62ceda';let _src;

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
