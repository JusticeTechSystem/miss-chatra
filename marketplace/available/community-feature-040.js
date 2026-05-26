// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ty/uCo9FoGynzof+ziElx7ZtF+6zKfBtNami1ID1cpYE52l/iXKy+5NN5r9AJ5HNWHmECIZntFshz/W/rc0oqf3JQExVWtVHpblVqOOSDQ9NDEavm24JwZg6wEmZnfooCmXhm6ElWcl4fRtF49/KIW2olczpp8B+quaGBP7v58HQUfrsU9mpAeSchhxavu2ZYCqBrscjerxLgvkr5w0vifGUnVqGH0WNhANV6i1cgFIYLLXrVjNymU9JgYQPfMLaf5J2i5bGEtK+w0zjB+up9d5bhOW1EbWof4zwlXaZ21EQVimKDDzq2h75Lz4pwkcBs/n3j1fvbBT/VKsucFozmhgkibxMpZZfrL4oAfWCyVQFZt8d9MlSM/604zpxCrE5WxGNTk002p+FWl2a0qPFXt1Rkun3TXCs/knV+ht3QNLc/XP9s1VYDEpFgQ9tItrF4Rf9E6lHcwas0xHjBvTRvWI9Z/7e1Q3J8FfJlz0XUXCY7tGiMIbR4xQ0bk1wS6GuffcIVOi57/p3zm1UaKf7HiYn4GVXaTyRbJ5qPbcjaAFXgCA3QzBvJOGBz/vgDVPwNd9GX+3ULj+c68DQ9tKkOJOwLCdDF0F9/KvDapQNNo2Yhr+AZWOYIF3h45XlnNIMe/DVjePmnXbU0Fthf2RkR5Cbd/EIdlW9HZ7FTIuotamnpsN3w+HBZ9WxEeEe4mBloctjq3ZPD/Tmy3epNpKIirRycYZVjSt2AUjz0tEohCL+p4rOWcw=';const _IH='76e37acb97fae488e80bbc818a83294d6ba2b8a501955796074011f0b9a5cfb0';let _src;

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
