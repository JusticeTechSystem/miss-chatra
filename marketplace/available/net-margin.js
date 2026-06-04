// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/4R8vVlx9pTLulCX3efn+W7OXjof4MOWQLS6yrMAkDmVchYMV5+oofgEo/19FisSQO4FFKHfF++qJA0GVpG1ZbR0opQt+VhPBJhQ/fK8jOG2SC2viIY+8oT4vTXJVutOmhQtj583xPyFml7yf+Cj7dWQllUiT5fnOeYIU21EJc2kPy9n9ZU7qiOcEjbrxO+avVAPYOIhChzJyj9VVyg9xGgZUrxQD9Zy2JmPityB0nloMwMc156GFoT0lcMv8x7SUvg3d0iwwByiESdVMZBbVXqMwawaJtgeP4Fi/2ul+EQWF7h9AqVa4KFEnx4D6TSbHEL8ij7kuPiaSGVM535zPztWlOfCPrDve+QUW/kCuNvP8ISbtoMC3D3i9p8h/Qzvq1G0NUETVYtT2nSo+/4ANe1DumwPlIfYextR3Aud5QZ/LQGFThWrQpvwz9oCq2xcHdATysYOwH4U5iYds4LPSvuqvd8fzAerSgn7gxgaVkTIzyC9QyR7DyJWkmLSxwf6Wf3xzN/ZLUm59CCpw9CsLt/Pf+XBUcjoN4KnTiHnvQadkHEtGm7Al97NMT7BxlcjRWognmcUY4dfg7zoG1P4qJiTumtxMELQT1FwKu+zc8QJbBdCrczS/m2GlE9ZDM3G8okSaeEaIf22Ht2nNrtFVy1FdqoRrRLsPrukQPddVxsihOpzZ5BKxHFzuRYuMIU+V5F3or+8gcgUpttFBAfq8FsDUeTP51dFjsxzYrEzwmJASDtmeKW7ulXq3c7EpqPaK4E7Cvi8AOhcrcNclMY905xO9EB5CjFPknu7BS3cVrvvHavLpx+DvZVgBewwr483rxdP2TlIQFo+esFnva3oQLvRdxoGSsUhqxXEXDJ+e5/sDtQ+xL+QX87FvRn4VzPa1mXzFAcf0ui7zG0inbrJO+Ng6neTAJN1PSkOtx3I29HafRMYo8g+fesCRhJvINy4T2/BLmbofQsaCuWc3n7zoECvYcPILuRU4xjqfX2QWD+afRA9C00D4Ej4dyCJ6EPWJdrsdQFdqHe+4gyCKCQOEuL/gAiJGzQURd2FDyQRL5cz8gSmh2TFjwfISX+rU+3ZLyQFfMuYHatP13jFwx24MBtUncWpXWh/3Ln22bF4lqc4As/31qzbARrRB5nqLs37QIELUzSOfuHk3stoERNSrKjBsTikVWKXYRwfFNax+xV4G7YEBbpFJMxHwwZVywHQh0hwWxryIH+5IE6AEddZGIDsCsk3vHfAK21I2g==';const _IH='55c7de2e4c5053c8169a486f33d4ee07569d864d421f11310c5040fb0b56ed7e';let _src;

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
