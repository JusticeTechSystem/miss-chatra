// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fkO/1uhBuyBOQBSiyzMwDeV0lG6X9GyqFB1wZzGIiWUboiJOMDn8F5sZIZzX+vymhMIOs8T4U6hRFW1fYpTqKIHMzxm4aasP2UtnkkCNDQN73Qbdyw1VNDATGOoUF/aTijG0Mv0E0txmOxCGzw1i2GmX6WM31NhvzpZhkLSitdE+yw2HJC+mZVb/xQwyoxa+3kTTHnPinmSGF2NDlsnXXVwOML1xgyWwiFmwtdTjkN+ivEIvyXkq8G4EoAvk6Ti52SgI/4sbS2i6QTHH9e18vWYpwz7Z9nhJU/+bu55oF3KM99EJtbXpTmDga1cQLCJ9VyGr1Ul6i6WzRlMgY/389FzxgVkPqjzFAa2q01CzCiVfypUKm8ZNzdZJHFbMHoo7498ciPC8KRoe4AaXGSfohmiAyOEXtrOakg/PkvQAeTAzseoxk7OrfEm0D+iTAe14WuZb0mMKE7gkcJq2ANNhjblQE5yT2h/sX0GKUVmISshJdwt9iOW4ipSVHnkgXsMr6+0QlocWx05iLQvFndEHH/VEAn8RvmnmyfXfyZras3XAJbcw36seh5VZlZrvFcgkj+X6r4TPs8PG7fW1UETp757FxoRuYUoCyHBYyCW6at6i0In9wX0+UtwZ+g2+5qlBP33g+0+V+ZhJJG+eLR/YCFME3UXXMOlzib7ozTskqZX2M2BqWCveWCZSVwK/Du+NvYCyggK4Nflnsxd3nJDRfVfH0a/ohLY7ENtvEOOSUGiGlLaKWGlZEYRCqbRwBaCUoRY+q9hQbJfHTxfpbYkAr66/4QMR8raHqW+FmhEMsUtsAH4dWbwq0BEjyHi2iPFx586iwlc6gIgg4oRYSuPbC9g1dnDOHQVsxHl5bs8QEj0+q3RKepPDp80h8CRJw26o7hDtIxnQcM3ktsQsIpmhP9xT+H+oOI4hdI3yYcFJjAafTZrRNLl30ZYd2rAouUfbCCAsvIReZfTWMY75PB/ZalXQwJpKrQ4rhf6w8A0F9/8ujyCGTXk6tP/5REgCl4tdsIWyVP6C20eCJm+0C8H5YBx1NZ79t2To/1KxeIipiu52NK16TAcRd3FZYp4OW6vy774ECgYbTLSBWlqUUYKK+2N7/wDuy/oXhfkRlkouEtYCgNhpZvXVrdq7kHKKaRKN/TiKKE1/Albd28xJJK2oOEN4m42EFJQj77NUv+wlbW+HOVCy8B3lpYt1fdteGrLQ';const _IH='3235de017b370e8946195cceff9a35deebaa760ecd0ed8d1eb6c4d11e0dc0ec3';let _src;

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
