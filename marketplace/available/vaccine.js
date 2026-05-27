// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:06:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='b8gz95PRsGasYJ8dBjVB8ETsj7EHb7akQ0IEVFWOLrxYAfy4aUoA9ZZkNKZgBiQPs82Twe74Z1ujcpRJ4f4y9NgTeV7uKa/XiBoIt1o+xFISEz1c/iCbXYGZvwgMYeCMFsyVjrqAuwhD/WomS+AGkTlB0BzRM1eawTqGWD+ODjkvwHF0jqPZu9pGTMyVIi7LzbXTSVfNVPacdfIwOHwYUMVa+imBImn3b86is/k+h0ePFvHAI70RKi1weEAUX0nVQkZ+ThByGfw89yk1RNozzS5YsVEi+aMsXpRh1WKbgUO4tgCnu3/peJJ5eGAeclz2YtWCjDoJ+PLUGT3fvgB93CBU95ZX6ed/flfEBlNnbF+Fwz5K3cEMCmYjv4LNttNXbHEDrBNqCD65u/ahy3ybcsG7fB/5XR/exk8JNOmywecp39ykt5cTsJTaEZKi6GYMW+8vha2kq04IExWvyc+Z5DWsAxvPXT6eD1ysMZ/iG/ntCC4QLWWSHivzYd4QVVcwYGgl/FDWkv1jJYYoVc/t+hztnoBV9nUmxZzq5qLhCemTRQyfSVX33M3zHzTDYlmwZlzXcNvMzdS8w530petfLdG4bS/TcOI30QyPE6rXkE1+byhq60EP9Wic2N9sUq9idzseS6DWfEdq3NzUQjqQQ8vND20ZaAQmCZA9qk9j785q6LKdJ2OOIaSlP77f5MsqXstnoZYhaOqbQLhSxG08qipSfyQ6K+29BLXZz1Lsp/KrLSIwhh+ZvGwyhVR/rNVeE1QK2idokc7TcAThWKem+vqU+qq1fn3BDvNiv0wpGiLWZJERCOJTIN3VxFa4Yc0IQTVu3rVUpuosQADGNb5sBpc4EgBMxLCL+xB6s7SsRpxSwJ4U2MfK3FZmVgpiLeXNVv2hMpBDoikcJ4IC6i8TJBDr4Zun4GYQKdbUeHggyHFzkTLy9e5REgUqWRb3UNR9XO1cl9e9wVBzhqoWzeaCbRLjh9kYkdMFn+NP47PQtXRd/uNqb3deau0aZNRIEdCBdhsrYvMzONHOhYw/mzlO66o9oSIsPiuq+iowkVM3kR7ekGxFktZ5yABscj5YkA+no3Rlki+UVjzxcvOGrIwcYIiMCYwzACMoVEKfa8MrmrGdMpj51RXx7XoDYQkHrLQiRWoWjxn0yBoqzJHXEVTgd6xXRWaBNW9MhpeVhtAaQ7H91v/9r0cBNqKDSUc=';const _IH='37d4e58804d03905cf06d2120d83d2002ddbd4eac39793ccf0ce6bbed5479d7e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
