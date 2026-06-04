// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VFeGqDsNoOxaDOhJ/NJTMDaEsfCtnYt92xWP4DXUuBSm7xwe+6MGDVom2QkMGUMj+nhQHPxyjFmipmPMtWBENhKGKqgxJ8AIqvA1Z8cYZ0HTd4x5GiquuTQ5v/FGmDYsjQzS8L3AoSVQ+FwNWzbOkmuVuMwCanUE50rMmdn1ckIrk8d3QfCQL8BgZY8cZWGee2T/hV8IEO8krmQ5dUe5CAStVLJyN8RiP+HznT5Kf6LhzAnHTVh6v/OyOrbD9ridEZdbOiVvsAlHZ9PhTWp1IasS6ft0FSI1CHsCI6zh95tJjN9sf6Q+Kp+A1binJFLgH6kboT9ZmXpd6DUMwC5zL1nZf4t58wfr95eB+r2/OiDdd8Yoi6waSO9uaB6Y+qlB9oA2OGpgxt0QgWZqXOBwIfbLfOZEFhMTt6C9wLndX/NpaEwqXoJNREd0BfjD79WjrzXD/RfR7YxXRt6u+nopjfgexPjpLuLEVMWIrf3EDy4VURvGQEFjAsBGLcoSysE6bruScMkPapjNbNIpJNUerGc2a8V2aOuu+R1VPM1RnoksvngN2ZWacld05Umlcz9kcC3mvFmonR0tQ+TpoEEpXgZnts/d1q6wkrvlgsuPEl9WnQxCW+5jpC981Zl7NBVX/U/8XHIL3gYyFvZukMEdJuJ8lwjvoN3aRzE5T3Jcu3+Vk1xyreBkBZkkhccNF7caAIAsSB2xZw4AZ4wlGG76nCeyJSzHCPHTON9/fBNRLWHTCYIM2+islGmF6P769jkzyE3sjXEMMa5txEjeUL3qxLle/Pfjk006eOjLbRYGPlwP+Yp8wjrp54cketd7uoc5+buE+pNzs+OWqGJ656VkVZZi2Qd2y6d92voe/cJk6nHL9wkNJVWty9LasnKNbc0PG4CN4M0dMg9tKvSJBopWgQtshEytLgidMmDBTMAQ0LQKSV1YlL0HT0A0GDhdVWsU1Cilbb/86HGrlsDH4iDAVzUlZBwlOm6iLESER9Tgw8AAGDO7jicUjvzRI1KwvdoLMtJL0pBQSjwiep4guQ9pho5XmyzF2hSmXH26u+8+8BArP0QCfFBfriSi39h8li+XnOpGS3e6t6vVbzM7YrBvHSiMO6+OhwBdjTlxQ50W961idy4nLHGLSvJJ2n14C/e8hbbGujoT9tRnjZnuLFMvYcf52l7981xdbXKHJKEv4KYb1uh9m7tyTxOZ33dhAl5qEnX+nmEiN4iLWbDM7PQ=';const _IH='e67f4597aa077ca8d21cc56194944f34563ca9ac55d028a4fb6b055b7f87d62f';let _src;

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
