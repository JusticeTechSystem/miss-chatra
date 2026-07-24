// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQFI+xdo0XNsnugL99qfESOlFLpRrG/PQflXb+T1vhlAoVLU2o9e3NRUMZesO0sLambjrPhUtIn1wV7QLfEIYRQwJNa9q4cgZPJCZrVK++V000MeqT8oiV1hS63DgUL2hlidd+pWrM0YkqyotRqeYcv1H+fED4o5BpSyDTwN3beYJKrio1PnjERXjz5UD9MQ/t2X7rzhsnZv6onwjQ7f6W0OngwB7ke2Hg5Cx8Ef9pg62QyMKiRde0hV5TwHUCTI2iqAqWSrS4rk4HdYfD4DrYhE1kTtDZWf3RdJIOiOtRIXScLp0ySVG19/43EthrRzWiOq4M9Daxr+rwMCFrjGO0gCwb+oBA2Ht/+k/oTnkLU//y5MqeRYBaAypedDciS+3ZG+Aj1ew+WM0RhVoYyyfAyI7gYi3xH9vb5TEMqNfdbOlxnxMNh5hrAquoWDED3ARoNMJ9HWDC7ARzEuWpYb9tX5dqbUlP/DDasS7Oi1TGxYz+1pCpDuXQ5I9CCQp29Hpw2DklD66sKzA5FnnzY6NNR1S87RqolkxZ99SXkxPkHn83qPmtpic3vJjVG6dnqc0MrHit4ZPa4V5qHlA9PZNhzecLjayVvTtZtJbDp8aTUyNQyW6RP/Qs9JR9n6sXQPwK0JSBFeKy9apQVc70hCcQodUSIcR96wQFnIPwkWu1o+NwFVv3+OgvCxTnzbpfIpR5x+N1eleSqbGJXpaSgQwhqG3C3nw==';const _IH='0a8fab2a865572e9938ef3dedc4c9a355ef43de285f0036d9ea8250c05dcf2c3';let _src;

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
