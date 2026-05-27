// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xSBztUVR7HNtGlydss8blmvKtfoHAcg4ANaO3qF0nFm0p9UJqr0VVtTtwno3vHqXBCqTzPUUzBlcM1ZzK6SrzU6r4lKUkPyYdJqJ2V6IToXnUf+XH2YVRSyxsb+AJXeVNwkvPOYXJEZ9BgKxRFdKeAMsMwYzvxm/ViB91j+/OoTn1lSd/Nqdz61j67SQ6iqHtYov6j7FUP36v/ggVegJR7305x1g5uAgiQqUBayrcECoU7rPZ5xrLcIzEvNDRZSjzF+53H076QMeAcZKqT4B4cR+6GOxul5tLcq5B9M3EmGVQQ3NSg24aXG0MHje5j3GUd/H8V5hhIuguPjzvoJDgf+pxePIqkFi8wBj5mQ/Nox2+oFpD5NBLJVeLyYS9RpgFncunO3gqqzFxVcUfvrl3zAc8NnZ4r0lTV2aaJ2TON2+NWr936U7sSO2QGIEfn8t2AF8X0ps0uSutlajRVnnVx+v6D6QblgHn1FYOMLt1vgPVEZJscHbJob843X/Fd5PRvCfyR05KXAlki+bs0osYdbW4KdiPWd9uXrFU/IK2OXnanYRVflX+4AEcok5WcN39nOtpM9WFt8dQ7QjLq+oHJZaEW3BCpl1ikMoPD6Q5rAhX4EoHBOOMdnOdrJl2+Tmpj0qzdcCseaDjYGPlpo9SvXBa9YZh8e5kU5yUPpDb5LXY++XOgR/YJibfe8cdnGekBmgrgp011TtmLBMjf+hyWjmf9sGEnWisJ8t/uELIOnvCOpEMADjNIS9MFOm1fDnmEjdH1vZRAlFgkGVM35VVWLe4tPNgjwIl/Kqlvl4oeiBDtBoVbt4oZ4U6Qqt3r2T2kKbeb/F7i5ht/QQ2EfjHoSIRR9VblgPKVF+M2xBjqNgoO0leewU3IZtKyboy8cZ0i485pt7lZfXIg932BukYGqedNThk0D6dATyBoDlgszMHlo48JBdvrRCpihNxw88p2VdudxFQDxCCoASQd0l5QFGIDuWudwjpHmBIuYQRItmIdaniD6J+RtLKBxP731swHTNfc1XFPxTqXbt3/4pOU9pVZLZf9ikKa78K9T0FSm4EJsHEOyGZ2iT43f1BbBL/nyDakGOVEUPrYrEbS5yoT2TgvZgr4Dnv2yCuhT+cBOIOLFjRKYgVNCZmJ6Yu/tDIszX3AFhkefYBf7tqIQH+FAJL6p0WLNixO2dUP2ExwHJ2H51xfsPM/YDQap5hOJyW0yvBqZo/18X';const _IH='81aa95f7ea8d5ba1e31d02a6bcb6a1fa70174c2d0a478b7e674cfe88540c63d4';let _src;

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
