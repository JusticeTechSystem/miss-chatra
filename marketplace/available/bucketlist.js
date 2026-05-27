// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GSoO09dHh2Hlj32eAx/yBfGIXBoxNRrRF0Ys9zgr8/Ut+1iMoyaY7T41dkqbTDJngOEJntzihGOjnxL82e6CNoQsKRxij93/FmX8VD67GAe6KUAU8vYQpyDhFt0aYRYiCFYwTfe5+aZG5/ut2NcZFuqDt9k44Hpx7F+G4TB4ST/s5eN7abV5dl8ESxM785PMPXrp9gOm1uogU2ezLOIWigU+oE/u4g0Qda4+C65duX+8WIQJqUOSCEulhiNCB8EhRjvJ+Lo6GR1Zjmfv1sj6qwKWO7gQyN4++gYbEr11JjAImtIyWty91kc4O9fpjFGz1hu9BMwoB9LRW3J2drNHiCZGwYBcXZUazcOFJq9J9fCWYGGiD/ncMvO3Fa8vpV4RcoOmCKL+Rs6PJ0ofGy92nEHWcL/IA0lQo5rGJjMpynsOELZzwbJPWCaIekXlrbHp4qKjj437Nxu/ipj++eiuuYZfCDjXsy6+qLhtNR4lFTlmZAuyhlFFXe4YshFFf7+6S4ijdqXBLlscKIfx9mnYoaNgaCns+xMQkxHjEAN+fqdN5tgV47FkAQyXsTqVQvAJxx1RB7G8DdV+fPAfZEjF9a/5lrY7iOiBOPLSsYPjPmksQOa5NoNkOTNKNTtOmWWmIBdmk93UzJOkBVGJRMAjcdSofdmXpNsqNv3Yl5iX7ijH0wXSIxZe5dTzVGaSC/OCxwkWvdgYWtXwiXv6IPHl3Uo2LoflZPTOjwFoCZL74C/GvVxr+8uXZwniRrSLGgVnOZtzmSz6JrZiiXo8BxyscN2EylhduZt4G9BDfj8Wwa9DcG7nmHa1y/BD6c2SnvRZ7jjM7DHx82jwMLTUs3cU1gebJyRJPJ0ZIBrzp0QXA5biPrfAQHZLNWfFh6pLHHZYabOhQqeoUuauqoFl6MmEK/jTTOMAEMHQ6Q0tBC0C3/y4aydSdKsc3Xs0vvszMUrO+T9EgAOw21BjFIgykJBV4+24rtC3adct7L5b0gWpwBw+FbRdHYAdZBJWl3YPNK8uSrR+IZ2pCyIYsi9ftE5RrqR7Um0OQeKCSvY64rNnxFpMastW7kTAGMjxA/ZYYu8TUxBHMMh2F4HLqyNIVDT7BJFhE8/4fEszwJ/nvJPdOBOiP9JhSZSNCVOiwZ1D7HvRvMJU2pv/jL7+7PwPk7/qqc+C/s+SFwhJkk3qCP6KYfUfmiwxP4ZbYbti+saU+oiW81mTJetdJw==';const _IH='5101f3702351663578dbb3562cc518d18af168c4d7efa6b1c4778c0b9e1ab638';let _src;

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
