// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:45 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0PLGdlAYAwgGge1f3pWXbBqOd0kd07tc274ZSaYO8KWcgioCAxvI7lGFoI/ltvt5JtMfMfq5Ca8Frf0jh8Z5OO4mozRGM7qsOQlmvJeA9y6BhpwzfCWTqqIk/jwwxsItmyVdytvGGn8Xc5c2IjzHQcQh15ylHVZ1QVEWaVPaCVqx2O+UyGKbFZnJ8G7S0ZO5P+IInrpkL/DadnOOlmE5cH7S0Nst48KAvO6ut28BecyE6o81PTmIfb+I0ZFwezzCha40nKh2ZZheH/V3eK1KO47ove7uhIHcwt+qEfIImycpQhK/ZH970M5UZ9Bu6OU31TQx73XVyuSbrUWqvRybCxg585bOsOVp3fBlgYsA/1IuxHjzHCeMbawP6wR93zb6aNTTcfs/3Kb4WuPY8wKqm39q4eIP7dmmAtM44OJl+pGpIpEbCATe+mfk3qIWVXG0uMsILZWkAc2epuEK2SilWgA0iB2xiqvVSS3ZONVx8G/jgI9vZB3v2yN55rjBl8PwV7vDIyj3CWqZiYVnCrdnwInnn6Fgp/EMHesx9ESexkzk43Brt8QmPeXedeywQqa2SstWIJPQ8NJDgjKmtiuiDcIOBChQXmw0EIkrGFaGBPbRTKe80fONCvBJJ73t4+oL2W4buBNU9/B3KOVv2jYKpkXOm+dlcEBOxVYtLvZ+jsdH02t/jeuFR6QtCSBj0AgRUqisdHNNP5SRyCsDnMexTGnJl968TKWrzGgclFJOP6gki+k25AuCkyCt9zC5zGEuUWjBUaiOO20AYJwOchHezhpsZrSRT/Li63moVVN1jyW5p2y15bNFEV0UR9iCcZzlmMa1vF17Hc3qQ7GmSiFvwxRXvE1uZ1zUBuuDeEHVWKLdgfH0XllEO7v68ingDBSZZSqHnDfvxd1SbSR3kUH7gXJctM2sqB64PB/Pdbt1gdCvzndF3TYVfGXIvRHttqxuDXy4ZoaHq4zJIAA+jt4p3AabwZxeYoCH70rJKYW12mXZHyiDWl45foW0cQIn+r0n/Q4sq9m9QMK0G+X9NEmvk77lClpxyz9ZE7J1nkx2LSuxACwqHcNT8mvMTrozEypGaWyBE9TtnHLcFKtop7VpKuJ0RV+XUxaBcPbPH5iglFgXXSr5ty0wsWl3VDg997DPLH49uZltXoLfC6hlDHj2OGA9NcFTKRf/6K9c+m/ncY9zkjNIDzd2fCg2tH9pT/2W2KU5T9ztwHn1KDcWwb+l+g79EI0ExGfG4a0zgPEN6p2f0ZvjadxHC0gSkOQpcasZoOqN57jkAvH6HN5AQHcVJa428AlsPyOw5p0IC7RDId7tBfZT4Rcv3OQYs4OcPXZ2SNK2rgFKMvokNolZ8HDwLlGx2ApSHA2sD2ujtDYoj63jooNGwEtNZFkWkHbjHaEQUkE+FmX17EbHb6e5UoA9iP8lqbdd3JSD/0JFj12t+T1oG7jYUcfRwR4LQAbbNBfSysKLex5RaB9rwJEuBO3rQ2p+e1apshJdckyj4OfU/2qIXxaH1CKr6WQkw9xy1wH+iPDSDnX4y0zJuInn/Omzp4qbUgcRi52W7OSsy27KgNhNjWxuBB6bJ508UwJpaCeM8I3VQ==';const _IH='a210e5c36ae67f10f9bcfc901547996bc01ca8cbc8d9d552999e1df901f08025';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
