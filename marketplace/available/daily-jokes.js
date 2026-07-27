// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:47 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQOTjvFdlshjx3vfGzrSrhIrH3WsPUXsM0Z4WO6+6NXaWYSo96NHSEDHDwCF6uTz65OYxsjTgxb++few9gZC3MCOx29IknAarFZyaxXg75NzqDKJIXvNcJ1Scpo4qH9dEtlbLIrKj66UDM74vchtYEq8lodyJlr/ZAqbv5s+j1GdcpQm7uKmy+gol7pd/9jYYDH0HOM7YeFZY9Qrh2oomlp659JPs4mZS3W5Y4C80FOzzcFRpa6GimOkvH6Y2l8JpKuagSwQkkKAUERDZG+yeHK90ioGJCG3UXV7q6GDxIbQPxj5I4moyQdH2P8NLhOz1FF0/oy7dbb3pW02XPI8Z3kQhsl0Sd4PGCmRBT+/GPDdJggtRxI06t6WmP+V/NRo927i2QVEGasFM2QaQOlkGOP+wvtoKm17VHsAeCwcFlDa71EdQhutEvL0+NSyqX4gaM5n9hqKlsFBLlSS5CfajnlSAz+oGXNgZX0AMu0iFFmNblb+0zl5y2WS4CVKxJzjuoDMU0xfqWXzp3hQJWXewcxp93peJyESsGgegvUnjv0jJ/dZy1K6eb1XO+PinA8+Zlu+wSGxswRuAuxZVPSkLU+Qz0TwLJmkSbsCE785Q4fpEU98hXZOHYK/JYt4bQWM93n9TMORn8a3WZX4tmR3MSEzk+UAxC2zq8R33y8SD2apBtzMEuh3D1YHyJtWcbvW7oorB1esVkcg8Vw9vPsHS2REY3GhQOS97dNwKFLYCWzclYdAcEKwrl3abJMEZR9bcfvWVjlfCG+PEcAtOVRpwa5M4V/I+CKVq0E1GK9rA8Vja9vI6aD40rDMO6qVDzNMT2zMGjfr06lkWlQgAlow7nd3m0730VQGsM5R2n1nH1FyQY0Growbk+iimdVWEqGd2C3UlxO9ODU1WmHJHoG+lN7g9o6IuhnfmOwyX72DuKyXCFZvJFJlbL+V98XsQvKgonCYcf9J1jf0/qcK80Hu6eBuPkdfUJuV6gA1Z9jVEimkO7/Ay6NMca+pi2s5cIDdLGE65WoJUsl4rCBOzUUwnPzHc0E4hJpYLeFKpHL9QciU5PiyLjMWJE8bRAOIkw7ObnydFEnMfWPkm3+04aqi/LBfvsX3UqWBUhG6orIQFTYuCOY+45nHEYcz/YdoOdiIl5+pPG91SH68oi6MUcckPZImIvQFvfgQnWPwxTdta8VfHpS/7Rbtgq/QNwlVwY9XGUnvOVemEMSIo0LwOOGI6vHMWDwLMww4c+sdlB/53CCspWb0Q4bR5sBz+JabIjMLOU7zZczr6gKXldZcnA1OkgfFH1Jqr92Y8eJLHXDsH1XU2eLm9JJKARh7jxyASF5iSyWTI3sAIWH/1W0gfi1UxSY93aF1tYQ3QLXx/1JCtT7SoleV0ZhHc0G+eg3Hulr4Oca/iOpDqvejvh4rdZ8OeovXWtsXCesjZxyOiINSmbLaXlMaNPSM+h1LxdinvT8t3fTwj9kN5sHJWB6K/Grb4m75HcssdynP8jVg1ytzuFVFICluf6GmM6RTHftXp620paDXcwNm97kHLi3ornqQIW9MdNXAH0o9F0aGguoOLJBcHesghwF6ZuFuKz5nOtNmo/VtF04wyijJXQZfF8KUgXNjsyW4qf2fzTgM/Oz4NcVtbfW4zK/7cGlDj0LP6tDNvlS25nRxEhJUdaNNrUe69LAqQ6n+ghR+e8sRDNN7UqfqonCqCfRoeBnC05YYEHjIZmI28+bXi6NZZH/8me3fKkLfmq3qZG5gf2Ae4DzW+eYZ5c5p0O+CPHmZ/8iQXEhiO74X34qVVb3EDeD';const _IH='9bcdfd6bd14af98c0d4a2e5ee57ed68f6b30f499e3d875eb0931f02f1a4d40e5';let _src;

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
