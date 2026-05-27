// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8sGrRK0dLUT62s/x3xYC+VdmSbu511RO43ypEB7WyBLxW9PG0Hh0pyEdIUxrN2tKnclRmpKt0ZCHzx7r9G8/oQVAgIlfw6uGAs8N9muwzA3gSwcQ22E5tOYprhrEW7ozF+O2Bn3nmf0H3vBFrAgOaRKcgigbMxNibJZ7nKFu5iiy37dthVfmXud0vQPKJ7Vf706P3IYRzGWWyi5H5/bgrHj2lePx1+sOM64jpkqW8X1O00nTb88gJcbwFISbpiQoIuU1iD7clsbvwI/7uD8FZDFiJMoWfZR9ohv1KhXbH2k879SG2FBResb9U5yJDybT+CSg8HJzlAGJtr6YhCHpY+z66QPQsp8ncRedf4w+6yJ7DizMy+uyWuzhDa6GxTEeJOzK6EcDPt3ykyErAqmKjNvMZyJgGN+9w6UX/MSReMQR7nMxph7chIHllzuIqgncsui/Vl6EP9tVk+YkavHtWUTP0KD401EDpTnLRC7j6htFjVA8lYRst0kUBjw2hwsRljw2MxVhWje6+WuUJneVI5V6COed2ehxDcXssCFnOGZVGndmjj1qtJLPX1vCllDN2xWEbrohA9+B3y42xePxm6Mv9Kqyjax6BZhziIXdyVeE4kn6SJqeEfc1cC4r4UOjftzUKZcx63YvFEj532oHp6gcfolBUnIdu1XFvU1Io1KvaFeeYCc7O64TaucgbtytNiPQ1DsMY7nMFW0sOMQOGcRp+79VqKKFbO0wXwbi';const _IH='90a0bb606b8a801d4eb96e6544308de4f27542dfa8d8d5c921e07f9b5ac4aba8';let _src;

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
