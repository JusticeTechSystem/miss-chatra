// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OxkvERGaNMiSm91GS4XG6SJAHEXvc4zvyTDIjs36FOaKhD//Z1/suouMeUh/AewGbFcYHqGmwltEjqIou8lnOb5bIQBEIkv74ikk+H91CygBPlLUg7jJf8BGHBJJiEGypEQc3KunLxg3tKU4xuNaCrbfycmUOk7NENjKRYUenNG6JTUINd1pFR0jh4++h0XtZAmjVYld5n53jABOTR1AdbRkJ8qJBBdR5S6+98rP/iuhT35bZcPRcdIbd8vNysneaWF+JWCGujRFIOXKmpWb+6xba5dA+FT7GFophXZu/2av0trL2VhKDGJmRW3UPsABCIPI8moV9bpq7wlelrevPkjlHq8rz+7Hk5HbOfIgZ3xSW+f8DYe4Jo+Xn28wFljx1QTtjP6dCZYhMZmqZ+RydH2WanD2hnG0mdHl8v3Lo1yd0SaF5nb3rR2uHkIHTpFlcG4UmNcdrFl3nWqzP9+/S3Y9niILiuXAjsyThnRizPku6iKQLT4Z6xnYyIn8OwhM5C5N07/7jrjNxZ1AMienwr1EjlIibE404wyJDrzOi1dYy9cCvDo/T44gtLtWRScWyihldkOsbYnb3PIBcvMFafF5wIpl1GGS5zj7IFe1xbo1JfGSQn6mC5PqP7sqEAe9LBPaht5mDWlXr1HqQhgry+uLf4rDU+b/EvgxsKRwMFhv0o4+tXeZ/niQ67gdidSXLbn/YzXQ76P76pA4K/MOva1/h/hvIDddZSLYdIdv1YTqDr7Ojfea6QJT1AJVGPuTN/zAqOWxaElgWxdod2LG7hGyK2H4vU+QaJWKXzcsp77NvcKv0NEdrhtqyE3bZTYs0xzybhCia4wAWGY1Gvr1NbEbuBR5DRla6dF/Yg8/DASE/7MXVs42ul1bSFHWrOLHA2JsXLt2J+Fg5gkBeNa8ehxB0dJtpMRrLcNg4LqV0TnSzTsC0rf0r6CD3JB9CBCJGkS2197I6jaYZ0dqWnQ25W/IXviHJWlaq24KCQ==';const _IH='fb33eac5b618154996b3b557cf8e7b9e2df2b8b010a0deef5c411ce051148766';let _src;

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
