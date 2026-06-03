// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='K7ko+I8yZ9HP6ojIAXcCt5DZwG0CFI9RRnYW2dW52p9LwcdD8x3+FEFXJ9K7IGhJRajD63nDO5U48TSNV963XDSVSi+4PDcWTvSl7dt0ODEyDxoracchROoOXo4157QFa6FsejK1Vj/foHWxoJQnLvujROEkMM3ydcRpeKcgqP1pZr2mRbX8pRJa2xY/P91kIxkZXFQ3R9zEVslZym4F8Lf8QLj1k1vSad1fVoqJAMUj+H1E5BG16R96dmL3/qOi8QXdWmpvyNjC+oDDwYyWvAf169nSMY8lmZY+fhAA9BvjyKOb407x0cK7LaTz/3hYqg+B3oFiWAP4k+svR61ntVoMZ9fhDjU6TyF8ecGymoJTi3qR0QcttppvNaf8r+0e26GgqwYP7JhUPjdoezIwppKEl6G/Elqj/tKzP5h8N7bNTUVKGdHYhGU06qvHZpwlh2lU8JQmfbJXLN1oW9fCt4BOuWx+GL+6vGrU5MS2PJX9aemmQmnc/eJh6OLbdqyVQXyi0nkwFvbhcG1h2+48DF480QT1mMiGSQf1VZ7ELz3jKi5bLZdgqv6PZp7hOFSzNgv/oH8TGZieFgijUrxIqSDocAxe9UiYdFKW/mL7QVYyR7jfH1zSljA91jsK5NjCTTif7og2CLbWLS+VUG8HdEyY0X8syR12SiEFcdvbF8+CyyIlMoH2Vz6jP6WDgojVuCITw0I9HJAfUzEq/daOKGZxJBKs/qll/20Q9OkCgG/RjW7uPI6WDWnN8aI+VpVfxSGZ7lmPZTdYVT+PdKB44+rHYTS1KgfsTRZfwbMg1jN6T0rsXkT7l/4MQyQO+zFisasODpz/N7cVOYLq65z5t7dsJMrzVgrRabrYDoVlNWgPEHy2RNdRs1wHXTmR7T/qdNugSCCN1GQm6JRsfvpINC2eo+Aa8cva+DQV4ZL3TknuhVwfk6/PKNiEgnrU6Bhk+PVUtjdqgDeWjo1eAS3uG53yCbaOsHUPAxtb0sz/UkcHnO+5VhJcwdxOX2OBbkytpMCi7YJUsgtJhr+wi9Uv/rPmNZophh0qTlJBEl04qgOTlqZ36adaCHlaQNKdTj/eXgVVW5/5XDLeFoYLw5e0N1vexo86Ti9kXzCjFvT7KVKaa1ZXgohbOOmuZbN3PmJNUlYKZI4rVF9kt6Xc8w4IFsE8wYWUWpjd2QOPJW+F+yv9dt2Pj/bkjxpI3UK9ytzYhP8A20qulxKZUj+521Yt/uFk3bSrn3ADu7azBhXGfQvACmM2pBL7thCGU/F4ztDkyNUWHxe62S6CKlG3JX6W4SBkRyZaz2DI3ls0tXOPhJoGUwzzoFNMCUwGYgG3qW5GwUOHDP+tWUTyllHN9/VkMyDJTwWzv+JFfioUtI1zrDzA+Y1zcsZe9ybr7O0WyG7/UY8=';const _IH='ba10d8e8c376df95e954674acf9edecd150d35dbe3e231d59fc4de7ee9ff5fe9';let _src;

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
