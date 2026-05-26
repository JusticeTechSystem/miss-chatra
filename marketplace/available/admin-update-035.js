// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GVKKVbcLvwB7xPV9MSbnHSwzDeOY/mro8g9xvEgWcpexJL8HPUNxWg16Rk+JmEZrnWaO/iwXk5aVAcE3Lck0SUmoMMg4nC9aTjQaPckqH5h/y0gRw9OiBIIQTIq4DnPcVlBitX3gs8kgA5pjb/WOkTqs2bLgb4UU0wNxNvGyK4Ff23C48eVe0Hz3ygc9vLruANveSsjk02EvNdG0wjNJWRL6r880Yx4fCI3g30r8QSAOlP6GD+Tre1OnLURNxQrET7vIhJgkrmyEuwJC3VLSmOt6vhvPcXchHq0TDcwhuMGDCdnAQPgL7yOc982g9abUtC+hVM3yKUpnKRxpXw0+XDHqT0dwn8Cx+illGcqcAfp3Hk28ioW3vY/u2a1KRkzh5ik73l8PBx2r6h4K0JjmopZcULL5DaxSxq5ZuKGeFVjK6JVop1+c/4NCuzgGbju9oB4wx5eDOAOkXd3sWKFBM3iLmGn9op+HbWLxJj2RWlahQpyjoI6c+sXvwRVC2LHZU3u53eK1NU7jVP6SE0TvGwLFb/+KrDBGU8MIXueJoEMcB0t77Cr7/4F5Hihx5tTH6C+YxGR6OgzuMw+kBLoBeMMx5aAo3vGrzem/Qsz+Cwb14xr4X9TNnL8uTJruDc2eigj26IFzl6IlYl7Q1HZOvVyccZcnTj4bjNHguVMDt7lnLH7txtM3/Cl4KzYJBwi5XuxQTl+w5M9Utsd8lNo19FfSWrqC+FmB7B4mvfcYv/SGpw/AjFyu7DCKrul7YHp2woKps8OtHSWM5TcdYyOLVgN7p4t04y712XyNrIgjjcY7hOYHaRFIrHwyhMolomOuadCn+f6EsCusSPoG/Y2XE4hxwne2L/zcuKUw1f/IkeBSbTPjXUYIj9XSvBAk/icAknZInZ7saU+bfb61CxZ22JB31NOSJif7VfSeUruYKNuc09JJtsiIf3z2PMpJjzxT9W8w0IIQVGDOS/CmxdUMt1aZsLqansgzan1AMNf14Iy9cqMEJCDxpHPBWomJ';const _IH='f3a25b4e5005035bdc40a19ff8a744f6d0276b910335913079cb034f5764cd83';let _src;

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
