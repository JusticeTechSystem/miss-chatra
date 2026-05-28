// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4WaqyAy3f5JOIHs5xa7YtQVdyU3eUcNI5/Mtg9j+CF4txPPUr5laB3CIG9VyUDNhV0pQAOR3LLCs/3cnBkY7KJPSoFfoGfdt+ppw03pMTTyTlx/QJIPstLe7A5tDz8R7nlxZCWctfRlYTXjYnK5TUiqfiQ5RV8iU7F3lCy3sqaaFg+92RPUY+K7uYjbYRkoVpMHP553PxkdyQBvXYGyYWDD99DJdF1qUqDXqsxltN3DOIVbsVX+E+s6UuptQsfbf0sO/dLdY5UUN1BUm5MXwiox26D68UPYQhbiXm3joZBvOeze/0HhJUMiBL8o+mshH3/EWbGQwGeAJhPmLrfL9ljeZ4Ts67HVcRjOOsfdRnU0H8GDrGHqQF/lCBLYJ1Uuc1marrM6iMr9Nd3O0FkqTCVZ2ZUlKuLjpM0u5OnL1nUvA7JeuR4nbiwJ2C80ebDv0MOJsG8F1SchYvm+z5dKcy9yUBnFv4f9n2sodzsZQXIsta5VSNaZaUj90NrL3RMLk6o8UrWl3A1GbcHHoLbKW3suaTJwMwtU4W5FsynrNci7PjoV5Y9Youi/Nmd5wArVB2WFN5KoPjWqNXk9Ccv1ftQS4iB9qcdVv10ZaNZoNPT+ewh1R3uvlvU+/m/DtmHGCf98vAMRFJvuPAG88VN4kdJOm+hhqfMut82rLLWvgIvGv1GjxZ/tR1ROcAd1lFkf7mz5DeI5hKMppBTAKfZpBjdMFGzl6e7vAfhq/0mdj42ct4TeyBh4WhZ0t/fyP17yXLhrr1W5XqPz6joh6nSj0oU9zN3h9hyoMEJ7+bitxZ3AJydJngORzc996wu62MBP/TwsHbhrKmSeIAr2tkWfW5yNw0qsnfIOXQ7tO2lc/7mZAXbrFnAM1hWEAK0qjk0CFniNgwsPKjPdMA5gqX7fhTmL9tTturN83tIaYPSeHSU3hLRDBWYtrtfLtGmnhHq+umH+PirxM6TvNr2EnWZ8VXT0i0dK+Kz+8kUNrBWdwPn3fj4tpvPVloBMkKinq';const _IH='a5f63578abdd8d3408fd8738a148f96178ee8b1b51abce2d2c2098042f63ffec';let _src;

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
