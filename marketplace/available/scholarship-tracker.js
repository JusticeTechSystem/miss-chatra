// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Z2HjONde0UY1K4iVMlBx3If8QDSmyYeGypHYPwRt8lmuiaAr9LlBof1Gx67v9QBhTRDNwycZUUloQzDxACktTX2XI5hoSk8DoGFVAK1owhqcFxuoGPIAYghWHyrr+/6dNBmhJRvJ2nQxi7RMwivd+hzzhQh9vuu0B2QrHlse99h5Gm0BOmvQkdjTqPVcCf9vJ6x+3bEvvIWfYR5O54N7vzpg6qSSoDBTYRfDJLZoMD1Ssda5JxB2wFNbkWv2QoRMBKz08Flbntv9byxfnsG4nuzpO2qT04iNQXNqaPhjJFruiAy2Ng+btKdqeKBZFDIoSWu2KLsLCeAtmxPP3rZ9PuCx1RjO73SAATCUtq39vT0lO6lHFzZFS088DPhDeS+hajgTQicsGJXeTS7qtfIeQSuznBC+4WzCPF3/yX3O7cfhpeO/Ey/V7A+Z1PXk/BBTIaxzaPuFil04BIQPNxhTNzTIk3jK7XKcNIggnhXNb5YORFeVGBbE8cqsOwl45piOaqP9Y9OMz8porLAPi8qQ8UtMQITINCgROIJqsYckdtwczBy0QISRISsJAB2MKWG6rjdMJFGbZZkze3X+FeUbEOsaFVYX9Sh/a9zHHwRP+yyvEDSzeUC5LiAr5+UgwEshRAUq7vS6jWGUFTFFnMrw96TyVL3lFuqvzXEXYMnhbgYgpdapZi+303M+AgODz9ueDKQpJ1bWZ6sWAmcAkedZM/3DCIqYTHcX/cbAStrnESCxZ5zhVOZbDXlnCotcecm/3IejxT0Yr3wz3bpWWaxdUr1V3egmt1psdvdk2U+HIi84AmbWSJh+jNFERu1Ax5Uyzt78nEwBIyuoWwlhwvlxIQqsJT5LMKMIa4J8FTOxFsbAa6BrnT1t/KPfmGYLwqgOn4V4c3kVupB9ZO1BMfDVTokh6uE5azx14wov8cl15O3und5Y1qA/NEC7mRsES0PzY5/wqBeUFA/UyW7y+3dqwdspZz2vwrTyKC4Pc8R7wlaA1e0ckwJ6zAvx0lXHVq8AzaGbBN+DbjJCbHK//iOKboEgR5gUUDrhUMMt5WRM+qOkeECyw1lgCBNdy5aDeUoUlXENbgjTQufElm6GNxDE0DwyXy1B6hGrcVJ4pckGvcJ0MXkJS+/ZUdB/8T51vIwq9ZePoxYJBGHKGWzPcVYGsNNErpAIwG4kjc+zvAJoZxgLWOhxxukjpP/5z7tml/gb1r4kmeGd5YbNdHmuEnfwBFqmyWsMmGFEGhtFXN00AG2MZAUlwswKWag29WwDYCQqZcoXL8NjEnyhDclnEhfeqmDJxRnYuLhw3lUjRqJRjv0Wyke9zB1O15aPAV2e5K7reDaF4yQbz0L2HJCKMVvLx6DS5+mYmcbhjBCk6526jRowtmAsP2tnBbrdmWerbCO+kjK84UjLNXo0cjc+jExGi3fIv5BXSAJNQFKBVBJtWnMFWHFH1mgcTeIgyWbT3hTsOceoIIr8LCGnKK/HSHzBJK08sp29/+6W6Mn7BDCT+nZWuli/We3HSZwCsJZNL31l4TLJdfU2RJ09f2GR1oVbeVGcZj7LI2n40by/Xm8E/oLjJxlG2izK6dd8UpFQWefO2Ckg8Fgp42urcviLuqbmm2jWCd7zL493kERgp6C77jRunWZGoaXFKLSsltkh1D01zKPg5MBvaLlUMmPm08ocwu8wGYqjRTENT/a1XTht5GjVwfhZmVW7ceIscb3P1PMwaWiFOrFiR3psu7rCnXaAdVEYfx0pA96KEWmy3VMQtaVaw9ZvqZcCtdSSFbor025/dcD+5TKMmriyhLFHAB+YZWeAotGk70Ca7Gmp2LnA0yaS';const _IH='037c84491006da2d1be076435b8d7bc4e339797781572fa9341db2edad6a21e6';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
