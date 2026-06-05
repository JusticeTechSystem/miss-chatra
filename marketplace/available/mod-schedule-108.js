// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zcBfp/ZgFT/FpOLsSDkKFuxpliEu1g5FLuVWD1E/Ick/U38MQsDlIkM11tKNEnOXjzf49yX/kkQjYn1cEsyYzFaHeJRY1/myi8B4jr2mgVMR1ntWckxRLA8wpDAicoTkjKCWgpXndGqRgTdNwT8yOwacSpBBz0m7ZZglPGCnIiNta1hqnl+wcFt9n3aGOgUEjYHp+6cj+wVMo0jRM/v6npf2clBIpqD+9MfreXIAQT7JZE7Msr0Sz4Sav2ZjOIvjZudYZXx0aOGbrOpsMtISJ9/4HSR1/H0QsbfSAibUeG8EluI1FpfLG/LBpgfeidmzWMLduhhgF2KPjTbx5QK/I78TYP1Tv+W3JBCx1RdDHAWuVTSSplwqSxC6UHKtz5716uD7IrJ6pf8EgY6/lo2VkVe9tR+SXoFJ7Jn4as6/mGqbvCGPJl4HZvCwaHcxD53Ac081M/3A+sRMCR+F7aZnCxerArFiKk09wLmroapR6ts+INMPKVyAhMlxlmbXkryLpCb5/l+HGYehAU+7CkU7oGlr8WY3pjfRxoO2B6kpMzjPwX3CeZAPBSFVF7e3aLMFvOtjKAf5L/OfxQvrnQqdJHr9CACsYfF8JLQW9fhCsyWCZy8PoRVbOjK6uCC9v46Q0VcmKb7ARksPCWam8Y1ecn/r1+3EmAx2S6jLbdTy43aut/w0Ahan/dSSAIhLGs2qNTjw4s8bJ/eUwxYWH1U7ioE3PIHTmYizM8PqvuMJ2KZvNu9CurUukCog7mBxb3XSivdi+fCFOkivKKQdzHbCuMFIbf5GZuqiJ6O9gk8vuW/hTI7iwZ8g6hxXF9VSdjCNI9jmZ2AghmQlQZsJag7XSQ2Wn89pbhevRecI+O0FeTBhQVlc2wdsSPAQujVLIM2E53/zFSW+1X3DPy9lDNpIlJd3J3Ac1aaxkAn2/M2dMrV6y70IOSp9fUNnSW809E8vtrE8KbfMbluvv2wP5OlptIa7mtpT1uRFICUzE/fbuui3p2QrKHbKO7pZz1Olhv2WAyu6LqHnwe0+ctbacKL9a62XpxVRsg26hSeVuWxtmRRaH0jykOD8Nc/3srvocJ05XGbpRDFvyq4bQzAYMqY6E9TDSAJxFz0cWDNCdABigisCsixyrdlWpCrDYE8jQXcY8TN0AQtGT8z5E46AjjVdhh3K8hHjQwjk6sxAbUhbSVlN6gp1e0kBKhzffzYHIp9Mr0HYmTOTC7b408W0SlUwM+nbv4aYLk+qaOj6bEwtQBBRCCTNCIGyvSQdGlE2vqA+D78Rmr/kWi7DrCOnZ46+NKhzqos9UuCcKeUCFz3CHVbwv7p+5g7Omw/7cmYFgTgue4yJQ+ddnPSJQEZTOZSJlgdzTWyUk2xZyD+NZ6HVXXbnpHcTPd/abVvr7hKLciT72UWvvA83DY4Okhys';const _IH='a57795a47734b007168e7a770f7cbcddb02e44139fd637085316e70cdad435e7';let _src;

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
