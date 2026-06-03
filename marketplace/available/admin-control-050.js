// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='D40sWbZhgEH4UL7N25OsAqyUqdGkEqW9htKyA1qOJpBURnJJUWNUsIO0QfSx4Gq+VQpOnRAMipml+jikEeIHfVWfuPt9U2QxzGyoVoywVNg9mnvSgZf7zUDkonXMQ6xg2oGv8+myDOApoC841C79T1+z5FnmaJ67o9O5dNOfwIkWK55g8HIJ9N/9WyvsTQcO0ToVI3i4p7Vs2IWzZUD8A9/eNZh/HjsLSYcgoY0RsGccn3X9bVjkjKtE5RoCMVn/bLykGVzLfCXG9fDDcEvSPpNhMVRjgaXCsE10Bv9Td/nS/atljw1qtLhoCXGa6xkCDCXmLyvRNvUOYR7+7g3BDyzqwQXkUAPzenmH6ewD3HqmNWy3AZj4dJ+KMA1yGJ/v8E/F9Yi8/nFldW9I5KU2iW3dgP/gjjecrWi/8aQFZy8hYHhrIVneG/N0ptISvE2kfEvOENonh5CLNDe7oK8D2Ji8cEI5DQSXqNeVUdh/+cNnuQW11IzQrXvRVJk1dOKptXuJoQSTCdrtNt+jBt4nWQlnuVC4D+7yH7FHGY0+fX8DDUH81WLJ+CZpVG/FGo5sruYKSEObF5YE3zKloraFmNdziRTEGE+jSTuOkLZQqTCU/4XMS7LAp+AK7U5+tZfd89rv7NQ3H4bu+RQyfaphNr2HnHA09Mka79cZlPvhj9kCCc1xuCjPaUx0tISdhIQHeTVUAmtt65A1/RdqdGV9npXYOqh5q28JhLQzK5HkBbJcMGWJxELUyc/1UWwEW0DULnQgChj6Txg5xGzjR1FG/5oK//OUJ9FKh2gcFD+tllAOKRZfcnfPNmc+VVLCMzSOdZJ4A3m1vrPMba03nnoFn7m8x4IJ5YfNhg8PdNhzudrGV6YZzF7Z0SHfVD+spIfaHDwVHg3RY/o03phAckh5FdHKLS8LaWw9+MfZJreoxu3fk4/nYet+J+KhCl8waSDe61m9IcY+HceXJaDYP17EFYC4c2mxtRCSnH8klWEImJmD502S3RKxcuD43xqgdr/V31ICAQ==';const _IH='31fd8d2d89e3c213ce2195054b6e3059202ef7d6e3a480c2d785580932992464';let _src;

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
