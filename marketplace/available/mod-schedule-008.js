// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='p/gvJHS4Gwvx4r36gyrgwhcndzo0zn1TwDCQFfnoIkpXIb/XQQ2YO5KC453M9vtzuwNJXYgbnjXYQQAmoz7BfPyw294IMFHc1nclqDaoWv35Aqti2DNDqbGY2i2GooEB3zLjQmrHzhcmfb8KazAQgrqNpelz3R2DOvY2mLFGyPFl3OOjpcjrx1yBDfM9V/wm70f2kJYxdtyXEC2oCKU7OX7JFajmx43Fy3SneKsOoyy9Gf6tHMlKm/2HEoZLnzhG8z7Rve5X7PX7CW+gi+z+qsReZOfnC7hXNMBA/SB7DmvKrfhGAeOgqD1LbGzHm5QGNJZrQlPWRD2LZ7hTNeJ+7LgPf2VKkN1wLV+DU+9faPVD4uShxLYV8bb3oWT9mZEV+sdPpLcNWK8FVJCLg5de1+kVZwVUSWYxSPm76hBtS4Y04ggZH9qv9pLyRpoKVP3phybSqRn3qoXft2r4bgte4Nasi9AK3DovXfab5/Kn4NybZ+58ORKgtK3NYoZcfNewZ2rNYQAPU3ElOnqyNcaAvxKPXgIusjo+hdfdBDlVGredWRUBjmplPjnqTBwiunQPaJ6J+1Qy5NWNjBKnDYiIRqAZ9acqED85RwFQsQ9PaIHQv2iUo/l7Cjp+4mUDAap76u1rPhf0fHh5xiryAaowoE4/KLHny+iOscm8wKEvAHZ1GGEura0hWmeIrUf1JDhptHa6FhTeFvub17p4D0FX/mu4IMCJMFIpH3no84gLa0BgyeRdzNWjfIWAZ9d60cPNG8H/rhIp9KICoQlKw4jij92xWkJS2QqHlpYVFCHJLTv6A8vLQBdLIliUo9xK4yL5qtVEW/CdSJ15I2gtTooL5/4y+AOrjSTy+IbAmZIknf8KbRUm4xJ0l3C/I6eBT6EIGzHGZdwXQMGAlCZLKSRCcoMqe8XylIAFeeLH31GyVeycHiYGpHBnbxbu8SuHD9Y3lYHZ/ZeQsaQIEY5cQiYIYE9Fk3ZeOLxhmUs230HSdDr/oaS+K8iVfUzXoTZdr5JWRCWuyGdLOoWDDSj2iGtw+mJf/uGwleAmV/SncL3HYV00ndnPzYF/17UUQAXtWlHy99j6m86d5Dob7FT+qcZARD+PAXvtvYmp6GMEaxmlSI/5vc9mkixr2bUvzi1MCbhR2NUNnXDDwlh7dVwZEGO9XwfeQmVuVbj+TZxUrqEUPPpIXImdy3/0U0snlLseIMKZUH6m/u5Dn84JrFOeAHczK60pEqW/rLOc3CHoz5B/GcEctulWzci7L3nRlvRUF7QETAeo/6xW37H38hBaWVJXvtPYPOZcvvsQn69T5ApMufRkrWicDSLPIK0MuVnTz8O0v/T3PBJvCse9bTFXi41rdKtE5MzIGHt+QH9OLC8oLtK7yRppo4TykINnC/8/LVN4r0A=';const _IH='b3881869c00f8dc7e9623b51b4d84a676e7f72ccffbafac84260f04ed794a99f';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
