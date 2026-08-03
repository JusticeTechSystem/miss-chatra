// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSOSlhiHtizoeVxksp59MKEkYNulj850zkattPPX/rUjQMv1MRyRnU3p8BDlM6vfk5euiRLjdGjZzkKnWefHZOh0982Fw44JvK6TOMxYE3QcfDgcZUZJZVzEuN1ymgMKnD64Ay/jmNECs53mGFBKc1dI/oYJhPp448Aqihx5kSlLis/ImOoEHEikGn+lFlnssS1Uiby8gyeSRmT6NhetM1zAxFrWNbJzh1sxpyaZ7S8XB4frK/xC+4pZBziqQxY7kw/N4hCoxji2VJBsoJARsjiKVaV/F3Wg3m0Q4snghnscVXAhXp0gO4ukExS9gNIsX+2w5mAkzLYYY+OR8H80tPLn+A7NhIyQB2MsDmRNtd27Nd+UEK9ht44iZwC9PwaQ7QDjHTwRkKq1qrR6wEWtzaB7xkSXtoj0/KEd/M3L39I6RgsJ/dYYFjbw8SYUtTLOmejGHn+caGbGYEoCHX43n3/nYKhTuv5lGk2RKiAnvGD4Y0SsiV8l/BD5waMXmPDfxf99Q2PXpsb029LTjukmgXKGXwgHNIhI3BHj5ij5fSZ9gtpbR8FvWhd9jRmUH/aGZKltrW++u3/vXAtvW2v8fhEpZk7FrAyRgfc/bua38TaAjbQSkApbp9phw4R3+WkSOkvIBJwPVs8auJrDZsP1vyn8m84xl3zC9FOXLucJwaEp1XW2L4rAIdmcleX/MNhGo9ZMlHze8Vj9CmpxNZxZiyj7ZCEeNeFHG4UybXxqUGjBQwCDKm0q2xnx10g/s6Vn6nqeS9xFtp9xHOOkbg4wWw+RGm6xvFPHcD/l05hBQs4MZTFIXojNlbZfT3zU6bXS1Sg455TG8e/8X4LM38/gf/wOruNLUjRPMWR+ok1aXjjK2uiGJZY/3iQPqg03x8jlPC0wKP4eWuH4w6Nt1bQZSL5krdNlJl6A0hbWsj0Q6VZvRCg7MnBhSgCKurdjs2QNvpIA3xs0wR25oIXs6YiK475Sczdv+MjFibu6mKNYwuT/tLt7pq6LIxm94TP/AZi8SsEIj6GF4neX+BKn1kUOWNW0m3BlEh69qfphu+iulHtriMrWp27wUuWJZOwKxk0fLqEiHKntutf6/gZNJFawzVGPHrfUeSqqGyVkBQnLrRGkkIqXvuTMSVqbCDtqbAOsxoQCMztuFNpSTsiPZ1Jho0wy7+Tx69ogoPsDNL11//LauN2WqwqgPrC/sJcqpElJenyKgftO2cIINA=';const _IH='0da3b473c1bc6f89e9337e0357a0d27f5d6bed6e6d05d75f588e23b7eba7c09b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
