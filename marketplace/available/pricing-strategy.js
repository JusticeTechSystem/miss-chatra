// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MFHnu+/xC4Uwsl2zIxBgmJT5cmXCamUOFK8gdvONhlOubVirPV8yZujPDBeE5tuEiRkhqGHLEJq20wh5rAHKptlsJi1mI7QEk6dYHDRWriXaTy+Mz5NbWTK6Hrh1Mq0QsxV5758q+YevHZqIu4A09A7tqqnypOmdG04ppfR46/PMKBlCmEFDPEHzhqSyt0Z24LlOki8AsVT/1UMS7CRIQCGqZUBiV0xGW4CHhNVz7FRicMSbNTNoekk9XGWCRp0Ba6b92siGclkLm7bzkpLv2s1Nq7d6bVbRxMLW/5TyFttHUtupMzkPHjP18C6OD9dNwWImRQRjTfnpylYVFb/1hKqNzXgzFwcp85dZP5fqtRtBnIujgob560pv1rEpLgyDfh2P2SfTo92T/9nKwj+jzYeZ8iMkznyWLZX2oGY1yS4IJOFI2fjlAsBipsWMBywnbhOFQn2ZQwX6c+lOMI8vw9G/wXsX35pEmYpbvfnTJS6HIvXyX+rD9IRPheiOmFpLEm8J8m9/PX169CymIOKzEEozp6gk2gbCUOcwYr+8A7r9ZZD8A7tRPzykshFqxsiLx7Hw7gRNT3p6cEeZwtBexqmkVqa+J7wHCHo8sq9TkTFItPnIOQE0BCnn0VBEuwneSlmGkahOGyBPcdwfsfPI8JbSV0V2e011rT0A487O8LavsqfznFwH2DvGD3kdwKRuBrXc8EmF4XB9pJM8Zmk+fHYrbvG43IUdDQpNJbYTGlM808mBlmoiA/Uayv06L/i67AkTYZVj6GfiYDqBDxRGKy+ZBP2dfiB9htADMea4Kg6Xvos5mkE3RuJ/TtYE46ynQNhVYj5QOLPPOJlRvJxhitSbMl7kxgJk0c25YhEdnCA8xYtAdPRRWXt59IEYmt/1d1un/8vb8zBNs+aj8i7CEO9Sv5m4M6wMPPwRwzw0CfgqbG7E9AQkjdCjbqyFOg/bDVKReqRSqenk0KDK1uW0jZnWdqSrHMWiPGj/tMwpcM19G+darKC/YoDcDU8VCOIYqYwhkRjImWu+50zuuul8gzKzIagoHUOiqXAr6vNjskE3V9PsdxhI4/sZYBZeYqxpxJz0j698IPsDXGwPRv8jCQffdPXnO8yOk/F/HbqTb25wCbTMAKnbijs6OdaOaAYxRT6riWYSVOpGu5+cfJzCXJWj0QZHgFl9nk+OO56Nbucz1kJT87TAnetgg5vX7799kX68D23FjWTu8PkmC3WrS9MnGTDy5qWohpEWX2l5LD45aqvEB+LdPFqPXa21D13p2HngSpLq9dJ1WciHmKwG4uZW6+BMStGZDxkmpyCSPO4H/AYA0Y5bP8EdGqQAaUtfIsIRTTbSjX9aX6NBhQf1kqiyOixzlxNIxWDGOMkW88miJddN3aSwLgTo4Jf83uvpeTtBcC84EybmCYs7tZNWbvFXU9DckUsb0Ju8euucc+KihGkGy3GdvZHPxMY5IJ1zcb28LyO383cwd/lASWfHNCntQrB/9pc9Pway64EfWcxqruiVG3KUzAcvcY0I+cr9gMaHjCg60wvn73/Ev52IA3795gbmLSTgQ1zGBd0BK9h0PD7+XPnPCtVKpeZsQpuU/Z4CQisqqLToghKqm+DDOGrfh6Rwvir33u/5X+gMEkt1QEiWfKqJUTymJmR1dlnZpfRbq4+/KQ==';const _IH='7a01287a4c75f38c02a8f6eec439287dd4be60d519a2b29c36c825eff7c5581b';let _src;

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
