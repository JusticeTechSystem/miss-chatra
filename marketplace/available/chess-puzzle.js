// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:38 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+CgGK68IYrY/hVOsKdMqZne6xwY2oV3ItRU7K3h41pBsxotnyJ5/46yGqEoHe1TnyGSf2Dx+6Qui0C9xLCoxqmRmOjdmYVqydGc3B5OmC4Qr8Yn8d387KrWPuoc4sOBhRbCzPWQYgINaM99fyUKVHERShn72540ZthqGAdpXm8LH/D+JLCitC8C+rVDC+2Az3k2Rjq0HL/2IoSUckiCkc3OETRTRgUGx3cJjzOUBMfSl1Oq2alLVnyOOoWZkLQuGOd1mH+cctPTs8oamK5iYgjRGOKOGnxPjT7eD/SWMu0QU4wifyoBw/FL/MNGfMh3pjY7zlS6Z16VM/OM+EpISBADBvgDym/qDP3zGf/aDgEGeXAl9jsdhw+lL0a+wBtuztQ+320sKB4NY4AuvOH7qhI/LxOP/eyq3zAwcgGQTA5qtsYC0l47IvuIi/Reu06g9bNo3AyB7nmnmgSweAGW5fqz1ejQO9vfS9mPf7mSMXacw6tprmDBSSjkA3K6NQGFtiqMVGiZaEbyjFPr0GFQsM/MFMtDjCINJ+mzqLrGV+wAvUUd3f8vTjyjUz246jECeMmR/lbMacAed0t57od7XTwDmf0kq+t6a9naekk7QhEIAqIjEdGW7p8jvz22A3ziJZFpIMPd3GAd60JNW/vM4kX93EaTpt2mnjA0Pu6EdP59I+Ug7XMr7njlZZBVqNyIT5DHaI0RCqMkdTYSuyUStmKM+oBdeuPC1zYgdzsdgRx1h61HzFPOpG5yYZeOLGuCDCMzxNznjzcH/pXRUmyjcRjRsyV5Jo9GS3QrA+M6A63H+dPZQ5hLpzpFfZYQhjINUeuozXsc7SVENZpR3E7dTDEBo1QpTxDvZqYn/3a9dP62iG84vr2qDTE1rqrSsNADyvosxBA8s9RDbIKDW1PJck4qG5hfg2PAmflAyef2nCEBqtnzyptgTOqtXf/lJx99OUy8HQREBe2zjJKT9MA4Xl4lPXUjhrRqQkDx1+WQ/qkoEa5II71tGHRdneaLRSToL9qwp7SORehCwfhuraqPtI0leRLWGctuaAzaLMzjK30yfa8dSU5yWWauEeDp6hEeMGSf5scJhqcDD4/XC5OrDQvmIN9p9CjX4yGG7NXilK+RJ4bITc9sBf+hQOpCViHUKfQtCWQXbhUgqYad3HMwVMkzaEeFeilqJSTvyG6PV4sj4MFSnwEcWfQmD7+dC6SkBapsi8TnE+D/wtbk2RKQlt8mVuuV13Ni/gW1A/dpfpTF9WqiFyO7Ip0YBE35DD1vkjxvCx5aWPw0v4mADOhWftO5M09I4eSIvihr2UgVAYcWLWcC+uO8WmcUEZeT9Cl0xh6UVXhYdGJuLyUWieY8C5qAiEXTXejSjOGnu/rkQEOWjOIui8USI+WpAqA2MT07P3nrR/rQeVaaVJj6bXdsAlJ3cGpVdmCp+SGPjz8bsic94jAAkySBIGaOI22zmiWhL5flwK93fW8Nz8jXODtsm1jgUPgRWNNa90Rd7iYjensNZeqEOCQ4k8siQxSjwPqv9KCf5jWfl9DyemVXl9BNY1HGnzH4MHEZRE3EhpuGQ0m1EVzyswcD0xdb7llPouMK87PICyqpVAoN14gqycAbUA2zESaz9EhejWaSyFTwJ6HJDRnsgT8TQ57neJ+/anBYrCZ5bLQq2NiSSwNanYYzbsw3fxPI06svCwXvu9LdmaI52MkWtF2Dt1f5H1sFdmH7MUMwB2W4W+1pGSmHadF73qELEPj047P9N9P49ekqmaL8CwN4iTBHPMM=';const _IH='751d031e9b8ac14f5ced4932d39c71d844484a4a7b3598c4e6ee6a6b36c28c99';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
