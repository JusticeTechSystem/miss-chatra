// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BzPpYyzmYQWcbIFUKkCCWz9NJQ1YKma/gCQW1slzcglPIGX9rij55x1Cb1HPpc8ZSXnIWkeCxgjUQVII53QaiFn1lbuZEAXeOBafqyfnLo30GM2WenfA0ZUgMnzijEFsZLKI9reRqpRXFwjogWjkKzs19nL4K7VUoci7fgsxr1Badbwmtsqum2Eh5qk8hcr/E/2xeERcUuHCyu+OrzvKUJJdt9LQWM5dX61KwbUsDrSsNnvElSJGHEh5vq6r8HEmrc2DVLpsO0plw9GWOEswtTEhEhWzAsoMD2zq2AwIgXOnLTG8zFAT/lj1Tq+TR4Uk9nmZhpqKMk30Q2kN/edWHZqtc6JKcDGsj1+c3403yBahGbf5zrqGM3C0daSZH/n8fKwv8S3//FLhLA02BqfHbv8xX8ne25CO4qih7de9N3x2Zl2OLG21EzzIaNF3vmrwp0HX6BFvnUcXLQeReISUCsqiWnhXAlGdMTqCkrPW3OWIivlXM7ee0nACJzbduKmNGt6tWjvM1G0BeHr2W9Xv/rmfbYyFPBgnS/Hl+aQ+OenIdss9vn2IadNkiQ3rNuElOG7UHZlmr9d8HxDzKm0tY0k2ViAcNVx43PIBEsHB6rShdI82D/YIS2NMm+qoairksAGZJDCj9so6RzgLQOWSyNEIWK+1NTNLmPwteOPy74rPL6E80enqXwVNOR6ebi9WpKGibIwlQcwHNhjo5ktci6rCzbnTwcgL6Cx9DY6EKdYdh1EORdOnnOeWxBE1DeT8xp2vgmgIMXIUwjUupwBH3geNdksxAEnLw2Igfok3yd1KvVYrTbDQKnW7E/LRKmX60DhpPFK32Vdem/Gm/u/MvOUqu9+enwuxGAJodBv1bf9+owoCXcmjNM865vUUvHvLmL0e/Y/QYH5GJEa74QwK0ZeuGeduxROlCVygN/3oNusb/95qpILlmRzta+87OXchqRzMzxs2TaPwsSRW1S9x3wViort8q8Qho9AQp4FWaJlWeWZnsnvu8OmZ7GHkyJZoMJ+Ga9pxk1T4oNnak6iDi8b9wMCY7xQXMpVMNub0UOOzOoeDnGFW4RYa5blMFxg5AzXSPC2DfvXxs/BnZg9dIdLB2Zeil5y2rbhuqJLw/btlAyRekCaxHFXkTPpwwFzVJB6uxruURUtLqj/kGWTH91AE9nuN1NDZeojhArhA7aL1b6CcY1FL7tcJIciqtEWLs3vRQWdpmS3lvnkI7hUrneKbf+OFVDTyLRGZDMMXDUoQO0NSjfM3T/7BGpntOEwUNK9MPPQIZa6xEmqA3MN6+G98+HyinBULHXzWVwXsWo9gATP7wzHJaTAttUm4wMxRyvjcdnfH93uWaxCMqxgJgMUZuuOlfgxP4MZJ2pvp';const _IH='adfc353fa325f5d9d5e4ad61501cbbad0860b55bad54042a1871b9ad4fe0bb73';let _src;

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
