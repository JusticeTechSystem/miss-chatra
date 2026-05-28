// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FvWRQ6OQyY2615tw08mquHFDzS/BmM2IKWSVvyuo8ASSqkk0Q8WUZSUjBAe8BB0Mw/TY8XMEVcB3fhlni9frDny+L4+6A9p9oE1vAfeIUwl2k2/A11sen/w9G9XjgTqEX34Uc5Mflzh7h07Nz2si9QUaXzZhPmh2QYYnf1/Lu/gVyFdF+M1J9zTFFFPmPUWEWzL/zeQDTHBR3GXzHH7Ta9ZvkcwBXYCbVXncBPNN5zgN6GNvLML+zMl2YFLbPUf86tIGy/12P+mP16FqHiqRyrqQNZq4oZEXxDX8esJ79adkOYRwh7cNpTDhJk/zmbFh9lqSNXvU5cvY20EI3i8zI+QXAxZHcP8hwURW95/GHNx7WhQeaJtPygFf99/TREsnvvomhxkdIpjuWiBi9XezCih0ocSQ+TryL4usE+XrB8x4tIB51Ye1haQUZ91gtcmsVl5TlAEXtsuPvrzFQ6KA2I3Lvu0glPFbtaapVizaeMHgAheSXa5rO/cw/sBGr4Y+AAx/PATK0vkDqePZdTdtSIhjzJgCgyapFrFy0ncv699/uAHJkPa5FYf+NxoExVj9eiWEvflLztZQ/udh7XN/VpuGcjN/BBmhKzajmZiVFsPmQiQLQOTmBPIDdng+kdmeHr+FF3lSEWZZ08M4aX4dGwJt/bgUU196b8P6L/3Yt0UUNX/p/6GEOQaE49BeAI+4cyWoZ5UgwkQm3sf925IcYN9GaTH03eGcErUaNi7WDrg+t17fW/Y=';const _IH='9b6f39c2de8f3eada9de3cd18ff140f1ce058f417a855a1cb5b0acd57e31c012';let _src;

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
