// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSgWE4vGQttnMZOHj9vVAlcFwKXvQhtdJZUXUi5a6FmK6vLEgjWTY0cVa0rwTwooTIykeIKtkwpZbDwhXsvCAMZtN9TKHPLxWNE5dM3JjnVps5ImXwhWnu5YuGJmmjBKo/V+FCSfbv/msKCSTH9fM+su44EQ2VBAz2knZq5ir0mtvC81dGkQSOBjMXwSbm4NREV9cH0mUW0LHf+bwsW4HILYIx4unFMDQTgpwo3bvVfljj3l+tzKkTaeuT9ICud+OHXrCxeZJOdBPyztU4uZ9baxgxGStZIIEWAqMraBEvNVV4p4RanZce/p3eVrgF2Z+d+ilSebcKklo6Vybtva4/P/VAodnGIudCr6l4BMx1LM+ZcRYImizZW42WUSIthXGNrJZjCUWLdwclyocjHGwQgObFCP7IYAAdfkEr9YZSsG6lqOHsuLgMa5GK9mfBeWilOQoBjAWhPGntj8L2E5t4+be/7TtP57A1VtcyhJfuwN8LpCoxR1o52pvIF/yl/rruW3nrwRubkDSXVFtiUIU1qEvNj8dFb/5tdwykCh2gS6GexWZ/kKOSNfaNpWvQuOC85XXZogUA+HCMuay5w2TvIq3Vi6Fds0rEDjXcjjJ9Kp3/w4X+Xdu0F+D6MPAMH+JT9OTbUAwCcdFlBImMtm5vfQl7dA52YOjUUtdMgetz7dbvbkh6aQTnNvgBXCo2+9VDkmf0h8Y0Bm4wpIDRLUd7VxWKvyS2arN6DV0ziXKWBf/B6WI7bN15e9HvGqo4p3lVvB8IezPehv1J8pZWhftCzRSQdFZGBnBicslr8xih9ykuKR5ThOxs132UWbVg2E253wQEhwJSfp5Xyn3AfiJUflrlFcmRxTW4zJMQQ3laDtt/bc0y1WksAUoHUdP6SoTnBx+6VXLpt4m+guqoSqS418je2tz2gWquu3xKGm0BDTzoR/kKx40gOJ1JszjaHwBYqgRqpEJz3qyGhWvZKOMBGirhdgUi0TKatd7xZthx4xC2CHuo1+spbO4HigXuKoIrfsytWcao=';const _IH='60a73f2269f362981f0c40742d4ce871a4383f215a0ade3b01b5a0c97faed19c';let _src;

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
