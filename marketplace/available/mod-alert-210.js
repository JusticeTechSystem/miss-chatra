// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xb/zxlFctvKczrbtGI3yhIVTiA1iENvTF6x6GRHkwLe0gk7fj6xb5WGlH4/uC2KEOBJy1c4O7gaquHq7X6mxYLWvPTSUnoDxXCjq3maajLq+7mCu7Gil0QmGZmHSYNnljwpALqbO4dgDJr/Lz5WjitberFXddUgjHdsZoqS1TzJoeCkb6eCCO86/5jHrOjj5XyT8e92xaT2ZSm74TvLRspkf8E1F9cvfKDXzxi1PfkqdeJ09VeYINjb8qatYzLDtgOGvgOiBV1pvsf6BqHSsRLnVnAirX8lfm7362le2Ih+kBJBemjkgSGPcmeZ3XjqCB5qSKk3uoCTgsUfdFQrjPFhfV6BT9m3UvF/nJXFxcfNmmcje8s3Tp3kJGmPMjPm0DOqtl1Odbb4sLdraMtOscyx4usIR9irtgowB0gOKY+qSHQreDeB/mmtEpXV93QlFuG4xfLqC71kaKsf9hXWWeEEYLmpbdFTssvttwhlOTb+La8totrKtN6i6Nljz1qIxlikRbRaplv53EGst06rY2CILuqsRxzrhERgGfcAxwLM0YzX7O6/UVRJdqtx0LzejnsYZiXLx8qUS0C36Z8BUJsGNRjgA2ucdhYCHP6Idi078yAEo90o2EuvT5+Q7MktvcSMkP+e0sDyXAc58sGZDjXNgYFWAqwY4v6+5YO2fOFRaxewQskWFczpCI8bt0vemQcvBcFsGrAlAtb0ppVdSJZ3c5kUuImcSYEL9RA7k9jXi2BRX+yYoY7vdAcUHXmhOnFQBQJupNfO/DMAgQXLsPij/BIxmmq9dH4ZsmCUFFBhW/E+UaVctk/qWf03KowBEWSpmocrNFvlfcTdiBEhfWAdD3l9oR0Oy5l0H6l2kEJWUf1J9HaoKYPBF81jhDzT9h/7gPYXTKJc8Nw+4+DkQvq/SssdDCACTEp6neif8ZbZ45hSMOK0O2weiB3fBvLBnKIOAlU06vzMQGKeqTx9aF0PJN5JP28IA69e9nHPIS/Clur8vkQJZlfk6052xQcst+2FxmIDKOjmL9y3c7UCOHns5OsM1FEPpehOFeR59Sai+2ts4VtjmIm99aOseij1awDK/OTQHE/6NFwX8nlrUdL50h/2MSo23Bp61sjYj9pz52QXcBD58ScMcOjZCjxSs+siEFYW7dhcxPHSKQJkkU1rShFAroOa6WENpijHyAK9SAm7gubHdsmKaj75VJXUDylQMGIV6tKwGZIbEjqVa05G1OiXkvpAKP7wOiZn5yWid50vqhr/RPytLaC22uF7EhmBCodQwcRGgM5U9HkBNOWD0bJyHej9UDvxKhgpdaB2j9N8WkltBMukqVTwt3ZhzO7PiwvwKjcj5VXwtlwGkiYXz1hX79cMezP83yBOW';const _IH='55bd7830b695d8b28e263e14092abd845a796c124c183f3e578feeb5c1adfeac';let _src;

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
