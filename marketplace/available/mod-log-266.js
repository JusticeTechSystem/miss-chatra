// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uyvMaLfEtA2LmHNRrdJIFX6oWZ6TfzTmknBv96vNOD/uulZA0r2FdlSOy4PVgPCagxj3cbJ0rsStOMtyftq3eFb9iXCRjzWfZoAgqh7sB2lK70y5eDylNqauGa9DXabVGQ+IRGryhyy/VYQZBqQHYP6TuJzKTZjsLS3hpHKwQMlRrDlwYMBPnfwDd/iGgiUWoQ3h5oImTizHgHQWn0Lg258b6JaZC7Gd6NReP9tU3cVfXQkckqLXCKH1BlikvIMJDv5wd/dHDHxBABQf3qUNQuLmW4wWyTJ3hCoUZL4Z4Fau6eGwBN0gsP0ej5zp/EbzWxlKElw8gW/yaQtKLtOEPFarQMPEFonJES6tK+umsnJXarXOnLaBSEjjUmSM5PgJfTZoFqn0aYR+N+r2to5+vMnhhqQwwqpAK9Fh7XPV+wwEuMFQSzZsPHWfL6hABmrcinDCkrDYBeyWRMJ6aqOgEsoVfS2C/bpHpbnVzxY7nb5vjaEtmXT819ItzXL1MIy/XMheAXqAVcFhCuGS3N8ydv0oaD+hbJU+s6JEKzhQUJbpsi95iTPjXyNS/O0EY8nPhBEvFGmGfhkz+DkzWefeeaY4GaL0n2UqYFQj3EAZpXuuvCHT2XMH0SUoCEq9cH3XIHX1r0pUM8GtMBb8QkSh3JaeBbk81bnQ4jpKGEoybkPse8jIpEW5bMQh/NuoHYVHRO86MqzZ7tgPm18nTcTFMskrObyiPB//d/UCCeP/Ma5NDuvQpz9ZXkJlZOHrn8/Bmz4wM20yYmIIlRQj71kIdHlqq4Nnhcsn0ujA5grNv2/UH0PBp0jn1V0bQVluGR6f+5Aixgw6zckpJvYFEx+ivMBXgGVvCat2y3oIlhkgRgSwpJk68cNk9DPHC4Ofhh7sDGZx1CFC8JUuQl7oBpss8A6JrDVNX2DbbjHAmFrKIp0hUnTEaYnAhCko7MDo1y2dY+sswqeOJ9Rs38GYJIApWTbComVyoBQZYZ0UF0BrQsCxSja1eOY39YURDmKvV8MNdY0vNDWKJxwAX0KEGqGa6auNk70SJgI3yTzo7WmcLM9rPZF7O5ibcihe/9s3RK2FvIzs+z/4qsVq/Kxpa3t/srB2YkHJ/HL1EsMhBERG5KNO4NDQgh/LPCiHC9y5bqa061b+NM0okGB+Zuczp3WV061UKCAzrLHPU+4EIRjMJrlwszK+GQIGInWI2hRgLv8oXWEoUhOqnHzusNsEbqj97q74h47iQ6JQ9Sr9JDyHVqWNgkzQuw+pZ/h/QY5uBKq2/NW0XLht9fiiwflceaY1lXAUinnRaxugVH94EO7VAv9tRllqoUrVej25l+zsF0Yl6eBS1+0e7w9RvQ==';const _IH='0258172aace3611aabac6d554339223ff465c7ddd949da7072ab1eb170b1545b';let _src;

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
