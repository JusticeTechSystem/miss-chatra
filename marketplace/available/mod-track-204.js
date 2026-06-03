// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pXaFf2zVGmDHvVEHp70Z/7T7LrgaxEjvhEhzZmKynry5PSMObCipEipFWARgk225YllqhJElZJ3dwkAR2RjQdSc3Ucfds5vSXe1ClyRYbtsAghzTE3aI2Kf134HnBflvS2pPFzKgFWvT0vbVnohW6KFxw+c4NtzSqr1Y+i9AdA51UUHjq4IgpQAamWIGexMpPWUBGc9otz202pGGkdVX+WFNXy8iLJrO217/MzQYZtMlPhugXnfTc2vZqg2mSV4d5X9+PM631T/jdJXx/kaKd2sB/vq0OZ1VNmOnOkIdkbbFW3S1M7O1M2mjMj9WN+DbWmYGcZCnaii03OSu5t/EJ7+pLUR0+o46APONg+IWO/scCYHsr1wDn3b2LzlJGKIzrW3QJeq5FpP93lRC6hwUxPIc7LDjUlKMIEJNjkkIQ/At4eZ/S8GRwI8EZ3PPXUGqruTltlbDxujd5OjJb+p6k1KTlzGELW5vmUGm1sV/Z45Xf6H3Ny3WC5nRUi5nkIlXeHDKdXk1d2KXoOK5/s6N4lEaPMKBWRBv6y4NXj/qmRgiJtkDTTaB+aW+ydXFcoO+HyKN/buUsoxNAjm5C+55RA0a+T9XoRfLQlNqyasvk277d3z2cEQuGwc9a4+X9q/OLfbkzXXvkygnRyNyS/0fie3xyc1D/6/dDSjNqj+p6IaoeYfO00W91AaIoRczsiJAExTYus8Uv2u7mWMVeoAAnH+bOctm/qhUClrr2rdsE8TDlAO5C6aqxSeeZW9BiP2xfeBCdMVjdXyAPmp/WslgWSCgamb4K+YOd3vueItedziI1RG1Rgvleiovr08dZiebuz3bMViGMOhJcsCXZZ2s5L8Dy1388L763Ym68qSNn/E4iHp6F3z4hLfmFumkFs2GLzb9aTze55UL182KnifxVZyjaVKWY7pkrtqQVNcFqEyPamd7WQRy2KTPmM7P+MugAN4r/FnKHjXD17ubxBVa7Id3Jj06A4GXp6HJPKcnr8COU4GANJMveQjrRr0fe2gmXnuB1Hbs7aK7L9LixZ0y0Ma6EAk+TCS8tkBY5XDDQlbLDBKozL708GjWujQo74dGRVYXmx+Pl/75LIRHIQnZueDeamNTvelkhh8EnqGOiEumsAouD8OLYGaY3WsDpSuxR4riXvEiIi2dhZ6N02Lg6Jj5K1B1iPXWXhCyi87dcmnDQy8YL8kAPmuLtjRjeG62R8c/pGQP8gJawHSsdDJ8PyyM9ZCgFPTEuG12Esh9IalTispgpHkJldqNKPTw1GESqBBePO7XP2GCtZ9n+idxrrjBIotlOWrYpm9MP28mxni7kUcu1PICiJQnbrEsQrI6HannBB1cbOUMandxA3twySkyhEPvawzD4P0knBfl';const _IH='795b0df1417611ca1a527367baa14ad0de9d758c01f179e8401604b99e9af86c';let _src;

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
