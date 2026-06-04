// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qJG8HOn6Nszf0JQb3V0DkfN2k2Ff55KLH6AZaw2wy2ZQ1dnZy6ZDORritoYi4wATZt0EDSkjrVQEE/k9vyk+sERYI2MKOQN32ZXelJA8wSqYR8OuGppVoi/s4hC6Roe0cMGvw80r22C6W0VvFttlAackkOh7lQNm2q0maAy80bzpLo3iWRKjvcZVv9b9ZObaphzTEpD7JjB5tLFYnVHcckJJxG1W1XUotBXXG/j7f3nFu4wynu1LIzMcVQahqlmpkXfrTPUrbYJQWxI24Hr/jXI6qscQbQLqt/kDbqA3xeARB0SjjyS5U1Ia2fkzpS6JreevsuTwxe9yawRkxhdlNY4zt3VKtd3NndSC/FujIET04c+spPXkTomu6aq8ZWSJmqP+DgZInX4fP9Iws33JPKqiCz7vC0vi7fKEIQBj18TsQ8KCdHs9R6CPpQ7zVROsb2FyEEpq2HHiT5VZIB+Ra5honW1VesD1qUe9agus923aJxf1fJM+KDEq9ccCDzRk+wBQTpthBLa+f4VtHZ+HU9oFX8YpjBADQNJPjtjzz9uNodFPjYGHZc0vCoXdjDHK8Gg3ghrzOtEjUBC+MYdim2fEId5Jh6VqWwRdgcpV0xbrAMFS9rhuHyB2N7kS8rEzzMkSCE7AJ09DHxDHJmHhuKe04+bqnY5b0rIh9fI+ZG5Dz93+6vOFpU7nwEe5m1Nkx26p4p6Xq0lh7o5TtESC/wTijELRosIzSglvugndra4pPFPlT5VSiZsstSAlGXmt9uQLwk3mendbgOK63Zl6xaQs8iox4jJNTEIVp8o6ipYoLWFE9srwlZNkDthUdW0M7gH0mRDy3gRyb/IO1Vhu4M5Hr/aUAPDRttll1yzN3/h+yvEG3uSPmxLDhHU50jKnz0w5hpSCW82a5tkayTC207JCgtPvHAQ9V2FZ5Vf3jQSyaM9G7WIyHb/8/sQdSLeqk4H9NpY4dlaDlONTWRz02lMzXa5II/BYNGEvYB6eseDIpriFodmZ3RbjLh7KwP9C20fpV2+YGud5A8g/sDfBzN2yS6/HQlGxlg8+1oWagpLUMJj+eycwCX4j061QbQ0K5VurLF08rV6byGyEfVbH/cAr7XLaBw32O//cyDsgptYQnoqT9SrgN1yQAlk8CFn/PozanEzT6MtKQ1gdAfT97o2UdinCERIPqInB75U3pODqTtsw+i/1';const _IH='fe7a48f65345cb1b84dbab55553bf14bcb72e54dafc6d9dbad072adee987eeb1';let _src;

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
