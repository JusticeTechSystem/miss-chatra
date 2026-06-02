// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ihtKCT+5fZ9V4U9eNat+pEn4B0uOFca2oU9pVrO7ZRr+W2XzD1YBvc9YJat3MlhKIYDUegBTceEM4ISh/S5Z719dRYigGOswi3huW7EEWe9nVaViDBiWzc2I2enTylgFLGD0yqyD+LOp1NvAt+IQl2R4K+i0JiiJ26bFlDEPDdDfOOkuwr/cfCn6WDht1NPncgX1StpNEHXZtmYVKEdQofSFuy00P2fMhEWWFqoL4hoZRvd2lhZa2+6Yx9M7doqUPImRROu7vBeHkByhqTGDoV3Lp5MUcrAdS3A+qBIBxMizJWjfv1Ql8ChiK4YeRMLBB8pJxGUfMn52ZpdfxlgpzgF999qVlO7cENqiWEUrDel+IkeDdKp6/WDvGsoUc24tQQSxnaOkGdfI5+n2AoConqHN17PyDepfMpPWtHj9ORMUJMGbwnFHV0E6IyX76ejI7pYcwg1iXvc3IND+BclXjY/Y7FedK702u5Kc0NXzYZzvzHyCLLwGF45G1pbn5GOBkQXumE1ANkusOkYBhHupfywnNyIj5yae1I5cBH/nne9VvfIBs/LL6Bpv4UPVC/xXqqAHh+ZJ60bP14/cRKDntbad2cS3GpjYiydt0i2QfFQ4K/GEvB1w5eX4RpBkpK1OixLy3YWukPVR/2N8ageKn6P50Lk/ShiaLwZK4lCl+0hcoZwqLGZMg37Cvuzu8UUMoo69EoeSHjT2ICQ/Awz/B/rWfoQLFLzFAf1IFs06SaqR96c7KUJtXuMtbwu0v7LyWY5Ue1heQ+2A4GJ32EUPply2giaAqh7aN7ATZw0SBTa6KP3cebh0DvsuYGSrgWdigrKR7RDPVNqd/WNVWwtr1ijPKGr0thVaCG/+GEl7sBIUZ+3H2BMl0hOzPnJtnoOQYdFOmIjX9iSoKx0/qqWO4SpUtCWp3sO6+T6LQakLU8Egh/Gb/wMtzrDkyDZbJKQN/vhFaMQYbBmn+2IpB7wnQQ00LwMHzmqQnMYUjA8znyopoATCEbGzx2aMjYuwnhrHOphDW2TYRpn2ops0dz2ZOWHVsHqGBEmLkrF1wn3NHq/LFV4qwIdqhIsmhaxL+z9X5gMaXBQfdERTtIATMyOAXaIC5o45kZkRoQfoG8QEpT21Yvz92V/RxtVJE5t+8aYpU/cjAXVE/qZYEYOtIV/swUSH0he9lfagUxlpl0DhwmO3FmH6y7Qg9dICJUGWAL0sCM3AjROHSrOwVjECGqIx7YY1h5mJxfJuYtejfZucIW77Nf7ptQznnwahCWb7BDTXIHRVuy0MgSkZnxmXOPcbvmCYAzCRTKU+fUAtC+hJ+4WQ4ofB6UjVYNGEZ403s7mGUsfG/ziOYfLNd1Q+UKgBU9Nd0wujOJwTR1BtVmlCxcrD3iaGY1Hw+QMoLoDG8qLGYI63nU30breOQYe2';const _IH='c5ce9055cd58b4bbf0bd0db592c4b5003f0b58456ae6169b95a8c51f9e703e9c';let _src;

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
