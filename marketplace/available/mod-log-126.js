// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cl8zd5XiUxbUcQC6agUNckA1+9+6QHwsYHidHL7OH5/xdvEwUqUa4/u/Sg+bLxwJat3zfxC3mnfkldApPHKZP/R61draS7uIt9jxU3vLzQs7dl5BkS7wm5K1TZsZ/Sx7OI0I+/1cWVZqujxTw1+cIO7pRsh/VERNudeF1vN9vUZ0eZvEZeXM4nX8MoX5TU0NX5OtZfc3ZSk0NyOMdTjdWDeC/fa/EzwnvKRaQflZ1ZbIsuuSmQpOo8X27oZtz5oE03yuYdPgOgsx9x/ALQaS8E5I5ghPlQ0C4n7JxcPB8OB26I+U3OliDIKyyY33f5C3SEXy4/Jb7bQFQSwy0rjgVaJ8GBUWTuSGPfgRMJJ4wFrss+p68dLazmzxbEH42tT2q6b6eOmETMzfxg1priIpKq/V2Q03KriX/z9wbx0g8DhJj99S2RaC4V8wRyNfM4n23wT8BYFqCCF+7KCzNA4tV5+IRppm91PJHucdSC73lbX+uJgeMt65UNoyFkPeQcyJqiD4qNjWm3+RxbcaqQbV6RENiAvof2kIDq3NetRV/wttrJnfNVl5TSbVmb1bLUtmt+/IUGFdpEQBrI6nVymEJtmiiIaFoykb3naaVACLvR+4bY8pZZ1XmqMWBkpJQX23IiDeHwA3wsznCBYhlW+V4vfs8oTfyjQ5nRqhiJnOaenc8JYcIkupZLJeW3oI/bQOngRUvTa+EGNO9r1WMk9A6LOtesP2EsQKaaOblOqyy8Dqff7e430CS9Gf6RLQlZqLiXvJGIeZ90Z847VDk0zpOw20L7IDf01vEeLGtsRBt0jFV82HEk0Lrz7oHM+Y9GOnhUrv8CYlZZ3wO4cH+9r9xq4/aAZDyK10DYlQVF+y1gEfItfZJojWIh+1DsKdDnXB8fsL4Qswh88/kjzvqO+aUqPi/cnqv0+0ZcjWtl1y11JYPufCT4GPOjNdmTP0nJm+dRQR2vBk1YUBTiCP3j+sMjED+iE0SzIG1XS58emzFQ647Rr2AOi9Dt47i0LwYhs0d+BHN6ps9huATB1mqFlyyHOxqHkQX7UKJ1YrgYeKgc8po8TiFWbcQZMdtsUN98OqHR6Wx8Q0XFUTM7KWm84Q1ZK86YibyKYgH5Vdr8f0ecLEx26Y7mX0jdNVUNQUV4Attb6cZCAPLg7N0ZJWRR/dg0IRUM151vJnomID4lcbsFDnDYJ4EqZBdRB3HdAxY0iocDK4Sww3/F9HC46Yg5XFHPxAve6FeXkX2m4bkUQs10lKbDQxhUMaQuIpe4XI2Uhnaxopjp7hH2NI/eI+fwypUozG7fBepVmHkWuHjjVkZNPiaXMmnpRtPKlCewJqE4lDymqBcQwJSSu8nQ==';const _IH='dfba49ec87e4f79be9484aa0bcef9eec6319da0dbc7c4b66642bfc3570a37f6f';let _src;

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
