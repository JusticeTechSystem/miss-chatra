// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='51jh3061QRwf5o4zA0heZ04tmuRqpH3uKl6WYbodr0xbFqnQ3RPcVN+hARIIIdwMMI2SfDV+dycaB1Fi2Q4LAgbZy0iwQTrVF2pH7NTq8g9/jmL8RmPghkNcAKJJIFlP1zpPfxRotL3Br0QX20WBklnJrhzz1Hhc2wkOnFqLQRf6s559POkNE57WIGSMekWgAZPmt6+8P+Hfv1BP0CaOvyUY40WE14bu3hT+LvboxouOaQnoehZiPI7JaP0qnKYIuO0Xg/qbvGw4bZb49tt0LQhkTEw9CGt3CjsZ8czwgAfuYp1CKhBYqzf2osxspFUXjvYeOyk/RIfK/ZQIatDgE8dUyDP+BcdEWBeJWX2QKzwuYetLuJ/cZtnFkXUJVEPihzCwGaK05RGoZANVdgiGFVtdFUV09xXzjK7XBatLN3GTtHMr7mACJGr7XHBq5fxnuzrnEimYvZL6PURb1s7+1AYSwP4QOjMsTZdLOPr6c5PGMcsIfzqsFI8MzFIPw9vDZdBzvTfm1drnEvQ/qLnvH+lEQUyRKFQw2yIqIyTSOXfDqKMhT5ZEa+oZgSTZkIXvC0kcVffgL2XpDzys5d9+cfZ0U84AoZf1LXGOk6DJ38UL/DdygGRK5wstIIVECr/LijvQ25P6lcglrDVniae8Qx6SPtBOa1LqfTqfIhSctubahscpfD+uLU5rmal5lsZ4sR+X/noqfCyTRyWMPWQ2WyiLlcgU6JfjF+/7dQuM5IUWNwoZx3oY2Iq4CEY+qvbiwP0ErpiMOM1cPK11SqYhwi161bOle4uIFz3d+XxqfCOSeJ3tAxXuEYAwXo63J6/e6Cevos2PLe+RKpnr6Ix8qZGHkCrBfxyVfG/jfMY5xn2Iw7cTHQUV5nYWCPFJ9TZdhMjUJVQrXsbYByJqt5i7JV53fKjBni0ibtdy4ZMoVkzrfvjOMrQj6ovJ41pG1yiR9sBI2ElESA07LELOInBBhNb48JcSD92hw99qRJK8Zd2/tP+oAgk/Phs8fMP+tsMpQcWpVRYcpwZw+qLXZBuOIpNE2dmqr9BYX3hLrh7inJIma70SwuACFDBqfQlqRJR19GHhh9HuTUYCMJDr8uOgHLrLxrib8PHVd3Yocd6+HpPZDe4UU681xWbL4YiV3G5zcc2SvucT17lOHlP2BANFi+Wt/iR+N74j0tNgFM+Uf4KM/Hb86gQ8+jsJa8rPYzhYXO2Is7iHWw==';const _IH='ffd5bf63ffaf002315d7aaf904f9b5fe381a96584c8abcf7fea7d7dbddd5baee';let _src;

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
