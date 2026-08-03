// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:01 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSxC4tMBjiJrLif+MFeVOuRqKAVu9glluy6bFZ/hOgxQwMERAEWTiWFu90sINcDxOhh0UZ/ohNNUrkU1lLU1eRHKCqdA04DP7DmEQhPlUdPQSAzGZFIblrAdlR4c02w+xSLHSu/Ukjeekh6rTwbaPy9wsQIFyX0odYJmgWX1C2TAYwhwafuez9Uy4TAs0nvhZKkotpobp07UY7RoHP1G9t9qoM8UpR3Yfwhv1LI1Fd7PNLlANbK2kRW/i92p+d6hHNyukYdJcpGCM/BMiukOuy7wEZYTinxZ6LuLlhH1ieueDF0fZXrPULxmvazju4eY+hgVTRTkKcYRZbq4jRKOYYl+sc7TA0bqP0p7/VdwdrUZn1ltxoVeQoRexIfHdaG28RdqKL5pWwrEt4MrVjOArgsnAnwLGpyDEUdTXe5g0BZ7c1qDPDZddU7yPUDZUEWMs2eG9RBN2f7oLDnfolsEeT7WepVAjQgiZv9BRzAQvu5bD7syTVy7TO4g5tbGbbr/7k6Hpga74wrVX1YmSL2JWB9e2t5qUYILnsueaWw3Ln8yT6llqmD/ihRVnLg9svjg6uJ8v4nKvq0alFerqlMFy2Mr7l/DpBBs8jHaviSeWNIYD9PllfhI/w31uCBfjKD+E+IJyzRb69Nc2M5CNNh8+sQ/NDTP37vR0T0CCRnaCy0VVIB3ZJ1jNQ0IpjxOyEgcJqBLIqoMV1gSk+vRUdUtzNndZvjzPXeBiWU0F88BjSLBzbMWNNazFglLf0AXmt2SksVOuUOtX7l/30mUpzHtL41dthXEnzNWE+pozunnWpxCijJPEy/UM/wz1iO7RqdJchPGeTIREYzYqEI5+pIEPV6fWTtQfbbfwclFF87fKzTRHWK8rCrxWGrtWsL5FN44g+PdbTvr2QMJ/T0SQ6AhAXws0ovoCuvqArHZ0aRckyzYJVNIHv/Z4+DquMINHkQqZ3GQ4gYlhHwAtXN3EEk+0MBGMaWLIUOqWg5jwtrsujPfqwBabKBeKSVrpD0H7U0NOssGertEqMS3UXboPUhFFY4wjYoTu+jSt4Y1DjMIwI1cfuGZk0Tg4NEucsdWcUOCfYey3RXlMSdwufq9xYX/G2RwB3r0laRF9/oqvipAFVkqimQhAXcTQQzN9Yy/6N0pA7Tbr2Yds8keqjZtYnbAGVrED2S6gbMI2WwSUEwZsx7BRDxNWbT20xHy2FJlkD9rcCFBvHzsourQ72S+IMnhVQGrAdYUsjMG4z7AuK1SnPSfnQdyELCH6jnw8Vnk3kZRQUanvKbqmqGFpg5bu0tz+FPLxfuHUwQNPU8rLzXZ9AJg6XFiZvolwp+DkQByjeoothj4KP49Nns0WPyZYZjWqp7wIxefLk9aiOtBuwJTKMRrqU5Z7mBs5LTUDBH5+uNVgfQ+pWtHKJTGeWolHXiTqnTUGlx8AdsQTfouyN+de4/YA6g/1qqdm/8bhSxY73aErKzVYPConMG2KpNUMt0MdS5driqzmPtbC5gN9n7n4ZT4ZkETM5fe9CMYm0FBz4OY4Fid3soaYcVcuvWAr2m/37n4WjC+J+InQzAeCys';const _IH='f3c4a870ceb757a54eaa42e6794a15df29dcfd9c2e6ae9c530e2a9b39ff42f96';let _src;

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
