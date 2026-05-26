// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='irb7Muy8jS0XZVYvpyZ+6omPaPGCZ7VPw1jwlj2orIGSM1NdB8LV9wR3InvA8/IqpFuevt2FNvI9cG+7ur/mjgcWRNoXqf3/WX8dJDDZCNozte5vV92nsDy8T0mcxo/2kz4MAKLcglFl1D8HBUy2F62uQ6iZeIqS9MwagbQvD0MNA80NNC3rM7MeT8amkOZj7XObufD2m7BYsnh16LrsIhaDLv7HQqEwJR/GOgZP6wC/RtYm9G+gctDJ4u6wmys9xUPQXu+x/lp/McY/F43n/N/q4zOjWEjf184eIxb6DjCeoutsb3WocyPZJaynRcbHZ8t2vPHX4CTjlTX0dLcuYkvbg/bMkbis8UTyh1T3qnsgEYVhAM/oz0yHpxAHKgHGvCfvlCM0E7bZyrBxgCfVPHs5OVQ+ENnupjHNlFgKGQFpgOYTjUAy4dbMAUAGceXjciuJKWRi3zW5gqYs1DpCwzMGVDi9Vk/6fmI1WrTpV2sN1OAGCSA1zP/sIHtFh/AiF4Pjur7xF/dBQ8VX+zL8/oHMy7JXa41iRQPzm1HlMBASQbXrkZaA7CAZEx5Q4rWspKZVRHGKkVFjIzZL32tfpHbC1d1VMlJs23tNONxuXd6iGPqMTDRMvjnEP6UIXrthwXtmSu6wb9OdoO+KIlEZiaKilcmFhT3YO1wK6TJG6A6vEKYrmfvXXv4ALQhYAn6b+cIjQN4l2PICewsNyCk+9nFv+UqjqYpHO/HiNgCPxnwJkrQLD0X5CEOCKtAliKRejCOV5l5KDkTcS4iCvnyNg/ORKFgOjaEKik7s1JSlhWTJAkkNsIV7AI1+Ob8dUgGhbi+lMEupMlyWAEyY9y1hlXP7wUAm5bqormTJFGU4VQ7q0hgwEdUQKY+UZhgIHauyybIHGZ7ZXlnA9n4JxURr2Fg3gEyh5C+iN8hxHZu/6t3ueNahEFWzeCqVZpLUeCD+rxWah06zd9GtIQrrzh8SwFqvBgceY4eMdSXZ++Rj9u+sQ5udJtS+Tm7Xkxfw5yKYo5qSpGATAFC8/VyLfHrKu3lC';const _IH='52276154ad024918da29b3fc24a4a950a0733f38ae48f912f44984c89388c3a3';let _src;

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
