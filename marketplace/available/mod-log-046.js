// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EqLLzTptr+ur2lJ+aX5bdp4ywiR9Xdzx5HYYHizm5iT3TRZJ6Cm96TZkUbxBcAgyvQa2dPjmjz04oxIzClgT3gxEn9PK2aCCB+VWDoHyyXrUtzgLiAZPiaaezYtDmE+k/OvNhvCJE3cuYhoxoA3E8WqU023JyUs7vQt0UJVkJOxGREIfL6eRFHHmTyGrUkPGqyh5e0Pr+W6UZoAgiS9xiH2zmm6tVvdZ8BDjbe2phq40OKMoNW6EZLny0uOihyTAO+gSABQ6gY8r8P/zamb8AJhYXcdjQsec/reZXGMTM0KOO7saXkHbe1VajGKfqvZqz3IgT/8QaiQTx0zrw1sifBWaoJjGUw2nJhgK/7p1O+Qi+VAw6glQXWLAWVog8/jzYOmMeYYYUEdJyzVrouxSE3/FAWsDOhGtWEOgWvOGKczoqqYEmclLc4Xt+YnuTc62oXbvIsDFZouPsD08ORuNkXV9fJn3G6nnYtnCNBPZV2Qu/yxUCSFXnpI3L3wyKN+vlCCDT8AgGDuknUC2PoVNXPpBVvIrfjuyd3BCjcW3LAunrh9S+X5dmqwejkk27VHE4W4XtoA9DguO/bfQ9wencXVQBNo6PDDeXEqWmO1g9sMgchR+ZFRRkLLGpAcgXkkjgsK5WIGFlk5tozjNPrzBbveqK8s/kO6KW8S5PtZ26EW0NNKv09sVxHjDO1rYFJBjcUEIQ25E5rxWwfHNFvbSxzhf+iLh6pntz/ikRyPa0ZMkdDRZjVLiZ8wnzbWZZvNTddDc9Ru2is5fviuUICkBGQU4Wqs0DT74gBUcVJl9g9+m4MrrBU3IioDWRHk4gqu08D7VrRyEYn3AyFSZ77t1oOV7vy5lJBNfW5jmVZ4nsv6kCFgsI/o36z/Gs/jVFE/vRbj0/WrZu/XxZ+zYj8w8Mewh1Eh/L9HmOE/+4dF84UZCoNpoLBNqQ75O8OO1v92EhQg/noQje45mKE+UDP9bmMfMZ8G+4/yScy0fdfVqWqOfsX+NhrzLg+kbGg7iDp+Ux5ORxlf4E2gs6P8/yxOxL/F5iTFuOm2EUbmPa+NuaALOS3HjLD3QrrpUJ8viybaT67NSAwMU2NCFzx4g/kpqphG1BGAp/zUBOsOmhBmN+aCeWq0NS8jFhKLohaznUdY8Dnj6nLRRSyypAWVIsBMY673x8fEDxz0kqt+nLfhxgIIGlOqh8VUe/h93ANmw+hSZqYjLUVU065S7xT0ioAmHDAlsGnDyuCJpjUwMeivQFHqoYHm/pDU53knDvsEP/REUaWM459A0lFT2oXabNU13VCzz7kWGh0xCJVlHxWpX4WtW+vX2xQh+bnkwaKvtddW0gIrrO1U=';const _IH='24c672065a1c571008a1c6bd82d758f1ea79784f6657f46795151a3e0acc2322';let _src;

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
