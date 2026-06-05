// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='x2fWBaNIwTFwZoTf3gKI2ZusfF5qa8GNRKY6ArPQ+cBHfErPtUkPJU+fIPFWwYRHMETExOCbyPAu7kh/gbMBj+YsduZcGc3LhnLc/HVA4hgdK6C2d4Ekj2iII51BW6HSaM1GBPA57qLWKYWN2HvUZPKXGJTqgmuX/KP1EPep8GVD8r/yRmqM+aaaQ+WJ9L+Qm294n+XDArp9aOCuqdL/M9zYVfewspkMQ8b+ndJwkBAPxFuL/Y/p+2N20RwhlWokbvMfoGqXkufI1AiCtuKEotWf67rVrEUn0/rNYuz9rmaWDQ6RK7oNCZb01wvKjxdo9k1Uer+ooud8E+Objh4oAR0ZC3JCODAS8bZpaNLovp5ZUM+J+xTdmAu7oicMFDsDNa0WOdTZBVr0Ee5yfFb4m1Ld3Hc2/XFP8Ww2vzIKzRQccJ6uwAEoQBb2Ij8wqBoHT4lYJahodRRv0KIfx0VFasKMTvjt76+XvXp9+nRB8x+uopZ4crKHcpwXqmyLHh6tOeAmkjVXdkXo2GQIQ7QI2MOAikZzG3xNlAp/DuYpqpG8LjX7ZXIG6DwAI2kW4Bpp7Pk40IeFCTQWGwNEWTVOMvP3stDBH+JMFZvqhD38BioCN8ADpOSaEmyHQnuuuVd7R/Rzy9oqLxjn6GAYYa2ht8SW9jK8mbQdXiR4JEYoexj5/b4C7Nrkj/EFntFJshbOVken1LVD1Tncq3e1OQyG6jOyqJt+T22VyGqptKiNHg8+G6B8K9nREyfLyJ6Xd3+mM4OONTru50U1eAk3/mEF4gpa/A1LthlYNiLfbUpVF0fo12LMPtcvdQOkLZsZ1m0u7b+Ujo/Nm3nue8dImGQK5RtYvMH7z0ZMUrIdz5NYBxN/wFISHfw96zOSgI2puHJSF39yWg/4RBe/bYI837DdB1UVxqL+dLkT4toSkIUW5vzSVrDxpIC+Z04NGIBLESYBlz9qg0Mul/t5O7TT8jvPnworVM8yt3N8Z//jYwHu3NyX0NA6U3vlVFW+GSIlPJSZznu+EztsXTmb1f3rrF4kSZqC8aI/fu1wmm1IpNUN6OFh67+FrPocg15xhLoWQlPdZ/QqtNXuzRdDmI0SXKrmw1LTMnnR+xnXDrc6p6C/WgCzdRhgjNRpdhpk6UXiUwDgkBAUdzTPByxXxjvZMeqfHomd2E/BwCtboQS6ZLiPnIy2lWq1W0buKm6KJ2tLyywKsNkxfCKf0jB05hkj0iahw+g8UP4AxQQY6KnGgRlVC1mStWE/EyLWbtoDG8jdQFRHtMapNfPwF1VI20XvwlYvKSPOhUj1tPJGZQKI+jEbU2PTiom/hLnhoSM6REl6JVCkZraxYK0P+hEx1QzmnTN+RUkA44pvm17qsUV/2zvQ';const _IH='48e41199e39294e4b20f02a3cd44d1b753601d6a5d3f7730601d6f6d561eeea7';let _src;

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
