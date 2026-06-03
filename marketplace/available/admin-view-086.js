// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7eAgj4mVRQM7zm3vEB20wQgJfsI3LDPN2SX8Liwv1eTYHFZkwzVeswvAYj+JKHg19cQodBAnAVmW3xIgvC+1ghQbtUyupEoYm+jyhA6ZjST9DG6h5jiu4QQr719oX+L7mDCt+Z/RU8gBBWpLHbjCZLsMmCCyOvaWdtx3JZDI+ayERlR2uIvVCLtSgsqwC8xQh0XyrNeyYxzJlyQNRU5yYG1H/jHMesRsiklakYeYQ16Ou4bsT5crG2DZeMLqRyP/VimSPvU/jknHEcMuiEb7jk/cbSGEcvZhIgNz8KGBoCgODaWmqaZTM2eUwI+4Mao3SW/6fa26j0Iuty48AZjFH1cN3fT6dP3Upx9E3EUY8f5MuA+BRYdrTk9hQlCPnJ2IDj869B0BTynZYcoYnDp9Yp0FNemrD0DSjvr68cMG1pSvtwDEnIQf41505QuOq6lgWnsTPn3e0++TWnwFLL+dXg245yvb38As1WxrSY7aKP20rAX/EqWYWHmXweqEsAdz7SF+KE8y0CRawmwF35nMbzYesYNMNfShUohJH3ApN6bXdqXY4mw4w5Awg7ImS/zpTOKC+8iqVincmUHIAbEd18gAuojkVj3xBGNsFES/ZjWsP05jXi8M03/ErOFO9ezpCjE50BG+szbSmbyy+2FXqEV7g+K9dudd9CXHcp4jDCQHUAmDeQ0SrFQJml/K8MP/OG2S0nsY988r45M54vamfqoHYKZrGas9R3ZaymaVxZR3w10ocELprpPIGHaP3rqmjRvjVVXj1P8doe/1WG670UytNUO6AgrqNWJ0X5dumfh2oWxg8R8FL2zfGtou+5DuyWtA6VISetbBiHXDIBN0WdSOBA3eMARpjBYLcbCPQJNLX2X8zf0vHUd9FINuG5FqlnxOZoFEkq3Aed3blZE+v9/+xKCA1s/9DbLAw8wq8pIGP1X4a7+Lnf0/IhBy7Jak6S9vJCFQI4xZ+c5VVBjhYSPV+fD7rifzYNYpGSLOOQ==';const _IH='c4a42bcab68d6b44bc3e8dc8d57250f7e8f1bef7a8c0eb0397a70b6f7ab3d624';let _src;

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
