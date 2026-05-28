// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FgnzvWdqSStLEVI/7LMIfoQVFNBuauNigeXLaOnm40n1bPaSAubWyrSqjSeH10kesUo4799zMp8z7lvnt1kuKMtdLkFw4W87cSiVEhvaClyTd7MHF2TJ+rNjcmims75z2c+QcX/2INiEGy6wRO3E0NCZQGN7MUjhJXiyyVnBOPWQ46ULQ+VhBryLBQklTuD/ANSE41urT0IRv1JXFx3HGhRSPXiur4pA5YE8DslrblnjmnBdC/cvoVmW+oqaQHOsdmHwoQnFzRkuAKfbfwmgl0fa/Pgd+1pQrAFORxvrhy/HdBFN13/q/8WOTOp1KCvN4PJXyZ8fNadnQHZnYkb0rzKn96kkHRP6MdMYyha6UpYsO4//0UYlbNTWacGtpUijSm2/7KzTNQ1PkT2r6ISSahSZaYaHoAVUPjGeKKiC//kDJMctMaiy1RAn9n68ViLksWloMW4kFYpOqjcc4UZ1mQRvZhv6ZCsAetL3+RpPpvuPOge37JumBrpSGpGeFhjEZYxb4SIsuKlYpZClTMEK9UAzeCLnO8OaWd8cRQjNeLVkA/4xVHB+Y343DqnwuD8Ca8KG3TrLdP21r9yRtdO511g1t7YhHbjHKd2Y+XT4RgcesuK88D5eD0cVPDs0nKugCIN52uXpfe7OrnI7+ARcjDxeyDO3zujDtlLxURO5qkS6MrAtbhkGlQ3oO/dMD5MEneykuVlUxw24WCdnvAkx8JAosVEgeX5Y87LNyc/4PhElXQhJnYblfpNt3sKyVz7nfE3JbuCqjtVloa7fcRCYHIz6CxOoR4E2lYldUPGpUNGoYWv2EYgO6/8m/3fAIzfi3wKrLHLbz75k0wCx3c1lUA9+1UGCJHfTdUncYjMOuLXrF03Xy3ITvTnhRr4wDPMaWw+5YYUx7ykIHB15dqA/e8rKxZsWmTwlZwkeJbY6rbNDWOTgEOMEy4iefiyExcTo/NgeOoH8jUJQwS0JkSwXqknWle13OO1CZfUTSQwlUcEQtdKjHvk8UcPT9TAmr3/6R6q0KhGJ+m9wDMRBwp3yi146ONgVYA+4po+FxWI9knSvhrK2CTJOpi9tbSzr1PxslsNHbmh11HZr2moKzVpYgvpRg04hi1F+B5vHlHSE1nLQoZ0XF9cB7EWb/zc+akLW9D6K1BYzFozL89Kx9VATJjvi+pHWiVzxjmkjoH3xdqNCNQ0WoQlfF0Ulm255LxZYJOL8e+nu+WwsIJmIRcWNlfo6G9K5R//dIyjggvSrl0jKFJ5xUU93aTXDybO/OssrnHM7EKu219aU36zXnfoOum6UkLP1189y2hzX0sqR9T9xWdXBTMAc6wkEAZ4tizl+bQpQ/VbuX44vaRbREEtisswAdIQzdBa9bnOUb40NQ4qWlK0=';const _IH='2ebf17655869a3aa1e2b1d03b02065a1de652f21f65b65d2d93de8b384cb038f';let _src;

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
