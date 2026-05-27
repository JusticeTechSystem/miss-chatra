// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='s+KLwuW3rMDLpvkOsCxfihaRAheFd5e05srJcyQZNITn2hIPKjefDnX2vQEarhLffT9+Z9Kn/0CfEVh9zPDQjuEtdWClDvj5sqZAcPUeHCofxTiVPnCVgjm6VkziP3BSKoJBjsjosJN64s+qoCyRG3+64Em2pW5J1AV9oD7nyc+g1RPJ4+kaJjk2VDYmrSKCzNEE76/EBYM47OljEqZ9yTQ5FzHEMaCGpAZlEMuxvB8Kk+80PTWDuIFltZHOTtQ9LUgsTVgj+GQmzESsw098yxG1x8J/ssxqTtAdUiF54hqV9lDh+BhduwRsEMZrtF+N3bBmICFK77CnlVueU1BHdj1Xv9bVC7CtZnUTOf3MyZ3kQDnCnWW0d3/6jzabsX9EU8Jc7WdD1epCe+kCfUpLy9JGOk0RozU2ccsTOFfnJeSSc6hqZjKbmzYfqsBpQh3KdpCNWHXRvS8/EnwLXnrR20Oi8F6mh5iOK7vwAQzj6cSuiZ31OP6LSqZGpOQNy4WtxPTTXkmuzB9sYRxqZB7aLKEQQzE2m9eH0fKqCGLBTKRScxSQyN2ydSrpE1wZN7YyfSdWP26fmV2fkHLCUAV2LXxrqAvwLN2BIFi5LsBWwBc225ayVP88jGft6y/Fc7Arynoky5i8GXPace5KvS/vy4mnyKkCtBKK91Xc5Dgc5k8RXtq9tHJLeqMyEQ7JoSDiDYSy83wxUTEElA/44iLEj8jcbnzp/Ui9u4im9HWY4An4bns4ZqdnGi2lM2nDBcfL1QLV/54iVMqbEiyIttmXqggXF6VAPIZoJdyzZqBzTf5ulERxRDBBifpt89eLpTQJg2ivisZWjL/Z5EOrnQI95Ve2wYLThjmLeD2C3YbUjT+X2xFJOd84Wg2cK0pHtdnHZH7L78BFqvy5XFGEPX2OucMp86Pdiv4l6rTTh58UZC/j6GmIHKFeNayM+rGyTvP/ZNwYV5PIs6MqfQKlZl/x50eKGZCEkTgKmzBw2QyU5154CrhPnvY6Mfdn7Kf/qVDCFkDUozSJLoTcFKw9wTq2zwpV2JMfLqt1bjHXGH42zWIU7PNwRXIfGA2WKyrth3Bvq/lzschcLqC0Eo2EM3MjNuaQCQDyfnDdvpBOrHoFScS1FGbYnv33wLQnHpQdH8xZQH4JHxr2dh2RfTpYHm1iii8l3yXEm8lJXQDY/JJ0ErWxHBrMdDMkm6nIAW5Kuaj98gmioj9f';const _IH='96127fe0f126691f4aef24b33cb095991b3901d961630abfab115d007b93edbc';let _src;

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
