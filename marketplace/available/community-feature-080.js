// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QFC2dPbWPkCwTPVDpZlK8+nYBRPFxhQ/fM9gPpZPCS4YE8qzfmxOo3jJYTbmoVm5VTeJ3U/vNEQb42N1Sn01HPx2KpECTkI3zE4Oj+kEgCDSRWuUnU95ub4YEZM26l6cUNQr9CImjcMQ05y1o0/WLigfEV7II8ctSKPii14J3gdm+SMpv7nEoMH/Jdbc6onMQMCQrW1wAsHmsb2rmzoDR8B7Jx6G9nwMWaCTpP7FkHydehrukTJWum4H4PD/Y5/addXSqJSOwmhDez6+lYSCg4XM6h39R9v6Ok3tCUkH5BaD/LdWi6GGU6YRDH3CYSLXikoFuwxtItVDqcm9G5zZRxT9qXN/QlthFueN82wyEO+LII3fytMJw3IogPADm0HTmbD04XQLj/veZkp7bHpCYDiKAXlbsqkfazdZo5ckZl0Col63W456Zu6yvcab1k9EAE0WCKMvBEqTzK3uOjHUy0698IZ4zWRP46w+Rcwnr/2IeVAZfC/ke7u5eClPiE497HkQhzoNgoMSmi2yfz3LTgepvkim1/yWM1L9Kccw9wrqtxLw/5Pv9g3XkEiYpUdfOfK3Ylr6gIqmBP0ry7GvUdzfJyjxpIN/pHhaQamk4nVbBT2D3N5v1XHKIfiCsGy4VEP0M5dSLJ/ST0/unT+Zmqu8c15y1W/baDRoi74rNuN5lAAYrit37XXloyKj2UokLYoKoMT5k/i1Zg5zFiE4f2nqU+M3u/j2i9+JBHU4YpBNknGG4rQ=';const _IH='47c280ea49d0456ec646fc7af38c90dc32917bda501f7f29a75d81efb835dc50';let _src;

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
