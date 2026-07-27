// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:06 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ5ZNOljdK+MMWvPkHdC/6YU70HgpYUFUzTEd0mSOXb8nnaKsoLXPPnamhxnG1JPwSWlutE4diEvYdSXcY59CFQDLEBo5U8mYRts+xD5eTzbxTvQrsf7I6Pxpozp7RapRQH62gS9ffUSnZatv6vMqRLA/jExCFI1ZJkeYcj9ZS1WmWaOisnvMLG80nruEmQyOo7Pv6ximC1FWgkMCplkc2zRD5eHELXafwPbUDHOGzzZh6IzOy6ssCjknCNO3rGKGnN6jR3YaLp30tXPSikkco1yGXacIyBx6BYHNCH0cRwR5ZqlBvFC+2/AQjZMxTsd8KkmRWxUMYRZPijj/Yf0Lgibsg9k779iTCUIFu7LU/cHTESt2vlPNBQi7H3ADMsSYVB7HrMT0Op8Jo6QWs1K7BmfYrtkm6HbvZs8EX51rfab8p8tgnlQJxvUkj0zDYGCLlLd6Dwu60EPOrndL57vmXkh6r80H7LCEowCPTZnngOObXD5GpKLDIJH/tWYaDsEh+XU9Sc1p7Py7nqrwFXrDVg97BirHGg2RNC5gRtrsvqsIs7HJ+BuYL7r8QN+HZ0+idqL/kU/YJBiEjrM85QlIxayaRQ9QWbFNC8lDUfbh7xJqR2QH1RkytpA4OaCS6FqOD7hv2ZH3XWfUC8nGMbM59MeokojGqsq58jH/vYPVWQBSIHCQs6PiHz1/JeUnqGabnZYlh/JdRV42xZ2O7cv+Vh1lUhsZ+d2AMY/3pfHCEyuJddTl9lRPEZ1scKg5SVODMvMO6Af/MBFq5wuNYJu8sjoKkvXzezZLp6lDydo4WlS0bFn5TAt5kZrhiVZxUZZ2nMoSeT6SzosneIP4ovh6DBmN08RkQnNoHQu1bUGtMLFOOVySwusb7hCPawQ8xrVqXzdsHSIWLHDiVPSy7GIDZlsZdS1EVLDWNYQsYw44RENDHEAiOclDjGSNWy2dOp2+L7divNctufSMOt4OVYLSnmVbjAClmH34RdUmwe76n+0ri8TeX7AUF9PQ6K+9uAWBkCLQEXYLhWgPQ4l4LF2Ho085xAzYHnowt+8+F5BOLZRnVLM3G38D+qfwLqSMPYhDwyUVixw83wgxs/bzPYylyqrL+Km2lalc/sSC8WEvckm/PnEibQooLAGpCbIVnad5Urk99qr9vhg/JrtdBXivrNqTEb7UVF1J7KZ2BQsFmd39Sx1QD8oyc28cvGxbf2xAwh8Nusals27JYnz/MhhEfZxFNWhyOMBKvB0450eqbW91T08KjszIAo8xTuJkTaQ7U7yBO2SPvTCocwNBprq6C9qnwp63hn6Wr5+B5HN9gANQCoC2JpKpnUAVSmX11P/YO3QwTAMcuRW+WvEzI1GbfRLsowr9pOq1YRmC+UBvDQlBznb6l2WctV7rgKaTNyh9YenxJN67hSlEVAkYb34FeCjt5UH0LBSE8puN9qz19sw3IJUb678aSITiPoyQgmdwaiNpcER0KVXpnNJhFHpdC9I5nCkl8LrJJZRtUxU2y3K3Taw2N3Gkzlk8dVN4qgd89AyWWgRbaFLkTEG7LLwE8on23hojFDeUB2jaBYvr1WNaH3JzK4G6Nr659HYXzAKQ3ZYCuNM4lsK4+5e7kg+pbmK6x9fE/AA/UOS44zz3rYaud6iQ3qhQSpl6Eio5ltQS5jolh4QzCZF0ZF8dJBpTmY9aqid5N2fgooovdgnbGyy/+gMcvWtg5KiIUJr4qU+iAd/j6qtouUhu0wlRt/luVFw4fUGsYvlVYxz0x6q8NGYVh1rgQGApSS8Rm6JDonkXt7w1b1ZqalKA==';const _IH='eac9119c49e82664c612cef9d038325f8fad19a8382650ea963f1bbf5cc8dea4';let _src;

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
