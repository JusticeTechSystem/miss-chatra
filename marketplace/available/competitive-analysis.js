// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='npBja4A9ad8mtvOOFGQdqh81e01UtB8ksxs6r6jfdvlkuekZ1EKuYAOpY3b24J1t5U7j28TNLEKg1ywYRxV3RKGdrZGuRuJbXV4+uozLxIEND5QutvfALfAv4FMP7J/OH9M7Iol7VE7jtxtXhh/uru3Dve6PqQqC62O2T3XYany5JP4pBn+BYK5/yIKDFj371OkaQgmZX27qBXr20asJDdWHQX5lkzV5rKiqco3JeBqiXNwpBko1NaDGlyjR46KUlzR45KrEuTWaXn9zI474vPZJELD8lp5AuAbro4DB9MEl/GwiRX6aolZYw8AB6R0V0y7sqg16RSCjnBH+C3HqNnjfUBBGrYHm6dSCicPTDCx44e3gXbD63P1HLqwmXNw+NrNZGVump+P0DJgfhIBiHnFEgrYMvAlcQIVhrbv3c2/gXlIKW+W9B6/ZoecD7QDeB6VWw1yNwekFh3isswxKJdU+ObWDdddOOGPzFKFRpEKRWFh1razTxCd4ZEmION1NjQNER1PSYAFjKKizF8p8Wf942ykYvD4qtTpVryJXrDqCAJ3Q+uDaQh5eR9vNt4ScLnCHO93hfPYWFFFzq/iRYUlRS71nmHPGHlduO2HFvyM0MLS/fgu6ZqukCZDZosNUDzVZU9cZToaH4BIMVP4/bBZ0GgPGScUcyOb6CT20I2uY2pO+F9xeXH0EeJSUAohvrLgXMsswC63/IMEfHvsJNn6skwWBVxqZXaowEuM8NvOA6CN30ks7akS3zG7RFnMCfty3yfUy/MA0yAdcz125wf/aJcaazfCXDnEbbl2cNdsInrkoywo4q8DlWgcuy11zV3z7ieFt6OQtRuEkV44WY1rtUajPnry+ZO8B5GVr3Yd08mEJ46rf1xVk++PAPRfTReNQAeb/mWQ31M4vshXiiyw48kRY9EtcpFVNfkoBDGMVOv0WSatgdb4oIldY4k+M9knztaAzaDCtjHNZp/eXkzYlW2UEmi5BpDrYXUAUjfTlbLTMPbgcHJTFjOSpQA+CkFUkzG68uvObBIyvpyqsP9djbYbL+tIxkfI+8xofNqgyMRW9j7IY2Du9pFBVx1/KGjqsU0fqGf+csyOTVwAOUOMYWiXAm6VIle84n6yhdhnEzZ9qWX6tEc2WUNW7Hw4wiBxTUKH1WFyU32sAchiXu6HLJO4EsrnXWKk5zrpapQcp0v7u1cXIw0JMLjQRRSEQsz95tfsYhqnPI1uzJ5y96uowVEsKLNs+RZrte4yIavkyBLdaR2cOotRCbxhayx02ulNF/wCe5XxmjWV751gUKNsIxG2qwBMkoERkfxM3arSW4lQed6k/mbbQoXj1YW2580n9Yva/Qf5JDX8BOuDh8/Ezyjxx9gy3SR+jWtNw831pNLqZZB7CTVIkdNY24SUXUjXsxX7joZvm+Q6/s+bNr/7zjtWmEhblRtwpgGqu2aBHCr3ugOzKqdURHTbGAbPyv5bnJBtGdWiWyFeNTlPpzdMSvwZ1yZU0fJR8JyT4u8JLNvKIzP4hjP8NwZUQAvq4XyoBNwHv+0YoOuDeQ08dIX2m7ASsxi38ojb1SzLnMPMngChmXIHWGMg/tjbhbktEkp7EBr5I9u4sl32sq0hHAJKvRKPa3bU+WwYSA/la/I//CMwWLgd85l5CHDolPC6jf+UIjjpg+pZs02kR4MwGXh5tcDVAjec16vegQ9T032LC1Qq98AK+lMuTbhhBzlub3Pp+1FTzKMLCbCwiPYBgOQgX7UR11hLugjP6pOWdDClO4x471YvTtg==';const _IH='94e73a60977d2be03e09dcca6c41bf05d5ad7fabee666470f26e4ed57a0b93f5';let _src;

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
