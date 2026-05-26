// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7dvTockKWYB3vT8+xDSjsLO7OlUVZX71LvUFo0LpkIjLJs8JPKjHcOT+sFWgi/W+ROxeb9e7Ku3aOYpfc7KPLq4/SwFNr/9zbuvfoWel6QVYK4LaHpT+Et4qljwCFhrxISFy6S+1CJZ87bnN2vrhaYARPQW1TiaWKJx+4wcvMdkBjuKTQfP0FO6oJnptOvEhJ16MKmNKkXhD5mOysg3rTpKUYJq5Q97Q5O4xYya4W3J0cqzDtZeiUzDnQd2htGTxU9gbUIrX9HYmGB/9iaWtQY2IDf3VTIkuANM5bj0BGCwgidKXN2yf+jqmY2QFYXqlv+7dknvcxUiJHgh0bUT/g2LuM8MA4BWo03Qbd2pJHDnOd35TJqFLs0RPO+8RpWyEIXy38pTbFqssuiUhQioZZ7mCXI4GdMRnvC8nAOrb5rbyq5fd5S8fytf/h8wuAQkKjxpY7FFOkbLWSwh/8rP3fMjc5HrE4vJ/pZufiKyLobQTYhwm311FokluJgeP02x76kig93CVpbqNt8sPiMVeS6dR/kxBHtG2iDeQhKlHmdyDj79oejovH+5EijTlbQzUHzKythk7Rq0IvFK9PcU1XE0gYxsL4IS/yYHFnvzHXst7/pJ4AweA7oIjRuciwE9L0HSSMyGq5bCyhpNtW76XOea2+3w7lmUYnfUTyExXv2qg0xkM6D6WAEa2KFZt+UieH5Bj/fB9EFQ4KVvDoe2JBkssvsvm7HTX8+xNv2TtJL2aZXHn+wDbA7+IOKq9wL1I76RFGNzczmIj97cP5lUNbpwwDHAEucqcOhdEbDnCJX5u+RNw7hhszEOtB0NlnxQz7086tpN7DSTlA9LI07/JlWMvTUVU7FHuCkMVzSOsWKjJ8GYClLcmWX9m8B6iTxkFLHzkPIL8uSiO6fhA1uVDO8TOhsbEeOOYMHgcE4wN/8Z9ThQpywszLnyb2ACXHvfsFLduIz6A94n3VUt3j2TUEiY7gI6y/KQ9fLU7IhrBEQK2Y0ocd3kFMQKP5x5elo3npuLYKVpIuFGCNTIITd2D6DhDkVzouuygdbqIckNHHozmRLDKnhNk543xgg8VZ3r0RvJ2k5b2bz+qB7lrlMANAZvcIp96sqihMN3wDx7qKL8zk5gSZ0gzrG8g7+mbru3mo/avs42WgsAbiIm/zsyqFafuHMoIdTiGY2DuXaSGI2h2Z0lr7xfAthZQ+IncFaRr7KlueQl4oXWzdvOQL9yPJ2T3gPsHnMWpdwHsRxyI8tk5wqXCmJFLunvnGpPXdU2EV4rQ3vOCz+0+Tz4mW4D/Gg1gkxKqbO5Wip5dPvCSBfTKF+pjkH2aduyUDIEj+tgBvDgJ8BVe0zOtRZlSMshOUpGQbHEuGAUSV4P8D8SqIOsGUTjtoTc6A6lTKlOS7TOOTezkrhMkvQ==';const _IH='baf7fde265ff855c4b74a1e467ad8618533effdbfa776b4ad37713c5f77b0c29';let _src;

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
