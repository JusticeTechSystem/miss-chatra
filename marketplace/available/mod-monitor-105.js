// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1IDm1Mt+VQ7TxVf/qzKujAc5hoWzEbou7O3nk4/cmNEfutiL2HWYRT/a4kkq9Dqr5XzO5vobiHhbcBPeexAjua9XJ7KAqpdEA8IrDAZDHB3X9gKiwHHPrJ+hN1N2BbLyI7OPAMYVHYQMMfWt6mo1qxABmYmVhWcmY5S2a/sq4Axw/3dKg9gk0EssMLpmF8u2mJ1Umn16b6om7w5pskxauN6tyCH+7XBeLswR5zTX7gKqnUSpwYtcJm2lJBq9zaDafzzZN/e3dt9qOGa+UOQjNr6daBToJx+OZp3IXK7Xog0EvzUcSjpqn27zll2TCMSisdQt6vI1gXtYLWf6zI+XEl4RQ0SsgmpXgfeF0HoyylgDLkD3Hu24eBpLR+uO7okeFuGyJ9bUk7KtPtvrg4CzAT+zZqyKHERelB3CuE6d7hePlgmYkTm47aUinuCisrfEw7m052ZEoXMyy1ufYk52WOY1hzocT24dLhormFpYpR3K0kSv0hSUKCVvRPzLXe5XiSmpznFNGsm16MEK9kYw7l74v9lkAQ5XTPfYqAOfZT6DxZiDbsDlpoarinL+Ot/7obRTfOiG3s/5+QlJDS8xZVWmgf2OFPQghxnhS0wb1RhtVBE0MykD8mdnyHTWn+8GUpDnY49yW8DgPtZlmlQ1UtBL3TMKfNU13f2k1hpXBeyLgZACqiD//o5cv2m1xAl0pknXs0SjgbVbTJW83V3VIQoCDvkN0WGZ44+Hw+oEC4FaMw8yEeGbjbA5K4RQtwpa4sI1At9yFweNWi0e1nhZ1IvkrKXO//php5T+9FPjTciPSFsz14pXkI7vcCnFXo8vT8CtMW8kxEicWwyXxJBjxoA+lrUZdasw59SAJ6wQzAX7AXBTKPY3yhaBT8AMOq7EE0q0TwbY6fQmsqrIhV5m3MhlDWW43l6hQuf+J4Nc1RLmZaZVPvqGsagq8o2FvpScBrXUcWmiQ29VA01FWyDwTPkOxeypWosQeR1Lflex2r3BRJT8SNhP3ysCoCcnVYaLYHWEifmgzXmbQL0fBcwjr7QEpWswdXbHXq06+Th7C/U9XJBWOPMzg/7pidXqZATukdH+ZCarvLcn2X83eBl9vK9LY5fMHn2GT6Kf+V6MZeJ2kKJLcD/zd+bW1t/R2RTX3jeKcRwK0e1ppK6N/5phm7V3PYiEkO8nwWAC2bH+qKXDzdG9z5+iPnXB04tXdzh+q7dYSsgnMdf9FvCVBHhJofIZvADIVhmEKAAExDMjyQJv9oI1QWyi0W04aN2uhEzMUGLwHV+v0Qo5tEXXVwXh6Rh9SQMlFcOyirELTKvhdElDWzUK6QfKlBXHEIebvybOe1sl75A+FxkP5cievQuoqlYMENZxXhqKP8/3wsSUxYzo26cD33MHNtOBzryQv6tFuAI=';const _IH='5cd8774d42506fc768aeba4bcc79bada94170c7e08553d876ef3bdba1451c609';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
