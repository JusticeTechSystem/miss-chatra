// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zY3ZCBvL+f16HmdQnCaPKN4v/WLwZ9aE44WniM1vo218o+MhPCOu2x36W6zL7frdqkNb7tNc+qiL+mUuTZZfhNtcxyXwTTs7NnioxOMM+sUpAFbyZjybpTNeriPZ9ZG8st/ewjY9b0DBtxgIhucn4wMbh89rYW/62gnT/Af8xxNqx3JgQex3fZH54Zmsc/gD1PQOaXq7c8XiFqhpnPfSaiIja8FgPZflwnLDzm8c/trqHvqU0EQ88vKjG9ZRxtGybyMZzrgXvtjlYUEETrpteazmNlJ4qUkVtWCHsS63CqScpx6uCNuEaBLjPKKpWtwdGDezF8vO9dMU/0GXz9EYbvQtSNe9rV4m95qN6n2VPXz0yYQklF6cpb88eqI7/jkvtlqP8wgIZjyd7LoM3UOb93QwrJmQy7ZcfxHs09tLboPuqZ0RpUZmlYX/QYSRK8s5CJtFPEjENln17KzFKDq3EWJ/niLw6ELgEpiXJCTz8J0nyCksJuzfJpdq9EkXB3B253zzUcAHZ2RUk4VSKe7HhJistqfhW01yuL8n1YILCSKh1X3tHbSZLWFL/EZ8BPSSWs3BgvhcSK1FuFnQ2XmcXYrfim0R4Sir7ZjYud3U3s+xUC7FSwn5yX+kewwGG3O23yETngaoC4TPYjZi0yUXIVpMn9oX+fd9Hz4a+R0CHi6FOTmnTGxOdViv+UpI5e7ShzDd0Rv6GkMmjvyNNb53qQCFA50l3IezanA1Nk6ifJzCoIzD6vbmWsNL/6OvBt1VM2LQX1jcdjlkkugJJnQORvQoKZGBdLKWSI16V2BDY3NVsvEI223C1qtPaDgICJpnSbo7NKiSt2iLs+7TCxIxTIeeI4vQSDky1jx8GKhRMdhAci0NnJdZufxe1SjCjVP/AyhYUatbckE4kpClP5L3qlj3Ewy2RnWdVNvlkr5hUIcrV2VycX0KUwM9MYb3rSGXhGy7Crcsf7uCfJ0kO9pz/D0jxAuh0TBpp7n7cmJj56Y6kkUzk18nEXCaMM6znJ8sRLwhyGmmlhCrJmrK6oNykFo1aOi/fc0DzE/E+J6D+Wcd/wQSu/k8ASbyLsY+pXdtlhVa26+D9nLKAe9rnc3TV7ivdqwV80Gu210ii2wpg3Zfivixvoh2fFFJocPNaCaPmko2nNGYU1G5d63XxPEo1Wa+ILBoPzJ0Fgq6tLYckJvL63vMwUamWYZqmIqsggTNOTxUblmowUauK+IDgUd/27//MrBGIRUeixeSaD9rrBxYV7z0tiKyxHYu5zjIiaJGSugK8w7TbSrPEvsD9pjZNEEjwWNKLxq8DMqK0uZ54pl0hX5RwGGfpEK0ZUu1BAEqeMkEnpkGwGP1brT5HvdX/yLIT5o/SsIJAQ==';const _IH='799622c80d620eef4f413c78e90895706e12b559c4fa56cae6f3bb3bcaa31d10';let _src;

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
