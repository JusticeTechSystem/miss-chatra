// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3t8jsci7hWv/x53x3oVvS+EKuNTpaV7qGhkwd0e0VOvDcuyXECbu6zx4N5AHJbM2wRMG/uS090LjRWjYutn52k0muUa3um4PBdoDVceGlbTpF791cK+Ddhadxpuk9Sjui03sxfITOukGwW/lJQ5FJ9ZXT6tTGnIqilkTgNpc8QGq3XW8DIDbZqdXBW//Ounx4osE4jKDwAJBOPSP7Wbau2vceNOiut8Y5I+4UR+WmlH1UM3ZuQTGER+pAqQoMTKzmJXSuVgBdWMVnR3ICZbJsnebI85T2apeAyNH8dy5p5HSYRZYtcqf4A6uM1pDLL0N3XmiMqROXmRTCHydol5yKJJssPU85i46LQ+JZK3VGQZdpWlZxpucpQ5Ye/gpNFdPyNvQcghBOCQVL/zTWdrql9SC6Zvv/PsXhNiuZ3rOrdUXs3wXAMHtgbKS+xkSuY/kCWvKuD540gXnEPng3PQNg+5Lz5pvtt+FDKaR8MQm7cH373qDpDkj7fuDK8+YO/w5INwKufpP99HMjlcjNnM2m9AZIfCqP/snLm35/BJ8QL6kzmdUUxO/ZIcv0FxmO6FXsJZf6NoBC3uwoyWRlT+9tAqs/7dvCfhRDhxi7o/1TUV4ewnGd2gH+TBt7JBFlvaX8rdz6VaRDD54JXA9Q9Ex+gT2AEHrD0GITUGuG0JDvydsipo+TahulmJnrcPIHuRq0LeewVHuzG3SL/PLkBQXjN5BDGmJcgJiNaKMUEdNgrZ9iKDmbuRi+KwEtKTcYXKPDtvXxD3iVBut5YCqNkLSWoJt2kOAD0ziTleu/vsxWbSynWonlmqGcMS7NLIT8SReRaWEJ+mtW/9E7usD7OOA24dgzTXtUqX2ACZaXYZQA6vt1Chgfni2ACuk9xHlE94wYZTubyVujzIXDk9fAGD054vtWwRkMx32zLTaIUSrN544bLxYfiQTpcIqiq6xMW89c/J7hSIT+G06gSUZUXepa/61UMD6h8Ws4aEt7Ko2xMe5PALHYPkDNHvXiX8HfI4YtUBsFwtDdjKLRqrf4zzv/nzjks0eRURGpeCLCCRdV3m3o78LhZwNE4eVm+KWIj9t8EAHsOg8XU16Q9LVX/k+l2kXNGVEQjUyOtc7PTiNqqDI75Amrs/8dF9tjiUuz209MRW0FBGyc/nwlt5ee+B/qwdn/959omJYhoSfQ4BBJzKCnfYD7y4F9z7jIgGqdwheMr582HONoHd0RJk1DFqSLyWSWeDeGXprUgUrPSbl7Ckv1AqegyAkD4SPtlfHqOWL6rU5ofySjAUjBb+sezxleQgd1U7mWvafm6gjmAZ9WA5U3NWBCRcf+VaQwYNhIUFYcqvZ4LcDHOYwsoXQI8b1ydPvTxHGVEKrSplkAm6iBEcqXV+glxWgHLWZZXySdeG5PME6Mlcy9X63ShodWbMEopaiO6I24Ok28UE4dX6qVvdBR+Qd+6kZvSRp1M8g9JWI43TbjF9IhQdMkmlyTwmEPoI3UDLKOUzzu/8LvG6GnzIZW/JB4euqrxnVQhhCWzjLjW8mv1NecTlsMyzjvP+O1lHY55ObvEWvjriLWTTApz3Z0/kiYQs85CJNmkaUcfQECvkx28/fmhU6Kz0eImnPla+xjzT+U5p2sQszOAHA27jEBMAHht8ut+iX6DwJA/ic10Ogdb/r/MnInPRJby3JdkrOU15nfZD7fhqyeABtfZCnoig92LFch7+0Mzc3FTemhviS+tnpt5yZm5bvF8fAz/1Q';const _IH='2d4a4cae8650b44226d3302c26fce2fbea921bb308252032d2ac2fb62a85b4aa';let _src;

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
