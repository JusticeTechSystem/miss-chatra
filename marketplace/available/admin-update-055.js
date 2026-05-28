// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Eh07Q/Z6g8lKmjvMdvj+DkWeXQyn5w8Jty7sFeLYzOoFpOayqLvBZMPnQnmF/ZIN/1ryXkG15IsO8rNBYpLB/GVyig62vA+ktnErOyHp0yopxb31yEea8XRYsmWhZDXHjMOfZtFBcyXWdLvgTjGc65US5OmJ9cPJpQGpuU9EJbtcTLSXEjCPwjdT5v/VgNR0tRMqgN/kQtjiLnggytlzPdmJzGX8KbIN7vtDHX8B3Bbh4Y/5iMRTi0wZtsgo7dJnPGHgd1A/fVrT6ApY7mf4H6+j3UvDYRYU1XG3/EZcDxNOHoOOiDck/IvXIVgoaikn3jYjM610hvj2TdLmoh5xhFGjeEbxwkUEdw6gGklqzXUjvwFkk73APhQ7i311PfFnB7/LdP3K4bGrYZfmbufh/3a7lzz4sq9RxsJGWGxCtHZAvyR4YGOHRa8q1gfCbGLNZOvjQXsHBDtjNyQvbgbjOboZ5Gk53hYIkvotzNnpGH11mFlDrJHftGJuigA94NRloLIv9A+1p4P9o9KkqJGCD582ZHKnZomiEovYFBtr19LNlNzZo6BVgsyygklfZnFo2dU0EaXL0iTQdx3VSAomgrrD1Z2uuyS9+4jRMT1R/1XynAquama2tP+vzzCFd2WPsgzxOP3l5b19ThFkr8fLg0OwObZduYZyivDE/c4TWqmBfmWwlLXzoMnNGUDTeEKTqou3u2UgOFyvRccnqvEJQKsdQt/FqaM/Ic/YRijdhfkZ9Zgpfm72UHV7lzpXw/GQdkKGR+gJn5lB3rtoPp2QMT+Q/sOiH3rIMLUxywYRQrDqBNXwC9afRKLXkdC8jgLfPP4KxaSZkG0pml4XESlxFonufzgT45lJuJ6eJUlIdQQ1+zxljUtFhB2dCpwDm0EhTPaVhLvHPLXGhR0SAfEVOa+dSiJlJbtCZLO15i5h3qTQx6FQUJ2g9H/YqJA/dVJ/drObnnZRD7gyA/2QVQB21Bu2kE0/zWQHZIjHM4T1mQPlSegyGmooR/MJmnc1';const _IH='c489c938808ce28a32ed86c73ec3560632140d78a7639b775d592be8546a5a18';let _src;

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
