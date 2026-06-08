// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FfXGVE4rh+/ZPa8Im3YI1PXl6ZR8w+71BldlpS4R8BZ87FQ51hhh8XAGbu62oETevG78kU09/8KdDVoHOdked6WCpkYEW3cSEhe5M/Gqn4cHKGzJ2NbGEUtGpePpN21K6t0sknWJJlkZ4q2i5gQN+5bb2vGtFkPDHsA/A9AgChNOHdo1SSnuUrahsoouqtH+kTPOhahL5cSlzDgciVWWNRkyMqZD7RAv9cNcMlyfDDpiQGBPly5X5QV4QtqlFf3qyJFxq7HCkz1RBnv9+RNLAFq8Z9NFyF1jy/i9++FWYJg9hoaf0F1CMf4FtOjA4zR1J4EdNH7Pi13fmwg4OMqSJy4hLFq54NWWDYrUgddl6Kxrptrut3j9pZOW8jR8o/2Vrld6aJB9OaRFTX7xx212aHjlPYeA5gS4XtGcprpSUwjmUU1Aof044VmHI+/ym8prLEHQwW8QsqMLEX7X4hmF6wceElkNa9YKgtjXcD/Cz0c0cqVUee4Me5ARVQVqPYr5y+TcE0IzESb7y9t2aVyzXgzC1WumtdHh4zjS7Ie5GPowlO7bdmRiA88PW2bKoRyDfeBAbdnGJphGVRqqk67T4Yr7sujxFiJ/yWWIk8q37bpF/M3eUgChs4bhO4rIYtce3SwUhWtO1CZIpKkkEGHqp6wwlE2k+MPQnNXn3xkBzD6T+r/zbxSe052jhmip1h4vK0eDtmg8Y+N8xk5xH4zxMdJKjV0+v9ieZM5eC+iGka3YzQ6AWoVXcX32oAZHbml0LhiO2CR5/GrYtYrOZQEYRlEpSI7z9xmS6Jas2n3oUWM3bc/btpZz9DSRO3nv8eYGf+1Ta/RVY86pY374hRP+Sq7yHyP2T8axNHdx4E4bMzKFhxb7rTUkBroeroY/+FaTBE8wHT89DjY1hj2qm9rIjIBW+gNjZzC0dsZrz8BfIzI9NEcNclvWz1sziEkpYy5AD8mGmJne7bM2gRoYJ/go5uzobIGKMYsd/OiNbph21YBgqYPs66CDvbpclBee07aKEcls/rXB/TijLKEqz+SyIwFKVZEvgs16TSYsBVYNMcVfBijxJfbXXLO6GQmfcUunFOhl5mL9Gg622pHiLbB71nm1Z6taVmqtVwaGSXyE14/8naWgDXTlkcxxsEQT67WLw8oQxJ6K0OdZfD+Hvr0hrYotsI7nimSi8YlhG8HUmDHMehdKmN7d/70jMsZpNvFCFG8K9EErefIzsjDnmaiQCjBq8/Qv1UthtW6uzPfb/cPxlTqMUFKq1ZxZKriwLHOiLUTikyNheFYEirQM9v1NxbD7eWu0IyWeLQMQMv8SAhmT4HFiY7zj7/9UPORVNAbl4I8QCQjsqMFbUjD9mn8k0u77SEWrDw43RPxitschPXF7Y2YZKobDYv1pqevqxXdkKRe12ZEkYaCanqrqLJQmtOn5bqlAG0Smwh4V0uqqjJxs20x6x28EVkegDrhLRTn0/5DjeN/4CQMiyc7wTwDayWGW/Q1vatyHHug/zX/bAL7YkC5zxdQ2EA77D2q8MbaM7b7v2njHKIpqMgLB8AkKplwC+IuY9GY2nADzRWCdBM4yYijndVbpq2m5k0pw6xAjddiR8m76Np02kw==';const _IH='8867b726c60e0c48c7184e779feb137e9b92b3f8204c408f0e2c04105a7a71b0';let _src;

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
