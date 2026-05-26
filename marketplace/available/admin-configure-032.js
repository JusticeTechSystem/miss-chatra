// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vZ78lHPGFXKrn2Rtl1BBBU7GDDoKRVAQfPKA5sfRdKmpRpWwKGnFiNCT12cWvARHwg493bItxBJ0IEytSnUcuMGWQTd4e9ZR38EmxIIbIP3+0LFOXrGHxcH2jwQbOh2w+H1zPZ+lwlL+pGIXuqSQsMKZJQVil5usNVQ2wHE3e/MQZy37G+d69oHx4VHIfwuPfKDS/hbz+IxaxyOPRQlRksEh2w1jvrGjpEbUGnERdXtUADsNQqh2ZSIJZmxqMFIq+szYeMyzfYB09M4arZgO8tPFVlUZKBx5VCD7jlSsGgws55h9RnV93ehFXTB8qkBMGrAJzv76RQE2rdd37Re+VQmLcvtnPZaNZF6znJFNrasby0FLPAX8Jw4c4GyW06Osu1ohymNu88wX8AEiXOFv+cPajD1VlVUOJlp6pg6Nb9xULy4FBUC65IrcVg++gJx3F8RqYS0AkjNzE1mBHbjCKvK+JINdJ6gq3cHHgqYs1bvl5tdbOeYx21mAsBZp+6TRULxM1eUwZm3Pgz9IrwbwzT45ZVZ1gfG0twqPi85zvC/EZvFmy3eWp6NZWJu9ZSNh5F/IuYvNvtKe+IbAucEhu0EcUBBRV9I1m84Lj4p7DQYavQom9bbU2nELA7te4Xv1a2ag621xiUztKdZfYAUMD7KXUT4z/MFZF5c6NHRsIThf6XukHEsAe58E59CdA+NQ+xV6Itfhy+XDDdk60pYsfrN7iuyw88vK7bhJUsWc6nRJRGaHOYIMQQfYyetaBpWYovzHTdaogsZWG+0wqOiJC5fZF8sE1xyEn4FSAa3ScXIzKqTIg5OYDGbTlXtpzXZ+uwr2Y/O2cwHwWqtsw1S+s4w7Q9CEgUWSYex2z0FyXkCefgAKCuJIa8DNsypdslQPLvTmtyOW0rom2GJh9grrX+QU8OCYLRQQ+TvO3n1QyUqEn9UGZ7pSi5VjR3pJyX04Mkz8UvqVYYWbgGVuqpaE8pC+tSKLW57V9w7dA5/Nat0ekwlr/ocZk8UwQ0XsOipojh0EDXSGcnuUkTbj0om1CHfB';const _IH='2df94857544d7b6d03aa915470e7d5bb6301edffe595713401a23081dc1e8f8f';let _src;

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
