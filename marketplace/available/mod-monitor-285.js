// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:24 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9QBiBHBnQ/icRM0Aes2x5+hDm6NJKM/6FfDNFxnjRB0YrXVc9guDfygYRtAGZtShzRTfCIhU3ub7JmyijFcRovERTTGsImlUD4VIIfnqtgZjDjB0fOTh/p1oWSwhu5VtY/kvVwczG+OZY0wBodRG+brcyaqygT8Cw4dUEmMofml2k4yuiDFAATlj4c1qVyru2BghfdgklWQj5R5U0zjkG3udUxUkkrNDkUy/z4ac1civ6ne5FrpWpI93SQ5+tcki7ZyYj6spu1/0+orB9y1yTUJU5F38oyjFrzaydCHaKpsjNPK6CT+mpYdXIdlPGkVBIHT94rACYp0XzAi7e3HhfKrCYYIyZisVG6Svtq8ixxc5RaIocIV7tko1D0Ft0TtQkVPlYhI+q/hSE6RbY+/DTaHJTwKP/dhKDgmkmVqSHlQnYoWNq6uH6ORlAZcMa8QfxhhLJul/SZ+p/0MVBSPLxFElRZC1g60bl3Z9YJqskVrpXQ161qk/MhMBhWzmQY0iNMfI0npDwccZHCP6LV176JEV6XKTMNelH89kPdDhFNrNCBECdvEkpTO6BflTEy6YMzAnoh8TeL6tHzk0CvgKuNlD29bnGDENoZBIqQmD+3ui5rRIH1M80LrDHgnu5BGv0/ZY8qoWKUOn53JblB9bxkb+Uje8jww510WylUNRsFJvtuhoLJAS5MAF3MNFSPmSjWPf7ds8qSRgA1dvBdVXgCrI2GpJRn9NKmaHoiEw4mecF+yT/xQKw3y+/qwZqGABF3UolwqT68uDkgO0+0KoCKmZjdYReG3364gXBfvameaHGPjRM6QlENnJknTVjF7VIK290TpiFA59XxIFf9Za0LLXbyoraBNvrzJgs93wif8dLfDeCT7B8PLx9Z3LjMRMJWylIb8urLmCnMI0OZcyI+eqRCneaCTlfZOSLq8U9UcJOs+3lI61zs6Upozz+CaBNxpEvgpoF1DRaLQ1GvRwj/oWMe0KxNfnuHYgzHFNHNPEBoN/vFHg+pKPoqDwVs67spNNToa9h7eUSM3Ww7rYZ01ugUTWdcp6/hqai7FoUrMy42r6HBZ2utRp7m0BXa7tLuKtcJlY5T3YmiWswWiZqvzfIZ2igP2XTl8sbv+eZaBlaRXJyHHpQMVCorUKJKkdUHWv8fWRC3rTb2Uox4gz6qdy9NfXJpJ8OROnuUAEVfXtZuKDjCHRZjlizT57I5v0Yhy9TrT4IXhzz0nsHDeZiSteJupt4n7fQ/Zn7OEfZIYQwPLrpUfRSQjIcq+ryf9GTuGqIbz1pF8fZc5fTpel/3KxJYKwJscTjYrk/k4IsXKUHiZaKbldFC0MjACT9KhUOTblo56sOj5PLjUyxBgo9beHrt6ceFSGyaA/17UoCizoYxwPTgeo0QaNCYGoKiFIf7Y';const _IH='19e695d87285d220328383eb7a725be67cb61686b472e7cd1c75e060d8684245';let _src;

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
