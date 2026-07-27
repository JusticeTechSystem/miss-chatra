// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:12 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTpb2kMvzTOWQ4tqmh2BcWaYLzweD0gF2zjJrya4DE2bXvhO2VQoFmdEBhuxWMEUTULOu1x3oURnU69qSxnhGnUoI7TLTJW2v7nsASlpZlfye0zewpnniQvPLJ18QLXmYljA2XK4VXLHrmZWH88AuL3nUAE4wzw778kJkIMUBM60MhxW6sFfbuWcKz0HA/FMfLXixOVFuzQ7UnDithYWaA2fb7XKSth4bFBFlPVMqs064s2EqX0G1DzqSQoa9R5rd9FjbjgtBqHVcNMPefc9lcD/zwT+qt0O2SaehjAm+WafPF+hSUHMz4fT0s+3uQBa1xVcfHNANoGumJRjirq1fXY2gPsj+M11wGj5mo5OdYV55tOZ2QpEXP+nSvRXuaSKWpBir/DWuxQzEbRKFEj2xic9IwzxUWMG3n+3VYg3XegVoGAqRaKpqDSVYvjkEo4oeSF/2BD2Bbn/WCNi48O8eR19UT//CwJR7L32QBEG+iCXINSYzGkw3zu0boPNdONZYM0noKB8Jh059jYfd5sIDIpAKU3znAToUjiotWMq8FKd3DOP5pUDl5EzOp5fsSLxUpTgOVt4h+gpcdx4lW0eT5ofTdAFZjcnqWRHT1jmeHoizg1FtNqrboCipVALEu4WPsu49mRjIQawLl3AuErOXcE0C/8bQO+AVfr994EeJzyI7GM7Fxufy2YDNlMGnqAKSl5SiSUe7hg7zZ16xyglBl5IUNEF6mVCJONSbU9ffz4lu6exg1vlFJvjKdajextW3vvRH0RzaWYi/c7Mj9JqhIeI6kK5/qpKlPHsgJZyBhbfZHPK/gYNl8rbPZNdKW8bey7+fXB0/81Uwuk99IXC9zf32Ua/gxRnmqRs3XXnSIbKdfDeFZ/Y3aYrP3f9j7HY3zoy4wjRJlCn6OcNNb/0AGqrz8T1b01hzn/g5TvyVlbag5GBP2X4VvY/Yj5Vs+tY3uHpCqMijSQgqfW1ZfsJ8mvLdaL/Z+5uJXkkRX3kWlJjNt8qiyammUJK0p8uabukvIafLbuJlPvqJsJRIrRUrDKVKCAcKLTAocupzdVvO3rzXb13H0hCi3dUnixDQUBO8g6t2ADcX2SXJFWTWw9uSnmUxavmHbGVq4f9VW2BOm2rOoAGUvs0W8+y6PvwgnFD8zW3CnZzhP0RWHY+ziY8tflXjUB5YucjFmiWah17bF9jDLG5P+EM2//3KbyAK++k5s4CBpKzeJq6gNOOe+bcYu/Bh//mRg3drQiiX8/KbslLkmKQH4XR8mYpHSqPuDSIXrCP7tVZc8HPG43MPwxoJSw70zImekjRQMhGuL1RXHaoC7PWysclE5dHZduGHcjUaffj3cJe1ceQEjihEP1r0/s6CsZkNHPWgexsYXr5SAldUqhJub5RZSC9HjZ8Flomy7esRkoXpeiv1vdDrXbO2uZuBpLjEJ5KWCWAJHFkK7atV+rttJkU4avMR+C7aTay54VEV/AbXkuL/cXqm8Tndq4ue6BNMVh3XymXNVUE2GJ0HWfTLW7r2wFWgVYJMUd60N4UBC4R015D8hY2N4ql3DS5n1cxhBFnY6Ezv9cXDKuf6rKYjvMl7+zrh++wQb7ki4DAD22+fxII1cgSBegaVgvYCiEYozrk+eBTcCmA0++JKOiaNMoosR/SutRVLG+xZ0omakxiHioJWYz87I/2ELQfHYu5cAq4joU2qzfFekUoAT3arAAyPOInz49DUc4U71JGWBpyDIqpKPUmabVJrLm2y1xIrXjkNkL+vXy7ak8Kl7Ls0QMbl8hcDCl45ANtw==';const _IH='0e432dc332c8b2cd4ff65e2439cab4a6c1fd5f38544c64591bf22d8685333c97';let _src;

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
