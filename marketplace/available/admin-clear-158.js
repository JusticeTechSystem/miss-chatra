// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xs7URbWPe6amUuvczQyBQCRs+8dMKDyIhROg0U4zt9/6y76qZm9sG9EDV/HR3De+GkzXU1aRnXdpLWYHNE1QRQoYUhjUqjnmvcReF19S0BY1kGZSQAslIlBxkgaHlWSd4XSmChmJgTzBUgeqOQ3HadLOgLDHOXd4gc7sTZiGhV7R20SDrJ5qWU1a6V4H3JDF5EMgiqzOcOJf6Bvf12QvC0ze5Y/1c/QBjfQq+EfpV3TkQpg1kGwjsFHVWMV9kPJqaitRAjZ0R7KoCDa8DBH90cwtrV25x9cXVuc3i17WjSKLf3DH3xKUV4fxCEXZv1GiSvi2lV8iIh5/FX3gk+ONXF0n1uEh72oK2akT2nWOZu9K/7Z/RmMF+waQn5Q3oJQDegjRvps4VSkQrXKoRGZtA6F6kSnO4pPjR928R7cJI9Uv4dJoAtl0ay+o4f3Dg4m5fJtSQqTqlVR3zQUj0gR2CeRklliGLi0IdqfbHskkam+gzLCjkTvZP1Bzhks5lY2Z3/zs9/1HK937QorbjyZnz1nYp8alOhTxOx3rouD7zMGkvU/MWmZdD+BzwYTSW0vNFygSZm/tfSeGSIn4c4YqD95DZFUyI9XfzKd4tJd60toqRCfrTXwvWcux/gAQY7ZO6bK9oOaZb67fvI67z7qVpRApkMZPj905wwVevniGlEq9uYelHoavb7/prsWEDosI+GQF2Ti5XN5LcO+QgpJvjMAmApWCGsrhUlcLpngZ2ZLsVyy7v7KveK5T9bEJqfArkwGvTfRARRXgM3mZqKEtuHh/Xi0wOsFxtWwLeTAbt4nqP7Rmd9cZM8g5K3cQHxRDjiSCeUnTC6Ii3td+VmV1oYaf4ahgWXHCY/R6/PN0Bv4mlT3l41FmMVGNOo9rtsOqL+k3ONMJX/fK5zM8xps3BMmNfpaRKdjVAQbBW7S0nfIy3SvLfDnqu5Hm0poMnHjdx/uEYDY0lQqoxk7A4P26y0NRrx/kFulhLPAU/1Ry72YHdE6Zm1EAaElT';const _IH='42d847f38dd0570cc965d67b3a36dd17934cdad4d2a4852431e40b03d0e64d77';let _src;

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
