// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RFIlxCtf3vaZjQNBsjSLFg1QN7vfdifwmNDt0/Ne+Q//phMm5a8/2m8Y+GizxtYUYcPy1lOqhkwxDazZeCIr+Bvi2WRQHk114DNlrnB8SWzny7UgKdaiR0HP5IWj1N9p5TOKo0yXfMjHR3mMHE4pLJ8dbNSuLDMpLKGjZc5M6eXUV7sV8IfSuKcgACwsrqrn/oz6q3HBAIQVdMboAvdE6YUcwCj1Ef9CHEz7sfZsChXaWFKS7ggu98BXTZmBnPBZzowm9ln7724fRa7E/PM9BZDebAb9KwTXokRhn3E+QTQFyJkaH3VNYPNfv4EQgxsS3ePwC0lGEHGLd2HES6ljCr85RRBQ32uf7Uvi3ZdW89jtbVV4z6tF27fZEaGn+hBWCVMf1jyjiH37IaXQGrrJ9SFGxYdvnFMbVySXzLrBzrtZC1jqtT/nMdNkAsB+zEfYysgBqQoimf2SioJERiNn6YaTzMCYe+tp3v2rzABaF+yzxXOKOqsZRHgnN7DyIYs8iAPr0e/72uk9w6nLE/+u2maolwsSSKYt3w00dW7uzvjQIVjHKD/dtW28WoPrISaAp+0hgJyGDhxBi7OsqxDxnNKLersN8NyLZvQ7vN5lq14RirytZUPE+oGerguaJHw3/0o/3lR8dNwnbuOcmeFcAC0PSGx1LVfW1vtbFq4TPWi2xk2W3a3xy/xR2kQS9ut4wl+zyMWaGKmJfMmU9Xqejlnci0goCl5s2FKnhesecrYe7Mm1zO8UJrW2GzlWGGUw5NgnzFRgCDvmwc8ZeYqdrhX8/xpwePvpQUPlLfXgHy9ITute+yovkGBaQYeWNIew8+/o+6JbKuAsXvSRW4gPxJ4/fubqnNa/XivioLqV4sPBa2PSLBMnI4Y1TS/HVAFHNikF+kXd5okx6bKQjEghUNIAhAoMdaLAnjvtu6olKZ///YplJHY3Xfb050p61Z+dRHcHtGRRjjb6/p/K5B+3zeuo7GbRGQUFQdpfJEle1XZKeInuKu5o4djm';const _IH='f28ce99417eac079fcb4377f7303e0bff25aec0b48d917664bc58cab53ebcb58';let _src;

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
