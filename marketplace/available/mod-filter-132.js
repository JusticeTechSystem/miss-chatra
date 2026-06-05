// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T/LvWxFcj2lrJ5Ow49lCtOLUx8ve1syMkGsoNo8K5nGtr3rTOjk6oPZ5iQ/vjKNzGKqD6pJqfCHGhofySV3VF0ZtHqhopBUgLHRt9+8K//6OPYtxdKpaiVScGEuBIcgXpOgHvjRtJk+yWgj7EYeKDaDO+iP0YOaV2JGxAHVsBAokq8lW6ZKH5uKpO+AMQSotoGJN5ZU4/5gCZyQaw7x60ypEVsfb4Jf8cHJC3bZvglOOsXl6kZCkqiRCAHZgppFhnMgFU1zYPDkgfneNDNls1x4qE3ukp7+lHo4rZ+FgGpGBDZG0TLDKjXk7xq11RtUmc+ZfpK/c/EX23BQvxq1sHvqTwCa7hAn/52WM/oVeiUlT9ZrBWRJBjEuebvF3HBaMSCVFf7hd7zI+/4XOjKpACO64GgQju+rZMnWXdZvV7GWfuPkWNf0tyhxqk3NhhF4r6PcFAKilRLojkbY8TzOg8xmvAvsPOLta4tF6waOytysO3barGZHK1rZCplso4gnINoHpa+BXG67LvBfsRcG7vx20dh9Mk/V7P7frcFu9+dROTMJ0ILNa9Sjt35V70n+dO7BPngDTR6RGCOyJ/O5B3329DEZvbmG5fhm9zs+ErPjyeDzGxJnD74rf1rLpOSkDWySO+eLfIFYEOgo1PIDNe7Kg97xC0C/uuUMgPADEC1V6dBLTHEPrd+lvjDc8IQ7xAe7t5oSrxHEc0HKA+lYcfODcB8zD6v/FhlNFHgydo4c4bYu1QXn8D4W/iOiuicS+orOnJZv9+gJxzLd0JHJJDiocl5LFS/IuVDzVKYGBHf2l07Hzx6QsSq8Srusn5yh30LrSnO9emD2zC0VShR9ywL2ACHe1kjNwebswl3dQ6pJvXf6ZXONOWERH/qSHzyjdMv9KOmA9KGJn8oKBywe6d7q/descuyfx+uxLaR2BqmUVh6/D/HqoS2bEhi87t1oVd4+wYscMPPkVockoMvIw1+QDrGKWfn6QuT9jptRvWNULIHl0Xyq0Ji7RPRv5R4hJzHJwbBoQZswTj7a/kGlLHAFzaiEne/zY4KhgE1SM5x2tk7iP3vY4sqQhj8zRMhOOddPfpNoKjBdzcxvLWQTC604xLSeTNXeWKlkTNslnqT+lqrqho7WqRIGSPv17+VXwUK4j/BXKE+6BHHsG4JEHS5wmdnYbYghyHu6oLEwwYsNcjgASnWM5NbBHab0eXgFrdAEHkZoklRync9gKw4tQAPIxYo+SV3vApYU2vW1CwMBpzUXP25ZkhpEWH43nR59Bfb2rD7chCIh8Pc0nHM/1Ea5nynggc+b5kIeqiITZH0qJ27natq4Rat/DuTbWKjcXFz53g3quQ51N/wwploTnbPDkf+ajBZnJj3XT0jUuoa8SkOEq095b2w==';const _IH='ffd007cf79cbdcdbd0437a1971052ddc4ffaa7537bf25ae2d93393192bb204e0';let _src;

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
