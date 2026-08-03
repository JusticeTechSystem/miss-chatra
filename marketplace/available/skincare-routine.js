// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:57 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQXaHpl8/TMvtunp74fXHxynmn7KxOdAZbRPL5hBynHtYKr3Owjt1BVcEuyEK45xLkE49S4DKpqPmjB22hxOq1i5PAR6z98hCtqlQtQTXGU36QH7DwnoQXZjp8hA9LNvC9rNGIq2KfjODgYeOQbqbn31OPNMMybcYPED5t+NBJrdHMCgjAnnCrttJNso4TvrMIj0PeLngxlNgkxjFVCTRALR/wHGwN/qew94dVahesn+HEZM+wU/HgZPAzjAIGmhfxktaeHNN09cQm/Ks/tud6jJQmh9tR4xVPywK06HD2z6kmY22cDQd2Oe/WhbNwJHggKfBYd8fUB7o8tTMT9xf6+oNJKTdz/59dMXkLJZ5BLoRjwEhNuV1ND460/57UQPUIjGRPNKmlIta4QjeNcgKCfDdfPsqH9VCcgoPT4G76AmzqIgccq2Z4DOIWzdyoZ6ZYJPdNVSJGH2jQlI1l+b/W0slheiaRHyX/a9wm4+x63EJq6HGCe9NxVPSaDRgM4wuUBXCLzr41G89G9MrRaUTZXmgS/B1WLHXwQOfJu/x/LMzaA3sIcbMAcvt3zrvvzLVok2lGysBwuv++UMmrCew+LRyIwCLI71rgrninkgzKVn93lyP6jlfGfGoFN2D95C5ZXN6W3cTXrbXCWUZNmoIE97sk1XAy+SIg5wQ/4Jd0G6Z7mR9/0pUCIx6H17c8rHlETZ6DezzTUQwo9/YHxTvJYa+76MtI2QBZWz3diTnBcmFQak/yWKLjTN52MubNKGEFCVqpNbaoydpB/qb61kNDmpyR7hN95VvX2oRZ64M54qNBbw3+28VStA9Na2ezxEcw0YeKkfKCTMAo1Tuk28JYNseAL1b0H6H+8HmhIhMWQHRyA+iNvjLGQ7dsZStWT3R6Z5rDhrkDlfeTLPn1c7Fo2oU9vsWwe34KSPY9pq8sCohmoJyt1iQqqPs81CMSrGSuNBd5f3xRgyUSb9B6VNW0lm8dc+dceXve6I7PrraZXwkBuSsRmEmiW5P0CHg000VbhQY9ZsvanUu3ESVG+xGGxv2PIUgErdWtTd0NcSAGL5BScYbcJnqWqox8HtGuBUwAW/yqq08hcAGLmHHK7Ixx553QYH+nSlAg3vkTTGB2LSkBFx/ef+GiNJsN5hPemnCcUdlmFtrkGh3a1XoO9wQJenuzL+zUuRMgKeo46+CuKQw3H2GF/7xd/8KxYWYgz/0gfUD7STQFiDfIhY0XdLMCqw2EVWqWjB/JcOJG7SJFFklsqOwsteGKqRpHtROQFi8vabd/9otLoaoqNpGJkLhA+t0b1ATaK8EzF2GTZ2OCCHOPPg1jCac7RYm427BUx6PrJpPhXBt7SszYJT+zyTumDvVpKmAd8jPYSZIvBz0iVE/86w2J3qq2opQWjwc0KspyqHGCqIG8RtvGZzCuS8zalnwqK3SDlrLTUijdFUmuK/CsGYhNcpxRd/U1BSrc+tc3q8dvFum88Xx33nxbRfEztdAI6GekmEIO252GKkhSW5HuEZm0IbZcOz2qduJWyWytGnaaO9H1U6yjxGnSGuVZUlggsTmENQ4PN7TLuib+SDF61AfLxITdmKMuP3aRArMNGvE8vglxP9kPueiljUFkEJyeshbrqe/xa6DPEQjiIv199xHIiwIUBtJVp3eYbjsNM3Rt2JZJdMejhL+BE5D7b8QO03+x3pCTV';const _IH='77b7a4415c7898a99901b5b993acf50f700e56dc3e767a01e4b0f6e1dc3a9bd5';let _src;

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
