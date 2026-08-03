// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:22 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ9hPWYY4Zrx+bh+N+sQn9e338f8YowzYNZSFr0kvb4VrsebtBEwKGpJTMXWAaaD0Q37SCDJRmIYDTJm+NikYMW2VF3bzOXJzxx921A7ySBHPK7IN4jAFOk28thAFGsPH8x3ibZZI5AFfrumiMzVO5Iwfb98i3/aA4XXKJBU2Kk9oLpsspTTNUV/8kRcSDInhGy+V9Nagf+QjAsi6t05x2LxcCM7KNuDJgFmJEyertmNiTl1ZQGAmeIWys2Ng6tLqpSpGsyLKH71FtascKifbZeBLpHk1TmsIxr3Fkm3qBaFo1gM6FUTGwPx5nytnwM8CJttQPIWJUjT93VTzR7uPKTPV/Ydlh1hpy9v4dJIX5SfZb1ZbzWv8XvPGFAhQ+LqJQgYZrNhmHSSnZt+AYzw4Rhrtgw4wN3nOYtBAYCUlAuiVQYlCo/8mEWiK8S8k6iszykcgvJruhPPeciiUA4RjzQJ/EgfNiP/hjHGxOtCoOesGkGh8sqTVTHrIlEFGjjDBvceVt4NFlEx3wExNSIy+hj9TeWoX8G2Buqprz8Jwfcn28U8qLGF2RZy21vb87yx/Fek31xQ47mWd9iK7fsAW3Z2hzw1sbf2O2mFdZOiyGDYy8DQzb78uBgKqBwPzG9Uhh9k6PRl/KmgQxwWLp0e/0oiGGZ99pMIVHpBUeWL5vLA0z5mN8+RgtQyoSwNJtvrAbMNFNAcbWPGHpgrV0/z8/gDZDJkPfK0RODiAszOUr33604faUM0+dTdUFro7gj2j3l5+1YBwe8LKcuLY+my4UydOuwed/UHBnY6F9xSiXFu7T8ctpDFmJoCB8nGkWqrMy4JjPI0+uh6eUe72DMXnls7xUXJyoskcNGs/EmU6PzjU4oeVKAPxvfMeSD57mQDM2qqNo3OrGtQ5+AjfLcnlynrXIRotPqUG9EFC7HoQIPe/cvrBcTAIsxg91PuPlVkLzRq1doFedhSTKP2GUTU7txiOfN2A7kNHnX0ng2QO4cSFmBfacwqvcMR4dvyXAFpPhKywC+tN3ezH6B/X0sanpgzeYnRd5E0Nx4rC9Ylyl2SWud5mO7vPO2g49DoByT1hOU03zcNukm0ATe4QEUBH/OpeW+ZNaTHEpSGxIz3Oy0Rib+OVxGNPZFeylCW5cwKpaehuvlVqMrdolaLcuW8MajnbOav4rTfcHJkCx6bJpcrKcwOeZOEdikGN13BfVabOmZGRmkqMVbuVAfbHs5F5E6h7d+CodT2fA5fHvTnYo3UZ6Ex+9HaS1N6W6vO6L5ccGigtoKxPINZZAQM9Sx6PY8yyFh01txldlHYgw6GrZOcDofLuN3JBilEWcGFOgXtjh2d/Ln1fO1oTUyl/1+EXlY2wrfaWuu';const _IH='a51982e42cc883648b9ec411bb9f2058f9d6ba1f5e6764c5efecb657de94c100';let _src;

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
