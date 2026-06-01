// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:52 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8TxoQs843sxWXFYyZnlGa79YDVDsHUu5TYt3KJGToacvpH+sA05uQYH0XCqJKvm5Az9izzJN7kUd6JgEX6X/TCszWG7FtkoA2B4JNdBfTUETBM8eLFVPOfrpChDLQcKaB6FMzbMYZrqSWrb9w4+BAZm6rl9d3/vUgRAFJyFgqTN/s+hsshy7WAYPSCOgbpcB1O0x7TshXnIouMpSnvUxF18iDa707ksQdJj5yZVs2zbbdGRjnkFYEcDP0cBOEyQokFdG3+Xub7d0YQqOxootxG6T5bDoaoHWahPmS3lqx9OFA8qdL3Z/1b73+N+/JH83k/RDKWgTE0xTu9tU2QFXOaux1BQWlpxjqQKe0cwSEXjjY4CTwFWCSGWv6h+bVIio/xe8kcl4G9uQDzKNOq/YcfeLD4IWTef19uU3pNZg5MVVN0OHXAjMZysb7eDCMzPtkve6tyBBuxoSL/po/Tfrxr4WIezgMhbVJu7y1D0DHt3WitvuQ60ZVFXKoI/XTLNH50zOglyrE9n5tJx9Srz33iWl5cedB3h/DUBUcH/lLON5JPFK3c9EEhqGH6E1MRweGORhR0yb++i3UnicsdbBJfavGNOSQL8WqAcFKtJGyYj7MMGNbTyW65OZpjBHM9dfK6A8FJyJs1o3CovK+Ru3VD8WhelCzF2ziYrpFZE/XWQjGdQwtF12MKNXRZl341yiRUH4Sr2TQJItOSdZC9G+qRGDbYfEo9w+rXbLbEWyRnLAaOs3MyOvpjTX1JHZZYSBL7//Sv78nBHMbYIIijVQredZtDqCgknjYjA+ZPqGTd96DLlmG3O0hrDGc9FMdFiiCMDHYNif2Seep2ILeKXxC+nImNQlJwbTisaIY40vb5/xbHrdqRb9mcumlYYOS1kPdJRycvgin+yaa5IzaD0qQUstU0/c0pZ1+rW1EZVmlsoAXucLrFPp696MXKjl56D08uRLKbtgFskfB/r12HOEr57+f+Z+cxyTUBAoY93VkIXu2dRRB8rfRy8kGshMljmeI5YoitAycU96fESvzecCvKxGHvWZXqwmcoBoF+n+tTIpJ34wUYJXEs1Eth3Zl9YqEpjW7+O5D7HkwS+dg9LDYpMFkjnWbgvB+CHacQEddosvuo8mMFWUqhIg8AKcasnP3Z/gvAB0HoCHE7NZf7KbaI/1vnUgCLPh4PSoKVyXBLCHXzWwN2TtoS5QaEeMPJTGm1eNOA4O6lhcRfK7BzRTbJdItTnXm+LpkWJwIAr8unXPSwQgc/zDkC5MvfwvCP+iaza/h+mlbVu7GJ/SCyDCR8OlN9Barv/aza/7pYEF3sdomXWRbW7QKdu5qbDVGZXfqenBqYNxYpKK6UXC0t1PdsdyPyg0Ec+fXStZ70p2w==';const _IH='9c1e58e0606b891fbae4e1570ca6939b253d03753092b49cb9f776781e94b215';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
