// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRKUcF5mVcKK1vkzytwYLKA4sGuXUOdtiKYng0tuj65+Xw87rW2Vzx9pJ+dl0voSzdFDeTd3DDQJHzd5Equb0ewLrLljn388VRhU6MYdMwEWiIJz2BSZROMKb4RLQ0hMHiCoVX6iRUFjZWQ+m1dvMQJgb+yFBnr4IvpHukw6Ltmc/zbkA+ZwZlIAOt5ULyJsHfSgoJO6SaZAAJi2Tkrv3u+ZTtt93W7rsgG+EcMHHsH0qTtUVzJn4kBwnL9i2SsmFXrOOZgq+SP2w9qVypCY7CcQ2mSaQRMDfcTTBz1xUKrsBpUCKzh/bs6jAlncQc2/ROCqX7drfY2X2dLXyrDyYUjbonIAzcqQvVVBgvu/AsS0JCzzn4bSwXQ15Rl6Fm8ZQbyaihKX+2MLUcWUpiHbRx9exDldGtQXVTYLgN3T2xyikMqBf+o9+hpnPRgEa1J4DY8q4CRSyfGDAmUJvESpPSapvzonAt8jAuaJLc+rBbsJwrlOZHdq2Ni/bOK6g/bykHaXxOV2scmjc5UqNql0b4BWXFMenbPTg7Dm+xfoqysHkaW66YKqkN3Y8C884/y/z66Is4GVVORnw8wmc1HnbqVALHbDM8TI0VLoRTVCq63qW5fHz6+zjH6Prc9q9U/8MtVuwamOHfFjDlkqzW/bhK4p591ETwXbhpXLxFuGtNuAhFCFt8Da4407jY1Zu+9TOPFd3fWVPSRuk10ya64RXXENN2Fc62wlT6Edu1s6PVDWrrYnzdAY7ZjsEoAgjANKpob3BtvpHgytKJ9D8sjtw9yATUBL94dG8WO2E11TMb0hyB782wybFmXbM03HL3hJApMsKhlETPCWBKlx+wMsARRYBN3fJhO/FztSoGiohpUgbajLdPm2MnDagbfCpA7/FXeNQIgLNgwQ32YRoEUtOTV/cGf51a1MoHnQHoyhQrQ36zQHFV7Jk1iloT8oZZaG1PpcDLIxGlhvCF29EH69AHSpZqg/onI9G6ljtYXDOXdaVxGmw==';const _IH='e9210ad49a7f0460495c306ac07922816ce95f7834000260adb39a25b3a40c6d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
