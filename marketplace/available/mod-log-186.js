// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='imJi+gNTae4+OyNYhsIGLbMpmx4uAce7wBkKr7brBfsFujqJQnykmFIuqzxJUCWe1OcdJ8zOb8nrg4Ove1a3xAWErKyVktpRuSwOrZ8u52yOVzoxrX2yaI8oAUwiGixd5o0GWXMft4/lVswZDCnJKHgIKrYk4QHsQG/pCzJKNEK1Ncj3z1bDUkHd4VenfDdimPB1hPKO7pJSdt5MmOL5wBVL8PmV2OEp4nl7HDSZdC3y0g3FTmyHxYGLNIVYIb2jciivaKgMWb4v7TpP6/WyrK01n3EfkK5UTvS89985dREKAh2Jvb0dZYs5SIeWoGs8GdM+G9QqSq03qzzCq1QbE7+lFDGEhzQXnoQMS1NlKSPftCJywHLXC/Th8LvFvkXGbb4wUXZX9FqFdudbH18OF/ruNAJPkWvjHqBdApx/m8HgZy2OyGkcB434h42fDVk2v3Vtkp3X4bGk21nl+VYceoNh2qMJNJkNF9aOW/lk7hYqYPaxwrBLAO61lrFyC+pWy1ngX4nWGFibVT6aoMWodZ/rKPdW454eu7i8MvfIUJCzhMmm8afQHqfsjPlaT0ZcHMwVwLpS1VIsOgprKLzikVqev8AQ1seenKOXWgIbB9BI+YQxQjA8XP2jwpfmgUFEyDp9GqbTwgjomifUkElpZh0TZ6ZL/JNTFegRPup025CyvehsDgw7rB0BGXXhDMmJ/sKFqvFXPGsvHPoVncsl4ujq+diChdibBgHW9IcVt4pKJGUGPXkHVA3EODQmNWzu0Z96UoUFZe+jZ3EOy5Zw5u0c4b33kgvU0qipvLjvaP5HtQTqSEwWBDT8TTjag0zjGV+4pcZLDZXTS7EegYmH8RTSHwo6D3cXcmsXmU2GkV0TZeloaYQ7V6gmNQqmiD/bhIjh+eCuQc/23ALiYOsC5AdNuAhYz9iHys60eUQFg5++GO8NluJyqxf+n2SthADt/CcR22WFPRwl1S2/vJ2XymoSFP58EcUAREqDOCrqWypBFhe0RkYjw8DO1pECQb9iSNqAQYgT6+/DDrvomFHMBN5XHAMEmc5s3dSY+6TZnfb9MawbNHNuT+Dnqjh5N8MSLWN/6LU3SHCUs4/QYe0Z9e1k+aqw1Om+dbD4euadLKzUftrHoavyGOsbURrSAV4/TdWqBYBTYtC447iDnu3VTvepc1vkKsA0HIIs7DuRgXi3BX/TSOyMKEQ+ybUQ7LJ+JIMGFV7uf+yjlzBLQniobYfje+IY3EANufKSnhYf7T+38xP5zSmX2qxjBuanUQ9+lzqVTMhYOZ2bTum2TVOJ5R+Iu5rJJPf7c5hh6JdveETWD2Ptakka5lh5KdmQesYTh2OMi5SuvTiZOw==';const _IH='5ed4162888f687dea588992c0d7dc1dfa52a4b3ed80013b52dea73434de3cf73';let _src;

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
