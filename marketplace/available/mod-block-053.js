// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0ddajCMY6XdCaI+BEkPd0BlE5Mdf/JCd1qvIMrj8mnnu+nUi+c8sTi47nN7vZvLm/V9KESB5GYYm5VPj/0KhTmB49ldkocsAZzAl7+uqdD62XZrYtWa+Y2bPTLdnYJONBZ/jyZpbMLy/mFVsJKV1B6jlbkMw3XvywGErlwSPk4erLGMe4DPhApliyDq5m1Fao5ahITZF2XgMMe2ZTJHWS0izJ0zRCXCd66Rq+n9e+wqbvWUrBFun6H9X1Cb+HqOrl39rqH+OY8NyKUIiSpdxToLqoWTQv05p2bYwXolh5eIGr1cNJCZLanXMbf9Y2eUiukjymhCq6la2PyF+aHBnWBn7qzNMyxnzzF5uUUXbV8a1UlcA6rHpfKuPsjHTrW+acWP44n6RsLzGCJElKuze1NezppJL71u0ASUEoFilFc07FaHRTQaWTWnhKET3kmVVxzWOu6EmPm8Zi1REsy0YT0p8hxOt6fAquTT1O/EkpDzN9wxRjaERo1chz6qUsYUKUkqCWbXXWdoFU/ztD48SDL46hy78t7E/rRq1hJhQTr06s83phzw1vKWN4Ocm4mNKcZjtNYyUns8NC1V9V7zFQpiqcnHPyNE2BkcuGcRI4KC/9cnE73KWLfKfNVkH8PO+ZTl7aGP/mjmofFxMJ5Dj5ce6ueiMo6MnQmS2WPND2eLnd648TSUEMSKGhmsumz2zwdaKI9S1j8BftOEc7zpoSOBesO+szA+8LCR5FM/QGV3G8nkOYmLasUpPtTYVjLu3ejEx2iYFrsGs0S2dMOfQuIdeyohmf8enJjQUgglOOmBkGozujK0teRVoRlahvJnV8431FDfGiaZkjprGtXrvHWktrZSLtW64jmap7wE9oaAytcB1naDht4Z8ZeON62XZDDUTi7mdWd/WzcjC5lDS/E+imFK3Vl0geyOzcW7eO9iB/8uu66b0dAKAX1XG7NV0098WVo0ZBRL6+N+YLuIlcHF0MnlL2cBkzNO3m8xMI7XYa+gr//KLOfnnbudqBXvJUy0psIJCmg/v267piqTcj38WW/1AepzsuMjA4YgTNezyeB93tNne6FcOa5+o7sMc2aLUiCzaKNYABm3HCsm4/LJHmDDXdgv8fulA1Bstk87COCFClJqhpTlwTq1natvsw0TGD1+tRSJp2eKTHMJ+HfHhwEGZDU8OhMqA4OeEGyy47hC2nbWLC3pD6l5Q6U/9Nnjwqe7Q2SXat6Ifn12aJAEjmJKV5eM/QspqisQfHjLykbqb4qttHqTRzgdTf67UlLHBB+DTTQSc9GkVwnzE9QJo6iOyd0OhcgdquHfMrtt7GdKt/9LpvfMmfYULIRc+zb8uB0TG9ON5ayVeqEdkcfw2/8lFMLGvlw==';const _IH='02831e2f5716dfa459250e41652a897bf19f6033c5d28d887837b270ac04772b';let _src;

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
