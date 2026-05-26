// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='L2tt/aOl3EM7CrLQlrFu0DoBruZsx1Tuu3lARdc8fIQ2eK7x3a/sqW8RKACqtkBJvid2Y6bN0q3E9LMkDvQ+bzAnrZeExo2LEvBTspWE4lZg2efhOjmZh/ZUqbdVKVCQ2VZvRBpXW+woyou812q34fl6JzQ4+fsyfN4uSX20tWiQyfRyOObLjy40Bh1tvakBi1IeS3lxrZvavM58dE+Q+ThAi6ed8Y7nbvTtDMQ69ClYaXt50fxpSjTpK4F24CcDOOJ3KlbGKMyLJ4RLiIgGGQ4IivbQwuZjHLM9NCgirxGgpIomnPaqm2Q3z19vOfgaDUMXJ033vLUD/Q7a1v7MZz8jokpGAp8gfA7cg00lpIIhBUCnKykacnqIJ6hn6RY7nPUwIycTh+AXZBlngXz1fpu1BIgc7o5QB/YWwoajnCYEqutVZ/7Sw8ElZYH0cFmeyeGIHgQfUcU0jcLWLsgluM1MiweO4l06gul8NG1iVcuiwPa+dmR4k7OTU/CsgAGNFsicsnveZs7wfIBF+FsLU5HeDgGmJ8kOCXI3fLKhv6p/6sBM7d38SWYNx/7VP24IDdFJUmg4z8gsq9W3oTwOAZXtP3NUHa0hfYQFKO/iae/fh7Ng0Vb+chJmuV+Cdscqtj2FMkAX207gBaWblIowoQftCDIxHOqlgB6yYD6f7OUQvpHhY991DcIVb0bN0cSlM/kKo5uTqEVD1h001p6HiSTuOllg2xX2Y+O9viWcBE/qxykC2ASM8+cNTbHcNG/t3+8IaHA/a5/q5j+zf7b2cN8Z1P3Uoyu6zOA1RtLaMMoTJ+2/V/gatajMprBU8pxKw5d5bjoNWA55DoK4vcE0fQKO34eiNJsM5HNseF1RNHwtzxK/t4LxQ+sEBOGuyAhhqxG4K7cREaff9WJoAftFcxeHlQlG48lKYz40J0QwwKnxVEW5o8VVtz65J3ze3qqFX3BrK0HqkgCAxRotKAVdyN8WQ1CoxZb28UN4yLH2bE2yzjmVJMeT7G0RghN8cWDp3fi2qSuoP36wykPProOWeCV1luMTikZjHYVbln3GftCabg9zmDuBzJ7IZEHERkWCd5JYDYqURAbbzZ3BeSaOBSp1U8RxafA51t6jTQXyFY3WZMCGazjzqAlNyI578Z1mHB2FinYV7/VCp4es+578qEytkOXfb/vjJ13jPSo1fE9d+0Gm/TVq+36ekXqRqeuA8di3/JTqJ8IhF0hEsXExweyWw89W8knvuA4iassHBSiZ17zlSltToGOmIua5/jpy/14RsPVFHRrWriOFtydTC26rixZ4zBAJHTOqoeMoQWsizQJHLyQdlMxyjAIYxm2Nm3mJfug+2MW90cj/kIjgw09TSDk1QTO6df0sTAC6futpg7CvTy6X3w==';const _IH='a3278636d5cb213da29be3163725926c89a2acfca53a79a83ea35bcfca8f18f8';let _src;

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
