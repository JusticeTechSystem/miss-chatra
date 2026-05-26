// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pJB5h4iTZhr9RVlZ4DIbs0Y48as6vLJc35jvGgEXfWOdPr3vacle27EzhQ0+LU6fGQ1f4c8ZsZCuzoFeu8xNJRqIUNKQhxRaZdaZbJ0aMKQJAtVoT+x2Rji0ggd1tDbpiUeqqJy8zTQHdjC5hd/ukMKfNuYcazcS3kLNGaDxDSAGBZtwFUOh12HlIyyc2ynPiM4unYFLewzDBP8xXD8twYtC3Rb6WBKRj5QZTUr9qoqyHQl9W3dDioTSPKAKCeqSKGJayqgZP9oIXzd6sWoFVYrlsn52roX/6yLF2+erCiA0NDDUlCGqRklANCH45i4Y9HHypOpBmbbK6+0Z0JoAv4TzmPawOOSIMJoEZSDyAb43yIf3wwcAfpvP17hRhuQFo4/GJBjVyiRmyZZLQ8GaDMY7Dwlf3CuTZJJ04uEpxLWL/ZdjwKDdcESp1W6Ml5DlbMt0KaR+zSKGq5hxKtAkDemaOyIRaYFaX6ZMpyGvsnk5EypOof1mrFWkndQ2SP9DPjyUGAnj3exDpkX/k1K3YTvYyEtEwAstetTks1hyr/46ArKzZQONFg8Ik3WsRYfJkADD94b/MX6Dh0q1wWn7pb9Jrme/+Y9JmYdwXEev4JTw08suy8tvXnsS33zo6O8DsDMjCFRPpANoy5c24VwFd9xUqRF110kTbupu6NHv6b0+WgkbYC5Cu2+BoVwuDiTTrC1KxuZYxr2X8crAnre+MCpXsiJd1MOy82dIJejb3cphBG1YWkCCa2M8MiY2SX1xQ+h4hbxfJQ6jKJWDbxlu0Rp0DeXexjMJtuv6n7okP+3jNzZGBVB/I1TlITAmhWHhiaBLTdywJ5KT36C3KbQYgRC3ELuQh3XHUfO7jqZmgogrkRPQswZ75oHjLIzefRFbvd7JZg0oSXdnNQAGVqHh3rKCTnTJywTCTBIuu8jHuAxOllOL6MlEKqcViYtJmnACvfMl/14XMOnCskWeMYed5K33seXQF4iEtAdAXIrqr+U8jG0F6wx41Cf34zYxBl+38leslisii+cBdziXIEf48HsqBCeOUr3JJDOm/27lA/PGCcPuSukY5XTk5NHdP588xXijK6K+B+YkoCsY8FCjsqaV5wNaxFOH4BbKTi3eYCfe6e1B9m9iwbUQAYdeBudpDbVs5gxsPclFKGTEvToa+0zGmP25eoeCuuDdUkKzayWY9YIEJIjzjGD8JlJ8PpSy4F/FxoJVOu0sG3lDXbw02p4UoT4x+2Eganz6BBeDdv8zgrDFTgIKI8/FhOtmCDaQ1hPOfKSMVJkLi3BnynmX+lghSZcJdAjocHWu2yJHCIH7twD0BYjbtzLHK/Cs3quqoNi/U5lrA/qHtjufULwfgFKE2OfURg6l6CF4AhuLfVc6UpkEVDLfeUFjLVG7';const _IH='268ce4b035c09fa3d40361302286c91d4122bdac8cb948037288177f6b0e9473';let _src;

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
