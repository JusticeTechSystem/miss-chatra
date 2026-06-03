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
  const _b64='6A3KpBXxeKEa+JYVqFeY+5S/T3Y5EnVujLRl5zCKnuwj2/tfCjliWmXGtbtCUDh4OfwczFl9OyNXAtXBsmGTArAx1ncW10ph/DQQVU6jwRyjQXyntMkZrJoGSiEDqd+avhY0yEy9BJWBGYJIzhhjiuEgAgQc5qZVMrwtkrWdvKC9KMT7lXvzf+0zIy2F3+Ab48qqI/1+0yAmsbwOwc0qywdHoAszvaktkfaTrYgEoLz7x1OSVz1i7IMIRZGyxdF/v3oTJg9ZlDqaiXF3+mYdGait/fqtr0NX1AueazqzRTseNePjFPQYCfzmToVVZCwjuWwWBkx1JaeADfs3oqi3vnlFEJbZiUgT1+ofxwX/C7uZNsMKowWhkEBe9YEbX7rIML2FUZ/nPsJxwguu54h8MMcx2vzkdJP24S7/5rdL/MzNcLgIzVyR+5/k5yVWebb2KpwBI1yBki8juwN0MLc1z30qalo3FLZvxAqXEHl+mWHwmYopbrNeZQuM0+kERmb+bl0TbeeZ94UZt9PNRSKIgLCPb8buXGAA9zQDnLBujkaWCVdjvhLCAw2foQNM1ZeoDJGBahYp0TuLrhoXyUyVqVPHJLN0W3it7drWVGwrAoK3RWBncvkYCsJjHf5KJ69GwBm6bmbrCqznXA8jbi7N2FKCe68eeOfk0cmVV8rAVN8bZoL8Grzz2wnn3wLgIFpxjStTg0wgDfrJPRacH0voy8fWG0zXaJtu1dM0qYEewWerWbSVKlBmOA/np/UEq0Sd/2l9v8ktfeoly/SWmZuJDD2gUs1t7n4Tcbo/MVlQbVPX0Cp0LEU7+AjsQKEtZjEdCOrT4YdTQotqtrF0IJsQqhKFi7VFe//jh55YxdlAs5v7N9YyL2NtOzlbfQJJhzsLy4csOI6s+Ov2zt0NphW6KE9adJE7v2Ms7VdT08szJULdHcZetyeD9gloUk6wxgY+SICBu63HJO1XO5A/LSYjnlWagalQtL63kyumm2H6aXYfwMaWkKDetuWxcLC04NPLC9+Q16i1vCPFwWKPC4R/w75NcvcETvrrqiIP7Yma9eZp18/bThCsFLH10r8DGRCYcM2xRO04zxJlVLoESNUyqTVfYZxeSqaHWZh7N19TTp+BxpP13nSuNtixsJ2U4kk8trcxMB77nH0AMsbqEDOVj8W3ZNqOrqJvHKDAGq3R+/UZcnfBYGNTlEuP5tWNtgPYAJyA4E1m2BVXzscivmwUak9msg6cw7VWjGr6dd4Ee81xg0hZ4heKr8a0N0J0mxrWJHIaDU15m+/PJBYH0e7W9vO8YGVuXhOMtAZCSdpdlshSOdtuBokSKkQTUbvB0SilN99ov9/52psjOAtKYyWHSYWdLsP0mp6+vg==';const _IH='745bfdd0486ea0820cbff3b6534180da2b5ed0db1faa9f76a5c8877c973c958f';let _src;

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
