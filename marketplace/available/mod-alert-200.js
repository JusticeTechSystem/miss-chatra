// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/yacttTTe4eUNPpTh+er7V78mcEzobMvOXWP5x8+6Zu5Lp6133aXhYdVxcfU+3CTnizaUWpX+zoLtWtKDa+UcD5YCZgSd/KCm8FN2mY2lkRJg7t4XsFOgSQ9mg4IE4eYlkgIxhTuC0mjm67H/h0PwTsoYtD5zRqqirPzWOMrYk7ILtnv1R8FeFaumc1IgLbwvgqR9tIMG3p5F6C7cYOg/VWisJZDgnzx5elde0pbMZtTNCYzNrI6/Ahw94V5zfWECF7a0yGErg1GP8uhIwOXjtbe5+YGTgZ6e3un7cxDzHzEmxx4LFvqodoP8RuRpEnVzVZRxM1RvUMmVNRRnu/ZzT216wHnwsh5zO0Oygzl1M2+vhPGTkX2Nh0ZrE042P6AcueiR2IqNMHnUIh6kMOU/6g/gx9cIq4Y0k6L7SFaobX7MyRLFFwi6KwbJ47JjKzC4JrJdJm+QWAl5JFmE2D4HDVxjr7cnOYWa0mhQMakYzLxCCqNzTIbSyk9Tw2COZx2K4ItPNzLmEz8Oov5ypPJc+l6PEUSleRBdT+3aAZQWgvb5McN97tKmYshekBrFtXbKVkBgSzMfaCPJFfNCwGKOENUAbmKtZDm5svJ2rdB13unmIay90aTSgG/ECymXDOXe1azddTuW8LYoFlClQDvQ4+6eWA88sh40HTlL5bGfeGMOLZH6JFhvbHqsnUnI+6BkyK7FdS1aFvMUUgKbw5jDL/6UjlPTNfNb0MTX8ueMdNNJRNJX4fK5YKW/M56oMYpgzSLpolkvzC9oA3gYsjdmMw3QruV4Tqk1y6a4RVKIQnGzvD3mdI4xh3fTikboyAMhxLNMy7pdleOCwYxyAyBoj9QeoKlKRr2F7QEL1u/KqiA9Znq0HVcNfYlfJAxbTJNnZxnSRoI3+zIpzisdIUiOFgHENIw2Uf+nfgaBFq18qHjQa+sbWoVm8xLZ9tasDM1+dCeXBWCW6D2KZ82859DSvz/FQvYRjqTZSMqX8x3MTBdV1zjc4X8dgVfVGn3Hhc55jow2P3ahejy68BSjNFgjtcvLjZuRebFIMjcbPMU+FhPbrY/XZt/1n4GE8tTDE1v4rJcB5QPZmVrmVbgAJ4Crr4EFezd5bOlGva9eaV9B0h+d/fc01At424WEjS0HH58ycPjY5QSX3ploYxHc6Z9pRv6TLxyMmL+Xt6Fhk208wlhKbmWwADCT3dTiQRVKG/04maJ4dciALLZWQ2un568w76DBrB+W0e2KYXEdp6P87OSVrdTh5med+gOrAYSW5y5X+QRQn31qKTO5pr/QE9qMlkHk+Da/ex8zrbqwqlbcgud9JHJj+rSwFpP1zJVIdTBbeaFwJWZFzn06x0/BTgs0JmxhCGT0m1H1XtjcHBl';const _IH='adbf0841e11099090d6f4f1968176a4ace18b3da6e5a9136be21c1bede584f8d';let _src;

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
