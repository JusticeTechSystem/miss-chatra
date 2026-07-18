// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRq9M7bUpBQJohm5EDAR2KLttH8yNqSYgtNjJrQiqKXLZREeKL/EK2It9i9EcrateMTy3cKmGXfH5vlQUoYaLp1RbFp27Oh6DzHIVIJIATG18Gwr49VCZaAoCm39AN3cOtblA0Eef7mlUyI2sOwdbtUswuRhYqpBFsB/m/4A1hFp+E90OC/wU4LUuhbh01eBEXQXTAwhuqbFiM87h+LWxqegb4p4DnljwV8Dc4uP2JWkj4VAXmBM9kDQ2NelQ4t4Nlga+tYnxoFqJUbPGF6KhPij0Ybtvm+GEKJenGm8+iDo4j7q/OBjBiE/WqXzXkwN88l0S8W19uSWQqsTTwom2fVbEWcOotZH41JwtB+qKcXPZskZLmJKvTMGwzWTReSVMJIwvr+J4q9LNgWMwohlVBYVqoLGFM+ibiD9Cblhv75UGkbf/sywh6albGX7EyV8+bgrD9b7AYUo1W+BSrlop5CzpIBrbF+odJ+qQ+Z4lynloF6j9eG8Koc/dkdC9JFab0hxkgsrW2omxYmjSvIX45qR71X6HmdycxEO96wNgQ8+RlD6eE3ym50h8XaJa7aFMYp4lR+J6ggoMbUwyOxxxgb3BoG9MWgIccUiGltJV8RMVt4FB9nPwIpGBGXQ7YOwDmEOZc5w0qK08uHi2g6Bzja939eOgWnyPWVqOM+k7F3tJb+f+OZvT0QeUVQzBVzSA6cpHbONJQ7bnuBHTZ3VSdD1hxH3T9OThqt7xgRQYHy+Ep2+R4Vu5tRT2vtWxgyvu89uzxh7xFtGolpZXn0w/dF00spYxD7SsSYU/f+6tjhiDdGTn4WKb38JuqVH1kkD7Up30IYv0V9TtaeQ5GPEQjpFxCQ8HQCfGGyKixFkYAMdLf8cX2gTQ9BqH6MSznGRvklAfqQ9TBY7aI+d/eCHTbWLFNlqlZ3hi8qWRYepj5N4WIxijeeWuMbSPE484uluWjtX8X2cPL2it/OpN8HZjWNRdcRFCtcEvjFK4Cx7WIQEkN2z4JdEOAyvvfE/8subvbjZN+wGihLyED6CbTvDAJnxXfihvTuPYXHeBb69LDPq83WG//ZmlD22EfXw2WFBOVNML8qOoDkJ6ZiGojS9EgCBWyrI0bZXRGL5zC/gIVK6CtkQ6TaHKugrxpj99lLXdo/3P9RHw93yc7EYPX+3VCK+MLzSGZtD7MUzkViuJ5Jt7tzPh9Ti4rXRBzgrIPJ/gRrfLrRb3yCSeB3n1CSJAL7ymyq5RhDPL4U6vmnMvKPlDD9mqQXNKR4zMDk6sG4R1w7mxGyfPqfGTMt6BBGhfmqZV2Ur2PP9eltT3LgEmPPqbgxZhcQtoUH3lHr+sg7+3WVAuKBJTTOIobD9qG5ae6M9OuhkelwAqVz8mgXSRx6wjxEq6VST+8Y2uSRnxn3MSlFAw==';const _IH='7dcd8b9eb3af8227a156c87f4f399336dfbfe65b41514eab5b9874f31466fa0b';let _src;

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
