// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nvJy9onHaG2N6ZTCyOoIBwfol5pQblnRxvuFmGsWdtZ3YKuYEb7aWJRHIP8RgVB2BeENsAcPPM+G1EXyJ4qpw2qk6W+DI5+jb6DcaZG28QhiYn27gT4z6Vx+r+mWlalgt22/Z2tFJf/pY9ErKCMtT7jmzfZntkrnmhOdAx14SUpYpN/CrHKMcaRRf4RRQlU7n7AUWj96D1upg9fV7CqE4dhtq7FeSYIpDNiq60sYkJrpwOOJY/RtHXww8mBtpxcAD7C+Lx3N3ifYu/Iaio93/ABajZVoIctnSohOVbqcNXLEgc2KvMYYHPfNiZQVld8Kg6OWZdFe193bZ/U+Nq2nw22EckmK+Q5mneNevr+M7uZw7HoAgQFCe6yDI6/yfjJJlYJ4W3FB1X2OTajCpRNC1Yd/ygBY+e7nr04/tsH8RpJ/X0EgPThQK4ftUrmbcQNWLYAXHDJrf1zrWJR0l8YYAWnVNOS4MJVKca+2Zy2awu0hFMtToxVb6QbTCkNjb3At6w5OTYZhgixCgbp7q0y6x+41aLFIz4SZ7sjVh9chuJ+azMwXsWNCSSvTJEVc/LUGkpTAYYwvCVVIFlcA1TgM85GNW2IRaoa6VWwUZ/mnEzQ+PRW4eHRjqIMAxqwD0JmwSCmSdF8wI2TO/oOXWUEV/joFWDFonjFzVv8qUfG5SCmkEymghzrzxHaW7gYvrOzPxEDDQ3NEhwVlZYMH3G3c+AOB3k2BW/13atQF2T3UbviDoBSclrK4zQiwYZ9XOTaeTFFOYBAv8/VDZcR4mAMVV6WmUY1LDn9Ich2bADmqdOautC9QTFgeVoPjOZ/qe7RJLAXJzoV6rsBrqXrWOJwh6lDUeODnzpycNAahsg7r5gXRL8+p8GT2RioFzBa+fXwgCoHJbBt3hxo56t2yn/G6SMGk7SrzYlIFO9BXsQnJwCozduX3vCK1g40FuuPUucnR+PEa/Q/N7+bOBhw2HWz4LdJjR7dEPs/g8vHWhLMV0TWwwO2R27Nhri97BkbmcsD5R18+RklBzynrkYHNpnp7oERv5W1ha1VVxwHuiLorQm4KaYfi1cubjGEKXni2+SlfE8kq3j6mYS/Y0D5YqBpVXoeHTUhwda+Ab16uPK2tEQC9TijCjaiytbGFe0UCsOQhcr4atjj59/laDjfUAoZ0nvm4lEGBRiC+PnR5n7z/MSwswn4RgvW4DU/pRNjkVhIjHbY1rbD+wXs=';const _IH='333bccf3802859d72958a7512094e5dcdc98e1f5c523c76fd9f787fd2f44b9b7';let _src;

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
