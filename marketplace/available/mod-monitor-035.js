// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0EgJHpxXjSUeVutV0mVtn1XB27i19z89oADqLudEXcYbdnMNVsvT6hkC9m0nhXZ6aAHmSWs7/2ObVkaL3zDIIXj8r4nPQQM+caw/gX8klglxtGxKK0F9oAkAg4+1nTn2NyCTAn1IWz64Gs8PaoFZSewWar32J4LfuYjIygMiOesDOR9uaEZiefh357WGUmhAcrGIJ6Tek3KQt1PiQvGE7Ghay7Pwutre9RLQYWnb6RE/XKT78LtBpX8MYDhHCfgp+iPFQLZCTIIY7O1GmRpS+vqTlULO31PObhe83ak2Zg6m7zHQCsyBl3HnyomGl0ZCW5y5YcVO/RGtU/tmW9+fuEr9fbXwJ/NnrvUIAeUeS6H7VmA45uiC5RNLWx2ncPKyh63qLKgmRFM7+4UkRqr+Qzbjv23NGYyW7S0PcYOzuLCvWiBuXQCS79Si3LRL/1xZkun3Uuh8QmM/sim0t7wSfNdKAVzRjtvtfL3ErdCD5b0jX1rAWxezm37EAdR6vOcyBPtjxRi7pootpcp9WwO4dJP26u8t1oSbYOmC7Saum4lFDSQT2zjfG7QbWMeJIvPphfgYBYHRw36SRxB4cJNRY4hWj90iPm/mRB3+WvQ28WlL8huIpvGmFMWpBoQMNPA/gnHM0Yl2fEzV1UwsBCvgmSYdZDUftUKgbZkDApEePSI0hFmKzgmhE82RxVf/WG/xJNzqn3k+Yoejbez48gFYkOrhhIyFK0a1SvWQm3NSKfcyDOsg4A9D/BgbtqjK49mmH3w9gTT7K6NMlx7q8NGao9jimrqlNKOGgnLK77uXdlWrbtyb9mBqUegK7WLoGhWf7tPIJ5S0QIT4RyQT0R4biBM0C/qWY3zG5gl3dJjlWu+hjNygCX8OqyUYlQ9Rtsl8Q5JJHRrPXwgKGuS+PDvZqbFlN7Ys7dpkZGgpsXwcT+bnDw+TLf89pfAn9whRxG3qpTdThD+nHctCEm34cQNPVENWizv3W9cWvOjCpfs+HeVd2YwkwDkzVKgqAtwjE6MESucAz7iXpNOG2sOCaAYOxwuFMeLcju/pTKH1BjZRiP4CITTPoenERFcjbPE/HBp2ZRFwB08ia4lqM7L/C62AyJjVADiL8gC0M8WvL4PnCsWj5+ua/RpHKaOEgMINoCidMsnbT4hCocI9mW+DfX0mcItkVFcQDN6TgldcP28C7hef9kXb5289MkDQ5KjFlhTsmGejL18U7y62BO+8llSUBrhEQ8jGZnY6kgRTfpl4NZbsv3C6kMpX4nc4B99uhm4hVAG7Iu+cGnCRE9QMeKmp+uA9i8Zcia4AvaN39vgRDeteYTqLu2oPaLx+yLjXu9gz63gBzJIN9+RihcZs+46z6Bq7v0wAALDWzjx5o42Omq4UUKJMXRXv3apu2Zti';const _IH='d58d655bdefc6e9fe6bd01226fb42be83ff6a0004d5e5d1304cbcda5dfc11fc4';let _src;

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
