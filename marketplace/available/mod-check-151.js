// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CBEySaIUgVI//hNHedXmt6sxiE9qLlwwMQuD9mBcWOAxUN+snjQZnseyOywUnbfabAcTGcO1F1kdpcdJ7g9JlnUjYCRXrPtFAOwxYEIaDFDHPlG/z5QMkova445p9+t8AY8fLEh83G5yS2Enj7wwKmlUecpdE6HT+393MULe79xyS6ySkOVS9uyh+QlzilMQ5QzUAwJ5teNg7CbojX1rf6BnbqJfEATOKle9claf37+72l3U4VyiphfWTr6JJBwTJu5/tt7LPGLpmfSofiiWqJ9Ivol7T+EJigImsyWCaa5Mj7tks5H4tK4tMfe5O2BHhOvT2Q++SXm0Q2mIW8idgx7BVLgeEArhmDb9jd9minpGFLELQWFw52E6VkGgA6RN7MWYfyY8Gqw0/0EuATxv8y2y2b1bJ6YCWbPGx6f0KPZcJ0y0IMtRuK56lN3SKGPNKDRIygm1JAryfPqR+Kx7rws8SkL8TcwPSKRkeSYzNoAT8zNVnFeA+BPFCgCHThw3BIZ+QLc4jXLEtvnUKeQf4JGFaz1P+JfWfMwGCOXlyZXj/QOP5/FqHDyIIrh+Lu7a32uv0stsr4xo/wf2bwT1a2ZHFjhLhWdg7Zj5PgXO9AL/cJtmw1SVj61URq1eJm1wzrk6Rd+BAw39foYhj8QdpGzKA5QIfo7iog6EtN0fT14Hee6gMhSGAJFukHfousbTgwf9h/QdJNJeKojq+jxgJ85J1+IjK3AkLiGBFbt0cmu5dXNKm+XeZyKzBLmHndUjPyOOuDOJvHD0VXqfVgOFcQb7GJcPZS/ROLc20cJEYlKlI8gpe8bTrrFHU6dtOrii/UedHxC9QtyYJkj1PRUXnyIBZZJOSb+GFRNZjZaMqTQQ3vdRhAcDp8EerLgo/DWK60j4KjzB0eIrrdeoCT/7u7TMm/jWHVzo7wJ2G2UaOjPiE0+6Gd06MmJpyuD5zM4pUSBheyNOYrZmedW0ewssSrSIrjbmRmKfNquIhPDc+hsNyexGAh4oGta8ChVoL4CEeqWf/E224fUdpasL81ZwsEqNZgSqhfFzq29WpBL7A4tw4r9B05vSwQ2HGBv1Bsg+IB02pOdJozGNBKLllPJYH3/QTxPVR1Xgdf+ksN8viwaU6n8nhvV8Nz7BnRze+ki08XAn0QE1lGycsrrvxCwcXwByIoLqA2BwN3uO9jLv1dgc8OcqrLuRvpKHnhGpdz8ZB6NV5RCd5r8QfTJpJlTm3k1EcM5DBp61hNPd+NJ5EGNpNti3ZWzDZO7Rc0wIeVj5e8kO9SsIF6QqgT6mjKTPKytP8KvjcQWUZHY0sOuJMwRxX44WCkaMso1TAJTxYDfC+IBEEq3Ws0pdD2kRlNZaVMt9KxU5tLnKENoGxpdj';const _IH='c48699cc443150265ff176c0578cd92b2c234f1b4d8cedc486f8f03151b9a40e';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
