// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eFUeYf6iI6TfinIAKhVBYVqRdMUOYT4+/g1dnUVGj9s1Tzd5dzeq9C7CrwaAadPgk2O46D7RGrR6Ra6KXCfNPZaZJbbJuZMcfPG2NwA3JEMQkwQZcFhs5qoLDd7dalFGXMiST6+IIoqZaLKe74QgBShWqPTFOlmPDcCwSGyJRWr11PSFKicMYXJ47UvT2Jwgr0cXpga4SaxDFpCH8AMb/7CRrK6o/DuQOwFbWnKQJwvnWejPobSKDmLyTp/XszSKpCZYYqS8qoBGXynFiU5NbyAW9G6gxZBqjzK2sebq0LgRF4lmzu/YevVeK6tDwutMgN0aFQt+NkBXG96dA507kkGGZNm2/o4KIZS1c7hZxC55p2AQl6tLZWoul/rPNRj66vQPkGw4hrGTfve3u/YFNzUbvszfKtIamk/lH7jfnZGLwvs06rjcoHF7+R1Ytzw15MYW5Hs0kdBg7NlNRbKZOuRRZEHY4QoVwECDFgYHgWlR4UnR10uF5tpZ0gbFmWgOSYFZfPX7g/HbBMQnZr077PhvlXBrV8O22Aly+4qT7LxYm28UfVv5K9iyJqo2o6aSw3pkIcoJ6IaEd/j38/skFd4yRYZgZoTK9T3fG1oY6WX2NKy5wrKgHEdomIN5CbDju/stbPgWOI1D3U/IYTeaXYdRcR27cvHBDIloBD/VEpNs5VqUr/X81JUv8i5UFQN79YBP4dK72jUDLjcUHi0uYotVJbReUUSNahTsuHUR3zZ/5M37lyfl98d5dr3EQRlRdaR7Zls3C2xbK5J3ABy5OjziRMABhUmNZCrwdvHPCgZWFkc0zcCpjMzBJ2lG9QHHeb6NnACX++chrRtTWzHTIkuTzTq6lXQrf/nSwplAZySF9aQn46p2I7X5AC3St8HqsReRxNal8dZhfT0iotz5N7FGBIF1CVNlF+oCIa+78PWxLNpsiDz82W9k5EdCFHqxUJP6xTTCPXkEZEBCiU8H0yrflnNAG0ODRcTA6C92t6Wp9XitxK5Ho10dMSMQMVk73iZ/LkZnzspV7MkzwOgorFN+8p1hlZNxmNuRFdFtvuxNWpIm1msCA/io11hF3gjHL07FVYXEAU1PDAMsPLnN/W1EaXNYCpwDD9vM1XF8TKOpavXe8O8X6pTfkrJP1hhKyIT9owjnbRu9k1FarDpS2z630c8UTqpTY4Ma8ARQfkDHmuaM9TztRCfNyYJpiXLo+3JJJmiJRrQodEEhDVo6hf0RMNIhovPhhn2EXcwkV0R7Vwma7XBHQR/vQdDs4etbPg5bB5qKHJp/S+a1ohaLxQuiHUXV5PaQIw7OcwzO+XcxDnKQW5fium+M+wgSoflqrqGYPaI890eJUuGkP09eOKUkI3g4oIgrR/EEdLHEAQatbTeAtsZLotFkKp+XRHqkIf0=';const _IH='d55261a5c72ea2f0c50e3f69a18922c84e37b7f10667360b91cf4a64cabb265d';let _src;

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
