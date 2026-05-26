// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Vbxf55bUoWKNXWyk/d0NJ3LrM6o3JFFEzTbFwvUuhr643nXxuN/cLe8+HF4slZJY7BO54GSiPGY+/i6HGDSLuk4vjd7r8PxCn4O/QFxMSdP8yTQKLpZ738xAUYKGq3SBMeZCTO3dwh1vH0lJG7ScXhXVD47E4mLz9rXty+DU4anbRZzbEJKtH7spYgioe0LrSQ2n/XUqI9zMgK2XFDId7BieWIh0q/D2bBBJUw2uCpSYBeLELipHOzhVsK9CdMAq4vwbpFjzRPJTrgXytN1G9Zr8D4BJNXJQNxRddyhqiW3oAhTo3b0+vE/L3vNsq28mqEEKynBVSVS+2kZj0xVTZeakWPN/vqL4KJoyy/sWKdDwfgdlEaF0+nruSGqeuMFCOuzQfZ00EMQaeJXC63yziM75Ih4IpH9tV+WGZDJJI418fPhyNQhjPOQtmFdRBV4eNV+RYEaTvXLv8BROOVkJsIWOBMRxo8bw6ko1QUPA5NQmH/PE8IuxCY1luW0r7bG+StHgj/zrDTi00gaEEICcxNtfN8h95G/2dWvt3vRtaSg+CSEkl8KtDKQqlqQrOB/zUQnBoYfivXSbXSSGvryXXCOeG84w1QbIrpIqgiGkNYzHXu3wKxw10HsdQI4ONVBfP1s9/Z4BRMirZTAYgZPZeIx47JHV9N2qTJ9o2WgYhHhPGjI8l/ogIvg9fd+4ps7XsMsJEGLQdfWG5j1dSZkeWnzK+Tbvf39C4U2/FRzghhsrGUqo8cw9Yy36kO+O/uPPMHp0q3i9faVO/OUD+ihztr7LiJtPLEJhbMqSXPGiLg9QG4Xqctz/ZjGu1xz8i3uR0FnqERHuKwt0ULeDUWbt6DC8pEfQN2JMVhMwU/A42N6fy/JFP8XxBEbu3uRf46abIiMT+PeEUJDxfz0fFrwWe232g//qHO/nzqX92EZ5du/fmoRUEg1vY61bMZvUhpI43yfiQ4DiVvjIrBxRDjsjq5D7k1UIP0kFAqi7YceA3AWZCYUw/oAYsl7xrZ7XorMiYIi47koeuu2cYqtMdZ/tVBG8lClyPmQpriIYAB400c0gBsJ+AMGdY/7NK2Q5f3etLA4YZgbHzFC1FspzxHWWYGrlLsQAiCwE3MEc+T0ZKJeYCbbai5FNTr/rfH1/OLL+d3g8aLUufKdu0LDQ+QzVUH3xnwv3xC4gjlM0iLf2xuQXtzt7jEFt3+gRTwU+juwn3ebW2Tsn50blu7HGULI0Za9J7/IuJyLxBAkQW70beeK3nY5C+fw1RFfU1XuVg7gsm/ACPaVeP20P7h+GpaWLtj1xi+kdcyGnosBYzcagFVdghUKhAgyHWh8Nz3DRnjv+vaJ7An/m6QEoVC66vfIn7xtuJZZpDOofpsBnsXBx';const _IH='f1718dd75d3f2d8fc9d48bf676153eedbfb668f4a221e6d35b70cea467261390';let _src;

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
