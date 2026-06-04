// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MP7VaKHZx+OL2AHLNNcCvO1cIv/2+MIwB3Tw0GyLQp4BMy0GrbmQ7/UvJCl9j2JggfNjZRiL6/Ot/pr703Efi7MgDRSEoftQ4Us6/k9+82GpchBQS++mcEH2CCcv+tHDAePWhHSgQBfkGJw9D7oA6RJB95Tc2n1r5LSgP46jzKJwxGRrZGOEceD/Crjr0iiRiyYZJs+WO1ylyAM3+qWV7D5xs4qUHm/3aKWV2K8SRRvmxMxeavQ6ezTNguL4Z9vs0k+iW5wwLP+JEDrr2wW+hkrWVox1oqR5QOdxyVwF2kvBVoMomc8+0af+a+82yFslv8O4AmcE84eGKHV1+4fCiuKOFJZ3x0eLp6zp33gtp+zrmzd52B/g/cKdwrcABrnMqhJAhS9Z7LeaCOsN7N1QGYEePe48zGq7duYotPwFCYHkR9Cart+iQ0G35bvQcg1ZJp6AIF5YGIpJDaPoPc+pk3Fs1ErlcJr2VmlT65Ug5AW9thlqzcZRY6UJm1PVEnlQHdQpBiKwNfbtbGOFJRKztZx7AkroduWUfOL3XcQ+KWSfXZglEC7HPIw9TOOyv6/g7vSe22KJRUl1aHdMwzXvOpp6R9RQ1l4TZN9X9u2HmUKubeja41Uc3csgVa4Uh+UjZwo/3u4Mi6yx3iaFh1pkB79v6CxIZB1pBEUi6e3PJgMcIYPbk98fLZisYV92CdjCH2UMwlTIg3soxWOWN9biOr5OV4t3sIjHrD0TFWiz5+lJBYw8Vy+bMgjwEmJgqBa7VF1rjaPO4xihPxqn49ZcEZG6BiCKB3Qstx4CgkzVWqGGj++JvLwUAfLuRZD225kkRCKBiMoyM5aX+IiReEaHW/IbogM6KPxfftFuFPNg65BG0sFYxnyXFOqk4tclx+MneNW9t/OFY2QiyA3X9Vpfk5zCV4nCZP4CiHa5a20l2MwnqjZvWtXNj5AXnEOdzoQkzViZGapESPKazPSDWkWLdjITYK44D4TUWmovEM2/BysCc2gwyZI=';const _IH='859da1d6af325ae7af06846498d1f7f05e7a341134b7f5760dc952735538ecff';let _src;

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
