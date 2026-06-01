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
  const _b64='UUVOQ3HAHWiD06OxZQBGaLSB4BdyD3AXUeUliwu02Wu/BH84hWZG2aScuwJ8bje6YxRXK5HzJbFEStf5uKgaMGev7MESleZRJbZibfKsVjO68NPdsB93VktghIJm48BLJQw/RZNfoHw8guxz8KfH8TImld1ZIZW1zZQiQ4p13NGmReezMf/9vTvRuRMearGEGpkwEwVoqp0mwJOl7nMk3PwoCcZrejj7nQNagnLE8AR3Wh12198I1K7DAYpLP1LUkHcb7CcDIYuetVCn8FnucegPVmdls1GC8KCtdYbU3B1OnxaLOrBRlO6+oBdiY+mjJ65uDPHIrWNz1rKzbmRc3b077lW/BS6BqEjkzyy9GALOkIW3yuQ2bt4SDPmxMOrKg8IEh8y72WGfpCIcigfC3QQQPwMR3UMcJs0MLBvl2tkJXBXw87ZaPUY/s1UztQy+laWsrNliGN/M0javsySNKXTlQfdHGiKYMiYg53nuY2ph4gs6XE9uHuhTagpWpXPFicIGVztjJZtGoBbZ+K0FfBb8Dk+tNbn4H7yrHEHBbYodXx1QAm9/P+XIP7O8el47G9QgMfWrG2lmn+KQWXci2XaE5XFOIiZQPxeP95x6VcxxjPGK3gZI9E8rVeDopaQordiiBY4Nw5YDw/FTcIZeXcTYEwGYSvIzAU1BYWSz+2P96HRLvWarOEmk+rNAr5kNC1gtYajQjrGEe/Mbm0xa9o8brtsR/8lm72//jPcBZFuNg8t6X75f+uDyL8xy1tIhkvxYMj2HTkbWDzYeHOGg6y8oUYYZb821GJfnX2QvD/IsTDbvwBHh6bIUiCrZqrF8TdIqH8hLR9db6xf+79napHvfpW8WIORR9YOT7BLPyrNLm05XeBULQ0CT8TvcizqNYyCK0yiENi7eKou9xsJat61oU0sz0kch6a9GtnKgK4nXm85Bo4917vaCewj5g9fSLpC3jP9eF0SWzBSwKG65OpawMMOh+aoSdZc37vhkZMMzmbXi+QfTgtdOPu88Nw==';const _IH='43bab773dc13a3926013af25fccf7ec6ae4585ac1a67942d1bc2fdd7358c732d';let _src;

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
