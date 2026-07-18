// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:11 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSeXqTCCiLaGcp5stM8D1+NIKBg6o1iIpAN/kuZF4mlzED1dyVhU/2b1fTHfRVbSjKn4DXvLL+qrtmZlV3zXzv2zJCvOsZUpEqhI/RhAx4kB/SOKFk9PPL98LH6zMHZyDa5Lhl+SmLQsshpwj9nFjOH7dy1ksyKtuTN93qsI3fm5WzX3wEd/khzn3MBtt0cEW9gtUQ01sdqZXjDpbNvoiFU+8UxfCXY8BSG9+Ndb9QqTD1lI7HNRrrlcUjC87YKlR3sfL/EjBLEwFxdIzg4X0oOkidOE7oivGIqtOQGR3cbhPkOzehKXPLPnyfuvOtSCz/UmH5onPzEHg33bNcrmUgZbkP/MtJ0dt0xcaZPUp1QGIupMk1mDPkxdKOimlo1m0o5sf0CrNAs1vr9BSJxVDYnEouZu6CK1xgZD7TvZTxATNKZB4rmKwdHrXPOzDaj0gccUiGZxKYB4EHeNzQIt1tpzuKgxwUvlGk6DhJR1ni7mKGQXkFd0bk2Do+dNRX+vVLuQMlufTSGx7eaRWx7c+W+WE81mnfZWGVP08t9fGuIkVWQFf7HO0zRSjVKAgt5RmajygvAVEcEOv1C4QKQrxrLDCmwMQ7xVhHQt/fnLUKzZSyY4qq5cAZIpWvANUmCI/6846A3dpMXKURslP/cMDSRTCyuAkUnFwDzwmoeB1Fahm8KS0X5qWfZIzALrta8qiFX6k6VnnDab0YnP0NEwuHq6UkN6l5kqvpyvto2VqrOsMOJsf2FtNJQ21valOyO4QM2qmVsrGY4y0o21C4riT0FWFZjIyJ2T6JKKV78ZAInjncEmrxMhyJCVAN39sXCSS+/xIjqWAtqn7C8wcaZBjig+dEZQD0yWY0QvNHtmmwX+HfkYPAbTlLgyPGU9KDCTvn8hfjktiLMdUUYWMUH6yCoFIc0CpCKUF8mNPy+cOayYNJaEsn/bq81ibaVaG8ZuHvZuP9vUk6In/vUkah6Lui7azQ59xTkNmt4GvCN8SmYvlO43oaSusEVEzd+63VhF6xtp9rcrpizHSONrTXuny2+h5EpZPbddydgUHtl/oEy+4Azi3YR6cnJQgbvs0B28DeS61oLPGJRFgqh/u06d+svwc/+gXRYlO1SCtFpiCtbhsA4/akJ4nkTExjf+pd4lIKKv3DXGno+Y3kmyktfNA6zPQELZGHG3nV5nGy6Jn8VWsyxasEXd7nRM1ougn5N3WAeOsGakp57jw==';const _IH='96a079efe248aa5bbab36e4d901a0559b39a00af99582152ac0fed6f22afca44';let _src;

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
