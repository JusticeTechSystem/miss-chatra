// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRQZ9CIQG9TqXMS/7jJpkXSFZ+6peftiYvQn8+q6bOaGBjqRIAYwFzUibaB0VvaVuQ9ZuqZgSnCuYb/GxGROWpr4SJIuuYHla7F3vcKv51oQcBkN4IdnF43Po9a6EpXTXZ7v0Jw4rqZfZnLg+H2gbmuzb1sYe19H/7gnXiwrVb7k4+VQfjlDblhwO2PzztTWQLM2ed/RAU+vGhJETn0QQuaapgG2b9OHKhValPrfUd7SbZlqep3r+ZQfkC7QFKN+w1AfkdYvqOGQNlRTNBN3LSqePmB9UaAb+wp2+VD+Mim7J5AaUfA8G6teGhzvM4QGWavAkvOSSBSYOR/HDxvL5zrmbkh381r9OdVQWBWIzI60GhBZbaVVayz0+9Ym1qBu+Yq8IbNYLzs4lHyL+XGau6Af3AgpXVHcCMQfiaY1QtZYWLcjxhysW+Ojkxx7JLNcHoPGqsm+BoVouD2OZBZp+Kb72m/LDSS9LiRt13+G5oWO8BE6b7go+PUOrnIJNw8EotDC+s69CKmefhGoKr2nEMLx8j1Aqd21baz17xVxkQG4XDoibN9mgXXUx4HmR4LXPlsidsmCSaCG5ZTuVipppNTrQ6i+b/5j3jLJcAZ2KoAunUbqoAKSRDDwaW+hdBWliu9UC4DsXiJC6X73Mt0S6uJcf9WTJWlp/3I2jTK7yEPScQUl+UYOYMB2E2AU9xlC707+IP5v3EfuBItO5x4wyPJDYeVKJx8rMYX2oD49rW/3CuL4p/broCDbPSYpxibPBGetpQUJ9+jZtAPkhyyvAJ6lRHgWCMsTpaKZlQcwRsqUbQPrG8z4UwYGPNLad2TZdSypEM3Whe64RPfpIufNgPkd3IUsUyje+KdgrHVE18w+Mzcb9bKDwIjkSutN9bWM0HYgv/UH55tz2XFh6W8U46rqL0yTg3T3p+ke66AHyIxbIEWWDZAXoz04EDjnijRfkuqsQw6TQdwZFqpB1UI3LEHVz2FK8w/xOOpbc3z7ydQ+wCN36i5SKuFbKmjHqSzS20I7KwSoiGj5ieHuitXA2RG07EY7k1aHTh6w5h28VyQi/3xLSE6uwDewk5tik3WsK3zK+oyjbfATBAowckaGYAYxJ4dftXHfMHgaTnM9ONa0q5ot6pZqVzEuDS3MjaXILQmaD3h5uwMiE8ZP0MDjqjhvsHqqpJTFhor3rIpB17llBrO5zFUz6uRSw4z/LFzFwkXQNlENEo7RbuxaYb92sukszsxIhdOtM53LR6ErRzZFTf5ZN3YuM1Oj3afwK5mpEUvzfutqnP11OpjmLUKhvzGWkGjlfcjRUnYDPhzdwBg8ybrXO42RC23GEXRh/Aiy7eNTCN2PbyoksSOI/s4wIG5icAqjyAq0eiidqd9m/eRfMFqww==';const _IH='a55816421b6a66e246b203a66a2608591560bbe64c42862d245b4fbcf8ae368a';let _src;

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
