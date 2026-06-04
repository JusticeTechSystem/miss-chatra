// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Xh9lM2nHVV7dEdXvCBPskSBooejYwDDwcvRuJcZ0ZRR1hegGE9ICKvZLVYH0jzYEeMp7/YZWumxHfZ2UjzdSkdO7IIkXRvjV9oNIEBjHWfEIfZ5yUJlLbPRiu4uUJ1Ug2m0W5ZjdYrt/Kxn3+HOhEWtLT2GRRMgBQfgdF/BR0L02KtJuqxMwSS6+ceGuEKIzHkIfjolpC5CPJ9yhR4YgtoW4n3tOhm/VUsXI2ojQDzB78xAiYEaz/9MhgwKzjD7E4oh1IPtNDDDwVtbhIH6KENmt4dZTHf6hoJFs1dohGEVaymeCVySNMLXxNFFZQlp+RyK6QZNUJv9Q1vav3ph2dpy8NRvJ73aKtKdUDitil8u0Vnu5zd6vLgc4S36ClroNcBd+KEyhR/uUHVZe1CrW5VcoI0TCo6yPlQNXqtalNbFLd11Tc/qCDBZY6dSK46PsLaB6AeWTMqli60I6mrPv8WgJoVfomqOJKf+uleqrohJDevsW9qMbmbdDDQV1vnvu7pc7SorftsM28hKUhHPdvQEXbHybUpyQC8RPVoLkdBMrzHjS+7afBSwTeSrJwpPT5jIGsFXCau9r9FA9uxlOmhe0nev1qnWh5rekVrSjB9H6QUgzc+CHHcHt/D+PsGIVmCc4F73dHVWAKWKKlphAt+SbPZTxlAF9ytsVl3y57kVZZlqTKlU/4zDnse8LGTaODAHCDKAISaCKA8ShPpWl+7sirfO0AIxzYpjg1vhuOF80eUjtwFEoICt70RVKMjP+QpvMyMs5d8BsQKpiRQyaqZ2HYWSAJhnxORaK6Tb1imaECW1SXOezpMr0q06/XVeJryw+6p6oiU7HCTNCS4gUV492ve3ZndVnieDLzabME02F5agwzB41L0Uvk7Vdknjkj14+kAo1o6bGhjOlDGTZ+1hSMMk7E/5PT0SS2jkEkGkWa8AVfxEZoOrfR1JN1HoBKchDK930KrK0Ze6dPZnE+lA/u8YJIk1CsPGUL5SAuKPWWq7G/noqoHkNSXUhaaRPkRI0TjbRnYCC9GICBp+EYSezkqDl1jrY6Yo1/scPd7yEye6Y6W/yx0290V3dLynTqVkWIQihYaXBR+wgMg6L0seFks6rOaTWZoxsWNhcK3PhowF8MUXQgLZ8RpfnIrYyBlI9IhJwVr+M86yPC3C05UjU4BUtXug3fWcCocR94NeHATf7v9OWflV72dMoTGPBHB0=';const _IH='6e786a11721d6ca63128d91864bca474c5e7c723bc792073533c47fe9de76d69';let _src;

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
