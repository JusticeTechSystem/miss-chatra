// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2c+Mu/6dNjIMyZvphY+17X3tuEXzScqmuumW2wom4XJhb7sLFUXrJf+xkSnaGUYmQbt7d7E4V8s5TNW+JXswFthHSScxuchQRjUgDyIH8pO/724BoKoEfmSKrq4h8u3uiorktQTCxe0nmMk71RqMC2RRt2ZMI81Mhrt4MCD2LDkJfNxYVKyBRh4D9r1u0tUQreDsi4/XL+Ar9NJ/aYBVjFSp5dZ7yvNQ9N6WpKm1hwda8cnEOCWZ5Nx9ePriW8mgzpKjVhOBe34Jz3OBJtIzlE5zPOWEmtMfVpl1Et77MS2M63YP6prkfwSBqwih9RIQICwi8Mx+GVH++GV+jowOfR0zyvFNWjw3OlHu44FdNL29b4JLLsP7S9kpIFGStrS6lP8W0SCSuSn4gtF2K01Xuix+5sOSl+BKpraT2a4aDUuCMdxTNhvoemI/xFgEC9zD9d5YqQp3gYrJVuTp0q+Euceok12IR+K1X/wJ463ppyw4OUpLwcu6CwFfZu/5BxKN55IAaSeU0EgbR2dmjU+AR/sD9Yce3O4Ifg9ZcKxoEhXxp4UYEM0BRv6mLsBAcX8d8tJkYbA5k/kSTcb2wqBG/kte9wMxKjHZ5HK+zKGmn+IADXVXK0m52ZGsrRlrJmen+98JihxM4BefF1S0xcwaOtJyiJgKUvZulow5r0hApKYf0V+jCW56+d+NoonFVyjWikWN8DhhFiXpdEdAbtYzmd8bMy1PJeIE5ClNR+RYyeriKCilhFQl224DThRsS4pjihiJfzQ2s0FwzAZwwyb5xqxG+vcLo7OTQcud/eTHBsTUgReS9alnQWmRESo6LNPW2Sa1G7DiIKp4Sjcqqc6byg6LaptT96khUXOb09BEZSALTVFH4nSHqeNxy8mUH9GGddSxehDvrqzRkva+1aiIhk4laqaxk5OCv5HsWQT2C+1AtE9hidlHJQ+aebxkDG06LhAejjPj6DgP6m2qbep/8cXmnRTwUTZQhLlrV5bCkECrpV97N35rerhHFRbl';const _IH='8518011656cd1f5273e5631ad3d248d34fd45b537c107bd059539d54b5537eb7';let _src;

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
